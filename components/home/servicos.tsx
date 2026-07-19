import Image from "next/image";

export default function Servicos() {
    return (
        <>
            <div
                id="servicos"
                className={`
                    flex flex-row 
                    items-start justify-between 
                    w-full overflow-x-clip
                    px-4 md:px-0 relative 
                    py-24
                `}
            >
                <div
                    className={`
                        flex flex-row 
                        items-start justify-between 
                        w-full max-w-6xl mx-auto 
                        relative 
                    `}
                >
                    <div
                        className={`
                        flex flex-col
                        items-start justify-center
                        w-4/12
                        bg-nef-700 text-zinc-50 p-12 rounded-2xl
                    `}
                    >
                        <h1 className="text-3xl font- text-start mb-4 font-title">
                            Conheça nosso serviços
                        </h1>
                        <p className="text-start text-muted-foreground pb-2">
                            A Nefruza oferece uma ampla gama de serviços de
                            saúde para atender às necessidades de nossos
                            pacientes.
                        </p>
                    </div>
                    <div
                        className={`
                        -left-8 relative
                        flex flex-row flex-wrap items-center justify-start gap-4 
                        w-8/12 pt-12
                    `}
                    >
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">Hemodiálise</p>
                        </div>
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">
                                Diálise Peritoneal Ambulatorial Contínua
                            </p>
                        </div>
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">
                                Diálises externas
                            </p>
                        </div>
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">
                                Implantes vasculáres
                            </p>
                        </div>
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">
                                Atendimento Ambulatorial
                            </p>
                        </div>
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">
                                Nutricionista
                            </p>
                        </div>
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">Psicologia</p>
                        </div>
                        <div className="flex items-center p-6 bg-white text-zinc-950 w-86 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-lg font-semibold">
                                Assistência Social
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
