import Image from "next/image";

export default function Banner() {
    return (
        <>
            <div
                className={`
                        min-h-[60vh] 
                        flex w-full flex-col items-center justify-center gap-8 sm:items-start
                        bg-nef
                    `}
            ></div>

            <div
                className={`
                        bg-white w-fit max-w-5xl flex flex-row flex-wrap
                        items-center justify-center gap-8 p-8 sm:items-start
                        shadow-lg rounded-lg mx-auto
                        -top-12 relative
                    `}
            >
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef transition-all duration-300
                        `}
                >
                    <div className="size-16 rounded-full bg-nef/50"></div>
                    <h3 className={`font-semibold`}>Quem Somos</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef transition-all duration-300
                        `}
                >
                    <div className="size-16 rounded-full bg-nef/50"></div>
                    <h3 className={`font-semibold`}>Contato</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef transition-all duration-300
                        `}
                >
                    <div className="size-16 rounded-full bg-nef/50"></div>
                    <h3 className={`font-semibold`}>Nossos serviços</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef transition-all duration-300
                        `}
                >
                    <div className="size-16 rounded-full bg-nef/50"></div>
                    <h3 className={`font-semibold`}>Notícias</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef transition-all duration-300
                        `}
                >
                    <div className="size-16 rounded-full bg-nef/50"></div>
                    <h3 className={`font-semibold`}>Convênios aceitos</h3>
                </div>
            </div>
        </>
    );
}
