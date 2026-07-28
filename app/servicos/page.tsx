"use client";

import {
    TbDroplet,
    TbFilter,
    TbStethoscope,
    TbBabyCarriage,
    TbFlask,
    TbInfinity,
} from "react-icons/tb";
import ServiceBand, { Service } from "@/components/servicos/band";

const clinicalServices: Service[] = [
    {
        icon: TbDroplet,
        title: "Hemodiálise convencional",
        description:
            "Sessões regulares de filtragem do sangue para pacientes com insuficiência renal, com acompanhamento médico contínuo.",
    },
    {
        icon: TbFilter,
        title: "Hemodiafiltração (HDF)",
        description:
            "Técnica que combina diálise e filtração para remover toxinas de forma ainda mais eficiente, indicada para casos específicos.",
    },
    {
        icon: TbStethoscope,
        title: "Consulta nefrológica especializada",
        description:
            "Avaliação e acompanhamento clínico para adultos e crianças, do diagnóstico ao manejo da doença renal crônica.",
    },
];

const hospitalServices: Service[] = [
    {
        icon: TbBabyCarriage,
        title: "Diálise peritoneal pediátrica",
        description:
            "Tratamento adaptado para crianças, realizado através do peritônio, com suporte especializado para o público infantil.",
    },
    {
        icon: TbDroplet,
        title: "Hemodiálise para adultos e crianças",
        description:
            "Atendimento hospitalar de hemodiálise convencional, com estrutura adequada para pacientes de todas as idades.",
    },
    {
        icon: TbFlask,
        title: "Plasmaférese",
        description:
            "Procedimento que filtra o plasma sanguíneo para remover substâncias nocivas, indicado em condições específicas.",
    },
    {
        icon: TbInfinity,
        title: "Diálise contínua",
        description:
            "Terapia de substituição renal prolongada, voltada a pacientes em estado crítico que exigem suporte hospitalar constante.",
    },
];

export default function Servicos() {
    return (
        <div className="flex flex-1 flex-col bg-white font-sans">
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
                            Serviços
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Conheça os serviços da Nefruza
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Buscando sempre fornecer o melhor atendimento para
                            nossos pacientes, a Nefruza atua com uma gama de
                            serviços clínicos e hospitalares, acompanhando cada
                            paciente em todas as fases do tratamento renal.
                        </p>
                    </div>
                </section>
                <section className={`
                        relative z-10 mx-auto  
                        w-full max-w-6xl 
                        px-4 sm:px-6 lg:px-8 
                        py-6 sm:py-8 lg:py-10 xl:py-12
                        flex flex-col gap-4
                    `}>
                    {/* <div className="flex w-full flex-col items-start justify-center text-left">
                        <span className="text-sm font-bold  tracking-[0.14em] uppercase text-nef-500">
                            Serviços
                        </span>
                        <h1 className="mb-4 font-title text-3xl">
                            Conheça os serviços da Nefruza
                        </h1>
                        <p className="max-w-2xl text-zinc-600">
                            Buscando sempre fornecer o melhor atendimento para
                            nossos pacientes, a Nefruza atua com uma gama de
                            serviços clínicos e hospitalares, acompanhando cada
                            paciente em todas as fases do tratamento renal.
                        </p>
                    </div> */}
                    <ServiceBand
                        eyebrow="Serviços clínicos"
                        title="Atendimento ambulatorial contínuo"
                        services={clinicalServices}
                        tone="light"
                        variant="grid"
                    />
                    <ServiceBand
                        eyebrow="Serviços hospitalares"
                        title="Suporte completo em ambiente hospitalar"
                        services={hospitalServices}
                        tone="dark"
                        variant="list"
                    />
                </section>
            </main>
        </div>
    );
}
