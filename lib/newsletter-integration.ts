import "server-only";

import axios from "axios";

import api from "@/lib/api";

type ConfirmationResult =
    | "confirmed"
    | "already-confirmed"
    | "invalid"
    | "expired"
    | "suppressed";

function requiredEnvironment(name: string) {
    const value = process.env[name]?.trim();
    if (!value) throw new Error(`${name} não configurada.`);
    return value;
}

async function postToPortal<T>(pathname: string, body: unknown) {
    try {
        const response = await api.post<T>(pathname, body, {
            headers: {
                Authorization: `Bearer ${requiredEnvironment("NEWSLETTER_INTEGRATION_SECRET")}`,
            },
            timeout: 15_000,
        });

        if (!response.data) {
            throw new Error("A integração da newsletter retornou uma resposta vazia.");
        }

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            throw new Error(
                status
                    ? `A integração da newsletter respondeu com status ${status}.`
                    : "Não foi possível conectar à integração da newsletter.",
                { cause: error },
            );
        }

        throw error;
    }
}

export async function requestNewsletterSignup(input: {
    email: string;
    name?: string;
    requesterId?: string;
}) {
    await postToPortal<{ ok: true }>("/newsletter/signup", input);
}

export async function confirmNewsletterSignup(token: string) {
    const response = await postToPortal<{ result: ConfirmationResult }>(
        "/newsletter/confirm",
        { token },
    );
    return response.result;
}
