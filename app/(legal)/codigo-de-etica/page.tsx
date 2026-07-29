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
    { src: "/img/capesaude.webp", alt: "Convênio CAPESESP" },
    { src: "/img/cassi.webp", alt: "Convênio Cassi" },
    { src: "/img/comseder.webp", alt: "Convênio Comseder" },
    { src: "/img/funasa.png", alt: "Convênio Funasa" },
    { src: "/img/gama.webp", alt: "Convênio Gama Saúde" },
    { src: "/img/geap.png", alt: "Convênio Geap Saúde" },
    { src: "/img/smile.webp", alt: "Convênio Smile" },
    { src: "/img/hapvida.webp", alt: "Convênio Hapvida" },
    { src: "/img/petro.webp", alt: "Convênio Petrobras" },
    { src: "/img/unimed2.webp", alt: "Convênio Unimed" },
    // { src: "/img/faschef.webp", alt: "Convênio Faschef" },
    // { src: "/img/fusex.webp", alt: "Convênio Fusex" },
    // { src: "/img/fusma.webp", alt: "Convênio Fusma" },
    // { src: "/img/mediservice.webp", alt: "Convênio Mediservice" },
    // { src: "/img/camed.webp", alt: "Convênio Camed Saúde" },
    // { src: "/img/sulamerica.webp", alt: "Convênio sulamerica" },
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
            className={`
                flex flex-1 flex-col bg-white font-sans pb-16
            `}
        >
            <div className="w-full">
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
                            informativo
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Código de ética para pacientes
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Código de ética para pacientes da Nefruza, estabelecendo diretrizes de conduta e respeito mútuo entre profissionais e pacientes.
                        </p>
                    </div>
                </section>
                <section
                    className={`
                        relative z-10 mx-auto  
                        w-full max-w-6xl 
                        px-4 sm:px-6 lg:px-8 
                        py-6 sm:py-8 lg:py-10 xl:py-12
                        flex flex-col gap-4
                    `}
                >
                    <p className=" leading-7 text-zinc-600">
                        Importante: o convênio Amil oferece apenas atendimento
                        de consultório conosco.
                    </p>
                </section>
            </div>
        </div>
    );
}
