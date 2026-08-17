import ApplicationForm from "@/components/trabalhe-conosco/application-form";
import type { Metadata } from "next";
import {
    LuBriefcaseBusiness,
    LuHeartHandshake,
    LuMessagesSquare,
    LuSprout,
} from "react-icons/lu";

export const metadata: Metadata = {
    title: "Trabalhe conosco | Nefruza",
    description:
        "Cadastre seu currículo no banco de talentos da Nefruza e venha fazer parte de uma equipe dedicada ao cuidado renal.",
};

const principles = [
    {
        icon: LuHeartHandshake,
        title: "Cuidado com propósito",
        description:
            "Buscamos pessoas comprometidas com um atendimento responsável, acolhedor e centrado no paciente.",
    },
    {
        icon: LuMessagesSquare,
        title: "Trabalho em equipe",
        description:
            "Valorizamos a colaboração entre diferentes áreas e o respeito em cada relação profissional.",
    },
    {
        icon: LuSprout,
        title: "Evolução contínua",
        description:
            "Procuramos profissionais abertos ao aprendizado e à melhoria constante do cuidado em saúde.",
    },
];

const careerAreas = [
    {
        title: "Assistencial e enfermagem",
        roles: "Enfermeiro(a) e técnico(a) de enfermagem.",
    },
    {
        title: "Equipe multiprofissional",
        roles: "Nutricionista, psicólogo(a) e assistente social.",
    },
    {
        title: "Corpo clínico",
        roles: "Profissionais médicos com atuação ou interesse no cuidado renal.",
    },
    {
        title: "Atendimento e recepção",
        roles: "Recepcionista.",
    },
    {
        title: "Cozinha e alimentação",
        roles: "Cozinheiro(a) e copeiro(a).",
    },
    {
        title: "Serviços operacionais",
        roles: "Higienização, manutenção, maqueiro e serviços gerais.",
    },
];

export default function TrabalheConoscoPage() {
    return (
        <div className="flex flex-1 flex-col bg-white font-sans">
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
                            Carreiras
                        </span>
                        <h1 className="max-w-3xl font-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Faça parte de uma equipe que cuida de pessoas
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                            Na Nefruza, diferentes profissionais trabalham em
                            conjunto para oferecer um cuidado renal próximo,
                            seguro e humanizado. Cadastre seu currículo em nosso
                            banco de talentos.
                        </p>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold uppercase tracking-[0.14em] text-nef-500">
                            Nosso jeito de trabalhar
                        </span>
                        <h2 className="mt-3 font-title text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                            Pessoas preparadas fazem a diferença no cuidado
                        </h2>
                        <p className="mt-5 leading-7 text-zinc-600">
                            Temos interesse em conhecer profissionais de áreas
                            assistenciais, multiprofissionais e
                            operacionais que se identifiquem com o cuidado em
                            saúde e com o trabalho colaborativo.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {principles.map((principle) => {
                            const Icon = principle.icon;

                            return (
                                <article
                                    key={principle.title}
                                    className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                                >
                                    <span className="flex size-12 items-center justify-center rounded-full bg-nef-50 text-nef-700">
                                        <Icon aria-hidden="true" size={22} />
                                    </span>
                                    <h3 className="mt-5 font-title text-xl font-semibold text-zinc-900">
                                        {principle.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-zinc-600">
                                        {principle.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>
                
                <section className="w-full bg-nef-300 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="mx-auto w-full max-w-6xl">
                        <div className="max-w-2xl">
                            <span className="text-sm font-bold uppercase tracking-[0.14em] text-nef-800">
                                Áreas de atuação
                            </span>
                            <h2 className="mt-3 font-title text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                                Conheça os cargos e áreas de interesse
                            </h2>
                            <p className="mt-5 leading-7 text-zinc-800">
                                Conheça alguns dos perfis que podem fazer parte
                                do nosso banco de talentos. Os exemplos abaixo
                                não representam vagas abertas neste momento.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {careerAreas.map((area) => (
                                <article
                                    className="rounded-2xl border border-nef-100 bg-white/90 p-6 shadow-sm"
                                    key={area.title}
                                >
                                    <span className="flex size-11 items-center justify-center rounded-full bg-nef-50 text-nef-700">
                                        <LuBriefcaseBusiness
                                            aria-hidden="true"
                                            size={20}
                                        />
                                    </span>
                                    <h3 className="mt-4 font-title text-lg font-semibold text-zinc-900">
                                        {area.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                                        {area.roles}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="cadastro"
                    className="scroll-mt-28 bg-zinc-100 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
                >
                    <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.14em] text-nef-500">
                                Banco de talentos
                            </span>
                            <h2 className="mt-3 font-title text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                                Envie seu currículo
                            </h2>
                            <p className="mt-5 leading-7 text-zinc-600">
                                Preencha seus dados e anexe um currículo
                                atualizado em PDF. Quando houver uma oportunidade
                                compatível com seu perfil, a equipe responsável
                                poderá entrar em contato.
                            </p>

                            <div className="mt-8 rounded-2xl border border-nef-100 bg-nef-50 p-5 text-sm leading-6 text-nef-900">
                                <strong className="block font-bold">
                                    Antes de enviar
                                </strong>
                                <p className="mt-2">
                                    O cadastro no banco de talentos não representa
                                    uma vaga aberta nem garante participação em
                                    processo seletivo. A Nefruza não solicita
                                    pagamentos em nenhuma etapa de recrutamento.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                            <ApplicationForm />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
