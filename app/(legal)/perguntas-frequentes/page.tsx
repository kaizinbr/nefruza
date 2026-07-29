"use client";

import FormContato from "@/components/contato/form";
import Link from "next/link";
import {
    PiClockFill,
    PiEnvelopeSimpleFill,
    PiMapPinFill,
    PiPhoneCallFill,
    PiQuestionFill,
    PiPlus,
} from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";

import { Accordion } from "@mantine/core";
import { faqItems } from "@/components/faq/perguntas";

export default function FAQ() {
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
                            F.A.Q
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Perguntas frequentes
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Aqui você encontra respostas para as dúvidas mais
                            comuns sobre nossos serviços e atendimento.
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
                    {/* <p className="leading-7 text-zinc-600">
                        Importante: o convênio Amil oferece apenas atendimento
                        de consultório conosco.
                    </p> */}

                    <div
                        className={`
                            relative m-auto mb-8 flex w-full
                            flex-row flex-wrap items-center justify-center
                            text-center
                            lg:mb-auto 
                        `}
                    >
                        <Accordion
                            unstyled
                            className="w-full"
                            chevron={<PiPlus aria-hidden="true" size={25} />}
                            chevronPosition="right"
                            aria-label="Perguntas frequentes sobre a Nefruza"
                            classNames={{
                                item: "",
                                control: `
                                    px-0 py-0 text-left text-nef-600 w-full flex-row-reverse
                                    hover:bg-transparent w-full flex flex-row items-center justify-between
                                    border-b border-nef-600 cursor-pointer
                                `,
                                label: `
                                    py-5 pr-4 text-base font-medium leading-7
                                    sm:py-4 sm:text-lg 
                                `,
                                chevron: `
                                    text-nef-600
                                    data-[rotate]:rotate-45 transition-transform duration-200
                                `,
                                panel: "text-left",
                                content: `
                                    pb-16 p-6
                                    text-sm leading-7 text-zinc-800
                                    sm:text-base
                                `,
                                itemTitle: "border-b border-nef-600",
                            }}
                        >
                            {faqItems.map((item, index) => (
                                <Accordion.Item
                                    key={item.value}
                                    value={item.value}
                                >
                                    <Accordion.Control>
                                        {index + 1}. {item.question}
                                    </Accordion.Control>

                                    <Accordion.Panel>
                                        {item.answer}
                                    </Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>
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
                    <p className="leading-7 text-zinc-600 mb-4">
                        Leitura recomendada:
                    </p>

                    <div className="flex flex-row flex-wrap gap-4">
                        <Link href="/codigo-de-etica" className="flex flex-col gap-4 bg-zinc-200 p-4 rounded-xl w-fit">
                            <IoDocumentText className="text-4xl text-nef-700" />
                            <span  className="font-bold">
                                Código de ética para pacientes
                            </span>
                        </Link>
                        <Link href="/codigo-de-etica" className="flex flex-col gap-4 bg-zinc-200 p-4 rounded-xl w-fit">
                            <IoDocumentText className="text-4xl text-nef-700" />
                            <span  className="font-bold">
                                Política de privacidade
                            </span>
                        </Link>
                        <Link href="/codigo-de-etica" className="flex flex-col gap-4 bg-zinc-200 p-4 rounded-xl w-fit">
                            <IoDocumentText className="text-4xl text-nef-700" />
                            <span  className="font-bold">
                                Termos de uso
                            </span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
