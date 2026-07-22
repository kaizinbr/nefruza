"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Dados da trajetória.
 * `image` é opcional — anos sem imagem renderizam só o card de texto.
 */
export type Marco = {
    ano: number;
    titulo: string;
    descricao: string[];
    image?: string;
};

const trajetoria: Marco[] = [
    {
        ano: 1979,
        titulo: "O início",
        descricao: [
            "A Nefruza foi fundada em março de ­­­­­­­­­­­­1979 pelo nefrologista Mário de Oliveira Fiúza Chaves, médico graduado pela Universidade Federal de Pernambuco.",
            "Iniciou suas atividades como anexo do Hospital Samaritano operando com apenas duas máquinas de hemodiálise. O início foi difícil, os médicos da cidade não acreditavam nos benefícios da hemodiálise e, portanto não indicavam o procedimento.",
        ],
        image: "/img/placeholder.webp",
    },
    {
        ano: 1980,
        titulo: "O primeiro ano desafiador",
        descricao: [
            "Após cerca de 1 ano sem atender sequer um paciente, alguns médicos, mesmo descrentes, mandaram enfermos graves para o procedimento. Logo, um dos pacientes demonstrou melhora, o que revelou a eficiência do tratamento. Esse foi o pontapé inicial para um aumento gradativo de pacientes com o passar dos anos.",
        ],
        image: "/img/placeholder.webp",
    },
    {
        ano: 1986,
        titulo: "Pioneiros",
        descricao: [
            "O primeiro transplante de rim da Paraíba foi feito pela equipe da Nefruza em parceria com médicos pernambucanos, sendo um marco para a medicina renal no Estado.",
        ],
    },
    {
        ano: 1996,
        titulo: "A primeira sede própria",
        descricao: [
            "O Hospital Samaritano fechou suas portas para o SUS, então a Nefruza mudou suas instalações para uma sede própria na Av. Epitácio Pessoa (principal Avenida da cidade). Passou a atender então não só o SUS como também todos os planos de saúde. Foi reconhecida na época como a clínica de diálise mais moderna do Estado da Paraíba.",
        ],
        image: "/img/placeholder.webp",
    },
    {
        ano: 2001,
        titulo: "Algum ponto importante",
        descricao: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus tempus scelerisque. Vivamus in aliquet libero, egestas gravida purus. Fusce quis luctus nisi. Vivamus fermentum massa nec interdum hendrerit.",
        ],
        image: "/img/placeholder.webp",
    },
    {
        ano: 2013,
        titulo: "Um novo começo",
        descricao: [
            "Foi inaugurada a nova e atual sede na Rua Sinésio Guimarães, no Bairro Torre. A clínica Nefruza se destaca atualmente pelo seu equipamento de última geração, sistema de informatização e qualidade do serviço. ",
        ],
        image: "/img/placeholder.webp",
    },
    {
        ano: 2026,
        titulo: "47 anos de história e cuidado",
        descricao: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus tempus scelerisque. Vivamus in aliquet libero, egestas gravida purus. Fusce quis luctus nisi. Vivamus fermentum massa nec interdum hendrerit.",
        ],
        image: "/img/placeholder.webp",
    },
];

export default function LinhaDoTempo({
    marcos = trajetoria,
}: {
    marcos?: Marco[];
}) {
    const [anoAtivo, setAnoAtivo] = useState(marcos[0]?.ano);
    const itemRefs = useRef<Record<number, HTMLLIElement | null>>({});
    const navRefs = useRef<Record<number, HTMLButtonElement | null>>({});

    // Observa qual marco está mais próximo do centro da viewport
    // e atualiza o ano ativo na navegação sticky.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const ano = Number(
                            entry.target.getAttribute("data-ano"),
                        );
                        if (!Number.isNaN(ano)) setAnoAtivo(ano);
                    }
                });
            },
            {
                // faixa fina no meio da tela: o marco "ativo" é o que
                // cruza essa faixa enquanto o usuário rola a página
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            },
        );

        Object.values(itemRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [marcos]);

    // Mantém o ano ativo sempre visível na lista sticky, rolando-a
    // internamente quando necessário (útil quando há muitos anos).
    useEffect(() => {
        navRefs.current[anoAtivo]?.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
        });
    }, [anoAtivo]);

    const irParaAno = (ano: number) => {
        itemRefs.current[ano]?.scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    };

    return (
        <div className="flex w-full gap-6 md:gap-10">
            {/* Navegação de anos — sticky, fica fixa enquanto a linha do tempo rola */}
            <nav
                aria-label="Navegar por ano"
                className={`
                    hidden 
                    sticky top-26 z-10 h-fit shrink-0
                    md:flex flex-col gap-1
                    max-h-[70vh] overflow-y-auto
                    rounded-2xl bg-zinc-100 px-3 py-4
                    scrollbar-none [&::-webkit-scrollbar]:hidden
                `}
            >
                {marcos.map(({ ano }) => (
                    <button
                        key={ano}
                        ref={(el) => {
                            navRefs.current[ano] = el;
                        }}
                        onClick={() => irParaAno(ano)}
                        aria-current={ano === anoAtivo}
                        className={`
                            text-left px-3 py-1.5 rounded-lg text-sm font-medium
                            transition-colors duration-200
                            ${
                                ano === anoAtivo
                                    ? "text-nef-500 font-bold"
                                    : "text-gray-400 hover:text-gray-600"
                            }
                        `}
                    >
                        {ano}
                    </button>
                ))}
            </nav>

            <div className="relative flex-1 min-w-0">
                <div className="absolute left-1.75 top-0 bottom-0 w-px bg-gray-200" />

                <ol className="flex flex-col gap-16 md:gap-24">
                    {marcos.map((marco) => {
                        const ativo = marco.ano === anoAtivo;
                        return (
                            <li
                                key={marco.ano}
                                data-ano={marco.ano}
                                ref={(el) => {
                                    itemRefs.current[marco.ano] = el;
                                }}
                                className="relative pl-8"
                            >
                                {/* ponto na trilha */}
                                <span
                                    className={`
                                        absolute left-1.75 -top-12.5 h-32 w-px rounded-full
                                        transition-colors duration-300
                                        bg-linear-to-b
                                        ${
                                            ativo
                                                ? "from-gray-200 via-nef-500 to-gray-200"
                                                : "from-gray-200  to-gray-200"
                                        }
                                    `}
                                />
                                <span
                                    className={`
                                        absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full
                                        border-2 transition-colors duration-300
                                        ${
                                            ativo
                                                ? "bg-nef-500 border-nef-500"
                                                : "bg-white border-gray-300"
                                        }
                                    `}
                                />

                                <span
                                    className={`
                                        block text-xl font-bold mb-2 transition-colors duration-300
                                        ${ativo ? "text-nef-500" : "text-gray-400"}
                                    `}
                                >
                                    {marco.ano}
                                </span>

                                <div
                                    className={`
                                        grid gap-4
                                        ${marco.image ? "md:grid-cols-2 md:items-center" : ""}
                                    `}
                                >
                                    <div className="rounded-2xl bg-nef-100 shadow-sm ring-1 ring-gray-100 p-5">
                                        <h3 className="font-title text-lg mb-1">
                                            {marco.titulo}
                                        </h3>
                                        {marco.descricao.map((text, index) => (
                                            <p
                                                key={index}
                                                className="text-sm text-gray-600 not-last:mb-2"
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>

                                    {marco.image && (
                                        <div className="relative aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-gray-100">
                                            <Image
                                                src={marco.image}
                                                alt={marco.titulo}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
