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
        titulo: "Lorem ipsum dolor sit amet",
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
        imagem: "https://www.nefruza.com.br/images/blog/blog-paciente3.jpg",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-3",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "https://www.nefruza.com.br/images/nefruza_edit.jpg",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-4",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "https://www.nefruza.com.br/images/blog/blog-paciente5.jpg",
        tags: ["noticia", "tag2"],
    },
    {
        slug: "noticia-5",
        titulo: "Lorem ipsum dolor sit amet",
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros ut, condimentum sapien. Nulla aliquet lorem nec pharetra volutpat. In nec tempor purus. Nullam ac risus purus. Integer accumsan tellus metus, sed efficitur nibh condimentum vel. Fusce interdum purus sed odio finibus imperdiet. Vivamus non velit quis felis vestibulum faucibus at non augue. Suspendisse potenti. Phasellus vehicula eu enim a dictum. Vestibulum volutpat vehicula bibendum. Sed eget posuere dolor.",
        data: "17/07/2026",
        imagem: "https://www.nefruza.com.br/images/blog/blog-paciente3.jpg",
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
            <div className="max-w-6xl mx-auto flex items-end justify-between mb-8 px-4 xl:px-0">
                <h2 className="text-3xl font-title text-nef-700">
                    Últimas notícias
                </h2>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="p-3 rounded-xl bg-nef-700 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                    >
                        <FaChevronLeft className="text-xl text-white" />
                    </button>
                    <button
                        type="button"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="p-3 rounded-xl bg-nef-700 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                    >
                        <FaChevronRight className="text-xl text-white" />
                    </button>
                </div>
            </div>

            {/* viewport: fora do max-w-6xl, com padding-left calculado
               pra alinhar o 1º card com o header acima, e vazar à direita */}
            <div
                className="overflow-hidden pl-[max(1rem,calc((100vw-72rem)/2+1rem))]"
                ref={emblaRef}
            >
                <div className="flex gap-6">
                    {noticias.map((noticia) => (
                        <Link
                            href={`/noticias/${noticia.slug}`}
                            key={noticia.slug}
                            className={`
                                flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[31%]
                                rounded-3xl overflow-hidden bg-nef-50
                                border border-transparent hover:border-nef-400
                                transition-all group
                            `}
                        >
                            <div className="relative w-full aspect-5/3">
                                <Image
                                    src={noticia.imagem}
                                    alt={noticia.titulo}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-start justify-start">
                                <span className="text-xs text-nef-600 font-bold uppercase">
                                    {noticia.data} · {noticia.tags.join(", ")}
                                </span>
                                <h3 className="text-lg font-bold text-nef-700 mt-1 mb-2 line-clamp-2">
                                    {noticia.titulo}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                                    {noticia.resumo}
                                </p>
                                <span
                                    className="bg-nef-600 text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-nef-600/90 transition-colors"
                                >
                                    Leia mais →
                                </span>
                            </div>
                        </Link>
                    ))}

                    {/* espaçador pra sobrar respiro depois do último card ao vazar até a borda */}
                    <div className="flex-none w-4 lg:w-[calc((100vw-72rem)/2)]" />
                </div>
            </div>

            {/* CTA "ver todas", preso de volta ao max-w-6xl */}
            <div className="max-w-6xl mx-auto flex justify-end mt-8">
                <Link
                    href="/noticias"
                    className="flex items-center gap-2 text-nef-700 font-bold hover:gap-3 transition-all"
                >
                    Ver todas as notícias <FaArrowRight />
                </Link>
            </div>
        </section>
    );
}
