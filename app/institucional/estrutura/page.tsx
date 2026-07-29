"use client";

import { useState } from "react";
import Image from "next/image";
import { LuExpand } from "react-icons/lu";
import ImageLightbox from "@/components/ui/image-box";

// Mesma base de dados usada na seção "Estrutura" da Home — aqui viram
// os cartões da galeria completa da página institucional.
const estrutura = [
    {
        id: "consultorios",
        titulo: "Consultórios",
        descricao:
            "Consultórios privativos e equipados com os melhores equipamentos, proporcionando um ambiente confortável e seguro para os pacientes.",
        image: "https://www.nefruza.com.br/images/gallery/consultorio2.jpg",
    },
    {
        id: "salas-de-hemodialise",
        titulo: "Salas de Hemodiálise",
        descricao:
            "Climatizadas com tv HD, internet wi-fi, equipadas com máquinas de última geração; proporcionando um maior conforto ao paciente.",
        image: "https://www.nefruza.com.br/images/gallery/salahemodialise2.jpg",
    },
    {
        id: "tratamento-de-agua",
        titulo: "Tratamento de Água",
        descricao:
            "Sistema moderno e seguro de deionização e osmose reversa para a purificação da água a ser utilizada na sessão de hemodiálise.",
        image: "https://www.nefruza.com.br/images/gallery/tratamentoagua.jpg",
    },
    {
        id: "elevador",
        titulo: "Elevador",
        descricao:
            "Elevador moderno e seguro, com capacidade para atender todos os pacientes com conforto e praticidade.",
        image: "https://www.nefruza.com.br/images/gallery/ELEVADOR_grande.png",
    },
    {
        id: "enfermagem",
        titulo: "Enfermagem",
        descricao:
            "Equipe de enfermagem altamente qualificada, pronta para atender todos os pacientes com dedicação e profissionalismo.",
        image: "https://www.nefruza.com.br/images/gallery/enfermaria.jpg",
    },
    {
        id: "salas-de-espera",
        titulo: "Salas de espera",
        descricao:
            "Com ambiente climatizado, TV e wi-fi, proporcionando um ambiente acolhedor e agradável para o paciente enquanto espera.",
        image: "https://www.nefruza.com.br/images/gallery/salaespera2.jpg",
    },
];

export default function EstruturaPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const lightboxImages = estrutura.map((item) => ({
        id: item.id,
        src: item.image,
        alt: item.titulo,
        caption: item.descricao,
    }));

    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main 
                className={`
                    w-full
                `}> 
                <section className="relative isolate overflow-hidden  bg-linear-to-br from-nef-900 to-nef-600">
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
                            className="absolute right-14 top-12 size-68 rounded-full bg-white/[0.04]"
                        />
                        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                            <span className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                                Estrutura
                            </span>
                            <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                                Um ambiente pensado para cada etapa do seu tratamento
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                                Da recepção às salas de hemodiálise, cada espaço da
                                Nefruza foi planejado para oferecer conforto,
                                segurança e tecnologia ao paciente e à sua família.
                            </p>
                        </div>
                    </section>
                {/* Galeria */}
                <section 
                    className={`
                        relative z-10 mx-auto  
                        w-full max-w-6xl 
                        px-4 sm:px-6 lg:px-8 
                        py-6 sm:py-8 lg:py-10 xl:py-12
                        flex flex-col gap-4
                    `}>
                        <h2 className="font-title text-3xl font-semibold text-zinc-900">
                            Galeria de imagens
                        </h2>
                        <p className="mt-3 max-w-xl text-zinc-500">
                            Toque em qualquer imagem para vê-la em tela cheia e
                            dar zoom nos detalhes.
                        </p>
                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {estrutura.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Ampliar imagem: ${item.titulo}`}
                                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl text-left shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nef sm:aspect-[4/3]"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.titulo}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                                    <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-nef opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <LuExpand size={16} />
                                    </span>
                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <h3 className="font-title text-lg text-white">
                                            {item.titulo}
                                        </h3>
                                        <p className="mt-1 line-clamp-2 text-sm text-white/80">
                                            {item.descricao}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                </section>
                {activeIndex !== null && (
                    <ImageLightbox
                        images={lightboxImages}
                        index={activeIndex}
                        onIndexChange={setActiveIndex}
                        onClose={() => setActiveIndex(null)}
                    />
                )}
            </main>
        </div>
    );
}