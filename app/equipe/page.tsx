import TeamCarousel, { TeamMember } from "@/components/equipe/team-carousel";
import Image from "next/image";

const team: TeamMember[] = [
    {
        id: "nutricionista",
        name: "Jordana Carvalho",
        role: "Nutricionista",
        bio: `Nutricionista há 20 anos, com sólida experiência em Nutrição Clínica, atuando de forma humanizada e baseada em evidências científicas. Especialista em Nutrição Clínica, possui ampla experiência no atendimento de pacientes com doenças crônicas, idosos e pessoas em terapia renal substitutiva (hemodiálise).\n\n Integrante da equipe Multidisciplinar da Nefruza, responsável técnica pelo Serviço de Alimentação e Nutrição. Professora de Nutrição do curso de técnicos de enfermagem e palestrante.`,
        image: "/img/equipe/jordana-carvalho.jpeg",
    },
    {
        id: "psicologa",
        name: "Paula Frassinetti",
        role: "Psicóloga",
        bio: `Psicóloga clínica com experiência na área da saúde e atuação em serviços de hemodiálise. Desenvolve trabalhos e atividades voltados ao autocuidado, à saúde mental e ao bem-estar de pacientes, familiares e equipes de saúde em clínicas de tratamento renal. Participa ativamente de ações de conscientização e campanhas relacionadas ao Dia Mundial do Rim.`,
        image: "/img/equipe/paula.jpeg",
    },
    {
        id: "ana-lucia",
        name: "Ana Lúcia Pinto",
        role: "Assistente social",
        bio: `Graduada em Serviço Social pela UFPB, com especialização em Psicopedagogia e formação técnica em Enfermagem, atua como assistente social na clínica Nefruza. Possui experiência em saúde e gestão, com passagens pelo Hospital Memorial São Francisco e pela Prefeitura de João Pessoa, além de constante atualização profissional, destacando-se sua participação no II Congresso Nordeste de Transplante.`,
        image: "/img/equipe/ana-lucia-pinto.jpeg",
    },
    {
        id: "medica",
        name: "Maria José de Sousa",
        role: "Assistente social",
        bio: `Com trajetória de 15 anos na área da Nefrologia, iniciou sua atuação profissional como Técnica de Enfermagem, experiência que lhe proporcionou amplo conhecimento sobre a rotina, os desafios e as necessidades dos pacientes em tratamento renal. Há 7 anos atua como Assistente Social, desenvolvendo um trabalho voltado ao acolhimento, orientação e acompanhamento de pacientes e familiares, especialmente daqueles em tratamento de hemodiálise.\n\n Entre suas principais atribuições estão o acolhimento e a escuta qualificada, a orientação sobre direitos sociais e benefícios, o acompanhamento de pacientes em situação de vulnerabilidade, a busca ativa de pacientes internados ou ausentes às sessões e o apoio aos familiares, sempre com dedicação, responsabilidade, compromisso e olhar humanizado.
        `,
        image: "/img/equipe/maria.jpeg",
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
                            Conheça nossa equipe multidisciplinar
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Nossa equipe atua em conjunto para garantir o melhor
                            cuidado aos pacientes, oferecendo além do suporte
                            médico, o apoio psicológico e nutricional em todas
                            as fases do tratamento renal.
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

                    <div className="mt-16 overflow-hidden rounded-3xl bg-nef-50 sm:mt-20 lg:mt-24">
                        <div className="grid lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
                            <div className="relative min-h-72 sm:min-h-96 lg:min-h-112">
                                <Image
                                    src="/img/equipe/equipe.jpeg"
                                    alt="Equipe da Nefruza reunida"
                                    fill
                                    sizes="(min-width: 1024px) 640px, 100vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
                                <span className="text-sm font-bold uppercase tracking-[0.14em] text-nef-600">
                                    Cuidado integrado
                                </span>
                                <h2 className="mt-3 font-title text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl">
                                    Uma equipe completa para cuidar de cada
                                    etapa
                                </h2>
                                <p className="mt-5 leading-7 text-zinc-600">
                                    Além dos profissionais apresentados, a
                                    Nefruza conta com uma equipe completa e
                                    preparada para acolher, orientar e atender
                                    cada paciente com atenção, segurança e
                                    cuidado humanizado.
                                </p>
                                <p className="mt-4 leading-7 text-zinc-600">
                                    São diferentes áreas trabalhando de forma
                                    integrada para tornar a experiência do
                                    tratamento mais próxima e oferecer o suporte
                                    necessário aos pacientes e seus familiares.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
