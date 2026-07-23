import Image from "next/image";
import Link from "next/link";

export default function QuemSomos() {
    return (
        <>
            <div
                className={`
                    flex flex-row 
                    items-start justify-center 
                    w-full overflow-x-clip
                    px-4 relative 
                    py-24 mb-16
                `}
            >
                <div
                    className={`
                        flex flex-col 
                        items-center justify-center 
                        w-full max-w-6xl mx-auto 
                        relative 
                    `}
                >
                    <div
                        className={`
                                flex flex-col
                                items-center justify-center
                                w-full mb-8 lg:mb-0 text-center
                            `}
                    >
                        <span className="text-sm font-bold text-nef-500 uppercase mb-1">
                            Quem somos
                        </span>
                        <h1 className="text-4xl text-center mb-4 font-title">
                            Nefrologia com história e propósito
                        </h1>
                        <p className="text-center text-muted-foreground pb-6">
                            Há mais de 45 anos ao lado de quem precisa cuidar da
                            saúde renal, com ciência, respeito e humanização.
                        </p>
                    </div>

                    <div
                        className={`
                                flex flex-col
                                items-center justify-center
                                w-full
                            `}
                    >
                        <div className="w-full flex flex-col lg:flex-row justify-between relative z-10">
                            <div className="flex flex-col gap-6 mb-8 lg:mb-0 items-center relative translate-y-0 lg:translate-y-full">
                                <div className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-md text-center max-w-76">
                                    <p className="font-extrabold mb-3">
                                        Equipe especializada
                                    </p>
                                    <p className="leading-6">
                                        Equipe médica experiente, referência em
                                        tratamento de doenças renais há mais de
                                        4 décadas.
                                    </p>
                                </div>
                                <div className="size-16 rounded-full border border-zinc-300 bg-white shadow-md"></div>
                            </div>
                            <div className="flex flex-col gap-6 items-center top-0 mb-8 lg:top-16 relative">
                                <div className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-md text-center max-w-76">
                                    <p className="font-extrabold mb-3">
                                        Pioneirismo
                                    </p>
                                    <p className="leading-6">
                                        Fundada em 1979 pelo Dr. Mário Fiúza
                                        Chaves, pioneira em hemodiálise e
                                        transplante renal na Paraíba.
                                    </p>
                                </div>
                                <div className="size-16 rounded-full border border-zinc-300 bg-white shadow-md"></div>
                            </div>
                            <div className="flex flex-col gap-6 mb-8 lg:mb-0 items-center relative translate-y-0 lg:translate-y-full">
                                <div className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-md text-center max-w-76">
                                    <p className="font-extrabold mb-3">
                                        Cuidado humanizado
                                    </p>
                                    <p className="leading-6">
                                        Acompanhamento contínuo do paciente,
                                        unindo tratamento clínico e suporte
                                        nutricional ao longo da jornada.
                                    </p>
                                </div>
                                <div className="size-16 rounded-full border border-zinc-300 bg-white shadow-md"></div>
                            </div>
                        </div>
                        <div className="lg:hidden bg-linear-to-b from-nef-400 to-nef-900 to-75% w-4 rounded-full absolute z-0 h-7/10"></div>
                        <div className="w-full relative flex items-start justify-center h-132 overflow-hidden">
                            <div
                                className={`
                                    w-full aspect-square sm:size-124 lg:size-244 rounded-full p-3
                                    bg-transparent
                                    bg-radial-[at_25%_25%] from-nef-400 to-nef-900 to-75%
                                    flex justify-center items-center
                                    z-0
                                `}
                            >
                                <div className="w-full aspect-square sm:size-120 lg:size-238 rounded-full bg-zinc-100 flex flex-col items-center justify-center lg:pt-44 lg:justify-start">
                                    <h1 className="text-4xl font-extrabold font-title text-center text-nef-600">
                                        Mais de 47 anos <br /> mudando vidas
                                    </h1>
                                    <Link
                                        href="#"
                                        className={`
                                                border border-nef-600 text-nef-600 font-bold
                                                py-3 px-8 w-fit h-fit rounded-full
                                                cursor-pointer hover:bg-nef-200/90 transition-colors
                                                mt-6
                                            `}
                                    >
                                        Saiba mais sobre nossa história
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:flex bg-linear-to-t from-zinc-100 to-transparent w-full h-44 absolute bottom-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
