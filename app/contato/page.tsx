"use client";

import FormContato from "@/components/contato/form";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans py-16 px-4 md:py-32 md:px-16">
            <main className={`
                    flex flex-1 w-full max-w-6xl flex-col lg:flex-row items-center justify-between sm:items-start
                `}>
                <div
                    className={`
                        flex flex-col
                        items-start justify-center
                        w-full
                    `}
                >
                    <span className="text-sm font-bold text-nef uppercase">
                        contato
                    </span>
                    <h1 className="text-3xl font- text-center mb-4 font-title">
                        Fale conosco
                    </h1>
                    <p className="text-start text-muted-foreground mb-2">
                        Telefone Nefruza
                    </p>
                    <Link
                        href="tel:(83) 3225-1619"
                        className="text-2xl font-bold text-zinc-900 flex flex-row items-center gap-2 hover:text-nef-900 transition-colors mb-2"
                    >
                        <PiPhoneCallFill /> (83) 3225-1619
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
        </div>
    );
}
