import type { Metadata } from "next";

import PrivacyPolicyContent from "@/components/legal/privacy-policy-content";

export const metadata: Metadata = {
    title: "Política de Privacidade | Nefruza",
    description:
        "Saiba como a Nefruza coleta, utiliza, compartilha e protege os dados pessoais relacionados à utilização do site.",
};

export default function PoliticaDePrivacidade() {
    return (
        <div
            className={`
                flex flex-1 flex-col bg-white font-sans pb-16
            `}
        >
            <div className="w-full">
                <section className="relative isolate overflow-hidden bg-linear-to-br from-nef-900 to-nef-600">
                    <div
                        aria-hidden="true"
                        className="absolute -right-24 -top-40 size-136 rounded-full border border-white/10"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute -right-10 -top-20 size-104 rounded-full border border-white/10"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute right-14 top-12 size-68 rounded-full bg-white/4"
                    />
                    <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                        <span className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                            informativo
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Política de Privacidade
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Política de privacidade da Nefruza, descrevendo como
                            coletamos, usamos e protegemos as informações dos
                            usuários em nosso site e serviços.
                        </p>
                    </div>
                </section>
                <section
                    className={`
                        relative z-10 mx-auto
                        w-full max-w-6xl
                        px-4 sm:px-6 lg:px-8
                        py-6 sm:py-8 lg:py-10 xl:py-12
                        flex flex-col gap-4
                    `}
                >
                    <PrivacyPolicyContent />
                </section>
            </div>
        </div>
    );
}
