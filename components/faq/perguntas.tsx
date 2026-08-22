"use client";

import { Accordion } from "@mantine/core";
import Link from "next/link";
import type { ReactNode } from "react";
import { PiPlus } from "react-icons/pi";

type FAQItem = {
    value: string;
    question: string;
    answer: ReactNode;
};

const linkClassName =
    "font-medium text-nef-700 underline decoration-nef-300 underline-offset-4 transition-colors hover:text-nef-900";

export const faqItems: FAQItem[] = [
    {
        value: "o-que-faz-nefrologista",
        question: "O que faz um médico nefrologista?",
        answer: (
            <p>
                O nefrologista é o médico especializado na prevenção, no
                diagnóstico e no tratamento de doenças dos rins. A avaliação
                pode incluir função renal, alterações na urina, pressão
                arterial, equilíbrio de líquidos e sais, doença renal crônica e,
                quando indicado, terapias de substituição da função renal. A
                conduta depende da avaliação individual.
            </p>
        ),
    },
    {
        value: "quando-procurar-nefrologista",
        question: "Quando devo procurar avaliação de um nefrologista?",
        answer: (
            <p>
                Procure orientação do seu médico quando houver alteração em
                exames de sangue, urina ou imagem relacionada aos rins, doença
                renal conhecida ou indicação de acompanhamento especializado.
                Hipertensão, diabetes, doença cardiovascular e histórico
                familiar de doença renal são fatores que merecem acompanhamento
                de saúde, mas somente um profissional pode definir se e quando
                o encaminhamento é necessário.
            </p>
        ),
    },
    {
        value: "doenca-renal-tem-sintomas",
        question: "Doença renal sempre provoca sintomas?",
        answer: (
            <p>
                Não. A doença renal crônica pode evoluir sem sintomas,
                especialmente nas fases iniciais. Por isso, pessoas com fatores
                de risco devem manter acompanhamento regular e realizar somente
                os exames indicados por profissional de saúde. Uma informação
                na internet não permite confirmar nem excluir um diagnóstico.
            </p>
        ),
    },
    {
        value: "servicos-nefruza",
        question: "Quais serviços são apresentados pela Nefruza?",
        answer: (
            <p>
                Consulte a{" "}
                <Link href="/servicos" className={linkClassName}>
                    página de serviços
                </Link>{" "}
                para conhecer as modalidades divulgadas no site. A indicação, a
                disponibilidade e a cobertura dependem de avaliação clínica e,
                quando aplicável, das regras do convênio. Confirme os detalhes
                com a equipe antes de comparecer.
            </p>
        ),
    },
    {
        value: "como-agendar",
        question: "Como solicito uma consulta ou informação de atendimento?",
        answer: (
            <p>
                Utilize os telefones, o WhatsApp ou o e-mail exibidos na{" "}
                <Link href="/contato" className={linkClassName}>
                    página de contato
                </Link>
                . Os horários de atendimento também estão informados nessa
                página. A solicitação somente estará confirmada após o retorno
                da equipe responsável.
            </p>
        ),
    },
    {
        value: "formulario-agendamento",
        question: "O envio do formulário confirma um agendamento?",
        answer: (
            <p>
                Não. O formulário registra uma solicitação e gera um ticket para
                análise. Ele não confirma consulta, procedimento, autorização de
                convênio ou início de tratamento. Aguarde o retorno da equipe ou
                use os canais de atendimento para confirmar as informações.
            </p>
        ),
    },
    {
        value: "precisa-encaminhamento",
        question: "Preciso de pedido médico, encaminhamento ou autorização?",
        answer: (
            <p>
                Isso depende do serviço e das regras do seu plano de saúde.
                Algumas operadoras exigem pedido, guia ou autorização prévia.
                Confirme com a operadora e com a Nefruza antes do atendimento
                para saber exatamente quais documentos serão necessários.
            </p>
        ),
    },
    {
        value: "convenios",
        question: "Quais convênios são aceitos?",
        answer: (
            <p>
                A lista de convênios aceitos está disponível na{" "}
                <Link href="/convenios" className={linkClassName}>
                    página de convênios
                </Link>
                . A cobertura varia por plano, contrato e procedimento e pode
                mudar. No caso do convênio Amil Saúde, realizamos atendimentos somente de
                consultório. Confirme elegibilidade e autorização antes de
                comparecer.
            </p>
        ),
    },
    {
        value: "documentos-consulta",
        question: "Quais documentos devo levar ao atendimento?",
        answer: (
            <p>
                Os requisitos variam conforme o tipo de atendimento e o
                convênio. No momento da confirmação, pergunte se serão
                necessários documento oficial, cartão do plano, pedido médico,
                autorização, relatórios, exames anteriores ou lista de
                medicamentos. Siga a orientação específica fornecida pela
                equipe.
            </p>
        ),
    },
    {
        value: "jejum",
        question: "Preciso estar em jejum?",
        answer: (
            <p>
                Não faça jejum por conta própria. Consultas, exames e
                procedimentos podem ter preparos diferentes. Siga apenas a
                orientação recebida no agendamento e, se ela não estiver clara,
                confirme com a clínica antes de comparecer.
            </p>
        ),
    },
    {
        value: "exames-outros-laboratorios",
        question: "Posso apresentar exames feitos em outro serviço?",
        answer: (
            <p>
                A utilidade e a aceitação de exames anteriores dependem do tipo,
                da data, da qualidade do resultado e da avaliação profissional.
                Confirme no agendamento como levá-los. Não envie exames ou
                documentos de saúde pelo formulário geral, salvo solicitação
                expressa por um canal apropriado.
            </p>
        ),
    },
    {
        value: "direitos-deveres",
        question: "Onde consulto orientações de convivência e atendimento?",
        answer: (
            <p>
                Consulte o{" "}
                <Link href="/codigo-de-etica" className={linkClassName}>
                    Código de Ética para Pacientes
                </Link>
                , que reúne direitos, deveres e orientações de convivência. Em
                caso de dúvida sobre uma situação específica, fale com a equipe
                da Nefruza.
            </p>
        ),
    },
    {
        value: "dados-formularios",
        question: "Como meus dados são usados nos formulários?",
        answer: (
            <p>
                Os dados são usados para registrar, encaminhar e responder sua
                solicitação, administrar a newsletter ou avaliar uma
                candidatura, conforme o formulário escolhido. Consulte a{" "}
                <Link href="/politica-de-privacidade" className={linkClassName}>
                    Política de Privacidade e o Anexo I — Tabela de Finalidades
                </Link>{" "}
                para conhecer dados, bases legais, compartilhamentos, retenção e
                direitos.
            </p>
        ),
    },
    {
        value: "informacoes-confiaveis",
        question: "Onde encontro informações confiáveis sobre saúde renal?",
        answer: (
            <p>
                Prefira orientações do profissional que acompanha você e fontes
                institucionais, como o{" "}
                <a
                    href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/drc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                >
                    Ministério da Saúde
                    <span className="sr-only">, abre em uma nova aba</span>
                </a>{" "}
                e a{" "}
                <a
                    href="https://sbn.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                >
                    Sociedade Brasileira de Nefrologia
                    <span className="sr-only">, abre em uma nova aba</span>
                </a>
                . Conteúdo geral não substitui avaliação médica.
            </p>
        ),
    },
    {
        value: "urgencia",
        question: "O que devo fazer em uma urgência ou emergência?",
        answer: (
            <p>
                Não espere resposta do site, formulário, ouvidoria, e-mail ou
                redes sociais. Se houver risco imediato, procure um serviço de
                urgência ou emergência ou ligue gratuitamente para o SAMU no
                número <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                    href="tel:192">192</a>. Siga as orientações do serviço acionado.
            </p>
        ),
    },
];

export default function FAQAccordion() {
    return (
        <Accordion
            unstyled
            className="w-full"
            chevron={<PiPlus aria-hidden="true" size={25} />}
            chevronPosition="right"
            aria-label="Perguntas frequentes sobre a Nefruza"
            classNames={{
                item: "",
                control:
                    "flex w-full cursor-pointer flex-row-reverse items-center justify-between border-b border-nef-600 px-0 py-0 text-left text-nef-600 hover:bg-transparent",
                label: "py-5 pr-4 text-base font-medium leading-7 sm:py-4 sm:text-lg",
                chevron:
                    "text-nef-600 transition-transform duration-200 data-[rotate]:rotate-45",
                panel: "text-left",
                content:
                    "p-6 pb-12 text-sm leading-7 text-zinc-800 sm:text-base",
                itemTitle: "border-b border-nef-600",
            }}
        >
            {faqItems.map((item, index) => (
                <Accordion.Item key={item.value} value={item.value}>
                    <Accordion.Control>
                        {index + 1}. {item.question}
                    </Accordion.Control>
                    <Accordion.Panel>{item.answer}</Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
