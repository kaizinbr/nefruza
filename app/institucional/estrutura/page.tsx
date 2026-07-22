import Image from "next/image";

export default function Estrutura() {
    return (
        <div className="flex flex-col flex-1 items-center justify-centerfont-sans">
            <main
                className={`
                    flex flex-1 w-full max-w-7xl flex-col items-center justify-start py-32 px-16 sm:items-start
                `}
            >
                <span className="text-sm font-bold text-nef-500 uppercase">
                    Institucional
                </span>
                <h1 className="text-3xl font- text-center mb-4 font-title">
                    Nossa estrutura
                </h1>
                <div
                    className={`
                        flex flex-col
                        items-start justify-center
                        w-full
                    `}
                >
                    <p className="text-  mb-4">
                        Buscando sempre fornecer o melhor atendimento para
                        nossos pacientes, a Nefruza atua com uma gama de
                        serviços clínicos e hospitalares. Aenean vel urna mi.
                        Fusce pretium in nisi vitae pellentesque. Curabitur a
                        egestas augue, eget faucibus odio. Praesent pharetra
                        orci non metus pellentesque, et sagittis enim aliquet.
                        Ut ullamcorper mollis nulla at sodales. Vivamus dolor
                        elit, sagittis eu dignissim id, imperdiet laoreet erat.
                    </p>
                </div>
                <div
                    className={`
                        flex flex-col
                        items-start justify-center
                        w-full
                    `}
                >
                    <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-nef-200 w-124">
                        <Image src="https://www.nefruza.com.br/images/gallery/consultorio2.jpg"
                            alt="Consultórios"
                            width={386}
                            height={280}
                            className="w-full rounded-xl mb-4"
                        />
                        <h2 className="text-xl font-bold text-center mb-4">Consultórios</h2>
                        <p className="text-  mb-4">
                            Buscando sempre fornecer o melhor atendimento para
                            nossos pacientes, a Nefruza atua com uma gama de
                            serviços clínicos e hospitalares. Aenean vel urna mi.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-nef-200 w-124">
                        <Image src="https://www.nefruza.com.br/images/gallery/consultorio2.jpg"
                            alt="Consultórios"
                            width={386}
                            height={280}
                            className="w-full rounded-xl mb-4"
                        />
                        <h2 className="text-xl font-bold text-center mb-4">Consultórios</h2>
                        <p className="text-  mb-4">
                            Buscando sempre fornecer o melhor atendimento para
                            nossos pacientes, a Nefruza atua com uma gama de
                            serviços clínicos e hospitalares. Aenean vel urna mi.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-nef-200 w-124">
                        <Image src="https://www.nefruza.com.br/images/gallery/consultorio2.jpg"
                            alt="Consultórios"
                            width={386}
                            height={280}
                            className="w-full rounded-xl mb-4"
                        />
                        <h2 className="text-xl font-bold text-center mb-4">Consultórios</h2>
                        <p className="text-  mb-4">
                            Buscando sempre fornecer o melhor atendimento para
                            nossos pacientes, a Nefruza atua com uma gama de
                            serviços clínicos e hospitalares. Aenean vel urna mi.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
