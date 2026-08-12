import { LuMail } from "react-icons/lu";

import { NewsletterSignupForm } from "@/components/newsletter/newsletter-signup-form";

export function NewsletterSection() {
    return (
        <section
            className="mx-auto mt-8 w-[calc(100%-32px)] max-w-6xl overflow-hidden rounded-3xl border border-nef-100 bg-nef-50 px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-12"
            id="newsletter"
        >
            <div className="mb-8 lg:mb-0">
                <span className="flex size-12 items-center justify-center rounded-full bg-white text-nef-700 shadow-sm">
                    <LuMail aria-hidden="true" size={22} />
                </span>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-nef-600">
                    Newsletter Nefruza
                </p>
                <h2 className="mt-2 font-title text-3xl font-semibold leading-tight text-zinc-900">
                    Informação que ajuda a cuidar
                </h2>
                <p className="mt-4 max-w-md leading-7 text-zinc-600">
                    Receba notícias, comunicados e novidades da Nefruza diretamente
                    no seu e-mail.
                </p>
            </div>
            <NewsletterSignupForm />
        </section>
    );
}
