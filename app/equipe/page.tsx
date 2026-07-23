import TeamCarousel, { TeamMember } from "@/components/equipe/team-carousel";

const team: TeamMember[] = [
    {
        id: "ingrid-fiuza",
        name: "Ingrid Fiúza",
        role: "Recursos Humanos",
        bio: "Cuida de aspectos administrativos e de pessoal da clínica. Sempre empenhada em resolver problemas e buscar melhorias.",
        image: "/img/equipe/ingrid.webp",
    },
    {
        id: "psicologa",
        name: "Nome da Psicóloga",
        role: "Psicóloga",
        bio: "Profissional com mestrado em saúde mental, atua no acompanhamento psicológico de pacientes em tratamento renal.",
        image: "/img/placeholder.webp",
    },
    {
        id: "medica",
        name: "Nome da Médica",
        role: "Médica Nefrologista",
        bio: "Especialista em nefrologia, com anos de experiência em hemodiálise e acompanhamento de doença renal crônica.",
        image: "/img/placeholder.webp",
    },
    {
        id: "nutricionista",
        name: "Nome da Nutricionista",
        role: "Nutricionista",
        bio: "Responsável pelo plano alimentar dos pacientes em diálise, fundamental para o bem-estar durante o tratamento.",
        image: "/img/placeholder.webp",
    },
];

export default function Equipe() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center font-sans">
            <main className="flex w-full max-w-6xl flex-1 flex-col items-start justify-start px-4 py-16 md:py-32 sm:items-start">
                <span className="text-sm font-bold uppercase text-nef-500">
                    Equipe
                </span>
                <h1 className="mb-4 text-start font-title text-3xl">
                    Conheça o nosso time
                </h1>
                <p className="mb-16 max-w-3xl">
                    Buscando sempre fornecer o melhor atendimento para nossos
                    pacientes, a Nefruza atua com uma equipe médica,
                    psicológica e nutricional dedicada ao cuidado renal em
                    todas as suas fases.
                </p>

                <TeamCarousel members={team} />
            </main>
        </div>
    );
}