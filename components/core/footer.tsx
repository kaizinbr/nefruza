import Link from "next/link";
import Image from "next/image";

import { LuInstagram, LuFacebook, LuMap, LuLinkedin } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="flex w-full flex-col items-center justify-center border-t border-zinc-200 bg-teste-700 px-16 pt-16">
            <div
                className={`
                    flex flex-wrap w-full max-w-6xl items-start justify-between pb-16
                    gap-4 gap-y-8 xl:gap-0
                `}
            >
                <div className="flex flex-col items-start gap-2 xl:w-1/5 w-1/1">
                    <span className="text-sm font-bold font-title text-zinc-50 uppercase">
                        Contate a Nefruza
                    </span>
                    <Link
                        href="tel:(83) 3225-1619"
                        className="text-2xl font-bold text-zinc-50 flex flex-row items-center gap-2 hover:text-nef-200 transition-colors"
                    >
                        <PiPhoneCallFill /> (83) 3225-1619
                    </Link>
                    <span className="text-xs text-zinc-50">
                        Segunda a sexta-feira, das 8h às 18h
                    </span>
                    {/* <span className="text-sm text-zinc-50">
                        Av. Sinésio Guimarães, 290 Torre, João Pessoa - PB
                    </span> */}
                    <Link
                        href="mailto:contato@nefruza.com.br"
                        className="text-sm text-zinc-50"
                    >
                        contato@nefruza.com.br
                    </Link>
                    <Link
                        href="/contato"
                        className="text-sm text-zinc-50 hover:text-zinc-300 transition-colors py-3 px-6 mt-6 rounded-full border border-zinc-50 hover:border-zinc-300"
                    >
                        Mais contatos
                    </Link>
                </div>
                <div className="flex flex-col gap-2 md:w-1/3 lg:w-1/5 xl: w-1/1">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 font-bold font-title uppercase transition-colors"
                    >
                        A Nefruza
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Nossa história
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Nossa estrutura
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Propósito e valores
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Pioneirismo
                    </Link>
                </div>
                <div className="flex flex-col gap-2 md:w-1/5 w-1/1">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 font-bold font-title uppercase transition-colors"
                    >
                        Site
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Início
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Contato
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Serviços
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Convênios
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Equipe
                    </Link>
                </div>
                <div className="flex flex-col gap-2 md:w-1/5 w-1/1">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 font-bold uppercase font-title transition-colors"
                    >
                        Por dentro
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Blog
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Notícias
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-50 hover:text-nef-200 transition-colors"
                    >
                        Comunicados
                    </Link>
                </div>
                <div className="flex flex-col items-start gap-2 w-1/1 lg:w-1/4 xl:max-w-1/5">
                    <Image
                        src="/img/logo.png"
                        alt="Nefruza Logo"
                        width={144}
                        height={32}
                        className="invert pb-2"
                    />
                    <span className="text-sm text-zinc-50 mb-4">
                        Av. Sinésio Guimarães, 290 Torre, João Pessoa - PB, CEP
                        58040-400
                    </span>

                    <span className="text-sm font-bold text-zinc-50 uppercase font-title mb-2">
                        Siga nossas redes sociais
                    </span>
                    <div className="flex flex-row items-center gap-4 text-zinc-50 text-2xl">
                        <Link
                            href="https://www.instagram.com/nefruza"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-nef-300 transition-colors"
                        >
                            <LuInstagram />
                        </Link>
                        <Link
                            href="https://www.facebook.com/nefruza"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-nef-300 transition-colors"
                        >
                            <LuFacebook />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/nefruza"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-nef-300 transition-colors"
                        >
                            <LuLinkedin />
                        </Link>
                        <Link
                            href="https://www.google.com/maps/place/Nefruza/@-7.115534,-34.850123,17z/data=!3m1!4b1!4m5!3m4!1s0x7acba6d8c9c9c9c9:0x1c9c9c9c9c9c9c9c!8m2!3d-7.115534!4d-34.850123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-nef-300 transition-colors"
                        >
                            <LuMap />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full max-w-6xl items-center justify-between py-4 border-t border-teste-400">
                <span className="text-sm text-zinc-50 ">
                    © 2026 Nefruza Serviços Nefrológicos Fiúza Chaves Ltda.
                    Todos os direitos reservados.
                </span>
                <span className="text-sm text-zinc-50 ">
                    CNPJ 09.291.683/0001-58
                </span>
            </div>
        </footer>
    );
}
