"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";

import { requestNewsletterSignupAction } from "@/lib/newsletter-actions";
import { initialNewsletterSignupState } from "@/lib/newsletter-types";

const inputClassName =
    "h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-nef-600 focus:ring-2 focus:ring-nef-600/15 disabled:cursor-not-allowed disabled:bg-zinc-100";

export function NewsletterSignupForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, pending] = useActionState(
        requestNewsletterSignupAction,
        initialNewsletterSignupState,
    );

    useEffect(() => {
        if (state.status === "success") formRef.current?.reset();
    }, [state.status]);

    return (
        <form action={formAction} className="space-y-5" ref={formRef}>
            <div
                aria-hidden="true"
                className="absolute left-[-10000px] top-auto size-px overflow-hidden"
            >
                <label>
                    Empresa
                    <input
                        autoComplete="off"
                        name="company"
                        tabIndex={-1}
                        type="text"
                    />
                </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-zinc-800">
                    Nome <span className="font-normal text-zinc-500">(opcional)</span>
                    <input
                        className={`${inputClassName} mt-2`}
                        disabled={pending}
                        maxLength={120}
                        name="name"
                        placeholder="Como podemos chamar você?"
                        type="text"
                    />
                </label>
                <label className="block text-sm font-semibold text-zinc-800">
                    E-mail
                    <input
                        autoComplete="email"
                        className={`${inputClassName} mt-2`}
                        disabled={pending}
                        maxLength={320}
                        name="email"
                        placeholder="voce@exemplo.com"
                        required
                        type="email"
                    />
                </label>
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-zinc-600">
                <input
                    className="mt-1 size-4 shrink-0 accent-nef-700"
                    disabled={pending}
                    name="acceptedPrivacyPolicy"
                    required
                    type="checkbox"
                />
                <span>
                    Autorizo o envio de notícias e novidades da Nefruza para
                    este e-mail. A inscrição será ativada após confirmação e
                    posso cancelar o recebimento a qualquer momento. Consulte a{" "}
                    <Link
                        className="font-semibold text-nef-700 underline underline-offset-2"
                        href="/politica-de-privacidade"
                        target="_blank"
                    >
                        Política de Privacidade
                    </Link>
                    .
                </span>
            </label>

            {state.message ? (
                <div
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-sm ${
                        state.status === "success"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                            : "border-red-200 bg-red-50 text-red-800"
                    }`}
                    role={state.status === "error" ? "alert" : "status"}
                >
                    {state.message}
                </div>
            ) : null}

            <button
                className="min-h-12 w-full cursor-pointer rounded-full bg-nef-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-nef-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                disabled={pending}
                type="submit"
            >
                {pending ? "Enviando confirmação..." : "Quero receber as notícias"}
            </button>
        </form>
    );
}
