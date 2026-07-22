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

const convenios = [
    { src: "/img/afrapep.webp", alt: "Convênio Afrapep Saúde" },
    { src: "/img/amil2.webp", alt: "Convênio Amil Saúde" },
    { src: "/img/assefaz.webp", alt: "Convênio Assefaz Saúde" },
    { src: "/img/brad.webp", alt: "Convênio Bradesco Saúde" },
    // { src: "/img/camed.webp", alt: "Convênio Camed Saúde" },
    { src: "/img/capesaude.webp", alt: "Convênio CAPESESP" },
    { src: "/img/cassi.webp", alt: "Convênio Cassi" },
    { src: "/img/comseder.webp", alt: "Convênio Comseder" },
    { src: "/img/funasa.png", alt: "Convênio Funasa" },
    // { src: "/img/faschef.webp", alt: "Convênio Faschef" },
    // { src: "/img/fusex.webp", alt: "Convênio Fusex" },
    // { src: "/img/fusma.webp", alt: "Convênio Fusma" },
    { src: "/img/gama.webp", alt: "Convênio Gama Saúde" },
    { src: "/img/geap.webp", alt: "Convênio Geap Saúde" },
    // { src: "/img/mediservice.webp", alt: "Convênio Mediservice" },
    { src: "/img/smile.webp", alt: "Convênio Smile" },
    // { src: "/img/sulamerica.webp", alt: "Convênio sulamerica" },
    { src: "/img/hapvida.webp", alt: "Convênio Hapvida" },
    { src: "/img/petro.webp", alt: "Convênio Petrobras" },
    { src: "/img/unimed2.webp", alt: "Convênio Unimed" },
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
                        flex flex-row flex-wrap items-center justify-center 
                        w-full lg:w-8/10 m-auto relative mb-8 lg:mb-auto
                        text-center
                    `}
                >
                    {convenios.map((convenio, index) => (
                        <div key={index} className="flex h-full flex-col items-center justify-between">
                            <Image
                                src={convenio.src}
                                alt={convenio.alt}
                                key={index}
                                width={186}
                                height={220}
                                className="md:w-8/10 h-full p-4"
                            />
                            {/* <span className="text-sm bottom-0 align-bottom">{convenio.alt}</span> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
