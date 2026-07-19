"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaHouseChimneyMedical,
    FaUserDoctor,
    FaKitMedical,
    FaHeartPulse,
} from "react-icons/fa6";

const diferenciais = [
    {
        titulo: "Diferencial",
        descricao:
            "Todas as instalações são novas e contamos com maquinas de ultima geração, garantindo uma maior segurança para os nossos pacientes e colaborados.",
        IconTop: FaHouseChimneyMedical,
        IconBottom: FaKitMedical,
    },
    {
        titulo: "Instalações",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. ",
        IconTop: FaHouseChimneyMedical,
        IconBottom: FaKitMedical,
    },
    {
        titulo: "Profissionais Qualificados",
        descricao:
            "Nossa equipe é composta por profissionais altamente qualificados e experientes, garantindo o melhor atendimento para os nossos pacientes.",
        IconTop: FaUserDoctor,
        IconBottom: FaHeartPulse,
    },
    {
        titulo: "Diferencial",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien.",
        IconTop: FaHouseChimneyMedical,
        IconBottom: FaKitMedical,
    },
];

export default function Convenios() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "center",
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        const frame = requestAnimationFrame(onSelect);

        return () => {
            cancelAnimationFrame(frame);
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div
            id="diferenciais"
            className={`
                flex 
                items-start justify-center 
                w-full bg-white overflow-x-clip
                px-4 py-24
            `}
        >
            <div className="flex flex-col w-full max-w-6xl">
                <div
                    className={`
                        flex flex-col items-start justify-start 
                        w-full m-auto relative mb-8
                        text-center
                    `}
                >
                    <h1 className="text-3xl sm:text-3xl mb-4 font-title w-full mx-auto">
                        Parceiros no{" "}
                        <strong className="font-extrabold">cuidado</strong> com
                        a sua <strong className="font-extrabold">saúde</strong>
                    </h1>
                    <h2 className="text-xl w-full">
                        Aceitamos diversos convênios para que você tenha acesso
                        a um atendimento de excelência.
                    </h2>
                </div>
                <div
                    className={`
                        flex flex-row flex-wrap items-start justify-start 
                        w-full lg:w-8/10 m-auto relative lg:pr-8 mb-8 lg:mb-auto
                        text-center
                    `}
                >
                    <Image 
                        src="/img/afrapep.png"
                        alt="Convênio Afrapep Saúde"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/assefaz.jpg"
                        alt="Convênio Assefaz Saúde"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/brad.webp"
                        alt="Convênio Bradesco Saúde"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/camed.webp"
                        alt="Convênio Camed Saúde"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/capesaude.webp"
                        alt="Convênio Capesaúde"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/cassi.webp"
                        alt="Convênio Cassi"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/hapvida.webp"
                        alt="Convênio Hapvida"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/petro.webp"
                        alt="Convênio Petrobras"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                    <Image 
                        src="/img/unimed2.webp"
                        alt="Convênio Unimed"
                        width={210}
                        height={220}
                        className="w-1/2 sm:w-1/3 p-4"
                    />
                </div>
            </div>
        </div>
    );
}
