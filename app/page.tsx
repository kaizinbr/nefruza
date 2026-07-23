import Banner from "@/components/home/banner";
import Convenios from "@/components/home/convenios";
import Diferenciais from "@/components/home/diferenciais";
import Estrutura from "@/components/home/estrutura";
import Noticias from "@/components/home/noticias";
import AboutUs from "@/components/home/quem-somos";
import QuemSomos from "@/components/home/quem-somos1";
import Servicos from "@/components/home/servicos";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 font-sans">
            <main
                className={`
                    flex flex-1 w-full flex-col items-center justify-between pb-32 px-0 sm:items-start
                `}
            >
                <Banner />
                <QuemSomos />
                <AboutUs />
                <Diferenciais />
                <Servicos />
                <Estrutura />
                <Convenios />
                <Noticias />
            </main>
        </div>
    );
}
