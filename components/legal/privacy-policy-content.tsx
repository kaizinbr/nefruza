import Link from "next/link";
import type { ReactNode } from "react";

interface PolicySectionProps {
    number: number;
    title: string;
    children: ReactNode;
}

const paragraphClassName = "leading-7 text-zinc-600";
const listClassName =
    "ml-5 list-disc space-y-2 leading-7 text-zinc-600 marker:text-nef-500";
const linkClassName =
    "font-semibold text-nef-700 underline decoration-nef-300 underline-offset-4 transition-colors hover:text-nef-900";

function PolicySection({
    number,
    title,
    children,
}: PolicySectionProps) {
    const headingId = `politica-secao-${number}`;

    return (
        <section
            aria-labelledby={headingId}
            className="border-t border-zinc-200 pt-7 first:border-t-0 first:pt-0"
        >
            <h2
                id={headingId}
                className="font-title text-2xl font-semibold text-zinc-900"
            >
                {number}. {title}
            </h2>
            <div className="mt-4 flex flex-col gap-4">{children}</div>
        </section>
    );
}

export default function PrivacyPolicyContent() {
    return (
        <>
            <p className={paragraphClassName}>
                Esta Política de Privacidade explica como a Nefruza Serviços
                Nefrológicos Fiúza Chaves Ltda. (“Nefruza”) trata os dados
                pessoais relacionados à utilização deste site e de seus canais
                digitais. O tratamento é realizado em conformidade com a Lei nº
                13.709/2018 — Lei Geral de Proteção de Dados Pessoais (“LGPD”).
            </p>

            <p className={paragraphClassName}>
                Esta Política se aplica às interações realizadas pelo site. O
                tratamento de dados decorrente do atendimento clínico poderá
                estar sujeito a avisos específicos, deveres de sigilo
                profissional e regras próprias dos serviços de saúde.
            </p>

            <PolicySection number={1} title="Quem é responsável pelos dados">
                <p className={paragraphClassName}>
                    A controladora dos dados pessoais tratados no contexto deste
                    site é a Nefruza Serviços Nefrológicos Fiúza Chaves Ltda.,
                    inscrita no CNPJ sob o nº 09.291.683/0001-58, com endereço
                    na Avenida Sinésio Guimarães, 290, Torre, João Pessoa — PB,
                    CEP 58040-400.
                </p>
            </PolicySection>

            <PolicySection number={2} title="Quais dados podem ser tratados">
                <p className={paragraphClassName}>
                    A Nefruza poderá tratar os dados fornecidos voluntariamente
                    pelo usuário nos formulários e canais de contato, incluindo:
                </p>

                <ul className={listClassName}>
                    <li>nome;</li>
                    <li>endereço de e-mail;</li>
                    <li>número de telefone, quando informado;</li>
                    <li>setor e forma de contato preferida;</li>
                    <li>título, mensagem e demais informações enviadas;</li>
                    <li>
                        informações necessárias para identificar e acompanhar o
                        ticket de atendimento.
                    </li>
                </ul>

                <p className={paragraphClassName}>
                    Também poderão ser processadas informações técnicas
                    relacionadas ao acesso, como endereço IP, data e horário,
                    tipo de navegador, dispositivo, páginas acessadas e
                    registros de segurança. Esses dados podem ser gerados pela
                    infraestrutura necessária ao funcionamento e à proteção do
                    site.
                </p>

                <p className={paragraphClassName}>
                    Evite incluir dados pessoais sensíveis, informações
                    médicas, resultados de exames ou outros documentos de saúde
                    no formulário geral de contato, salvo quando isso for
                    necessário e expressamente solicitado pela Nefruza por um
                    canal apropriado.
                </p>
            </PolicySection>

            <PolicySection number={3} title="Como utilizamos os dados">
                <p className={paragraphClassName}>
                    Os dados pessoais poderão ser utilizados para:
                </p>

                <ul className={listClassName}>
                    <li>
                        receber, identificar, encaminhar e responder
                        solicitações;
                    </li>
                    <li>
                        gerar tickets e enviar confirmações relacionadas ao
                        contato;
                    </li>
                    <li>
                        prestar informações sobre atendimentos, horários,
                        serviços e canais da Nefruza;
                    </li>
                    <li>
                        manter a segurança, a disponibilidade e o funcionamento
                        do site;
                    </li>
                    <li>
                        prevenir fraudes, abusos e incidentes de segurança;
                    </li>
                    <li>
                        cumprir obrigações legais ou regulatórias e atender
                        determinações de autoridades competentes;
                    </li>
                    <li>
                        exercer direitos em processos administrativos, judiciais
                        ou arbitrais.
                    </li>
                </ul>

                <p className={paragraphClassName}>
                    Conforme a finalidade e o contexto, o tratamento poderá se
                    apoiar no consentimento, na execução de procedimentos
                    solicitados pelo titular, no cumprimento de obrigação legal
                    ou regulatória, no exercício regular de direitos, na
                    proteção da vida ou da incolumidade física e no legítimo
                    interesse, observados os requisitos da LGPD.
                </p>
            </PolicySection>

            <PolicySection number={4} title="Com quem os dados podem ser compartilhados">
                <p className={paragraphClassName}>
                    A Nefruza poderá compartilhar dados pessoais, no limite
                    necessário para cada finalidade, com:
                </p>

                <ul className={listClassName}>
                    <li>
                        fornecedores de hospedagem, infraestrutura, segurança,
                        suporte e manutenção do site;
                    </li>
                    <li>
                        prestadores responsáveis pelo processamento e envio das
                        mensagens eletrônicas geradas pelos formulários;
                    </li>
                    <li>
                        profissionais e setores internos responsáveis por
                        atender à solicitação;
                    </li>
                    <li>
                        assessores jurídicos, contábeis ou técnicos, quando
                        necessário;
                    </li>
                    <li>
                        autoridades públicas, órgãos reguladores ou terceiros,
                        quando houver obrigação legal, ordem válida ou
                        necessidade de exercício regular de direitos.
                    </li>
                </ul>

                <p className={paragraphClassName}>
                    Os prestadores de serviço devem tratar os dados de acordo
                    com as instruções aplicáveis, somente para as finalidades
                    contratadas e com medidas adequadas de confidencialidade e
                    segurança.
                </p>
            </PolicySection>

            <PolicySection number={5} title="Serviços e links de terceiros">
                <p className={paragraphClassName}>
                    O site pode incorporar ou disponibilizar links para
                    serviços de terceiros, como mapas, WhatsApp e redes sociais.
                    Ao acessar esses recursos, o usuário poderá ser direcionado
                    a ambientes externos, que possuem termos e políticas de
                    privacidade próprios. A Nefruza não controla as práticas de
                    tratamento realizadas diretamente por esses terceiros.
                </p>
            </PolicySection>

            <PolicySection number={6} title="Cookies e tecnologias semelhantes">
                <p className={paragraphClassName}>
                    Cookies são pequenos arquivos armazenados no dispositivo do
                    usuário. O site poderá utilizar cookies estritamente
                    necessários ao funcionamento, à segurança e à manutenção da
                    sessão, quando aplicável.
                </p>

                <p className={paragraphClassName}>
                    Conteúdos incorporados e serviços externos também poderão
                    utilizar cookies ou tecnologias semelhantes de acordo com
                    suas próprias políticas. O usuário pode gerenciar ou
                    bloquear cookies nas configurações do navegador. O bloqueio
                    de recursos necessários poderá afetar algumas
                    funcionalidades.
                </p>
            </PolicySection>

            <PolicySection number={7} title="Armazenamento e retenção">
                <p className={paragraphClassName}>
                    Os dados serão mantidos pelo período necessário para atender
                    às finalidades descritas nesta Política, responder à
                    solicitação do usuário, cumprir obrigações legais ou
                    regulatórias, resguardar direitos e preservar registros de
                    segurança.
                </p>

                <p className={paragraphClassName}>
                    Encerrada a finalidade e inexistindo outra base legal para a
                    conservação, os dados poderão ser eliminados, anonimizados
                    ou mantidos de forma segura nas hipóteses autorizadas pela
                    LGPD.
                </p>
            </PolicySection>

            <PolicySection number={8} title="Segurança das informações">
                <p className={paragraphClassName}>
                    A Nefruza adota medidas técnicas e administrativas
                    razoáveis para proteger os dados contra acessos não
                    autorizados e situações acidentais ou ilícitas de
                    destruição, perda, alteração, comunicação ou divulgação.
                </p>

                <p className={paragraphClassName}>
                    Nenhum sistema conectado à internet é totalmente imune a
                    riscos. Por isso, o usuário também deve adotar práticas de
                    segurança, como manter seus dispositivos atualizados e não
                    compartilhar senhas ou códigos de acesso.
                </p>
            </PolicySection>

            <PolicySection number={9} title="Direitos do titular">
                <p className={paragraphClassName}>
                    Nos termos da LGPD, o titular poderá solicitar, quando
                    aplicável:
                </p>

                <ul className={listClassName}>
                    <li>confirmação da existência de tratamento;</li>
                    <li>acesso aos dados pessoais;</li>
                    <li>
                        correção de dados incompletos, inexatos ou
                        desatualizados;
                    </li>
                    <li>
                        anonimização, bloqueio ou eliminação de dados
                        desnecessários, excessivos ou tratados em desconformidade
                        com a LGPD;
                    </li>
                    <li>
                        portabilidade, observadas as normas aplicáveis e os
                        segredos comercial e industrial;
                    </li>
                    <li>
                        eliminação dos dados tratados com consentimento,
                        ressalvadas as hipóteses legais de conservação;
                    </li>
                    <li>
                        informações sobre as entidades com as quais houve
                        compartilhamento;
                    </li>
                    <li>
                        informações sobre a possibilidade de não fornecer
                        consentimento e sobre as consequências da negativa;
                    </li>
                    <li>revogação do consentimento;</li>
                    <li>
                        oposição a tratamento realizado em desconformidade com a
                        LGPD;
                    </li>
                    <li>
                        revisão de decisões tomadas unicamente com base em
                        tratamento automatizado, quando aplicável.
                    </li>
                </ul>

                <p className={paragraphClassName}>
                    Para proteger o próprio titular, a Nefruza poderá solicitar
                    informações adicionais para confirmar a identidade de quem
                    realiza o pedido. Determinadas solicitações poderão não ser
                    atendidas integralmente quando existir obrigação legal de
                    conservação ou outra hipótese autorizada pela legislação.
                </p>
            </PolicySection>

            <PolicySection number={10} title="Crianças e adolescentes">
                <p className={paragraphClassName}>
                    Quando o contato envolver dados de crianças ou adolescentes,
                    ele deverá ser realizado por seus pais ou responsáveis
                    legais, sempre considerando o melhor interesse do titular.
                    Não devem ser enviados pelo formulário geral dados além dos
                    estritamente necessários à solicitação.
                </p>
            </PolicySection>

            <PolicySection number={11} title="Atualizações desta Política">
                <p className={paragraphClassName}>
                    Esta Política poderá ser atualizada para refletir mudanças
                    no site, nos processos internos ou na legislação. A versão
                    vigente será sempre aquela publicada nesta página, com a
                    indicação da data da última atualização.
                </p>
            </PolicySection>

            <PolicySection number={12} title="Contato sobre privacidade">
                <p className={paragraphClassName}>
                    Para esclarecer dúvidas ou exercer direitos relacionados aos
                    dados tratados pelo site, entre em contato pelo e-mail{" "}
                    <a
                        href="mailto:contato@nefruza.com.br"
                        className={linkClassName}
                    >
                        contato@nefruza.com.br
                    </a>{" "}
                    ou utilize a{" "}
                    <Link href="/contato" className={linkClassName}>
                        página de contato
                    </Link>
                    .
                </p>

                <p className={paragraphClassName}>
                    Também é possível enviar correspondência para Avenida
                    Sinésio Guimarães, 290, Torre, João Pessoa — PB, CEP
                    58040-400.
                </p>
            </PolicySection>

            <p className="border-t border-zinc-200 pt-7 text-sm leading-6 text-zinc-500">
                Última atualização: 28 de julho de 2026.
            </p>
        </>
    );
}
