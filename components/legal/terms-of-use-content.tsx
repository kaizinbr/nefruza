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

function TermsSection({
    number,
    title,
    children,
}: TermsSectionProps) {
    const headingId = `termos-secao-${number}`;

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
                Estes Termos de Uso estabelecem as condições para acesso e
                utilização do site da Nefruza Serviços Nefrológicos Fiúza
                Chaves Ltda. (“Nefruza”). Ao navegar pelo site ou utilizar suas
                funcionalidades, o usuário declara que leu e compreendeu estas
                condições.
            </p>

            <p className={paragraphClassName}>
                Caso não concorde com estes Termos, o usuário deverá interromper
                a utilização do site. O acesso também está sujeito à{" "}
                <Link
                    href="/politica-de-privacidade"
                    className={linkClassName}
                >
                    Política de Privacidade
                </Link>{" "}
                da Nefruza.
            </p>

            <TermsSection number={1} title="Finalidade e abrangência">
                <p className={paragraphClassName}>
                    O site tem caráter institucional e informativo. Seu objetivo
                    é apresentar a Nefruza, seus serviços, equipe, convênios,
                    notícias, canais de contato e demais informações
                    relacionadas às suas atividades.
                </p>

                <p className={paragraphClassName}>
                    Estes Termos regulam somente a utilização do site e de suas
                    funcionalidades digitais. Atendimentos, procedimentos e
                    demais serviços de saúde poderão estar sujeitos a
                    documentos, orientações e condições específicas.
                </p>
            </TermsSection>

            <TermsSection number={2} title="Informações de saúde">
                <p className={paragraphClassName}>
                    O conteúdo publicado no site possui finalidade informativa e
                    não substitui consulta, diagnóstico, prescrição, tratamento
                    ou acompanhamento realizado por profissional de saúde
                    habilitado.
                </p>

                <p className={paragraphClassName}>
                    O site e o formulário geral de contato não são canais de
                    urgência ou emergência. Em situações que exijam atendimento
                    imediato, o usuário deve procurar um serviço de emergência
                    adequado.
                </p>

                <p className={paragraphClassName}>
                    Informações sobre serviços, equipe, horários e convênios
                    podem ser atualizadas. Antes de tomar decisões ou comparecer
                    à clínica, confirme os dados pelos canais oficiais da
                    Nefruza.
                </p>
            </TermsSection>

            <TermsSection number={3} title="Utilização permitida">
                <p className={paragraphClassName}>
                    O usuário deverá utilizar o site de forma lícita, ética e
                    compatível com sua finalidade. Ao acessar ou interagir com
                    as funcionalidades, compromete-se a:
                </p>

                <ul className={listClassName}>
                    <li>
                        respeitar a legislação aplicável, estes Termos e a
                        Política de Privacidade;
                    </li>
                    <li>
                        fornecer informações verdadeiras, atualizadas e
                        suficientes quando utilizar os canais de contato;
                    </li>
                    <li>
                        utilizar dispositivos, navegadores e conexões com
                        condições adequadas de segurança;
                    </li>
                    <li>
                        respeitar os direitos da Nefruza, de outros usuários e
                        de terceiros;
                    </li>
                    <li>
                        comunicar eventuais falhas ou usos indevidos de que tenha
                        conhecimento.
                    </li>
                </ul>
            </TermsSection>

            <TermsSection number={4} title="Condutas proibidas">
                <p className={paragraphClassName}>
                    É vedado utilizar o site para:
                </p>

                <ul className={listClassName}>
                    <li>praticar atos ilícitos, fraudulentos ou abusivos;</li>
                    <li>
                        transmitir vírus, códigos maliciosos ou qualquer recurso
                        capaz de comprometer a segurança ou o funcionamento do
                        site;
                    </li>
                    <li>
                        tentar acessar áreas, sistemas, contas, servidores ou
                        dados sem autorização;
                    </li>
                    <li>
                        interferir na disponibilidade do site, realizar ataques,
                        sobrecargas ou testes de vulnerabilidade não
                        autorizados;
                    </li>
                    <li>
                        utilizar identidades falsas ou se passar por outra
                        pessoa;
                    </li>
                    <li>
                        enviar conteúdo ofensivo, discriminatório, ameaçador,
                        difamatório ou que viole direitos de terceiros;
                    </li>
                    <li>
                        copiar, extrair ou reutilizar conteúdos de forma
                        automatizada, massiva ou comercial sem autorização;
                    </li>
                    <li>
                        remover avisos de autoria, marcas ou indicações de
                        propriedade intelectual.
                    </li>
                </ul>
            </TermsSection>

            <TermsSection number={5} title="Formulários e canais de contato">
                <p className={paragraphClassName}>
                    Para utilizar o formulário de contato, o usuário deverá
                    fornecer as informações solicitadas e será responsável pela
                    veracidade do conteúdo enviado. A Nefruza poderá encaminhar
                    a solicitação ao setor responsável e enviar uma confirmação
                    com o respectivo número de ticket.
                </p>

                <p className={paragraphClassName}>
                    O envio do formulário não garante resposta imediata,
                    agendamento, confirmação de atendimento ou contratação de
                    serviço. Solicitações dependem de análise e disponibilidade
                    da equipe responsável.
                </p>

                <p className={paragraphClassName}>
                    Não envie pelo formulário geral resultados de exames,
                    documentos médicos ou dados pessoais sensíveis, salvo quando
                    isso for necessário e expressamente solicitado pela Nefruza
                    por um canal apropriado.
                </p>
            </TermsSection>

            <TermsSection number={6} title="Disponibilidade do site">
                <p className={paragraphClassName}>
                    A Nefruza busca manter o site disponível e atualizado.
                    Entretanto, o acesso poderá ser interrompido, suspenso ou
                    limitado para manutenção, atualização, correção de falhas,
                    eventos de segurança, indisponibilidade de fornecedores ou
                    situações fora de seu controle.
                </p>

                <p className={paragraphClassName}>
                    Funcionalidades poderão ser alteradas, substituídas ou
                    removidas para aprimorar o serviço, corrigir problemas ou
                    atender exigências legais e operacionais.
                </p>
            </TermsSection>

            <TermsSection number={7} title="Propriedade intelectual">
                <p className={paragraphClassName}>
                    Textos, fotografias, ilustrações, vídeos, identidade visual,
                    marcas, logotipos, elementos gráficos, código e demais
                    conteúdos disponibilizados no site são protegidos pela
                    legislação de propriedade intelectual e pertencem à Nefruza
                    ou são utilizados mediante autorização.
                </p>

                <p className={paragraphClassName}>
                    O acesso ao site não transfere ao usuário qualquer direito
                    sobre esses conteúdos. É permitida a visualização e o uso
                    pessoal, informativo e não comercial. Reprodução,
                    modificação, distribuição, publicação ou exploração
                    comercial dependem de autorização prévia, salvo nas
                    hipóteses permitidas por lei.
                </p>
            </TermsSection>

            <TermsSection number={8} title="Links e serviços de terceiros">
                <p className={paragraphClassName}>
                    O site pode conter mapas, conteúdos incorporados e links
                    para WhatsApp, redes sociais ou outros serviços externos.
                    Esses ambientes são administrados por terceiros e possuem
                    termos, políticas e práticas próprias.
                </p>

                <p className={paragraphClassName}>
                    A disponibilização de um link não representa controle,
                    garantia ou responsabilidade da Nefruza sobre o conteúdo, a
                    disponibilidade ou as práticas do serviço externo. O usuário
                    deve analisar as condições aplicáveis antes de utilizá-lo.
                </p>
            </TermsSection>

            <TermsSection number={9} title="Privacidade e proteção de dados">
                <p className={paragraphClassName}>
                    O tratamento de dados pessoais relacionado à utilização do
                    site está descrito na{" "}
                    <Link
                        href="/politica-de-privacidade"
                        className={linkClassName}
                    >
                        Política de Privacidade
                    </Link>
                    , que integra estes Termos de Uso.
                </p>
            </TermsSection>

            <TermsSection number={10} title="Responsabilidades">
                <p className={paragraphClassName}>
                    A Nefruza é responsável pelas informações institucionais que
                    publica e buscará corrigir erros de que tenha conhecimento.
                    Conteúdos assinados, opiniões e materiais de terceiros são
                    de responsabilidade de seus respectivos autores, observadas
                    as obrigações legais aplicáveis.
                </p>

                <p className={paragraphClassName}>
                    O usuário é responsável pelo uso que fizer das informações,
                    pelos dados que enviar e por manter a segurança de seus
                    dispositivos e conexões.
                </p>

                <p className={paragraphClassName}>
                    Nada nestes Termos limita direitos assegurados pela
                    legislação brasileira nem exclui responsabilidades que não
                    possam ser legalmente afastadas.
                </p>
            </TermsSection>

            <TermsSection number={11} title="Crianças e adolescentes">
                <p className={paragraphClassName}>
                    Crianças e adolescentes devem utilizar os canais digitais da
                    Nefruza com a participação e supervisão de seus pais ou
                    responsáveis legais. O envio de dados deve observar o melhor
                    interesse do menor e se limitar ao necessário para a
                    solicitação.
                </p>
            </TermsSection>

            <TermsSection number={12} title="Alterações dos Termos">
                <p className={paragraphClassName}>
                    Estes Termos poderão ser atualizados para refletir mudanças
                    no site, nos serviços, nos processos internos ou na
                    legislação. A versão vigente será aquela publicada nesta
                    página, com a indicação da data da última atualização.
                </p>
            </TermsSection>

            <TermsSection number={13} title="Legislação aplicável">
                <p className={paragraphClassName}>
                    Estes Termos são regidos pela legislação da República
                    Federativa do Brasil. Eventuais controvérsias serão tratadas
                    no foro legalmente competente, preservados os direitos e as
                    garantias previstos na legislação de proteção ao
                    consumidor, quando aplicável.
                </p>
            </TermsSection>

            <TermsSection number={14} title="Contato e suporte">
                <p className={paragraphClassName}>
                    Para esclarecer dúvidas, comunicar problemas ou solicitar
                    informações sobre estes Termos, envie um e-mail para{" "}
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
                    A Nefruza está localizada na Avenida Sinésio Guimarães, 290,
                    Torre, João Pessoa — PB, CEP 58040-400.
                </p>
            </TermsSection>

            <p className="border-t border-zinc-200 pt-7 text-sm leading-6 text-zinc-500">
                Última atualização: 28 de julho de 2026.
            </p>
        </>
    );
}
