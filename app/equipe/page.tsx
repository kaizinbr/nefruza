import TeamCarousel, { TeamMember } from "@/components/equipe/team-carousel";

const team: TeamMember[] = [
    {
        id: "ana-lucia",
        name: "Ana Lúcia Pinto",
        role: "Assistente social",
        bio: `Graduada em Serviço Social pela UFPB, com especialização em Psicopedagogia e formação técnica em Enfermagem, atua como assistente social na clínica Nefruza. Possui experiência em saúde e gestão, com passagens pelo Hospital Memorial São Francisco e pela Prefeitura de João Pessoa, além de constante atualização profissional, destacando-se sua participação no II Congresso Nordeste de Transplante.`,
        image: "/img/equipe/ana-lucia.jpeg",
    },
    {
        id: "psicologa",
        name: "Paula Frassinetti",
        role: "Psicóloga",
        bio: "Psicóloga clínica com experiência na área da saúde em hemodiálise. Tem atuação em clínicas de tratamento renal promovendo e desenvolvendo trabalhos e atividades voltadas ao autocuidado e saúde mental dos pacientes, familiares e equipe de saúde. Participa ativamente de campanhas para o Dia Mundia do Rim.",
        image: "/img/equipe/paula.jpeg",
    },
    {
        id: "medica",
        name: "Erika Fiúza",
        role: "Médica Nefrologista",
        bio: "Especialista em nefrologia, com anos de experiência em hemodiálise e acompanhamento de doença renal crônica.",
        image: "/img/equipe/erika-fiuza.jpeg",
    },
    {
        id: "nutricionista",
        name: "Jordana Carvalho",
        role: "Nutricionista",
        bio: "Responsável pelo plano alimentar dos pacientes em diálise, fundamental para o bem-estar durante o tratamento.",
        image: "/img/equipe/jordana-carvalho.jpeg",
    },
];

export default function Equipe() {
    return (
        <div className="flex flex-1 flex-col bg-white font-sans mb-16">
            <main className="w-full">
                <section className="relative isolate overflow-hidden bg-linear-to-br from-nef-900 to-nef-600">
                    <div
                        aria-hidden="true"
                        className="absolute -right-24 -top-40 size-136 rounded-full border border-white/10"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute -right-10 -top-20 size-104 rounded-full border border-white/10"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute right-14 top-12 size-68 rounded-full bg-white/4"
                    />
                    <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                        <span className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                            Equipe
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Conheça nosso time
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Nossa equipe é completa e capacitada para prestar o
                            melhor atendimento para nossos pacientes.
                        </p>
                    </div>
                </section>
                <section
                    className={`
                        relative z-10 mx-auto  
                        w-full max-w-6xl 
                        px-4 sm:px-6 lg:px-8 
                        py-6 sm:py-8 lg:py-10 xl:py-12
                    
                        flex flex-col 
                    `}
                >
                    {/* <span className="text-sm font-bold uppercase text-nef-500">
                        Equipe
                    </span>
                    <h1 className="mb-4 text-start font-title text-3xl">
                        Conheça o nosso time
                    </h1>
                    <p className="mb-16 max-w-3xl">
                        Buscando sempre fornecer o melhor atendimento para nossos
                        pacientes, a Nefruza atua com uma equipe médica, psicológica
                        e nutricional dedicada ao cuidado renal em todas as suas
                        fases.
                    </p> */}
                    <TeamCarousel members={team} />
                </section>
            </main>
        </div>
    );
}
