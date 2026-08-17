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
const tableCellClassName =
    "border-b border-zinc-200 px-4 py-4 align-top text-sm leading-6 text-zinc-600";

function PolicySection({ number, title, children }: PolicySectionProps) {
    const headingId = "politica-secao-" + number;

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
                Esta Política de Privacidade explica, de forma clara, como a
                Nefruza Serviços Nefrológicos Fiúza Chaves Ltda. (“Nefruza”)
                trata dados pessoais relacionados ao uso deste site e de seus
                canais digitais. O tratamento observa a Lei nº 13.709/2018 —
                Lei Geral de Proteção de Dados Pessoais (“LGPD”) — e as demais
                normas aplicáveis.
            </p>

            <p className={paragraphClassName}>
                Leia esta Política antes de enviar dados. O{" "}
                <a href="#anexo-i" className={linkClassName}>
                    Anexo I — Tabela de Finalidades
                </a>{" "}
                integra este documento e resume, por atividade, os dados, as
                finalidades, as bases legais, os compartilhamentos e os
                critérios de retenção.
            </p>

            <PolicySection number={1} title="Controladora e canal de privacidade">
                <p className={paragraphClassName}>
                    A controladora dos dados pessoais tratados no contexto
                    deste site é a <strong>Nefruza Serviços Nefrológicos Fiúza
                    Chaves Ltda.</strong>, inscrita no CNPJ sob o nº
                    09.291.683/0001-58, com sede na Avenida Sinésio Guimarães,
                    290, Torre, João Pessoa — PB, CEP 58040-400.
                </p>

                <p className={paragraphClassName}>
                    Dúvidas, solicitações e o exercício de direitos podem ser
                    encaminhados ao canal de privacidade pelo e-mail{" "}
                    <a href="mailto:recep@nefruza.com.br" className={linkClassName}>
                        recep@nefruza.com.br
                    </a>
                    , pela{" "}
                    <Link href="/contato" className={linkClassName}>
                        página de contato
                    </Link>{" "}
                    ou por correspondência ao endereço acima. A Nefruza poderá
                    divulgar neste espaço a identidade e os dados de contato do
                    encarregado pelo tratamento de dados, conforme a estrutura
                    de governança de privacidade adotada e a legislação
                    aplicável.
                </p>
            </PolicySection>

            <PolicySection number={2} title="Abrangência desta Política">
                <p className={paragraphClassName}>
                    Esta Política se aplica à navegação no site, ao formulário
                    de contato, aos canais de ouvidoria, à newsletter, ao banco de talentos e
                    às interações iniciadas por meio dos canais digitais da
                    Nefruza.
                </p>

                <p className={paragraphClassName}>
                    Dados tratados durante consultas, exames, procedimentos,
                    internações, diálise ou outros serviços assistenciais podem
                    estar sujeitos a avisos específicos, ao sigilo profissional
                    e às normas próprias dos serviços de saúde. Esta Política
                    não substitui esses avisos.
                </p>

                <p className={paragraphClassName}>
                    Sites e aplicativos de terceiros acessados por links da
                    Nefruza possuem termos e políticas próprios. Esta Política
                    não regula o tratamento realizado diretamente por esses
                    terceiros.
                </p>
            </PolicySection>

            <PolicySection number={3} title="Princípios e conceitos essenciais">
                <p className={paragraphClassName}>
                    Dado pessoal é qualquer informação relacionada a uma pessoa
                    identificada ou identificável. Dados sobre saúde, origem
                    racial ou étnica, religião, opinião política, filiação
                    sindical, vida sexual, dados genéticos e biométricos são
                    dados pessoais sensíveis e recebem proteção reforçada.
                </p>

                <p className={paragraphClassName}>
                    A Nefruza procura tratar apenas dados adequados, pertinentes
                    e necessários para finalidades legítimas, específicas e
                    informadas, observando boa-fé, transparência, segurança,
                    prevenção, não discriminação e prestação de contas.
                </p>
            </PolicySection>

            <PolicySection number={4} title="Dados que podem ser tratados">
                <p className={paragraphClassName}>
                    Conforme o canal utilizado, poderão ser tratados:
                </p>

                <ul className={listClassName}>
                    <li>
                        <strong>contato e ouvidoria:</strong> nome, e-mail,
                        telefone, setor, assunto, meio de contato preferido,
                        mensagem, número do ticket e datas de atendimento;
                    </li>
                    <li>
                        <strong>newsletter:</strong> nome, quando informado,
                        e-mail, status da inscrição, registros de consentimento,
                        confirmação, descadastramento e entrega das mensagens;
                    </li>
                    <li>
                        <strong>banco de talentos:</strong> nome, e-mail,
                        telefone, cidade, área de interesse, LinkedIn ou
                        portfólio, apresentação, currículo, histórico da
                        candidatura e registro da manifestação de vontade;
                    </li>
                    <li>
                        <strong>navegação e segurança:</strong> endereço IP,
                        identificadores ou resumos criptográficos, data e hora,
                        navegador, dispositivo, páginas acessadas, cabeçalhos
                        técnicos e registros necessários à segurança e à
                        prevenção de abuso;
                    </li>
                    <li>
                        <strong>solicitações de privacidade:</strong> dados do
                        titular ou de seu representante, conteúdo do pedido,
                        elementos necessários para confirmar identidade e
                        registros do atendimento.
                    </li>
                </ul>

                <p className={paragraphClassName}>
                    Os campos obrigatórios são identificados no próprio
                    formulário. A falta desses dados poderá impedir o envio ou
                    o atendimento da solicitação. Campos opcionais podem ser
                    deixados em branco.
                </p>
            </PolicySection>

            <PolicySection number={5} title="Dados de saúde e outros dados sensíveis">
                <p className={paragraphClassName}>
                    Não envie pelo formulário geral, pela newsletter ou pelo
                    banco de talentos resultados de exames, prontuários,
                    diagnósticos, prescrições, imagens, dados bancários,
                    documentos de identificação ou outras informações sensíveis
                    que não sejam estritamente necessárias.
                </p>

                <p className={paragraphClassName}>
                    Se uma mensagem contiver dados de saúde, a Nefruza limitará
                    o acesso e o uso ao que for necessário para orientar ou
                    encaminhar a solicitação. Quando o tratamento for
                    indispensável no contexto assistencial, ele poderá ocorrer
                    para tutela da saúde, cumprimento de obrigação legal ou
                    regulatória, exercício regular de direitos, proteção da vida
                    ou outra hipótese prevista no artigo 11 da LGPD, conforme o
                    caso concreto.
                </p>
            </PolicySection>

            <PolicySection number={6} title="Finalidades e bases legais">
                <p className={paragraphClassName}>
                    A Nefruza não depende de consentimento para toda e qualquer
                    atividade. A base legal varia conforme a finalidade e pode
                    incluir consentimento, procedimentos preliminares ou
                    execução de contrato a pedido do titular, cumprimento de
                    obrigação legal ou regulatória, exercício regular de
                    direitos, proteção da vida, tutela da saúde e legítimo
                    interesse, sempre dentro dos requisitos da LGPD.
                </p>

                <p className={paragraphClassName}>
                    Quando o consentimento for utilizado, ele será solicitado de
                    forma livre, informada, inequívoca e vinculada a finalidade
                    determinada. A recusa ou a revogação não afetará tratamentos
                    anteriores realizados de forma válida nem atividades
                    amparadas por outra base legal.
                </p>

                <p className={paragraphClassName}>
                    As finalidades e bases aplicáveis a cada fluxo estão
                    detalhadas no{" "}
                    <a href="#anexo-i" className={linkClassName}>
                        Anexo I
                    </a>
                    .
                </p>
            </PolicySection>

            <PolicySection number={7} title="Compartilhamento de dados">
                <p className={paragraphClassName}>
                    A Nefruza não comercializa dados pessoais. O compartilhamento
                    poderá ocorrer, no limite necessário, com:
                </p>

                <ul className={listClassName}>
                    <li>
                        setores internos e profissionais autorizados responsáveis
                        por responder contatos, avaliar candidaturas, enviar
                        comunicações ou prestar suporte;
                    </li>
                    <li>
                        fornecedores de hospedagem, banco de dados,
                        armazenamento de arquivos, envio de e-mails,
                        infraestrutura, segurança, manutenção e suporte técnico;
                    </li>
                    <li>
                        consultores jurídicos, contábeis, de auditoria ou outros
                        prestadores sujeitos a deveres de confidencialidade;
                    </li>
                    <li>
                        autoridades públicas, órgãos reguladores, Poder
                        Judiciário ou terceiros, quando houver obrigação legal,
                        ordem válida, emergência ou necessidade de exercício
                        regular de direitos;
                    </li>
                    <li>
                        sucessores em operação societária, observados a
                        finalidade original, os deveres de informação e as
                        salvaguardas aplicáveis.
                    </li>
                </ul>

                <p className={paragraphClassName}>
                    Prestadores que atuem como operadores devem tratar os dados
                    conforme as instruções da Nefruza, para as finalidades
                    contratadas e com medidas proporcionais de segurança e
                    confidencialidade.
                </p>
            </PolicySection>

            <PolicySection number={8} title="Transferências internacionais">
                <p className={paragraphClassName}>
                    Alguns fornecedores de tecnologia e comunicação podem
                    armazenar ou processar dados fora do Brasil. Nessas
                    situações, a Nefruza deverá utilizar um mecanismo válido de
                    transferência internacional e exigir salvaguardas
                    compatíveis com a LGPD e com a Resolução CD/ANPD nº 19/2024,
                    conforme aplicável.
                </p>

                <p className={paragraphClassName}>
                    O titular poderá solicitar informações adicionais sobre os
                    países de destino, os fornecedores envolvidos e as
                    garantias utilizadas por meio do canal de privacidade,
                    observados os segredos comercial e industrial.
                </p>
            </PolicySection>

            <PolicySection number={9} title="Cookies, recursos incorporados e links externos">
                <p className={paragraphClassName}>
                    Cookies são pequenos arquivos ou identificadores usados no
                    dispositivo do visitante. O site poderá empregar recursos
                    estritamente necessários à navegação, segurança, prevenção
                    de fraude e funcionamento dos formulários.
                </p>

                <p className={paragraphClassName}>
                    A página de contato carrega um mapa incorporado do Google, e
                    o site possui links para WhatsApp e redes sociais. Ao carregar
                    o mapa ou acessar esses links, o respectivo terceiro poderá
                    tratar dados técnicos, como endereço IP, tipo e versão do
                    navegador, sistema operacional, informações do dispositivo,
                    data, hora e dados de interação, conforme sua própria
                    política de privacidade.
                </p>

                <p className={paragraphClassName}>
                    O visitante pode bloquear ou apagar cookies nas
                    configurações do navegador. A desativação de recursos
                    estritamente necessários poderá prejudicar algumas
                    funcionalidades. Caso sejam adotados cookies de publicidade,
                    perfilamento ou medição não essencial, a Nefruza deverá
                    disponibilizar mecanismo de escolha antes da ativação.
                </p>
            </PolicySection>

            <PolicySection number={10} title="Armazenamento e retenção">
                <p className={paragraphClassName}>
                    Os dados são conservados apenas pelo período necessário à
                    finalidade informada e de acordo com critérios como duração
                    do atendimento, validade do consentimento, prazos legais ou
                    regulatórios, prevenção de fraude, segurança e exercício
                    regular de direitos. Os critérios por atividade constam no
                    Anexo I.
                </p>

                <p className={paragraphClassName}>
                    Encerrada a finalidade e inexistindo outra razão legítima
                    para conservação, os dados serão eliminados ou anonimizados,
                    observados os limites técnicos de cópias de segurança e as
                    hipóteses de conservação previstas no artigo 16 da LGPD.
                </p>
            </PolicySection>

            <PolicySection number={11} title="Segurança e incidentes">
                <p className={paragraphClassName}>
                    A Nefruza adota medidas técnicas e administrativas
                    proporcionais aos riscos para proteger os dados contra
                    acesso não autorizado e situações acidentais ou ilícitas de
                    destruição, perda, alteração, comunicação ou divulgação.
                    Entre as medidas possíveis estão controle de acesso,
                    autenticação, registros de auditoria, armazenamento
                    protegido, limitação de privilégios e gestão de
                    fornecedores.
                </p>

                <p className={paragraphClassName}>
                    Nenhum ambiente conectado à internet é totalmente imune a
                    riscos. Se ocorrer incidente que possa acarretar risco ou
                    dano relevante, a Nefruza realizará as avaliações e
                    comunicações exigidas à ANPD e aos titulares, nos prazos e
                    termos da regulamentação aplicável.
                </p>
            </PolicySection>

            <PolicySection number={12} title="Crianças e adolescentes">
                <p className={paragraphClassName}>
                    O tratamento de dados de crianças e adolescentes deve
                    observar seu melhor interesse. Sempre que possível, o
                    contato deverá ser realizado por pais ou responsáveis e
                    conter apenas os dados necessários para a solicitação.
                </p>

                <p className={paragraphClassName}>
                    A Nefruza poderá aplicar as hipóteses legais adequadas aos
                    artigos 7º ou 11 da LGPD, conforme a natureza do dado e o
                    caso concreto, com salvaguardas reforçadas e sem utilizar
                    informações de menores para publicidade comportamental.
                </p>
            </PolicySection>

            <PolicySection number={13} title="Direitos dos titulares">
                <p className={paragraphClassName}>
                    O titular ou seu representante poderá solicitar,
                    gratuitamente e quando aplicável:
                </p>

                <ul className={listClassName}>
                    <li>confirmação da existência de tratamento e acesso aos dados;</li>
                    <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                    <li>
                        anonimização, bloqueio ou eliminação de dados
                        desnecessários, excessivos ou tratados em desconformidade;
                    </li>
                    <li>
                        portabilidade, conforme regulamentação e observados os
                        segredos comercial e industrial;
                    </li>
                    <li>
                        eliminação dos dados tratados com consentimento,
                        ressalvadas as hipóteses legais de conservação;
                    </li>
                    <li>
                        informação sobre entidades públicas e privadas com as
                        quais houve uso compartilhado;
                    </li>
                    <li>
                        informação sobre a possibilidade de não consentir e as
                        consequências da negativa;
                    </li>
                    <li>revogação do consentimento;</li>
                    <li>
                        oposição a tratamento realizado em desconformidade com
                        a LGPD;
                    </li>
                    <li>
                        revisão de decisões tomadas unicamente com base em
                        tratamento automatizado que afetem seus interesses e
                        informação sobre os critérios utilizados, quando
                        aplicável;
                    </li>
                    <li>
                        peticionamento perante a ANPD e os órgãos de defesa do
                        consumidor, após buscar atendimento junto à Nefruza.
                    </li>
                </ul>

                <p className={paragraphClassName}>
                    Para prevenir fraude e acesso indevido, poderão ser
                    solicitadas informações proporcionais para confirmar a
                    identidade ou os poderes do representante. A Nefruza
                    responderá nos prazos legais e explicará eventual
                    impossibilidade de atendimento integral, por exemplo,
                    quando houver obrigação de conservação ou risco a direitos
                    de terceiros.
                </p>
            </PolicySection>

            <PolicySection number={14} title="Decisões automatizadas">
                <p className={paragraphClassName}>
                    O site pode aplicar validações automáticas e limites de
                    envio para proteger os formulários contra abuso. Essas
                    rotinas não são utilizadas, por si sós, para tomar decisões
                    com efeitos jurídicos ou relevantes sobre atendimento de
                    saúde ou contratação profissional. Se essa prática mudar, a
                    Nefruza atualizará esta Política e assegurará os direitos
                    aplicáveis.
                </p>
            </PolicySection>

            <PolicySection number={15} title="Atualizações desta Política">
                <p className={paragraphClassName}>
                    Esta Política poderá ser atualizada para refletir alterações
                    no site, nos processos, nos fornecedores ou na legislação.
                    A versão vigente será publicada nesta página com a data de
                    atualização. Alterações materiais que dependam de novo
                    consentimento serão informadas previamente pelos meios
                    adequados.
                </p>
            </PolicySection>

            <section
                id="anexo-i"
                aria-labelledby="anexo-i-titulo"
                className="scroll-mt-24 border-t border-zinc-200 pt-7"
            >
                <h2
                    id="anexo-i-titulo"
                    className="font-title text-2xl font-semibold text-zinc-900"
                >
                    ANEXO I — TABELA DE FINALIDADES
                </h2>
                <p className={"mt-4 " + paragraphClassName}>
                    A tabela deve ser lida em conjunto com a Política. As bases
                    legais indicadas poderão variar se o contexto concreto
                    exigir outra hipótese autorizada pela LGPD.
                </p>

                <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200">
                    <table className="min-w-[1100px] border-collapse text-left">
                        <caption className="sr-only">
                            Dados pessoais tratados pela Nefruza, finalidades,
                            bases legais, destinatários e retenção
                        </caption>
                        <thead className="bg-nef-50">
                            <tr>
                                {[
                                    "Atividade",
                                    "Dados tratados",
                                    "Finalidades",
                                    "Bases legais principais",
                                    "Compartilhamento",
                                    "Retenção",
                                ].map((heading) => (
                                    <th
                                        key={heading}
                                        scope="col"
                                        className="border-b border-zinc-200 px-4 py-4 text-sm font-bold text-zinc-900"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className={tableCellClassName}>
                                    Navegação, operação e segurança do site
                                </th>
                                <td className={tableCellClassName}>
                                    IP, data e hora, navegador, dispositivo,
                                    páginas e eventos técnicos, identificadores
                                    ou resumos criptográficos de segurança.
                                </td>
                                <td className={tableCellClassName}>
                                    Entregar o conteúdo, manter disponibilidade,
                                    diagnosticar falhas, limitar abuso, prevenir
                                    fraude e proteger o ambiente.
                                </td>
                                <td className={tableCellClassName}>
                                    Legítimo interesse (art. 7º, IX); cumprimento
                                    de obrigação legal ou regulatória (art. 7º,
                                    II), quando aplicável; exercício regular de
                                    direitos (art. 7º, VI).
                                </td>
                                <td className={tableCellClassName}>
                                    Hospedagem, infraestrutura, segurança e
                                    suporte técnico.
                                </td>
                                <td className={tableCellClassName}>
                                    Pelo tempo necessário à segurança e à
                                    investigação de eventos. Registros de acesso
                                    são mantidos pelo prazo legal aplicável,
                                    inclusive 6 meses quando o art. 15 do Marco
                                    Civil da Internet incidir.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={tableCellClassName}>
                                    Contato e ouvidoria
                                </th>
                                <td className={tableCellClassName}>
                                    Nome, e-mail, telefone, setor, assunto, meio
                                    preferido, mensagem, ticket e datas. Podem
                                    existir dados sensíveis inseridos pelo próprio
                                    titular na mensagem.
                                </td>
                                <td className={tableCellClassName}>
                                    Receber, identificar, encaminhar e responder;
                                    gerar protocolo; enviar confirmação; manter o
                                    histórico e melhorar o atendimento.
                                </td>
                                <td className={tableCellClassName}>
                                    Procedimentos solicitados pelo titular (art.
                                    7º, V); legítimo interesse (art. 7º, IX);
                                    obrigação legal ou regulatória e exercício de
                                    direitos (art. 7º, II e VI). Para dados
                                    sensíveis indispensáveis, hipóteses do art.
                                    11, II, conforme o caso.
                                </td>
                                <td className={tableCellClassName}>
                                    Equipes responsáveis, portal administrativo,
                                    banco de dados, provedor de e-mail, suporte e,
                                    quando necessário, assessores e autoridades.
                                </td>
                                <td className={tableCellClassName}>
                                    Enquanto o ticket estiver em tratamento e,
                                    depois, pelo período necessário para histórico,
                                    obrigações aplicáveis e exercício regular de
                                    direitos. Dados excessivos poderão ser
                                    eliminados ou bloqueados antes.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={tableCellClassName}>
                                    Newsletter
                                </th>
                                <td className={tableCellClassName}>
                                    Nome opcional, e-mail, versão e data do
                                    consentimento, token protegido, confirmação,
                                    status de inscrição, entrega, descadastramento
                                    e identificador resumido para prevenção de
                                    abuso.
                                </td>
                                <td className={tableCellClassName}>
                                    Confirmar a titularidade do e-mail, enviar
                                    notícias autorizadas, administrar preferências,
                                    evitar abuso e comprovar a manifestação de
                                    vontade.
                                </td>
                                <td className={tableCellClassName}>
                                    Consentimento (arts. 7º, I, e 8º); legítimo
                                    interesse para segurança (art. 7º, IX);
                                    obrigação legal e exercício regular de
                                    direitos para registros de prova (art. 7º, II
                                    e VI).
                                </td>
                                <td className={tableCellClassName}>
                                    Portal administrativo, banco de dados,
                                    plataforma de envio de e-mails e suporte
                                    técnico.
                                </td>
                                <td className={tableCellClassName}>
                                    A solicitação de confirmação expira em 24
                                    horas. A inscrição ativa permanece até o
                                    descadastramento ou revogação. Depois disso,
                                    poderão ser mantidos registros mínimos de
                                    bloqueio, consentimento e envio pelo prazo
                                    necessário às obrigações e à defesa de direitos.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={tableCellClassName}>
                                    Banco de talentos e recrutamento
                                </th>
                                <td className={tableCellClassName}>
                                    Nome, e-mail, telefone, cidade, área, LinkedIn
                                    ou portfólio, apresentação, currículo, status,
                                    datas, versão do aviso e identificador
                                    resumido para controle de abuso.
                                </td>
                                <td className={tableCellClassName}>
                                    Receber a candidatura, avaliar compatibilidade,
                                    formar banco de talentos, contatar o candidato,
                                    proteger o formulário e registrar a autorização.
                                </td>
                                <td className={tableCellClassName}>
                                    Consentimento para o banco de talentos (art.
                                    7º, I); procedimentos preliminares a pedido do
                                    candidato (art. 7º, V), quando houver processo
                                    seletivo; legítimo interesse para segurança
                                    (art. 7º, IX); exercício regular de direitos
                                    (art. 7º, VI).
                                </td>
                                <td className={tableCellClassName}>
                                    Recursos Humanos e gestores autorizados,
                                    portal administrativo, banco de dados,
                                    armazenamento de currículos, provedor de e-mail
                                    e suporte técnico.
                                </td>
                                <td className={tableCellClassName}>
                                    Durante a avaliação e enquanto o banco de
                                    talentos estiver ativo e pertinente. O
                                    candidato pode revogar a autorização; a
                                    Nefruza poderá conservar registros mínimos se
                                    houver obrigação ou necessidade de defesa de
                                    direitos.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={tableCellClassName}>
                                    Exercício de direitos e conformidade
                                </th>
                                <td className={tableCellClassName}>
                                    Identificação, contato, representação,
                                    solicitação, documentos estritamente necessários,
                                    comunicações, decisões e datas.
                                </td>
                                <td className={tableCellClassName}>
                                    Confirmar legitimidade, atender direitos,
                                    demonstrar conformidade, responder autoridades
                                    e prevenir fraude.
                                </td>
                                <td className={tableCellClassName}>
                                    Cumprimento de obrigação legal ou regulatória
                                    (art. 7º, II); exercício regular de direitos
                                    (art. 7º, VI); legítimo interesse na prevenção
                                    de fraude (art. 7º, IX).
                                </td>
                                <td className={tableCellClassName}>
                                    Canal de privacidade, áreas internas envolvidas,
                                    assessoria jurídica, suporte técnico e
                                    autoridades competentes, quando necessário.
                                </td>
                                <td className={tableCellClassName}>
                                    Durante o atendimento e pelo prazo necessário
                                    para comprovar a resposta, cumprir obrigações e
                                    exercer direitos.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={tableCellClassName}>
                                    Mapa incorporado e links para serviços externos
                                </th>
                                <td className={tableCellClassName}>
                                    Dados técnicos como IP, navegador, dispositivo,
                                    data e hora; outros dados dependerão das escolhas
                                    feitas no serviço externo.
                                </td>
                                <td className={tableCellClassName}>
                                    Exibir localização, abrir canais de comunicação
                                    e permitir compartilhamento de conteúdo.
                                </td>
                                <td className={tableCellClassName}>
                                    Legítimo interesse em disponibilizar localização
                                    e canais digitais ao visitante (art. 7º, IX),
                                    observados os direitos do titular e as regras
                                    aplicáveis às tecnologias utilizadas.
                                </td>
                                <td className={tableCellClassName}>
                                    Google Maps; WhatsApp e redes sociais apenas
                                    quando seus respectivos links forem acessados.
                                </td>
                                <td className={tableCellClassName}>
                                    Definida pelo terceiro responsável. A Nefruza
                                    não controla a retenção realizada após o acesso
                                    ao ambiente externo.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <p className="border-t border-zinc-200 pt-7 text-sm leading-6 text-zinc-500">
                Última atualização: 17 de agosto de 2026.
            </p>
        </>
    );
}
