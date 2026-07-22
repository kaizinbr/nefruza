"use client";

import FormContato from "@/components/contato/form";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbMailFilled, TbBrandWhatsappFilled } from "react-icons/tb";
import LinhaDoTempo from "@/components/institucional/timeline"; // ajuste o caminho conforme seu projeto

export default function Home() {
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
                        institucional
                    </span>
                    <h1 className="text-3xl font- text-center mb-4 font-title">
                        Quem somos
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
            </main>
        </div>
    );
}