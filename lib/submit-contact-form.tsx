"use server";

import { Resend } from "resend";

// nomeclatura dos tickets: 3 a 5 letras pro tipo de contato seguidas de zeros (pra sempre ser 5) + ano e mês + 6 números aleatórios
// exemplo: SAC000202406123456
// os tipos sao
// reclamacao: { code: "SAC", label: "Reclamação" },
// sugestao: { code: "SUG", label: "Sugestão" },
// elogio: { code: "ELOG", label: "Elogio" },
// bug: { code: "BUG", label: "Problema no site" },
// duvida: { code: "DUV", label: "Dúvida / Informação" },
// outro: { code: "OUTR", label: "Outro assunto" },

import AdmMail from "@/emails/adm-mail";
import UserMail from "@/emails/user-mail";
import generateTicketNumber, { CONTACT_SECTORS } from "@/lib/generate-ticket";
import type { ContactFormValues } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: trocar por "contato@nefruza.com.br" quando sair de testes.
const ADMIN_EMAIL = "kaiolucas1812@gmail.com";

const FROM_ADDRESS = "Nefruza <contato@kaizin.work>";

const CONTACT_METHOD_LABELS: Record<NonNullable<ContactFormValues["type"]>, string> = {
    mail: "E-mail",
    phone: "Telefone",
};

export default async function submitContactForm(
    values: ContactFormValues,
): Promise<{ ticketNumber: string }> {
    const sector = values.sector as keyof typeof CONTACT_SECTORS;
    const sectorLabel = CONTACT_SECTORS[sector]?.label ?? values.sector;

    const ticketNumber = generateTicketNumber(sector);

    const formattedDate = new Date().toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
    });

    // 1. Notifica o administrativo primeiro — se isso falhar, abortamos:
    // não faz sentido confirmar um ticket que ninguém na clínica vai ver.
    const adminEmail = await resend.emails.send({
        from: "Site Nefruza <site@kaizin.work>",
        to: ADMIN_EMAIL,
        subject: `Novo ticket de contato: ${ticketNumber}`,
        react: AdmMail({
            ticket: ticketNumber,
            name: values.name,
            mail: values.email,
            tel: values.tel || "Não informado",
            title: values.titulo,
            date: formattedDate,
            type: sectorLabel,
            response: values.type ? CONTACT_METHOD_LABELS[values.type] : "Não informado",
            text: values.mensagem,
        }),
    });

    if (adminEmail.error) {
        throw new Error(
            `Falha ao notificar a equipe: ${adminEmail.error.message}`,
        );
    }

    // 2. Só então confirma pro usuário. Se esse envio falhar, não derruba
    // o fluxo — o ticket já existe e a equipe já foi avisada; só registramos
    // o erro pra investigar depois.
    const userEmail = await resend.emails.send({
        from: FROM_ADDRESS,
        to: values.email,
        subject: `Recebemos seu ticket: ${ticketNumber}`,
        react: UserMail({
            ticket: ticketNumber,
            name: values.name,
            title: values.titulo,
            type: sectorLabel,
            text: values.mensagem,
        }),
    });

    if (userEmail.error) {
        console.error(
            `Ticket ${ticketNumber}: falha ao enviar confirmação para o usuário`,
            userEmail.error,
        );
    }

    return { ticketNumber };
}
