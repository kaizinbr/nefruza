import Banner from "@/components/home/banner";
import Convenios from "@/components/home/convenios";
import Diferenciais from "@/components/home/diferenciais";
import Estrutura from "@/components/home/estrutura";
import Noticias from "@/components/home/noticias";
import { NewsletterSection } from "@/components/newsletter/newsletter-section";
import Card from "@/components/home/quem-somos";
import QuemSomos from "@/components/home/quem-somos1";
import Servicos from "@/components/home/servicos";
import Image from "next/image";
import Link from "next/link";
import { PiQuestionFill } from "react-icons/pi";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
            <main
                className={`
                    flex flex-1 w-full flex-col items-center justify-between pb-32 px-0 sm:items-start
                `}
            >
                <Banner />
                <QuemSomos />
                <Card />
                <Diferenciais />
                <Servicos />
                <Estrutura />
                <Convenios />
                <Noticias />
                <NewsletterSection />
                <Link
                    href="/perguntas-frequentes"
                    className={`
                                bg-nef-600 mx-auto rounded-2xl 
                                p-6 sm:p-8 lg:p-10 xl:p-6 mt-8 
                                w-[calc(100%-32px)] xl:w-full max-w-6xl
                                flex flex-row gap-2 items-start md:items-center justify-center 
                                text-nef-50 font-semibold text-lg 
                                transition-colors hover:bg-nef-900
                            `}
                >
                    <PiQuestionFill size={32} />
                    Não encontrou o que procurava? Acesse nossas perguntas
                    frequentes.
                </Link>
            </main>
        </div>
    );
}
