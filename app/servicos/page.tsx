"use client";

import FormContato from "@/components/contato/form";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbMailFilled, TbBrandWhatsappFilled } from "react-icons/tb";
import LinhaDoTempo from "@/components/institucional/timeline"; // ajuste o caminho conforme seu projeto

export default function Servicos() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center  font-sans py-16 md:py-32 ">
            <main
                className={`
                    flex flex-1 w-full max-w-6xl flex-col items-start justify-start
                    mb-8 px-4 
                `}
            >
                <div
                    className={`
                        flex flex-col
                        items-start justify-center
                        w-full
                    `}
                >
                    <span className="text-sm font-bold text-nef-500 uppercase">
                        Serviços
                    </span>
                    <h1 className="text-3xl font- text-center mb-4 font-title">
                        Conheça os serviços da Nefruza
                    </h1>
                </div>
                <div
                    className={`
                        flex flex-col
                        items-start justify-center
                        w-full
                    `}
                >
                    <p className="text-  mb-4">
                        Buscando sempre fornecer o melhor atendimento para
                        nossos pacientes, a Nefruza atua com uma gama de
                        serviços clínicos e hospitalares. Aenean vel urna mi.
                        Fusce pretium in nisi vitae pellentesque. Curabitur a
                        egestas augue, eget faucibus odio. Praesent pharetra
                        orci non metus pellentesque, et sagittis enim aliquet.
                        Ut ullamcorper mollis nulla at sodales. Vivamus dolor
                        elit, sagittis eu dignissim id, imperdiet laoreet erat.
                    </p>
                </div>
                <div
                    className={`
                        flex flex-col flex- gap-4 justify-between
                        items-start
                        w-full mt-4
                    `}
                >
                    <h1 className="text-2xl p-4 bg-nef-700 rounded-2xl font-bold text-nef-50 text-center mb-4 font-title mx-auto">
                        Serviços clínicos
                    </h1>
                    <div className="flex w-full justify-between gap-4">
                        <div className=" w-78 p-6 rounded-2xl bg-nef-200 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-center mb-4">Hemodiálise convencional</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ratione porro libero dolore quis ex saepe reprehenderit labore exercitationem.</p>
                        </div>
                        <div className=" w-78 p-6 rounded-2xl bg-nef-200 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-center mb-4">Hemodiafiltração (HDF)</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ratione porro libero dolore quis ex saepe reprehenderit labore exercitationem.</p>
                        </div>
                        <div className=" w-78 p-6 rounded-2xl bg-nef-200 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-center mb-4">Consulta nefrológica especializada para adultos e crianças</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ratione porro libero dolore quis ex saepe reprehenderit labore exercitationem.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`
                        flex flex-col flex- gap-4 justify-between
                        items-start
                        w-full mt-12
                    `}
                >
                    <h1 className="text-2xl p-4 bg-nef-500 rounded-2xl font-bold text-nef-50 text-center mb-4 font-title mx-auto">
                        Serviços hospitalares
                    </h1>
                    <div className="flex w-ful items justify-between gap-4 flex-wrap">
                        <div className=" w-78 p-6 rounded-2xl bg-nef-200 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-center mb-4">Diálise peritoneal pediátrica</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ratione porro libero dolore quis ex saepe reprehenderit labore exercitationem.</p>
                        </div>
                        <div className=" w-78 p-6 rounded-2xl bg-nef-200 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-center mb-4">Hemodiálise convencional para adultos e crianças</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ratione porro libero dolore quis ex saepe reprehenderit labore exercitationem.</p>
                        </div>
                        <div className=" w-78 p-6 rounded-2xl bg-nef-200 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-center mb-4">Plasmaférese para adultos e crianças</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ratione porro libero dolore quis ex saepe reprehenderit labore exercitationem.</p>
                        </div>
                        <div className=" w-78 p-6 rounded-2xl bg-nef-200 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-center mb-4">Diálise contínua para adultos e crianças</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ratione porro libero dolore quis ex saepe reprehenderit labore exercitationem.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
