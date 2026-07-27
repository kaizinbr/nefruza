import Image from "next/image";
import Link from "next/link";

export default function Card() {
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
                        flex flex-col lg:flex-row 
                        items-center justify-center 
                        w-full max-w-6xl mx-auto 
                        relative 
                    `}
                >
                    <div
                        className={`
                                flex flex-col
                                items-start justify-center
                                w-full mb-8 lg:mb-0
                                lg:mr-12 lg:w-1/2
                            `}
                    >
                        <h1 className="text-3xl font- text-start mb-4 font-title">
                            Por que famílias confiam na Nefruza?
                        </h1>
                        <p className="text-start text-muted-foreground pb-2">
                            Há pacientes que chegam para um tratamento. <br />E há
                            histórias que passamos a acompanhar por anos. 
                        </p>
                        <p className="text-start text-muted-foreground pb-6">
                            Na Nefruza, experiência e tecnologia caminham ao lado
                            da escuta, da proximidade e do respeito pela vida de
                            cada pessoa.
                        </p>
                        <Link
                            href="#"
                            className="bg-nef-600 text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-nef-600/90 transition-colors"
                        >
                            Conheça nossa história
                        </Link>
                    </div>
                    <div
                        className={`
                        flex items-center justify-center
                        w-full lg:w-1/2 min-h-full relative
                        gap-4
                    `}
                    >
                        <div className="h-98 lg:h-124 w-78 rounded-2xl bg-nef-800 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/img/images1.webp"
                                width={500}
                                height={500}
                                alt="paciente de hemodiálise"
                                className="h-full object-cover"
                            />
                        </div>
                        <div className="h-98 lg:h-124 w-56 rounded-2xl bg-nef-800 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/img/images2.jpg"
                                width={500}
                                height={500}
                                alt="paciente de hemodiálise"
                                className="h-full object-cover"
                            />
                        </div>
                        <div className="h-98 lg:h-124 w-44 rounded-2xl bg-nef-800 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/img/images.jpg"
                                width={500}
                                height={500}
                                alt="paciente de hemodiálise"
                                className="h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div
                className={`
                    flex flex-row 
                    items-start justify-center 
                    w-full overflow-clip
                    bg-nef-900
                    px-4 relative 
                    py-16 text-zinc-50
                `}
            >
                <div
                    className={`
                        flex flex-row 
                        items-start justify-center 
                        w-full  mx-auto 
                        relative 
                    `}
                >
                    <div
                        className={`
                        flex flex-col
                        md:items-start items-start justify-start
                        w-full relative
                        min-h-96 md:min-h-auto
                        md:pl-88 md:pr-8 lg:pl-104 lg:pr-16
                    `}
                    >
                        <h1 className="text-2xl lg:text-3xl w-full text-start mb-4 font-title">
                            XX vidas impactadas
                        </h1>
                        <p className="text-start lg:text-lg text-muted-foreground pb-2 max-w-104 md:max-w-full">
                            Ao longo de sua história, a Nefruza já realizou mais de XX transplantes e impactou a vida de milhares de pessoas pelo Estado.
                        </p>
                        <div className="">
                            <Image
                                src="/img/impacto-vidas.webp"
                                alt="Impacto de vidas"
                                width={500}
                                height={400}
                                className={`
                                        absolute
                                        left-1/2 -translate-x-1/2 md:translate-x-0
                                        md:-left-16 md:-top-12 w-96
                                
                                        flex items-center justify-center
                                        object-cover rounded-full z-10
                                    `}
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
