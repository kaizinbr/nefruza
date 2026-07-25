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
    FaHospital 
} from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";

const diferenciais = [
    {
        titulo: "Exclusividade",
        descricao:
            "Somos a primeira e única clínica de hemodiálise de João Pessoa a realizar plasmaférese e hemodiálise contínua, procedimentos decisivos nos casos mais complexos.",
        IconTop: RiMentalHealthFill,
        IconBottom: MdHealthAndSafety,
    },
    {
        titulo: "Instalações",
        descricao:
            "Nossas instalações são climatizadas e equipadas com tudo necessário para fornecer o máximo conforto a pacientes e acompanhantes",
        IconTop: FaHospital,
        IconBottom: FaKitMedical,
    },
    {
        titulo: "Equipe",
        descricao:
            "Médicos, enfermeiros e técnicos especializados em nefrologia, que acompanham cada paciente de perto e conhecem sua rotina, não só o prontuário.",
        IconTop: FaUserDoctor,
        IconBottom: FaHeartPulse,
    },
    {
        titulo: "Suporte nutricional",
        descricao:
            "O tratamento vai além da diálise. Contamos com acompanhamento nutricional integrado, cuidando da saúde do paciente em todas as etapas.",
        IconTop: GiFruitBowl,
        IconBottom: MdEmojiFoodBeverage,
    },
    {
        titulo: "Continuidade",
        descricao:
            "O paciente é acompanhado de forma contínua, não apenas durante as sessões. Isso permite identificar mudanças cedo e ajustar o tratamento com mais precisão.",
        IconTop: FaHouseChimneyMedical,
        IconBottom: FaNotesMedical,
    },
];

export default function Diferenciais() {
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
                w-full bg-nef-200 overflow-x-clip
                px-4 py-24
            `}
        >
            <div className="flex flex-col lg:flex-row  w-full max-w-6xl">
                <div
                    className={`
                        flex flex-col items-start justify-start 
                        w-full lg:w-2/5 m-auto relative lg:pr-8 mb-8 lg:mb-auto
                    `}
                >
                    <h1 className="text-2xl sm:text-3xl mb-4 font-title w-full mx-auto">
                        Com os maiores diferenciais do mercado
                    </h1>
                    <h2 className="">
                        Com alto grau de satisfação de nossos clientes, fica
                        claro que nossa dedicação em oferecer atendimento de
                        qualidade apreciada.
                    </h2>
                </div>
                <div className="flex flex-row items-start justify-start w-full lg:w-3/5 mx-auto relative gap-8 lg:pl-6">
                    <button
                        type="button"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className={`
                                p-2 sm:p-4 rounded-xl bg-white my-auto disabled:opacity-40 disabled:cursor-not-allowed transition-opacity
                                absolute sm:left-0 sm:top-1/2 transform sm:-translate-y-1/2 
                                left-1/2 top-0 -translate-x-[calc(100%+8px)] sm:translate-x-0
                                z-20
                            `}
                    >
                        <FaChevronLeft className="text-2xl sm:text-3xl text-nef-700" />
                    </button>

                    <div className="overflow-hidden w-full" ref={emblaRef}>
                        <div className="flex">
                            {diferenciais.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-full flex justify-center items-center pt-24 sm:pt-0 pb-10 sm:pb-0 px-8 lg:px-0"
                                >
                                    <div
                                        className={`
                                            flex justify-center items-center
                                            mx-auto relative
                                        `}
                                    >
                                        <div className="p-4 sm:p-5 bg-nef-700 rounded-2xl shadow-lg absolute -top-10 sm:top-6 -left-2 sm:-left-12 z-10">
                                            <item.IconTop className="text-2xl sm:text-3xl text-nef-50" />
                                        </div>
                                        <div className="p-4 sm:p-5 bg-nef-400 rounded-2xl shadow-lg absolute -bottom-10 sm:bottom-6 -right-2 sm:-right-8 z-10">
                                            <item.IconBottom className="text-2xl sm:text-3xl text-nef-50" />
                                        </div>
                                        <div
                                            className={`
                                                flex flex-col
                                                items-start justify-center
                                                w-[85vw] max-w-84
                                                p-10 lg:p-16 bg-white
                                                border border-transparent rounded-3xl
                                                hover:shadow-lg hover:border-nef-400 transition-all
                                                relative z-5
                                            `}
                                        >
                                            <h2 className="text-2xl text-nef-700 font-bold mb-2 line-clamp-2">
                                                {item.titulo}
                                            </h2>
                                            <p className="text-start text-[14px] text-muted-foreground pb-4">
                                                {item.descricao}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className={`
                                p-2 sm:p-4 rounded-xl bg-white my-auto disabled:opacity-40 disabled:cursor-not-allowed transition-opacity
                                absolute sm:right-0 sm:top-1/2 transform sm:-translate-y-1/2 
                                right-1/2 top-0 translate-x-[calc(100%+8px)] sm:translate-x-0
                                z-20
                            `}
                    >
                        <FaChevronRight className="text-2xl sm:text-3xl text-nef-700" />
                    </button>
                </div>
            </div>
        </div>
    );
}
