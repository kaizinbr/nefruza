"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa6";

type Noticia = {
    slug: string;
    titulo: string;
    resumo: string;
    data: string;
    imagem: string;
    tags: string[];
};

// substitua pelas 8 últimas notícias reais (via fetch/CMS)
const noticias: Noticia[] = [
    {
        slug: "noticia-1",
        titulo: "Como um acompanhamento psicológico profissional pode melhorar a qualidade de vida de pacientes de diálise",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "https://www.nefruza.com.br/images/blog/blog-paciente5.jpg",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-2",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "/img/placeholder.webp",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-3",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros",
        data: "17/07/2026",
        imagem: "/img/placeholder.webp",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-4",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "/img/placeholder.webp",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-5",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "/img/placeholder.webp",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-6",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "https://www.nefruza.com.br/images/nefruza_edit.jpg",
        tags: ["noticia", "tag2"],
    },
];

export default function UltimasNoticias() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
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
        <section className="w-full bg-white overflow-x-clip py-24">
            {/* header + botões: preso ao max-w-6xl, igual ao resto do site */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between mb-8 px-4 xl:px-0">
                <div className="flex flex-col gap-4 mb-6 md:mb-0">
                    <h2 className="text-3xl font-title text-nef-700">
                        Por dentro da nefruza
                    </h2>
                    <span className="text-zinc-700">
                        Fique por dentro das notícias, comunicados e novidades
                        da Nefruza
                    </span>
                </div>
                <Link
                    href="/blog"
                    className={`
                            flex flex-row items-center bg-nef-600 text-white font-bold py-3 px-8 gap-2 
                            rounded-full cursor-pointer hover:bg-nef-600/90  transition-all
                            w-fit
                        `}
                >
                    Ver todas <FaArrowRight />
                </Link>
            </div>
            <div
                className={`
                    flex gap-8 flex-col md:flex-row max-w-6xl mx-auto
                    min-h-152 px-4
                `}
            >
                <Link
                    href={`/blog/${noticias[0].slug}`}
                    key={noticias[0].slug}
                    className={`
                                flex-none w-full md:w-[calc(50%-16px)] min-h-124 md:min-h-0
                                flex flex-col
                                rounded-3xl overflow-hidden 
                                border border-transparent 
                                transition-all group
                                relative
                            `}
                >
                    <div className="absolute w-full h-full flex items-center justify-center z-0">
                        <Image
                            src={noticias[0].imagem}
                            alt={noticias[0].titulo}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div
                        className={`
                            absolute bottom-4 left-4 right-4 z-10 p-6 
                            flex flex-1 flex-col items-start justify-between
                            bg-nef-50 rounded-2xl
                        `}
                    >
                        <div>
                            <span className="text-xs text-zinc-500 font-bold uppercase">
                                {noticias[0].data} ·{" "}
                                {noticias[0].tags.join(", ")}
                            </span>
                            <h3 className="text-lg font-bold text-nef-700 mt-1 mb-2 line-clamp-2">
                                {noticias[0].titulo}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                                {noticias[0].resumo}
                            </p>
                        </div>
                        <p className="text-nef-600 font-bold cursor-pointer  transition-colors justify-self-end flex flex-row gap-2">
                            Leia mais{" "}
                            <p className="group-hover:translate-x-2 relative transition-all duration-300">
                                →
                            </p>
                        </p>
                    </div>
                </Link>
                <div className="flex flex-col gap-y-8 lex-none w-full lg:w-[calc(50%-16px)]">
                    <Link
                        href={`/blog/${noticias[1].slug}`}
                        key={noticias[1].slug}
                        className={`
                                w-full 
                                flex flex-row
                                transition-all group gap-4
                                
                            `}
                    >
                        <div className="h-full max-h-48 aspect-square flex items-center justify-center overflow-clip rounded-2xl">
                            <Image
                                src={noticias[1].imagem}
                                alt={noticias[1].titulo}
                                width={180}
                                height={180}
                                className="object-cover group-hover:scale-105 transition-transform duration-300 size-full"
                            />
                        </div>
                        <div
                            className={`
                            flex flex-1 flex-col items-start justify-between
                        `}
                        >
                            <div>
                                <span className="text-xs text-zinc-500 font-bold uppercase">
                                    {noticias[1].data} ·{" "}
                                    {noticias[1].tags.join(", ")}
                                </span>
                                <h3 className="text-lg font-bold text-nef-700 mt-1 mb-2 line-clamp-2">
                                    {noticias[1].titulo}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                                    {noticias[1].resumo}
                                </p>
                            </div>
                            <p className="text-nef-600 font-bold cursor-pointer transition-colors justify-self-end flex flex-row gap-2">
                                Leia mais{" "}
                                <p className="group-hover:translate-x-2 relative transition-all duration-300">
                                    →
                                </p>
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={`/blog/${noticias[2].slug}`}
                        key={noticias[2].slug}
                        className={`
                                w-full 
                                flex flex-row
                                transition-all group gap-4
                                
                            `}
                    >
                        <div className="h-full max-h-48 aspect-square flex items-center justify-center overflow-clip rounded-2xl">
                            <Image
                                src={noticias[2].imagem}
                                alt={noticias[2].titulo}
                                width={180}
                                height={180}
                                className="object-cover group-hover:scale-105 transition-transform duration-300 size-full"
                            />
                        </div>
                        <div
                            className={`
                            flex flex-1 flex-col items-start justify-between
                        `}
                        >
                            <div>
                                <span className="text-xs text-zinc-500 font-bold uppercase">
                                    {noticias[2].data} ·{" "}
                                    {noticias[2].tags.join(", ")}
                                </span>
                                <h3 className="text-lg font-bold text-nef-700 mt-1 mb-2 line-clamp-2">
                                    {noticias[2].titulo}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                                    {noticias[2].resumo}
                                </p>
                            </div>
                            <p className="text-nef-600 font-bold cursor-pointer transition-colors justify-self-end flex flex-row gap-2">
                                Leia mais{" "}
                                <p className="group-hover:translate-x-2 relative transition-all duration-300">
                                    →
                                </p>
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={`/blog/${noticias[3].slug}`}
                        key={noticias[3].slug}
                        className={`
                                w-full 
                                flex flex-row
                                transition-all group gap-4
                                
                            `}
                    >
                        <div className="h-full max-h-48 aspect-square flex items-center justify-center overflow-clip rounded-2xl">
                            <Image
                                src={noticias[3].imagem}
                                alt={noticias[3].titulo}
                                width={180}
                                height={180}
                                className="object-cover group-hover:scale-105 transition-transform duration-300 size-full"
                            />
                        </div>
                        <div
                            className={`
                            flex flex-1 flex-col items-start justify-between
                        `}
                        >
                            <div>
                                <span className="text-xs text-zinc-500 font-bold uppercase">
                                    {noticias[3].data} ·{" "}
                                    {noticias[3].tags.join(", ")}
                                </span>
                                <h3 className="text-lg font-bold text-nef-700 mt-1 mb-2 line-clamp-2">
                                    {noticias[3].titulo}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-4">
                                    {noticias[3].resumo}
                                </p>
                            </div>
                            <p className="text-nef-600 font-bold cursor-pointer transition-colors justify-self-end flex flex-row gap-2">
                                Leia mais{" "}
                                <p className="group-hover:translate-x-2 relative transition-all duration-300">
                                    →
                                </p>
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex justify-end mt-8 mr-6 md:mr-auto"></div>
        </section>
    );
}
