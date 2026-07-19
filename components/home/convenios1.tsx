"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const convenios = [
    { src: "/img/afrapep.webp", alt: "Convênio Afrapep Saúde" },
    { src: "/img/assefaz.webp", alt: "Convênio Assefaz Saúde" },
    { src: "/img/brad.webp", alt: "Convênio Bradesco Saúde" },
    { src: "/img/camed.webp", alt: "Convênio Camed Saúde" },
    { src: "/img/capesaude.webp", alt: "Convênio Capesaúde" },
    { src: "/img/cassi.webp", alt: "Convênio Cassi" },
    { src: "/img/comseder.webp", alt: "Convênio Comseder" },
    { src: "/img/faschef.webp", alt: "Convênio Faschef" },
    { src: "/img/fusex.webp", alt: "Convênio Fusex" },
    { src: "/img/fusma.webp", alt: "Convênio Fusma" },
    { src: "/img/gama.webp", alt: "Convênio Gama Saúde" },
    { src: "/img/mediservice.webp", alt: "Convênio Mediservice" },
    { src: "/img/Smile.webp", alt: "Convênio Smile" },
    { src: "/img/sulamerica.webp", alt: "Convênio sulamerica" },
    { src: "/img/hapvida.webp", alt: "Convênio Hapvida" },
    { src: "/img/petro.webp", alt: "Convênio Petrobras" },
    { src: "/img/unimed2.webp", alt: "Convênio Unimed" },
];

export default function Convenios1() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 640px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 3 },
        },
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

                {/* Slider de convênios */}
                <div className="relative w-full mx-auto">
                    {/* Viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        {/* Container — uma única linha horizontal */}
                        <div className="flex touch-pan-y">
                            {convenios.map((item) => (
                                <div
                                    key={item.src}
                                    className={`
                                        flex-none
                                        w-1/2 sm:w-1/3 lg:w-1/4
                                        flex items-center justify-center
                                        px-2
                                    `}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={210}
                                        height={220}
                                        className="w-full h-auto p-4 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Setas */}
                    <button
                        type="button"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        aria-label="Anterior"
                        className={`
                            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                            z-10 flex h-10 w-10 items-center justify-center
                            rounded-full bg-white shadow-md border border-zinc-200
                            transition-opacity duration-200
                            hover:bg-zinc-50
                            disabled:opacity-0 disabled:pointer-events-none
                        `}
                    >
                        <FaChevronLeft className="text-nef-600" size={16} />
                    </button>
                    <button
                        type="button"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        aria-label="Próximo"
                        className={`
                            absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                            z-10 flex h-10 w-10 items-center justify-center
                            rounded-full bg-white shadow-md border border-zinc-200
                            transition-opacity duration-200
                            hover:bg-zinc-50
                            disabled:opacity-0 disabled:pointer-events-none
                        `}
                    >
                        <FaChevronRight className="text-nef-600" size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}