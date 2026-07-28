"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Accordion } from "@mantine/core";
import { PiPlus } from "react-icons/pi";

type FAQItem = {
    value: string;
    question: string;
    answer: ReactNode;
};

const linkClassName = `
    font-medium text-nef-700 underline
    decoration-nef-300 underline-offset-4
    transition-colors hover:text-nef-900
`;

export const faqItems: FAQItem[] = [
    {
        value: "o-que-faz-nefrologista",
        question: "O que faz um médico nefrologista?",
        answer: (
            <p>
                O nefrologista é o médico responsável pela prevenção, pelo
                diagnóstico e pelo acompanhamento de doenças que afetam os rins
                e o sistema urinário. O atendimento pode envolver avaliação da
                função renal, controle da pressão arterial, acompanhamento de
                alterações em exames e orientação individualizada.
            </p>
        ),
    },
    {
        value: "quando-procurar-nefrologista",
        question: "Quando devo procurar um nefrologista?",
        answer: (
            <p>
                A avaliação pode ser indicada pelo seu médico assistente ou
                diante de alterações em exames relacionados à função renal.
                Pessoas com hipertensão, diabetes, histórico familiar de doença
                renal ou acompanhamento renal prévio também podem precisar de
                avaliação especializada. Cada caso deve ser analisado
                individualmente.
            </p>
        ),
    },
    {
        value: "como-agendar",
        question: "Como posso agendar uma consulta na Nefruza?",
        answer: (
            <p>
                O agendamento pode ser solicitado pelos canais de atendimento da
                clínica. Acesse nossa{" "}
                <Link href="/contato" className={linkClassName}>
                    página de contato
                </Link>{" "}
                para consultar os telefones, horários e demais formas de
                atendimento.
            </p>
        ),
    },
    {
        value: "precisa-encaminhamento",
        question: "Preciso de encaminhamento para realizar uma consulta?",
        answer: (
            <p>
                Isso depende das regras do seu convênio. Alguns planos exigem
                pedido médico ou autorização prévia, enquanto outros permitem o
                agendamento direto. Recomendamos confirmar essa informação com a
                operadora antes da consulta.
            </p>
        ),
    },
    {
        value: "convenios",
        question: "Quais convênios são aceitos pela clínica?",
        answer: (
            <p>
                É possível consultar a lista de convênios aceitos através da
                nossa{" "}
                <Link href="/convenios" className={linkClassName}>
                    página de convênios
                </Link>
                . No caso da Amil, a Nefruza oferece somente atendimento de
                consultório.
            </p>
        ),
    },
    {
        value: "documentos-consulta",
        question: "O que devo levar no dia da consulta?",
        answer: (
            <p>
                Leve um documento oficial com foto, cartão do convênio, pedido
                médico ou autorização, quando necessários, além de exames
                recentes e uma lista dos medicamentos que utiliza. Caso tenha
                relatórios médicos anteriores, eles também podem ajudar na
                avaliação.
            </p>
        ),
    },
    {
        value: "jejum",
        question: "Preciso estar em jejum para a consulta?",
        answer: (
            <p>
                Normalmente, a consulta não exige jejum. Entretanto, exames ou
                procedimentos específicos podem exigir preparo prévio. Siga as
                orientações recebidas no momento do agendamento ou entre em
                contato com a clínica em caso de dúvida.
            </p>
        ),
    },
    {
        value: "etica",
        question: "O que posso ou não fazer durante a consulta?",
        answer: (
            <p>
                A Nefruza dispõe de uma{" "}
                <Link href="/codigo-de-etica" className={linkClassName}>
                    código de ética para pacientes
                </Link>{" "}
                com informações sobre direitos e deveres durante o atendimento. 
            </p>
        ),
    },
    {
        value: "resultado-exames",
        question: "Posso levar exames realizados em outros laboratórios?",
        answer: (
            <p>
                Sim. Exames realizados em outros laboratórios podem ser
                apresentados durante a consulta. Sempre que possível, leve os
                resultados completos, incluindo laudos e imagens, impressos ou
                em formato digital.
            </p>
        ),
    },
    {
        value: "informacoes-confiaveis",
        question:
            "Onde posso encontrar informações confiáveis sobre saúde renal?",
        answer: (
            <p>
                Além das orientações fornecidas durante a consulta, você pode
                acessar o site da{" "}
                <a
                    href="https://sbn.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                >
                    Sociedade Brasileira de Nefrologia
                    <span className="sr-only">, abre em uma nova aba</span>
                </a>
                . O conteúdo disponível na internet não substitui uma avaliação
                médica individual.
            </p>
        ),
    },
    {
        value: "urgencia",
        question: "O que devo fazer em uma situação de urgência?",
        answer: (
            <p>
                O FAQ e os canais administrativos da clínica não são adequados
                para avaliar situações urgentes. Se você acredita que precisa de
                atendimento imediato, procure um serviço de pronto atendimento
                ou acione o serviço de emergência da sua região.
            </p>
        ),
    },
];
