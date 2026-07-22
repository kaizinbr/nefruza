"use client";

import FormContato from "@/components/contato/form";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbMailFilled, TbBrandWhatsappFilled } from "react-icons/tb";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center  font-sans py-16 md:py-32 ">
            <main
                className={`
                    flex flex-1 w-full max-w-6xl flex-col lg:flex-row items-center justify-between sm:items-start
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
                        contato
                    </span>
                    <h1 className="text-3xl font- text-center mb-4 font-title">
                        Fale conosco
                    </h1>
                    <p className="text-start text-muted-foreground mb-2">
                        Telefones Nefruza
                    </p>
                    <Link
                        href="tel:(83) 3225-1619"
                        className="text-2xl font-bold text-zinc-900 flex flex-row items-center gap-2 hover:text-nef-900 transition-colors mb-2"
                    >
                        <PiPhoneCallFill /> (83) 3225-1619
                    </Link>
                    <Link
                        href="tel:(83) 3225-1985"
                        className="text-2xl font-bold text-zinc-900 flex flex-row items-center gap-2 hover:text-nef-900 transition-colors mb-2"
                    >
                        <PiPhoneCallFill /> (83) 3225-1985
                    </Link>
                    <p className="text-start text-muted-foreground my-2">
                        WhatsApp Nefruza
                    </p>
                    <Link
                        href="https://wa.me/5583999452332?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Nefruza."
                            target="_blank"
                        className="text-2xl font-bold text-zinc-900 flex flex-row items-center gap-2 hover:text-nef-900 transition-colors mb-2"
                    >
                        <TbBrandWhatsappFilled /> (83) 99945-2332
                    </Link>
                    <span className="text-sm text-zinc-600 mb-6">
                        Disponível de segunda a sexta-feira, das 8h às 18h.
                    </span>
                    <p className="text-start text-muted-foreground mb-2">
                        E-mail Nefruza
                    </p>
                    <Link
                        href="mailto:contato@nefruza.com.br"
                        className="text-2xl font-bold text-zinc-900 flex flex-row items-center gap-2 hover:text-nef-900 transition-colors mb-2"
                    >
                        <TbMailFilled /> contato@nefruza.com.br
                    </Link>
                    <span className="text-sm text-zinc-600 mb-6">
                        Retornaremos seu contato dentro de até 5 dias úteis.
                    </span>
                    {/* <Link
                        href="https://maps.app.goo.gl/W6dbm8i8GbZ8ABat5"
                            target="_blank"
                            rel="noopener noreferrer"
                        className="text-start text-muted-foreground"
                    >
                         Av. Sinésio Guimarães, 290 Torre, João Pessoa - PB, CEP 58040-400
                    </Link> */}
                </div>
                <div
                    className={`
                        flex flex-col
                        items-start justify-center
                        w-full bg-zinc-200 rounded-3xl p-8
                    `}
                >
                    <FormContato />
                </div>
            </main>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7917.970378273499!2d-34.868850099999996!3d-7.1277091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd5188678061%3A0x29626ccb173cf64a!2sNefruza%20-%20Servi%C3%A7os%20Nefrol%C3%B3gicos%20Fi%C3%BAza%20Chaves%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1784481499034!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="464"
                    // style="border:0;"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
        </div>
    );
}
