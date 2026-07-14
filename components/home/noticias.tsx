import Image from "next/image";
import Link from "next/link";

export default function Noticias() {
    return (
        <div
            className={`
                flex flex-col 
                items-start justify-center 
                w-full bg-zinc-200 overflow-x-clip
                px-4 py-16
            `}
        >
            <h1 className="text-3xl mb-4 font-title w-full max-w-6xl mx-auto">
                Notícias
            </h1>
            <div className="flex flex-row items-start justify-start w-full max-w-6xl mx-auto relative  gap-8">
                <div className={`
                    flex flex-col
                    items-start justify-center
                    w-84 p-4 bg-white
                    border border-transparent rounded-3xl
                    hover:shadow-lg hover:border-teste-400 transition-all
                `}>
                    <Image
                        src="https://www.nefruza.com.br/images/hemodialise_intro.jpg"
                        alt="Notícia 1"
                        width={400}
                        height={300}
                    />
                    <span className="text-sm font-bold text-teste-700 uppercase mt-4">
                        #notícia
                    </span>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">
                        Nefruza realiza campanha de conscientização sobre a
                        Doença Renal Crônica
                    </h2>
                    <p className="text-start text-[14px] text-muted-foreground pb-6 line-clamp-4">
                        A NEFRUZA realiza campanha de conscientização sobre a
                        Doença Renal Crônica, visando sensibilizar a população
                        sobre os riscos e prevenção da doença.
                    </p>
                    <Link
                        href="/noticias"
                        className="bg-teste-600 text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-teste-600/90 transition-colors"
                    >
                        Leia mais →
                    </Link>
                </div>
                <div className={`
                    flex flex-col
                    items-start justify-center
                    w-84 p-4 bg-white
                    border border-transparent rounded-3xl
                    hover:shadow-lg hover:border-teste-400 transition-all
                `}>
                    <Image
                        src="https://www.nefruza.com.br/images/hemodialise_intro.jpg"
                        alt="Notícia 1"
                        width={400}
                        height={300}
                    />
                    <span className="text-sm font-bold text-teste-700 uppercase mt-4">
                        #notícia
                    </span>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">
                        Nefruza realiza campanha de conscientização sobre a
                        Doença Renal Crônica
                    </h2>
                    <p className="text-start text-[14px] text-muted-foreground pb-6 line-clamp-4">
                        A NEFRUZA realiza campanha de conscientização sobre a
                        Doença Renal Crônica, visando sensibilizar a população
                        sobre os riscos e prevenção da doença.
                    </p>
                    <Link
                        href="/noticias"
                        className="bg-teste-600 text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-teste-600/90 transition-colors"
                    >
                        Leia mais →
                    </Link>
                </div>
            </div>
        </div>
    );
}
