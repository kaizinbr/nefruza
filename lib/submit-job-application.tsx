"use server";

import JobApplicationMail from "@/emails/job-application-mail";
import type { JobApplicationState } from "@/lib/job-application-types";
import { Resend } from "resend";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

const AREA_LABELS: Record<string, string> = {
    assistencial: "Assistencial e enfermagem",
    administrativa: "Administrativa",
    atendimento: "Atendimento e recepção",
    clinica: "Corpo clínico",
    multiprofissional: "Equipe multiprofissional",
    operacional: "Serviços operacionais",
    outra: "Outra área",
};

function getText(formData: FormData, field: string) {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
}

function normalizeUrl(value: string) {
    if (!value) return "";
    return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export default async function submitJobApplication(
    _previousState: JobApplicationState,
    formData: FormData,
): Promise<JobApplicationState> {
    const name = getText(formData, "name");
    const email = getText(formData, "email").toLowerCase();
    const phone = getText(formData, "phone");
    const city = getText(formData, "city");
    const area = getText(formData, "area");
    const linkedin = normalizeUrl(getText(formData, "linkedin"));
    const message = getText(formData, "message");
    const privacy = getText(formData, "privacy");
    const resumeValue = formData.get("resume");
    const resume = resumeValue instanceof File ? resumeValue : null;

    const fieldErrors: NonNullable<JobApplicationState["fieldErrors"]> = {};

    if (name.length < 3 || name.length > 120) {
        fieldErrors.name = "Informe seu nome completo.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
        fieldErrors.email = "Informe um e-mail válido.";
    }
    if (phone.replace(/\D/g, "").length < 10 || phone.length > 30) {
        fieldErrors.phone = "Informe um telefone com DDD.";
    }
    if (city.length < 2 || city.length > 100) {
        fieldErrors.city = "Informe sua cidade.";
    }
    if (!AREA_LABELS[area]) {
        fieldErrors.area = "Selecione uma área de interesse.";
    }
    if (linkedin) {
        try {
            const parsedUrl = new URL(linkedin);
            if (!["http:", "https:"].includes(parsedUrl.protocol)) {
                fieldErrors.linkedin = "Informe um endereço válido.";
            }
        } catch {
            fieldErrors.linkedin = "Informe um endereço válido.";
        }
    }
    if (message.length > 2000) {
        fieldErrors.message = "Use no máximo 2.000 caracteres.";
    }
    if (!resume || resume.size === 0) {
        fieldErrors.resume = "Anexe seu currículo em PDF.";
    } else if (resume.size > MAX_RESUME_SIZE) {
        fieldErrors.resume = "O currículo deve ter no máximo 5 MB.";
    } else if (
        (resume.type && resume.type !== "application/pdf") ||
        !resume.name.toLowerCase().endsWith(".pdf")
    ) {
        fieldErrors.resume = "Envie um arquivo no formato PDF.";
    }
    if (privacy !== "accepted") {
        fieldErrors.privacy = "É necessário aceitar o aviso de privacidade.";
    }

    if (Object.keys(fieldErrors).length > 0) {
        return {
            success: false,
            message: "Revise os campos destacados e tente novamente.",
            fieldErrors,
        };
    }

    const resumeBuffer = Buffer.from(await resume!.arrayBuffer());
    if (resumeBuffer.subarray(0, 5).toString("ascii") !== "%PDF-") {
        return {
            success: false,
            message: "Revise os campos destacados e tente novamente.",
            fieldErrors: {
                resume: "O arquivo selecionado não é um PDF válido.",
            },
        };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error(
            "RESEND_API_KEY não configurada para o banco de talentos.",
        );
        return {
            success: false,
            message:
                "Não foi possível enviar sua candidatura agora. Tente novamente mais tarde.",
        };
    }

    const careersEmail =
        process.env.NEFRUZA_CAREERS_EMAIL ?? "contato@nefruza.com.br";
    const fromAddress =
        process.env.RESEND_FROM_ADDRESS ?? "Site Nefruza <site@kaizin.work>";
    const safeName = name.replace(/[\r\n]+/g, " ");
    const safeFilename = resume!.name
        .replace(/[^a-zA-Z0-9._-]/g, "-")
        .replace(/-+/g, "-")
        .slice(-120);

    try {
        const resend = new Resend(apiKey);
        const result = await resend.emails.send({
            from: fromAddress,
            to: careersEmail,
            replyTo: email,
            subject: `Nova candidatura - ${AREA_LABELS[area]} - ${safeName}`,
            react: JobApplicationMail({
                name,
                email,
                phone,
                city,
                area: AREA_LABELS[area],
                linkedin: linkedin || undefined,
                message: message || undefined,
                submittedAt: new Date().toLocaleString("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "short",
                    timeZone: "America/Fortaleza",
                }),
            }),
            attachments: [
                {
                    content: resumeBuffer,
                    filename: safeFilename || "curriculo.pdf",
                    contentType: "application/pdf",
                },
            ],
        });

        if (result.error) {
            throw new Error(result.error.message);
        }
    } catch (error) {
        console.error("Falha ao enviar candidatura:", error);
        return {
            success: false,
            message:
                "Não foi possível enviar sua candidatura agora. Tente novamente mais tarde.",
        };
    }

    return {
        success: true,
        message:
            "Currículo enviado com sucesso. Se surgir uma oportunidade compatível, nossa equipe entrará em contato.",
    };
}
