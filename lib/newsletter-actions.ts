"use server";

import { createHmac } from "node:crypto";
import { headers } from "next/headers";

import {
    confirmNewsletterSignup,
    requestNewsletterSignup,
} from "@/lib/newsletter-integration";
import type {
    NewsletterConfirmationState,
    NewsletterSignupState,
} from "@/lib/newsletter-types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOKEN_PATTERN = /^[a-f0-9]{64}$/;
const SUCCESS_MESSAGE =
    "Verifique seu e-mail para confirmar a inscrição. O link é válido por 24 horas.";

function requesterHash(ipAddress: string | null) {
    const salt = process.env.APPLICATION_RATE_LIMIT_SALT?.trim();
    if (!ipAddress || !salt) return undefined;
    return createHmac("sha256", salt).update(ipAddress).digest("hex");
}

export async function requestNewsletterSignupAction(
    _previousState: NewsletterSignupState,
    formData: FormData,
): Promise<NewsletterSignupState> {
    if (String(formData.get("company") ?? "").trim()) {
        return { status: "success", message: SUCCESS_MESSAGE };
    }

    const email = String(formData.get("email") ?? "")
        .trim()
        .toLowerCase();
    const name = String(formData.get("name") ?? "")
        .trim()
        .replace(/\s+/g, " ");
    const acceptedPrivacyPolicy =
        formData.get("acceptedPrivacyPolicy") === "on";

    if (!EMAIL_PATTERN.test(email) || email.length > 320) {
        return {
            status: "error",
            message: "Informe um endereço de e-mail válido.",
        };
    }
    if (name.length > 120) {
        return {
            status: "error",
            message: "O nome deve possuir no máximo 120 caracteres.",
        };
    }
    if (!acceptedPrivacyPolicy) {
        return {
            status: "error",
            message: "É necessário concordar com o recebimento das notícias.",
        };
    }

    try {
        const requestHeaders = await headers();
        const ipAddress =
            requestHeaders.get("cf-connecting-ip")?.trim() ||
            requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            requestHeaders.get("x-real-ip")?.trim() ||
            null;

        await requestNewsletterSignup({
            email,
            name: name || undefined,
            requesterId: requesterHash(ipAddress),
        });
        return { status: "success", message: SUCCESS_MESSAGE };
    } catch (error) {
        console.error("Falha ao solicitar inscrição na newsletter:", error);
        return {
            status: "error",
            message:
                "Não foi possível solicitar a inscrição. Tente novamente em alguns instantes.",
        };
    }
}

export async function confirmNewsletterSignupAction(
    _previousState: NewsletterConfirmationState,
    formData: FormData,
): Promise<NewsletterConfirmationState> {
    const token = String(formData.get("token") ?? "")
        .trim()
        .toLowerCase();
    if (!TOKEN_PATTERN.test(token)) {
        return {
            status: "invalid",
            message: "Este link de confirmação é inválido ou não está mais disponível.",
        };
    }

    try {
        const result = await confirmNewsletterSignup(token);
        switch (result) {
            case "confirmed":
                return {
                    status: "success",
                    message:
                        "Seu e-mail foi confirmado. A partir de agora, você poderá receber as notícias da Nefruza.",
                };
            case "already-confirmed":
                return {
                    status: "already-confirmed",
                    message: "Este e-mail já foi confirmado e está inscrito na newsletter.",
                };
            case "expired":
                return {
                    status: "expired",
                    message:
                        "Este link expirou. Faça uma nova solicitação para receber outro e-mail.",
                };
            case "suppressed":
                return {
                    status: "error",
                    message:
                        "Não foi possível ativar esta inscrição. Entre em contato com a Nefruza para obter ajuda.",
                };
            case "invalid":
            default:
                return {
                    status: "invalid",
                    message:
                        "Este link de confirmação é inválido ou não está mais disponível.",
                };
        }
    } catch (error) {
        console.error("Falha ao confirmar inscrição na newsletter:", error);
        return {
            status: "error",
            message:
                "Não foi possível concluir a confirmação. Tente novamente em alguns instantes.",
        };
    }
}
