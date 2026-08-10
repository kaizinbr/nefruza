"use client";

import FormOuvidoria from "@/components/contato/form-ouvidoria";
import Image from "next/image";
import Link from "next/link";
import {
    PiClockFill,
    PiEnvelopeSimpleFill,
    PiMapPinFill,
    PiPhoneCallFill,
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
            <main
                className={`
                    w-full
                `}
            >
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
                            Canais de ouvidoria
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            O canal de ouvidoria é um espaço destinado a receber{" "}
                            <strong className="font-extrabold">
                                reclamações
                            </strong>
                            ,{" "}
                            <strong className="font-extrabold">
                                denúncias
                            </strong>
                            ,{" "}
                            <strong className="font-extrabold">
                                sugestões
                            </strong>{" "}
                            e<strong className="font-extrabold">elogios</strong>{" "}
                            relacionadas aos serviços prestados pela Nefruza.
                        </p>
                    </div>
                </section>
                <section
                    className={`
                        relative z-10 mx-auto  
                        w-full max-w-6xl 
                        px-4 sm:px-6 lg:px-8 
                        py-6 sm:py-8 lg:py-10 xl:py-12
                        flex flex-col
                    `}
                >
                    <p className=" text-zinc-800 mb-6">
                        Ao realizar contato com os canais de ouvidoria, você
                        poderá escolher se identificar ou não ao acionar nosso
                        time de atendimento. O sigilo será garantido caso você
                        opte por não se identificar, em adequação à legislação
                        vigente. Você pode entrar em contato com a ouvidoria da
                        Nefruza por meio dos seguintes canais:
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
                                    Retornaremos seu contato em até 5 dias
                                    úteis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
