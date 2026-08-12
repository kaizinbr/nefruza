import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "react-email";

interface JobApplicationMailProps {
    applicationId: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    area: string;
    linkedin?: string;
    message?: string;
    portalUrl?: string;
    submittedAt: string;
}

export default function JobApplicationMail({
    applicationId,
    name,
    email,
    phone,
    city,
    area,
    linkedin,
    message,
    portalUrl,
    submittedAt,
}: JobApplicationMailProps) {
    return (
        <Html lang="pt-BR">
            <Head />
            <Preview>
                Nova candidatura para o banco de talentos: {name}
            </Preview>
            <Body
                style={{
                    backgroundColor: "#f4f4f5",
                    color: "#18181b",
                    fontFamily: "Arial, sans-serif",
                    margin: 0,
                    padding: "32px 12px",
                }}
            >
                <Container
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        margin: "0 auto",
                        maxWidth: "620px",
                        padding: "32px",
                    }}
                >
                    <Text
                        style={{
                            color: "#db233c",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "1.4px",
                            margin: "0 0 10px",
                            textTransform: "uppercase",
                        }}
                    >
                        Banco de talentos
                    </Text>
                    <Heading
                        as="h1"
                        style={{ fontSize: "26px", margin: "0 0 24px" }}
                    >
                        Nova candidatura recebida
                    </Heading>

                    <Section
                        style={{
                            backgroundColor: "#fff1f1",
                            borderRadius: "12px",
                            padding: "20px 22px",
                        }}
                    >
                        <Text style={{ margin: "0 0 8px" }}>
                            <strong>Nome:</strong> {name}
                        </Text>
                        <Text style={{ margin: "0 0 8px" }}>
                            <strong>Área de interesse:</strong> {area}
                        </Text>
                        <Text style={{ margin: "0 0 8px" }}>
                            <strong>E-mail:</strong> {email}
                        </Text>
                        <Text style={{ margin: "0 0 8px" }}>
                            <strong>Telefone:</strong> {phone}
                        </Text>
                        <Text style={{ margin: "0 0 8px" }}>
                            <strong>Cidade:</strong> {city}
                        </Text>
                        {linkedin ? (
                            <Text style={{ margin: "0 0 8px" }}>
                                <strong>LinkedIn/portfólio:</strong> {linkedin}
                            </Text>
                        ) : null}
                        <Text style={{ margin: 0 }}>
                            <strong>Enviado em:</strong> {submittedAt}
                        </Text>
                    </Section>

                    {message ? (
                        <Section style={{ marginTop: "24px" }}>
                            <Text
                                style={{ fontWeight: 700, margin: "0 0 8px" }}
                            >
                                Apresentação
                            </Text>
                            <Text
                                style={{
                                    lineHeight: "1.6",
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {message}
                            </Text>
                        </Section>
                    ) : null}

                    <Text
                        style={{
                            color: "#71717a",
                            fontSize: "13px",
                            lineHeight: "1.6",
                            margin: "28px 0 0",
                        }}
                    >
                        O currículo em PDF está anexado a este e-mail e também
                        foi armazenado com acesso privado para consulta no portal
                        administrativo
                        {portalUrl
                            ? `: ${portalUrl}/candidaturas/${applicationId}`
                            : "."}{" "}
                        Para responder à pessoa candidata, utilize o endereço
                        informado acima.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
