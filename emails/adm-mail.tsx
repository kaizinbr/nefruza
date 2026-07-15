// Get the full source code, including the theme and Tailwind config:
// https://github.com/resend/react-email/tree/canary/apps/demo/emails

import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "react-email";
import { barebonesBoxedTailwindConfig } from "./theme";

export default function AdmMail({
    ticket,
    name,
    mail,
    tel,
    title,
    date,
    type,
    response,
    text,
}: {
    ticket: string;
    name: string;
    mail: string;
    tel: string;
    title: string;
    date: string;
    type: string;
    response: string;
    text: string;
}) {
    return (
        <Tailwind config={barebonesBoxedTailwindConfig}>
            <Html>
                <Head>{/* <BarebonesFonts /> */}</Head>

                <Body className="bg-bg-2 m-0 text-center font-sans">
                    <Preview>Novo ticket de contato: {ticket}</Preview>
                    <Container className="mt-0 mx-auto mt-8 w-full max-w-[640px]">
                        <Section>
                            <Section className="bg-bg px-2 sm:px-6 sm:py-4">
                                <Section className="mb-3 px-6">
                                    <Row>
                                        <Column className="w-1/2 py-[7px] align-middle">
                                            <Row>
                                                <Column className="w-[32px] align-middle">
                                                    <Img
                                                        src={`https://www.nefruza.com.br/images/logo.png`}
                                                        alt=""
                                                        width={88}
                                                        className="block"
                                                    />
                                                </Column>
                                            </Row>
                                        </Column>
                                    </Row>
                                </Section>

                                <Section className="bg-bg-2 px-4 py-12 rounded-[8px] sm:px-[40px] sm:py-20 text-left">
                                    <Section className="mb-8">
                                        <Heading
                                            as="h1"
                                            className="sm:text-xl! text-lg! m-0 text-left font-sans"
                                        >
                                            Novo ticket de contato:{" "}{ticket}
                                        </Heading>
                                    </Section>
                                    <Text className="font-16 text-fg-2 mt-0 mb-6 max-w-[420px] text-left font-sans last:mb-0">
                                        Foi emitido um novo ticket de contato no
                                        site da Nefruza. Seguem as informações
                                        do ticket:
                                        <span className="font-bold">
                                            {ticket}
                                        </span>
                                    </Text>
                                    <Text className="font-16 text-fg-2 mt-0 mb-2 max-w-[420px] text-left font-sans last:mb-0">
                                        Título:{" "}
                                        <span className="font-bold">
                                            {title}
                                        </span>
                                    </Text>
                                    <Text className="font-16 text-fg-2 mt-0 mb-2 max-w-[420px] text-left font-sans last:mb-0">
                                        Categoria do contato:{" "}
                                        <span className="font-bold">
                                            {type}
                                        </span>
                                    </Text>
                                    <Text className="font-16 text-fg-2 mt-0 mb-2 max-w-[420px] text-left font-sans last:mb-0">
                                        E-mail:{" "}
                                        <span className="font-bold">
                                            {mail}
                                        </span>
                                    </Text>
                                    <Text className="font-16 text-fg-2 mt-0 mb-2 max-w-[420px] text-left font-sans last:mb-0">
                                        Telefone:{" "}
                                        <span className="font-bold">{tel}</span>
                                    </Text>
                                    <Text className="font-16 text-fg-2 mt-0 mb-2 max-w-[420px] text-left font-sans last:mb-0">
                                        Data do ticket:{" "}
                                        <span className="font-bold">
                                            {date}
                                        </span>
                                    </Text>
                                    <Text className="font-16 text-fg-2 mt-0 mb-2 max-w-[420px] text-left font-sans last:mb-0">
                                        Meio de contato:{" "}
                                        <span className="font-bold">
                                            {response}
                                        </span>
                                    </Text>
                                    <Text className="font-16 text-fg-2 mt-0 mb-2 max-w-[420px] text-left font-sans last:mb-0">
                                        Mensagem:{" "}
                                        <span className="font-bold">
                                            {text}
                                        </span>
                                    </Text>

                                    <Text className="font-13 text-fg-3 mt-8 mb-0 text-left font-sans">
                                        Lembre-se de responder o ticket dentro
                                        do prazo estipulado para garantir a
                                        satisfação do cliente,
                                        <br />
                                        Nefruza - Equipe de Suporte
                                    </Text>
                                </Section>

                                {/* Footer */}
                                <Section className="bg-bg">
                                    <Row>
                                        <Column className="px-6 py-10 text-center">
                                            <Img
                                                src={`https://www.nefruza.com.br/images/logo.png`}
                                                alt=""
                                                width={264}
                                                className="block mx-auto"
                                            />
                                            <Text className="font-13 text-fg-3 mx-auto mt-0 mb-2 max-w-[280px] text-center font-sans">
                                                Nefruza Serviços Nefrológicos
                                                Fiúza Chaves Ltda.
                                            </Text>
                                            <Link
                                                href="https://www.nefruza.com.br/"
                                                className="inline-block px-2 align-middle"
                                            >
                                                nefruza.com.br
                                            </Link>
                                        </Column>
                                    </Row>
                                </Section>
                            </Section>
                        </Section>
                    </Container>
                </Body>
            </Html>
        </Tailwind>
    );
}

function NumberedStep({
    n,
    title,
    body,
    last,
}: {
    n: string;
    title: string;
    body: string;
    last?: boolean;
}) {
    return (
        <Row className={last ? undefined : "mb-9"}>
            <Column className="pr-3 w-6 align-top">
                <Section className="border-stroke-strong bg-[#ee4554] py-1 border border-solid rounded-[10px] w-7 text-center">
                    <Text className="m-0 font-sans font-normal text-fg text-white text-sm leading-5">
                        {n}
                    </Text>
                </Section>
            </Column>
            <Column className="pr-4 align-top">
                <Text className="mt-0 mb-1 font-sans font-semibold text-fg text-base text-left">
                    {title}
                </Text>
                <Text className="m-0 font-16 font-sans text-fg-2 text-left">
                    {body}
                </Text>
            </Column>
        </Row>
    );
}

function BulletCell({ isLast }: { isLast?: boolean }) {
    return (
        <Column
            className={`!block !w-full !max-w-full w-1/2 pr-8 align-top pr-0${isLast ? "" : " mb-8"}`}
        >
            <Text className="mt-0 mb-5">
                <span className="inline-block border-stroke-strong border border-solid rounded-lg size-6 text-[1px] align-middle leading-6">
                    &nbsp;
                </span>
            </Text>
            <Text className="m-0 !max-w-full font-16 font-sans text-fg-2 text-left">
                These updates roll out gradually. Check your workspace to see
                what&apos;s available to you today.
            </Text>
        </Column>
    );
}
