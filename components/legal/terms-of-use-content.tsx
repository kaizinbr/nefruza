import Link from "next/link";
import type { ReactNode } from "react";

interface TermsSectionProps {
    number: number;
    title: string;
    children: ReactNode;
}

const paragraphClassName = "leading-7 text-zinc-600";
const listClassName =
    "ml-5 list-disc space-y-2 leading-7 text-zinc-600 marker:text-nef-500";
const linkClassName =
    "font-semibold text-nef-700 underline decoration-nef-300 underline-offset-4 transition-colors hover:text-nef-900";

function TermsSection({ number, title, children }: TermsSectionProps) {
    const headingId = "termos-secao-" + number;

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

export default function TermsOfUseContent() {
    return (
        <>
            <p className={paragraphClassName}>
                Estes Termos de Uso regulam o acesso e a utilização do site da
                Nefruza Serviços Nefrológicos Fiúza Chaves Ltda. (“Nefruza”).
                Ao utilizar o site, o usuário declara ter lido e compreendido
                estas condições. O uso também está sujeito à{" "}
                <Link href="/politica-de-privacidade" className={linkClassName}>
                    Política de Privacidade
                </Link>
                .
            </p>

            <p className={paragraphClassName}>
                Estes Termos não substituem contratos, termos de consentimento,
                orientações médicas, regulamentos de convênios ou documentos
                específicos dos serviços assistenciais. Se houver conflito,
                prevalecerá o documento específico para a respectiva relação,
                sem prejuízo dos direitos previstos em lei.
            </p>

            <TermsSection number={1} title="Identificação da Nefruza">
                <p className={paragraphClassName}>
                    O site é mantido pela <strong>Nefruza Serviços Nefrológicos
                    Fiúza Chaves Ltda.</strong>, CNPJ nº 09.291.683/0001-58,
                    com sede na Avenida Sinésio Guimarães, 290, Torre, João
                    Pessoa — PB, CEP 58040-400.
                </p>
            </TermsSection>

            <TermsSection number={2} title="Aceitação, capacidade e abrangência">
                <p className={paragraphClassName}>
                    O usuário deve utilizar o site de acordo com estes Termos e
                    com a legislação brasileira. Caso não concorde, deverá
                    interromper o uso das funcionalidades.
                </p>

                <p className={paragraphClassName}>
                    Pessoas sem plena capacidade civil devem utilizar os canais
                    digitais com a assistência ou representação exigida por lei.
                    O tratamento de dados de crianças e adolescentes observará
                    seu melhor interesse e as regras descritas na Política de
                    Privacidade.
                </p>
            </TermsSection>

            <TermsSection number={3} title="Finalidade do site">
                <p className={paragraphClassName}>
                    O site possui caráter institucional e informativo. Ele
                    apresenta a Nefruza, seus serviços, equipe, convênios,
                    notícias, canais de contato, ouvidoria, newsletter e banco
                    de talentos.
                </p>

                <p className={paragraphClassName}>
                    O site não é prontuário eletrônico, portal de resultados,
                    serviço de telemedicina ou canal automático de agendamento,
                    salvo se uma funcionalidade futura indicar expressamente o
                    contrário e apresentar as condições aplicáveis.
                </p>
            </TermsSection>

            <TermsSection number={4} title="Conteúdo de saúde e ausência de diagnóstico">
                <p className={paragraphClassName}>
                    Textos, notícias e respostas frequentes têm finalidade
                    educativa geral. Eles não substituem consulta, diagnóstico,
                    prescrição, tratamento ou acompanhamento individual por
                    profissional de saúde habilitado.
                </p>

                <p className={paragraphClassName}>
                    Não altere medicamentos, dieta, frequência de diálise ou
                    qualquer conduta de saúde com base apenas no conteúdo do
                    site. As decisões devem considerar avaliação profissional e
                    as condições particulares do paciente.
                </p>
            </TermsSection>

            <TermsSection number={5} title="Urgências e emergências">
                <p className={paragraphClassName}>
                    O site, os formulários, a ouvidoria, o e-mail e as redes
                    sociais não são canais de urgência ou emergência e podem não
                    ser acompanhados em tempo real. Em situação com risco
                    imediato, procure um serviço de urgência ou emergência ou
                    acione o SAMU pelo número 192.
                </p>
            </TermsSection>

            <TermsSection number={6} title="Informações sobre serviços, equipe e convênios">
                <p className={paragraphClassName}>
                    A Nefruza procura manter as informações institucionais
                    corretas e atualizadas. Serviços, profissionais, horários,
                    unidades, coberturas e regras de convênios, contudo, podem
                    mudar e dependem de análise do caso, indicação clínica,
                    autorização da operadora e disponibilidade.
                </p>

                <p className={paragraphClassName}>
                    Antes de comparecer à clínica ou tomar uma decisão, confirme
                    os requisitos e a disponibilidade pelos{" "}
                    <Link href="/contato" className={linkClassName}>
                        canais oficiais de atendimento
                    </Link>
                    . A exibição de uma marca de convênio não garante cobertura
                    para todo serviço ou procedimento.
                </p>
            </TermsSection>

            <TermsSection number={7} title="Formulário de contato e canais de ouvidoria">
                <p className={paragraphClassName}>
                    O usuário é responsável pela exatidão e pertinência das
                    informações enviadas. A Nefruza poderá registrar a
                    solicitação, gerar um ticket, encaminhá-la ao setor
                    responsável e responder pelo meio informado.
                </p>

                <p className={paragraphClassName}>
                    O envio não garante resposta imediata, agendamento,
                    autorização de convênio, início de tratamento, contratação
                    ou solução favorável. A solicitação será analisada conforme
                    seu conteúdo, a competência do canal e a disponibilidade da
                    equipe.
                </p>

                <p className={paragraphClassName}>
                    Não envie resultados de exames, prontuários, diagnósticos,
                    prescrições, imagens, dados bancários ou documentos de
                    identificação pelo formulário geral, salvo quando a Nefruza
                    solicitar de modo expresso por canal apropriado.
                </p>
            </TermsSection>

            <TermsSection number={8} title="Newsletter">
                <p className={paragraphClassName}>
                    A newsletter é facultativa e depende da confirmação do
                    endereço de e-mail. O usuário pode revogar a autorização ou
                    cancelar o recebimento a qualquer momento pelo mecanismo
                    indicado nas mensagens ou pelo canal de privacidade.
                </p>

                <p className={paragraphClassName}>
                    O cadastro não garante periodicidade mínima nem o envio de
                    todo conteúdo publicado. A Nefruza pode suspender ou encerrar
                    a newsletter, preservando os pedidos de descadastramento e
                    as obrigações legais.
                </p>
            </TermsSection>

            <TermsSection number={9} title="Banco de talentos">
                <p className={paragraphClassName}>
                    O envio de currículo demonstra interesse em participar do
                    banco de talentos ou de processos seletivos, mas não cria
                    promessa de vaga, convocação, entrevista ou contratação. A
                    Nefruza poderá entrar em contato se identificar oportunidade
                    compatível.
                </p>

                <p className={paragraphClassName}>
                    O candidato deve fornecer informações verdadeiras e enviar
                    somente currículo próprio, em formato e tamanho aceitos pelo
                    formulário. Dados de terceiros, documentos desnecessários e
                    informações sensíveis sem relação com a avaliação
                    profissional não devem ser incluídos.
                </p>
            </TermsSection>

            <TermsSection number={10} title="Uso permitido e deveres do usuário">
                <p className={paragraphClassName}>
                    O usuário compromete-se a:
                </p>

                <ul className={listClassName}>
                    <li>utilizar o site de forma lícita, ética e compatível com sua finalidade;</li>
                    <li>fornecer dados verdadeiros, atuais e estritamente necessários;</li>
                    <li>respeitar direitos da Nefruza, de outros usuários e de terceiros;</li>
                    <li>não compartilhar tickets ou comunicações que contenham dados pessoais de terceiros sem autorização;</li>
                    <li>adotar cuidados razoáveis com seus dispositivos, e-mail e conexão;</li>
                    <li>comunicar falhas ou uso indevido de que tenha conhecimento.</li>
                </ul>
            </TermsSection>

            <TermsSection number={11} title="Condutas proibidas">
                <p className={paragraphClassName}>
                    É proibido:
                </p>

                <ul className={listClassName}>
                    <li>praticar atos ilícitos, fraudulentos, abusivos ou discriminatórios;</li>
                    <li>enviar conteúdo ofensivo, ameaçador, difamatório ou que viole direitos de terceiros;</li>
                    <li>usar identidade falsa, dados de outra pessoa ou documento sem autorização;</li>
                    <li>transmitir vírus, código malicioso ou conteúdo capaz de comprometer sistemas;</li>
                    <li>tentar acessar contas, áreas, bancos de dados ou servidores sem autorização;</li>
                    <li>realizar ataques, sobrecargas, varreduras ou testes de vulnerabilidade não autorizados;</li>
                    <li>coletar ou reutilizar dados e conteúdos de forma automatizada, massiva ou comercial sem base legal e autorização;</li>
                    <li>contornar medidas de segurança, limites de envio ou mecanismos de proteção contra abuso;</li>
                    <li>remover avisos de autoria, marcas ou indicações de propriedade intelectual.</li>
                </ul>

                <p className={paragraphClassName}>
                    A Nefruza poderá bloquear requisições, preservar evidências
                    e adotar as medidas técnicas e jurídicas cabíveis diante de
                    indícios de violação, respeitada a legislação aplicável.
                </p>
            </TermsSection>

            <TermsSection number={12} title="Propriedade intelectual">
                <p className={paragraphClassName}>
                    Textos, fotografias, vídeos, ilustrações, marcas, logotipos,
                    identidade visual, elementos gráficos, software e demais
                    conteúdos do site são protegidos pela legislação de
                    propriedade intelectual e pertencem à Nefruza ou são
                    utilizados com autorização.
                </p>

                <p className={paragraphClassName}>
                    O acesso permite apenas uso pessoal, informativo e não
                    comercial. Reprodução, adaptação, distribuição, publicação,
                    criação de obra derivada ou exploração comercial dependem
                    de autorização prévia, salvo uso expressamente permitido por
                    lei. Citações devem preservar o contexto e indicar a fonte.
                </p>
            </TermsSection>

            <TermsSection number={13} title="Links, mapas e serviços de terceiros">
                <p className={paragraphClassName}>
                    O site pode apresentar mapas e links para WhatsApp, redes
                    sociais, fontes de saúde ou outros ambientes externos. Esses
                    serviços são administrados por terceiros e possuem termos,
                    políticas, medidas de segurança e disponibilidade próprios.
                </p>

                <p className={paragraphClassName}>
                    A presença de um link não significa endosso irrestrito nem
                    controle da Nefruza sobre o conteúdo ou o tratamento de
                    dados do terceiro. O usuário deve avaliar as condições antes
                    de prosseguir.
                </p>
            </TermsSection>

            <TermsSection number={14} title="Disponibilidade, alterações e segurança">
                <p className={paragraphClassName}>
                    A Nefruza procura manter o site disponível e seguro, mas não
                    garante funcionamento ininterrupto ou livre de falhas. O
                    acesso poderá ser suspenso ou limitado para manutenção,
                    atualização, correção, resposta a incidente, indisponibilidade
                    de fornecedor, caso fortuito, força maior ou outra razão
                    técnica ou legal.
                </p>

                <p className={paragraphClassName}>
                    Funcionalidades e conteúdos poderão ser corrigidos,
                    substituídos ou removidos. Quando uma alteração afetar
                    direitos, consentimentos ou condições essenciais, serão
                    adotadas as comunicações exigidas pela legislação.
                </p>
            </TermsSection>

            <TermsSection number={15} title="Privacidade e proteção de dados">
                <p className={paragraphClassName}>
                    O tratamento de dados pessoais relacionado ao site está
                    descrito na{" "}
                    <Link href="/politica-de-privacidade" className={linkClassName}>
                        Política de Privacidade
                    </Link>
                    , inclusive no Anexo I — Tabela de Finalidades. O usuário
                    deve consultá-la antes de enviar informações.
                </p>
            </TermsSection>

            <TermsSection number={16} title="Responsabilidades e limites legais">
                <p className={paragraphClassName}>
                    Cada parte responde pelos danos que causar em razão de
                    conduta ilícita, descumprimento destes Termos ou violação de
                    direitos, na medida prevista pela legislação aplicável.
                </p>

                <p className={paragraphClassName}>
                    A Nefruza não se responsabiliza por decisões tomadas contra
                    orientação profissional com base exclusiva em conteúdo
                    geral do site, por falhas imputáveis ao dispositivo ou à
                    conexão do usuário, nem por ambientes externos fora de seu
                    controle. Essa previsão não afasta responsabilidade que não
                    possa ser excluída por lei.
                </p>

                <p className={paragraphClassName}>
                    Nada nestes Termos limita direitos assegurados pelo Código de
                    Defesa do Consumidor, pela LGPD ou por outras normas de ordem
                    pública aplicáveis.
                </p>
            </TermsSection>

            <TermsSection number={17} title="Alterações, legislação e solução de controvérsias">
                <p className={paragraphClassName}>
                    Estes Termos poderão ser atualizados para refletir mudanças
                    legais, técnicas ou operacionais. A versão vigente será a
                    publicada nesta página, com a respectiva data de atualização.
                </p>

                <p className={paragraphClassName}>
                    Aplicam-se as leis da República Federativa do Brasil.
                    Eventuais controvérsias serão submetidas ao foro legalmente
                    competente, preservado o direito do consumidor de propor
                    ação no foro de seu domicílio quando a lei assim assegurar.
                    Antes da via judicial, as partes podem buscar solução pelos
                    canais de atendimento da Nefruza.
                </p>
            </TermsSection>

            <TermsSection number={18} title="Contato">
                <p className={paragraphClassName}>
                    Para esclarecer dúvidas ou comunicar problemas relacionados
                    a estes Termos, envie um e-mail para{" "}
                    <a href="mailto:recep@nefruza.com.br" className={linkClassName}>
                        recep@nefruza.com.br
                    </a>{" "}
                    ou utilize a{" "}
                    <Link href="/contato" className={linkClassName}>
                        página de contato
                    </Link>
                    .
                </p>
            </TermsSection>

            <p className="border-t border-zinc-200 pt-7 text-sm leading-6 text-zinc-500">
                Última atualização: 17 de agosto de 2026.
            </p>
        </>
    );
}
