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
    FaHospital,
} from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";

const diferenciais = [
    {
        titulo: "Pioneirismo",
        descricao:
            "Primeira e única clínica de hemodiálise de João Pessoa a realizar plasmaférese e hemodiálise contínua, oferecendo suporte especializado para casos de maior complexidade.",
        IconTop: RiMentalHealthFill,
        IconBottom: MdHealthAndSafety,
    },
    {
        titulo: "Estrutura",
        descricao:
            "Ambientes climatizados, planejados para proporcionar conforto, segurança e bem-estar durante todas as etapas do atendimento.",
        IconTop: FaHospital,
        IconBottom: "FaKitMedical",
    },
    {
        titulo: "Equipe próxima",
        descricao:
            "Uma equipe multidisciplinar que acompanha cada paciente de forma próxima, conhecendo sua história e oferecendo um cuidado verdadeiramente individualizado.",
        IconTop: FaUserDoctor,
        IconBottom: "FaHeartPulse",
    },
    {
        titulo: "Cuidado nutricional",
        descricao:
            "O acompanhamento nutricional faz parte do tratamento, contribuindo para a saúde, o bem-estar e a qualidade de vida em cada fase da jornada do paciente.",
        IconTop: GiFruitBowl,
        IconBottom: "MdEmojiFoodBeverage",
    },
    {
        titulo: "Acompanhamento contínuo",
        descricao:
            "O cuidado vai além das sessões de diálise. Nossa equipe acompanha a evolução do paciente de forma contínua para oferecer um tratamento seguro e humanizado.",
        IconTop: FaHouseChimneyMedical,
        IconBottom: "FaNotesMedical",
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
                        Confiança construída todos os dias
                    </h1>
                    <h2 className="">
                        Nossa história é feita de escolhas que colocam a
                        segurança, a inovação e o cuidado com o paciente em
                        primeiro lugar. Veja nossos diferenciais!
                    </h2>
                </div>
                <div className="flex flex-row items-start justify-start w-full lg:w-1/2 mx-auto relative gap-8 lg:pl-6">
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
                                        {/* <div className="p-4 sm:p-5 bg-nef-400 rounded-2xl shadow-lg absolute -bottom-10 sm:bottom-6 -right-2 sm:-right-8 z-10">
                                            <item.IconBottom className="text-2xl sm:text-3xl text-nef-50" />
                                        </div> */}
                                        <div
                                            className={`
                                                flex flex-col
                                                items-start justify-center
                                                w-[85vw] max-w-84
                                                p-10 lg:p-12 bg-white
                                                border border-transparent rounded-3xl
                                                hover:shadow-lg hover:border-nef-400 transition-all
                                                relative z-5
                                            `}
                                        >
                                            <div className="p-4 sm:p-5 bg-nef-700 rounded-2xl shadow-lg mb-4">
                                                <item.IconTop className="text-2xl sm:text-3xl text-nef-50" />
                                            </div>
                                            <h2 className="text-2xl text-nef-700 font-bold mb-2 line-clamp-2">
                                                {item.titulo}
                                            </h2>
                                            <p className="text-start text-[14px] text-muted-foreground">
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
