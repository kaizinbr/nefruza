import Image from "next/image";

export default function AboutUs() {
    return (
        <div
            className={`
            flex flex-row 
            items-start justify-center 
            w-full overflow-x-clip
            px-4 relative 
            my-16
        `}
        >
            <div
                className={`
            flex flex-row 
            items-start justify-center 
            w-full max-w-6xl mx-auto 
            relative 
        `}
            >
                <div
                    className={`
                        flex flex-col
                        items-start justify-center
                        w-1/2 mr-12
                    `}
                >
                    <span className="text-sm font-bold text-nef uppercase">
                        Pioneirismo
                    </span>
                    <h1 className="text-3xl font- text-center mb-4 font-title">
                        Quem somos
                    </h1>
                    <p className="text-start text-muted-foreground pb-2">
                        A NEFRUZA - Serviços Nefrológicos Fiúza Chaves Ltda é
                        pioneira no serviço de hemodiálise de João Pessoa. Foi
                        fundada em 1979 pelo nefrologista Dr. Mário de Oliveira
                        Fiúza Chaves, também pioneiro em transplante renal da
                        Paraíba.
                    </p>
                    <p className="text-start text-muted-foreground pb-2">
                        Com mais de 35 anos de experiência, um dos seus
                        principais serviços é a diálise, atendendo especialmente
                        aos pacientes que apresentam insuficiência renal
                        crônica, aguda ou crônica agudizada.
                    </p>
                    <p className="text-start text-muted-foreground pb-4">
                        Possui profissionais especializados em Nefrologia com
                        vasta experiência no atendimento e tratamento aos
                        pacientes.
                    </p>
                    <button className="bg-nef text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-nef/90 transition-colors">
                        Saiba mais
                    </button>
                </div>
                <div className="w-1/2 flex items-center justify-center p-4">
                    <div
                        className={`
                        size-98 bg-nef/50 rounded-3xl
                        rotate-15 
                    `}
                    />
                </div>
            </div>
        </div>
    );
}
