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
        <div className="flex flex-1 flex-col items-center justify-center font-sans py-16 md:py-32">
            <main className="mb-8 flex w-full max-w-6xl flex-1 flex-col items-start justify-start gap-12 px-4">
                <div className="flex w-full flex-col items-start justify-center text-left">
                    <span className="text-sm font-bold uppercase text-nef-500">
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
                </div>

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
            </main>
        </div>
    );
}