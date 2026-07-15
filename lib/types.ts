export interface ContactFormValues {
    titulo: string;
    email: string;
    tel: string;
    type: string | null;
    sector: string;
    name: string;
    mensagem: string;
}

export interface ContactFormErrors {
    titulo?: string;
    email?: string;
    tel?: string;
    type?: string;
    sector?: string;
    name?: string;
    mensagem?: string;
}