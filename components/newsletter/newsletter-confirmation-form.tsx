"use client";

import Link from "next/link";
import { useActionState } from "react";

import { confirmNewsletterSignupAction } from "@/lib/newsletter-actions";
import { initialNewsletterConfirmationState } from "@/lib/newsletter-types";

export function NewsletterConfirmationForm({ token }: { token: string }) {
    const [state, formAction, pending] = useActionState(
        confirmNewsletterSignupAction,
        initialNewsletterConfirmationState,
    );
    const finished =
        state.status === "success" || state.status === "already-confirmed";

    return (
        <div className="mt-8">
            {state.message ? (
                <div
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-sm ${
                        finished
                            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                            : "border-red-200 bg-red-50 text-red-800"
                    }`}
                    role={finished ? "status" : "alert"}
                >
                    {state.message}
                </div>
            ) : null}

            {!finished ? (
                <form action={formAction} className="mt-5">
                    <input name="token" type="hidden" value={token} />
                    <button
                        className="w-full cursor-pointer rounded-full bg-nef-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-nef-900 disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={pending || !token}
                        type="submit"
                    >
                        {pending ? "Confirmando inscrição..." : "Confirmar meu e-mail"}
                    </button>
                </form>
            ) : null}

            <div className="mt-5 text-center">
                <Link
                    className="text-sm font-medium text-nef-700 underline underline-offset-2"
                    href="/#newsletter"
                >
                    Voltar para a newsletter
                </Link>
            </div>
        </div>
    );
}
