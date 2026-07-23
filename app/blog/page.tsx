"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Noticia = {
    slug: string;
    titulo: string;
    resumo: string;
    data: string;
    imagem: string;
    tags: string[];
};
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
        resumo: "onsectetur adipiscing elit. Morbi eu erat venenatis, maximus eros",
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

const categoryFilters = [
    { label: "Todos", value: "" },
    { label: "Comunicados", value: "comunicados" },
    { label: "Inovação", value: "inovacao" },
    { label: "Eventos", value: "eventos" },
    { label: "Saúde", value: "saude" },
    { label: "Dicas de saúde", value: "dicas-de-saude" },
];

function CategoryFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const activeCategory = (
        searchParams?.get("category") ?? searchParams?.get("gategory") ?? ""
    ).toLowerCase();

    const handleCategoryClick = (value: string) => {
        const params = new URLSearchParams(searchParams?.toString() ?? "");

        if (value) {
            params.set("category", value);
            params.delete("gategory");
        } else {
            params.delete("category");
            params.delete("gategory");
        }

        const queryString = params.toString();
        const url = queryString ? `${pathname}?${queryString}` : pathname;

        router.push(url);
    };

    return (
        <div className="flex flex-row w-full gap-4 flex-wrap mb-8">
            {categoryFilters.map((filter) => {
                const isActive = filter.value === activeCategory;
                return (
                    <button
                        key={filter.value || "todos"}
                        type="button"
                        onClick={() => handleCategoryClick(filter.value)}
                        className={`text-base font-bold px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ease-in-out sm:text-lg ${
                            isActive
                                ? "text-zinc-50 border border-nef-600 bg-nef-600 hover:bg-nef-800"
                                : "text-zinc-900 border border-zinc-300 hover:bg-zinc-200"
                        }`}
                    >
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main
                className={`
                    flex flex-1 w-full max-w-6xl flex-col items-start justify-start py-16 md:py-32 px-4 sm:items-start
                `}
            >
                <span className="text-sm font-bold text-nef-500 uppercase">
                    Fique por dentro
                </span>
                <h1 className="text-4xl font- text-start mb-4 font-title">
                    Notícias e novidades
                </h1>
                <Suspense fallback={<div className="mb-8" />}>
                    <CategoryFilters />
                </Suspense>
                <div className="flex flex-row w-full gap-8 justify-between flex-wrap mb-8">
                    {noticias.map((noticia) => (
                        <Link
                            href={`/blog/${noticia.slug}`}
                            key={noticia.slug}
                            className={`
                                flex-none w-full md:w-[45%] lg:w-[31%]
                                flex flex-col
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
                            <div className="p-6 flex flex-1 flex-col items-start justify-between">
                                <div>
                                    <span className="text-xs text-nef-600 font-bold uppercase">
                                        {noticia.data} ·{" "}
                                        {noticia.tags.join(", ")}
                                    </span>
                                    <h3 className="text-lg font-bold text-nef-700 mt-1 mb-2 line-clamp-2">
                                        {noticia.titulo}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                                        {noticia.resumo}
                                    </p>
                                </div>
                                <span className="bg-nef-600 text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-nef-600/90 transition-colors justify-self-end">
                                    Leia mais →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
