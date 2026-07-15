/**
 * Formato do ticket: [SIGLA_SETOR preenchida até 5 chars][ANOMES (6)][6 dígitos aleatórios]
 * Exemplo: SAC00 202406 123456 -> "SAC00202406123456"
 */

export const CONTACT_SECTORS = {
    reclamacao: { code: "SAC", label: "Reclamação", slug: "reclamacao" },
    sugestao: { code: "SUG", label: "Sugestão", slug: "sugestao" },
    elogio: { code: "ELOG", label: "Elogio", slug: "elogio" },
    bug: { code: "BUG", label: "Problema no site", slug: "bug" },
    duvida: { code: "DUV", label: "Dúvida / Informação", slug: "duvida" },
    outro: { code: "OUTR", label: "Outro assunto", slug: "outro" },
} as const satisfies Record<string, { code: string; label: string; slug: string }>;

export type ContactSector = keyof typeof CONTACT_SECTORS;

const SECTOR_CODE_LENGTH = 5;
const RANDOM_DIGITS_LENGTH = 6;

function randomDigits(length: number): string {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10).toString();
    }
    return result;
}

function yearMonth(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${year}${month}`;
}

/**
 * Gera o número de ticket para um setor de contato.
 * Chame no servidor (rota de API / server action), não no client,
 * pra evitar que o usuário manipule o horário usado no código.
 */
export default function generateTicketNumber(
    sector: ContactSector,
    date: Date = new Date(),
): string {
    const sectorCode = CONTACT_SECTORS[sector].code.padEnd(
        SECTOR_CODE_LENGTH,
        "0",
    );

    return `${sectorCode}${yearMonth(date)}${randomDigits(RANDOM_DIGITS_LENGTH)}`;
}

/** Útil pra popular um <Select> de tipo de contato no formulário */
export const contactSectorOptions = Object.entries(CONTACT_SECTORS).map(
    ([value, { label }]) => ({ value, label }),
);