"use client";

import { useState } from "react";
import {
    Box,
    Button,
    Collapse,
    Group,
    LoadingOverlay,
    Modal,
    Stack,
    Text,
    Textarea,
    TextInput,
    UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { HiOutlineChevronDown } from "react-icons/hi";

interface ContactFormValues {
    titulo: string;
    contato: string;
    mensagem: string;
}

interface ContactFormErrors {
    titulo?: string;
    contato?: string;
    mensagem?: string;
}

const initialValues: ContactFormValues = {
    titulo: "",
    contato: "",
    mensagem: "",
};

/**
 * Stub — troque pela chamada real (server action, rota de API, etc.).
 * Deve retornar o número do ticket gerado no backend.
 */
async function submitContactForm(
    values: ContactFormValues,
): Promise<{ ticketNumber: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return {
        ticketNumber: String(Math.floor(100000 + Math.random() * 900000)),
    };
}

function validate(values: ContactFormValues): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!values.titulo.trim()) {
        errors.titulo = "Informe um título para a mensagem";
    }
    if (!values.contato.trim()) {
        errors.contato = "Informe um e-mail ou telefone para contato";
    }
    if (!values.mensagem.trim() || values.mensagem.trim().length < 10) {
        errors.mensagem = "Descreva sua mensagem com um pouco mais de detalhe";
    }

    return errors;
}

export default function FormContato() {
    const [expanded, { toggle }] = useDisclosure(false);
    const [values, setValues] = useState<ContactFormValues>(initialValues);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [ticketNumber, setTicketNumber] = useState<string | null>(null);
    const [successOpened, { open: openSuccess, close: closeSuccess }] =
        useDisclosure(false);

    const setField = (field: keyof ContactFormValues) => (value: string) => {
        setValues((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async () => {
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitError(null);
        setSubmitting(true);
        try {
            const result = await submitContactForm(values);
            setTicketNumber(result.ticketNumber);
            setValues(initialValues);
            openSuccess();
        } catch (error) {
            setSubmitError(
                "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Box pos="relative" maw="100%" w="100%" mx="auto">
            <LoadingOverlay
                visible={submitting}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2, fixed: true }}
                loaderProps={{ type: "bars" }}
            />

            {/* Ativador: apenas texto, sem estilização de botão */}
            <Group justify="center" w="100%" mb={5}>
                <UnstyledButton
                    onClick={toggle}
                    aria-expanded={expanded}
                    className={`
                            cursor-pointer text-center text-zinc-700 transition-colors hover:text-nef-600
                            flex flex-row items-center justify-between gap-8 text-sm font-bold w-full mx-auto
                        `}
                >
                    <span>
                        Não encontrou o que procurava? Preencha o formulário
                        para que possamos ajudá-lo.
                    </span>
                    <div className="text-xl bg-teste-600 text-teste-50 rounded-full p-2 flex items-center justify-center">
                        <HiOutlineChevronDown />
                    </div>
                </UnstyledButton>
            </Group>

            <Collapse expanded={expanded}>
                <Stack
                    gap="md"
                    mt="md"
                    className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                    <div>
                        <Text fw={700} size="lg" className="text-zinc-900">
                            Fale com a gente
                        </Text>
                        <Text size="sm" c="dimmed">
                            Preencha os campos abaixo, retornaremos o mais breve
                            possível.
                        </Text>
                    </div>

                    <TextInput
                        label="Título"
                        placeholder="Sobre o que você quer falar?"
                        value={values.titulo}
                        onChange={(e) =>
                            setField("titulo")(e.currentTarget.value)
                        }
                        error={errors.titulo}
                        withAsterisk
                        classNames={{ input: "!focus:border-nef-600!" }}
                    />

                    <TextInput
                        label="Contato"
                        placeholder="E-mail ou telefone"
                        value={values.contato}
                        onChange={(e) =>
                            setField("contato")(e.currentTarget.value)
                        }
                        error={errors.contato}
                        withAsterisk
                        classNames={{ input: "focus:border-nef-600" }}
                    />

                    <Textarea
                        label="Mensagem"
                        placeholder="Conte um pouco mais sobre o que você precisa"
                        value={values.mensagem}
                        onChange={(e) =>
                            setField("mensagem")(e.currentTarget.value)
                        }
                        error={errors.mensagem}
                        withAsterisk
                        autosize
                        minRows={4}
                        classNames={{ input: "focus:border-nef-600" }}
                    />

                    {submitError && (
                        <Text size="sm" c="red">
                            {submitError}
                        </Text>
                    )}

                    <Button
                        onClick={handleSubmit}
                        loading={submitting}
                        className="bg-nef-600 rounded-full py-3 font-bold text-white transition-colors hover:bg-nef-600/90"
                    >
                        Enviar mensagem
                    </Button>
                </Stack>
            </Collapse>

            <Modal
                opened={successOpened}
                onClose={closeSuccess}
                centered
                withCloseButton={false}
                radius="lg"
            >
                <Stack align="center" gap="xs" py="md">
                    <Text size="lg" fw={700}>
                        Mensagem enviada com sucesso!
                    </Text>
                    <Text size="sm" c="dimmed" ta="center">
                        Seu ticket de atendimento é
                    </Text>
                    <Text size="xl" fw={800} className="text-nef-600">
                        #{ticketNumber}
                    </Text>
                    <Text size="sm" c="dimmed" ta="center">
                        Guarde este número. Entraremos em contato em breve pelo
                        canal informado.
                    </Text>
                    <Button
                        onClick={closeSuccess}
                        mt="sm"
                        className="bg-nef-600 rounded-full px-8 font-bold text-white hover:bg-nef-600/90"
                    >
                        Fechar
                    </Button>
                </Stack>
            </Modal>
        </Box>
    );
}
