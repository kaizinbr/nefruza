import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <div
                className={`
            flex flex-row 
            items-start justify-center 
            w-full overflow-x-clip
            px-4 relative 
            py-24
        `}
            >
                <div
                    className={`
                        flex flex-row 
                        items-center justify-center 
                        w-full max-w-6xl mx-auto 
                        relative 
                    `}
                >
                    <div
                        className={`
                                flex flex-col
                                items-start justify-center
                                 mr-12 w-1/2
                            `}
                    >
                        <h1 className="text-3xl font- text-center mb-4 font-title">
                            Quem somos
                        </h1>
                        <p className="text-start text-muted-foreground pb-2">
                            A NEFRUZA - Serviços Nefrológicos Fiúza Chaves Ltda
                            é pioneira no serviço de hemodiálise de João Pessoa.
                            Foi fundada em 1979 pelo nefrologista Dr. Mário de
                            Oliveira Fiúza Chaves, também pioneiro em
                            transplante renal da Paraíba.
                        </p>
                        <p className="text-start text-muted-foreground pb-6">
                            Com mais de 35 anos de experiência, um dos seus
                            principais serviços é a diálise, atendendo
                            especialmente aos pacientes que apresentam
                            insuficiência renal crônica, aguda ou crônica
                            agudizada.
                        </p>
                        <button className="bg-nef-600 text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-nef-600/90 transition-colors">
                            Saiba mais sobre nossa história
                        </button>
                    </div>
                <div
                    className={`
                        flex items-center justify-center
                        w-1/2 h-full relative
                    `}
                >
                    <Image
                        src="/img/teste-nefruza.png"
                        alt="Quem somos"
                        width={600}
                        height={400}
                        className="object-cover rounded-lg z-10"
                    />
                </div>
                </div>
            </div>
            <div
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
                        md:items-start items-center justify-center
                        w-full relative

                        md:pl-88 md:pr-8 lg:pl-104 lg:pr-16
                    `}
                    >
                        <h1 className="text-2xl lg:text-3xl w-full text-start mb-4 font-title">
                            Pioneirismo que impacta vidas
                        </h1>
                        <p className="text-start lg:text-lg text-muted-foreground pb-2">
                            Ao longo de 35 anos de história, a Nefruza tem se
                            destacado como referência em serviços de saúde
                            renal, impactando milhares de vidas com seu
                            compromisso com a excelência e inovação.
                        </p>
                            <div className="">
                                <Image
                                    src="/img/impacto-vidas.webp"
                                    alt="Impacto de vidas"
                                    width={500}
                                    height={400}
                                    className={`
                                        md:absolute
                                        md:-left-16 md:-top-12 w-96
                                
                                        flex items-center justify-center
                                        object-cover rounded-full z-10
                                    `}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
