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
    Text,
    Button,
    Hr,
} from "react-email";

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
        <Html lang="pt-BR">
                <Head />
                <Preview>Novo ticket de contato: {ticket}</Preview>

                <Body style={styles.body}>
                    <Container style={styles.container}>
                        <Section style={styles.header}>
                            <Img
                                src="https://www.nefruza.com.br/logo%20branca.webp"
                                alt="Nefruza"
                                width="120"
                            />
                        </Section>
                        <Section>
                            <Section style={styles.content}>
                                <Text style={styles.eyebrow}>CONTATOS</Text>

                                <Heading style={styles.heading}>
                                    Novo ticket de contato: {ticket}
                                </Heading>
                                    <Text style={styles.paragraph}>
                                        Foi emitido um novo ticket de contato no
                                        sistema. Seguem as informações do
                                        ticket:
                                    </Text>

                                <Section style={styles.card}>
                                    <Text style={styles.paragraph}>
                                        <strong>Nome:</strong> {name}
                                    </Text>
                                    <Text style={styles.paragraph}>
                                        <strong>Email:</strong> {mail}
                                    </Text>
                                    <Text style={styles.paragraph}>
                                        <strong>Telefone:</strong> {tel}
                                    </Text>
                                    <Text style={styles.paragraph}>
                                        <strong>Título:</strong> {title}
                                    </Text>
                                    <Text style={styles.paragraph}>
                                        <strong>Data:</strong> {date}
                                    </Text>
                                    <Text style={styles.paragraph}>
                                        <strong>Tipo:</strong> {type}
                                    </Text>
                                    <Text style={styles.paragraph}>
                                        <strong>Resposta:</strong> {response}
                                    </Text>
                                    <Text style={styles.paragraph}>
                                        <strong>Texto:</strong> {text}
                                    </Text>
                                </Section>
                                <Hr style={styles.divider} />

                                <Text style={styles.footer}>
                                    Nefruza Serviços Nefrológicos Fiúza Chaves
                                </Text>
                                <Link href="https://www.nefruza.com" style={styles.footer}>
                                    nefruza.com.br
                                </Link>
                            </Section>
                        </Section>
                    </Container>
                </Body>
            </Html>
    );
}

const styles = {
    body: {
        backgroundColor: "#f4f4f5",
        color: "#27272a",
        fontFamily: "Nata sans, Arial, sans-serif",
        margin: 0,
        padding: "32px 12px",
    },
    container: {
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        margin: "0 auto",
        maxWidth: "600px",
        overflow: "hidden",
    },
    header: {
        backgroundColor: "#b81832",
        padding: "24px 32px",
    },
    brand: {
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: "700",
        letterSpacing: "0.08em",
        margin: 0,
    },
    content: {
        padding: "40px 32px",
    },
    eyebrow: {
        color: "#b81832",
        fontSize: "12px",
        fontWeight: "700",
        letterSpacing: "0.12em",
        margin: "0 0 12px",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "16px",
        marginBottom: "16px",
    },
    subtitle: {
        color: "#52525b",
        fontSize: "14px",
        lineHeight: "22px",
        margin: "0 0 16px",
    },
    heading: {
        color: "#18181b",
        fontSize: "22px",
        fontWeight: "700",
        lineHeight: "36px",
        margin: "0 0 24px",
    },
    paragraph: {
        color: "#52525b",
        fontSize: "16px",
        lineHeight: "26px",
        margin: "0 0 18px",
    },
    button: {
        backgroundColor: "#b81832",
        borderRadius: "999px",
        color: "#ffffff",
        display: "inline-block",
        fontSize: "15px",
        fontWeight: "700",
        margin: "12px 0 24px",
        padding: "14px 24px",
        textDecoration: "none",
    },
    secondaryText: {
        color: "#71717a",
        fontSize: "13px",
        lineHeight: "21px",
        margin: 0,
    },
    card: {
        backgroundColor: "#fff1f1",
        borderRadius: "12px",
        padding: "20px 22px",
    },
    divider: {
        borderColor: "#e4e4e7",
        margin: "32px 0 24px",
    },
    footer: {
        color: "#71717a",
        fontSize: "12px",
        lineHeight: "19px",
        margin: "0 0 4px 0",
    },
    footerLink: {
        color: "#b81832",
        textDecoration: "none",
        fontSize: "12px",
        lineHeight: "19px",
        margin: 0,
    },
} satisfies Record<string, React.CSSProperties>;
