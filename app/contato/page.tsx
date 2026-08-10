"use client";

import FormContato from "@/components/contato/form";
import Link from "next/link";
import {
    PiClockFill,
    PiEnvelopeSimpleFill,
    PiMapPinFill,
    PiPhoneCallFill,
    PiQuestionFill,
} from "react-icons/pi";
import { TbBrandWhatsappFilled } from "react-icons/tb";

const telefones = [
    {
        numero: "(83) 3225-1619",
        href: "tel:+558332251619",
    },
    {
        numero: "(83) 3225-1985",
        href: "tel:+558332251985",
    },
];

export default function Home() {
    return (
        <div className="flex flex-1 flex-col bg-white font-sans mb-16">
            <main className="w-full">
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
                            Contato
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Estamos aqui para ajudar
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Entre em contato com a Nefruza para tirar dúvidas,
                            solicitar informações ou conversar com nossa equipe.
                        </p>
                    </div>
                </section>

                <section className="relative z-10 mx-auto  w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid overflow-hidden rounded-3xl bg-white lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="flex flex-col py-6 sm:py-8 lg:py-10 xl:py-12">
                            <span className="text-sm font-bold uppercase tracking-[0.14em] text-nef-500">
                                Canais de atendimento
                            </span>
                            <h2 className="mt-3 font-title text-3xl font-semibold leading-tight text-zinc-900">
                                Escolha como falar conosco
                            </h2>
                            <p className="mt-4 max-w-md leading-7 text-zinc-600">
                                Nossa equipe está disponível para orientar você
                                e encaminhar sua solicitação ao setor
                                responsável.
                            </p>

                            <div className="mt-9 divide-y divide-zinc-200">
                                <div className="flex gap-4 pb-7">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nef-50 text-nef-700">
                                        <PiPhoneCallFill
                                            aria-hidden="true"
                                            className="text-xl"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-zinc-900">
                                            Telefones
                                        </h3>
                                        <div className="mt-2 flex flex-col items-start gap-1">
                                            {telefones.map((telefone) => (
                                                <Link
                                                    key={telefone.numero}
                                                    href={telefone.href}
                                                    className="text-lg font-semibold text-zinc-800 transition-colors hover:text-nef-700"
                                                >
                                                    {telefone.numero}
                                                </Link>
                                            ))}
                                        <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-zinc-500">
                                            <PiClockFill
                                                aria-hidden="true"
                                                className="mt-1 shrink-0"
                                            />
                                            Segunda a sábado, das 6h às 21h. 
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 py-7">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nef-50 text-nef-700">
                                        <TbBrandWhatsappFilled
                                            aria-hidden="true"
                                            className="text-xl"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-zinc-900">
                                            WhatsApp
                                        </h3>
                                        <Link
                                            href="https://wa.me/5583999452332?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Nefruza."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block text-lg font-semibold text-zinc-800 transition-colors hover:text-nef-700"
                                        >
                                            (83) 99945-2332
                                        </Link>
                                        <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-zinc-500">
                                            <PiClockFill
                                                aria-hidden="true"
                                                className="mt-1 shrink-0"
                                            />
                                            Segunda a sábado, das 6h às 21h. 
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 py-7">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nef-50 text-nef-700">
                                        <PiEnvelopeSimpleFill
                                            aria-hidden="true"
                                            className="text-xl"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-zinc-900">
                                            E-mail
                                        </h3>
                                        <Link
                                            href="mailto:contato@nefruza.com.br"
                                            className="mt-2 inline-block break-all text-base font-semibold text-zinc-800 transition-colors hover:text-nef-700 sm:text-lg"
                                        >
                                            contato@nefruza.com.br
                                        </Link>
                                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                                            Retornaremos seu contato em até 5
                                            dias úteis.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-7">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nef-50 text-nef-700">
                                        <PiMapPinFill
                                            aria-hidden="true"
                                            className="text-xl"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-zinc-900">
                                            Endereço
                                        </h3>
                                        <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
                                            Av. Sinésio Guimarães, 290, Torre
                                            <br />
                                            João Pessoa – PB, CEP 58040-400
                                        </p>
                                        <Link
                                            href="https://maps.app.goo.gl/W6dbm8i8GbZ8ABat5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex font-semibold text-nef-700 transition-colors hover:text-nef-900"
                                        >
                                            Ver como chegar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-100 rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 mt-8">
                            <div className="mb-8">
                                <span className="text-sm font-bold uppercase tracking-[0.14em] text-nef-500">
                                    Envie uma mensagem
                                </span>
                                <h2 className="mt-3 font-title text-3xl font-semibold leading-tight text-zinc-900">
                                    Como podemos ajudar?
                                </h2>
                                <p className="mt-4 max-w-lg leading-7 text-zinc-600">
                                    Preencha o formulário e descreva sua
                                    solicitação. Entraremos em contato pelos
                                    dados informados.
                                </p>
                            </div>
                            <FormContato />
                        </div>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.14em] text-nef-500">
                                Localização
                            </span>
                            <h2 className="mt-3 font-title text-3xl font-semibold text-zinc-900 md:text-4xl">
                                Encontre a Nefruza
                            </h2>
                        </div>
                        <p className="max-w-md leading-7 text-zinc-600 md:text-right">
                            Estamos localizados no bairro da Torre, em João
                            Pessoa, com acesso pela Avenida Sinésio Guimarães.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <iframe
                            title="Localização da Nefruza em João Pessoa"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7917.970378273499!2d-34.868850099999996!3d-7.1277091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd5188678061%3A0x29626ccb173cf64a!2sNefruza%20-%20Servi%C3%A7os%20Nefrol%C3%B3gicos%20Fi%C3%BAza%20Chaves%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1784481499034!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="480"
                            className="block min-h-[380px] w-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>

                    <Link
                        href="/perguntas-frequentes"
                        className="bg-zinc-100 mx-auto rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-6 mt-8 flex flex-row gap-2 items-start md:items-center justify-center text-nef-700 font-semibold text-lg transition-colors hover:text-nef-900"
                    >
                        <PiQuestionFill size={32} />
                        Não encontrou o que procurava? Acesse nossas perguntas
                        frequentes.
                    </Link>
                </section>
            </main>
        </div>
    );
}
