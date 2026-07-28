"use client";

import FormContato from "@/components/contato/form";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbMailFilled, TbBrandWhatsappFilled } from "react-icons/tb";
import LinhaDoTempo from "@/components/institucional/timeline"; // ajuste o caminho conforme seu projeto

export default function Home() {
    return (
        <div className="flex flex-1 flex-col bg-white font-sans pb-16">
            <main
                className={`
                    w-full
                `}
            >
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
                            INSTITUCIONAL
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Quem somos
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Com mais de 47 anos de história, seguimos empenhados em transformar vidas.
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
                    <div
                        className={`
                            flex flex-col
                            items-start justify-center
                            w-full
                        `}
                    >
                        <p className="text-  mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed luctus tempus scelerisque. Vivamus in aliquet
                            libero, egestas gravida purus. Fusce quis luctus nisi.
                            Vivamus fermentum massa nec interdum hendrerit. Interdum
                            et malesuada fames ac ante ipsum primis in faucibus.
                            Aenean scelerisque sed erat ac bibendum. Aenean vel urna
                            mi. Fusce pretium in nisi vitae pellentesque. Curabitur
                            a egestas augue, eget faucibus odio. Praesent pharetra
                            orci non metus pellentesque, et sagittis enim aliquet.
                            Ut ullamcorper mollis nulla at sodales. Vivamus dolor
                            elit, sagittis eu dignissim id, imperdiet laoreet erat.
                        </p>
                    </div>
                    <div
                        className={`
                            flex flex-col
                            items-start justify-center
                            w-full mt-4
                        `}
                    >
                        <h1 className="text-2xl font- text-center mb-4 font-title">
                            Pioneirismo de nascença
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed luctus tempus scelerisque. Vivamus in aliquet
                            libero, egestas gravida purus. Fusce quis luctus nisi.
                            Vivamus fermentum massa nec interdum hendrerit. Interdum
                            et malesuada fames ac ante ipsum primis in faucibus.
                            Aenean scelerisque sed erat ac bibendum. Aenean vel urna
                            mi. Fusce pretium in nisi vitae pellentesque. Curabitur
                            a egestas augue, eget faucibus odio. Praesent pharetra
                            orci non metus pellentesque, et sagittis enim aliquet.
                            Ut ullamcorper mollis nulla at sodales. Vivamus dolor
                            elit, sagittis eu dignissim id, imperdiet laoreet erat.
                        </p>
                    </div>
                    <div
                        className={`
                            flex flex-col
                            items-start justify-center
                            w-full mb-8 mt-4
                        `}
                    >
                        <h1 className="text-2xl font- text-center mb-12 font-title">
                            Nossa trajetória
                        </h1>
                    </div>
                    <LinhaDoTempo />
                </section>
            </main>
        </div>
    );
}