import type { Metadata } from "next";

import { NewsletterConfirmationForm } from "@/components/newsletter/newsletter-confirmation-form";

export const metadata: Metadata = {
    title: "Confirmar newsletter | Nefruza",
    description:
        "Confirme seu endereço de e-mail para receber notícias da Nefruza.",
};

export default async function NewsletterConfirmationPage({
    searchParams,
}: {
    searchParams: Promise<{ token?: string }>;
}) {
    const parameters = await searchParams;
    const token =
        typeof parameters.token === "string"
            ? parameters.token.trim().toLowerCase()
            : "";

    return (
        <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-zinc-50 px-4 py-16 md:py-24">
            <div
                aria-hidden="true"
                className="absolute -right-32 -top-32 size-96 rounded-full bg-nef-700/10 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-32 size-96 rounded-full bg-nef-500/10 blur-3xl"
            />
            <section className="relative w-full max-w-xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-950/5 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-nef-700">
                    Newsletter Nefruza
                </p>
                <h1 className="mt-3 font-title text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    Confirme seu e-mail
                </h1>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                    Confirme que este endereço pertence a você para concluir a
                    inscrição e começar a receber as notícias da Nefruza.
                </p>
                <NewsletterConfirmationForm token={token} />
            </section>
        </main>
    );
}
