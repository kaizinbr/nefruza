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
    FaArrowRight,
} from "react-icons/fa6";

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

export default function Estrutura() {
    const [itemAtivo, setItemAtivo] = useState<{
        id: string;
        titulo: string;
        descricao: string;
        image: string;
    }>(estrutura[0]);

    return (
        <div
            id="diferenciais"
            className={`
                flex 
                items-start justify-center 
                w-full bg-nef-800 overflow-x-clip
                px-4 py-24
            `}
        >
            <div className="flex flex-col lg:flex-row flex-wrap w-full max-w-6xl">
                <div
                    className={`
                        flex flex-col items-start justify-start 
                        flex-5/5
                        w-full lg:w-3/5 m-auto relative lg:pr-8 mb-8 lg:mb-auto
                        text-nef-50 text-left
                    `}
                >
                    <h1 className="text-2xl sm:text-3xl mb-4 font-title w-full md:w-3/5 ">
                        <strong className="font-extrabold">
                            Uma estrutura de ponta
                        </strong>{" "}
                        para oferecer o melhor atendimento aos nossos pacientes.
                    </h1>
                    <h2 className="w-full md:w-3/5">
                        Com alto grau de satisfação de nossos clientes, fica
                        claro que nossa dedicação em oferecer atendimento de
                        qualidade apreciada.
                    </h2>
                </div>

                <div
                    className={`
                        flex flex-col items-start justify-start 
                        flex-2/5 gap-4 pt-0 md:pt-8
                        w-full lg:w-2/5 m-auto relative lg:pr-8 lg:mb-auto
                         text-start lg:text-start
                    `}
                >
                    {estrutura.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                    flex flex-row w-full text-xl sm:text-2xl items-center justify-start cursor-pointer 
                                    transition-all duration-300 ease-in-out
                                `}
                            onClick={() => setItemAtivo(item)}
                        >
                            <div className="w-12 h-full">
                                <FaArrowRight
                                    className={`
                                            transform text-nef-50
                                            transition-all duration-300 ease-in-out
                                            ${itemAtivo.id === item.id ? "opacity-100 translate-x-none" : "opacity-0 -translate-x-full"}
                                        `}
                                />
                            </div>
                            <p
                                className={`
                                    font-title w-full
                                            transition-all duration-300 ease-in-out
                                    ${itemAtivo.id === item.id ? "font- text-nef-50" : "font-normal text-nef-200"}
                                `}
                            >
                                {item.titulo}
                            </p>
                        </div>
                    ))}

                    <div className="flex flex-row w-full text-xl sm:text-2xl items-center justify-start">
                        <div className="w-12 h-full"></div>
                        <Link href="/institucional/estrutura" className="font-title w-full text-nef-200 hover:text-nef-50 transition-all duration-300 ease-in-out">
                            E mais
                        </Link>
                    </div>
                </div>
                <div className="flex flex-3/5 flex-col md:flex-row items-start justify-start w-full lg:w-3/5 mx-auto relative gap-4 pt-8 lg:pl-6">
                    {itemAtivo.image && (
                        <Image
                            src={itemAtivo.image}
                            alt={itemAtivo.titulo}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg h-64 md:h-84 object-cover"
                        />
                    )}
                    {itemAtivo.descricao && (
                        <p className="text-sm text-gray-300">
                            {itemAtivo.descricao}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
