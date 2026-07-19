"use client";

import { useState } from "react";
import {
    Box,
    Button,
    Collapse,
    Chip,
    Group,
    LoadingOverlay,
    Modal,
    Stack,
    Select,
    Text,
    Textarea,
    TextInput,
    UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { HiOutlineChevronDown } from "react-icons/hi";

import { ContactFormValues, ContactFormErrors } from "@/lib/types";
import { CONTACT_SECTORS } from "@/lib/generate-ticket";

import submitContactForm from "@/lib/submit-contact-form";

const initialValues: ContactFormValues = {
    titulo: "",
    email: "",
    tel: "",
    type: "mail",
    sector: "",
    name: "",
    mensagem: "",
};

/**
 * Stub — troque pela chamada real (server action, rota de API, etc.).
 * Deve retornar o número do ticket gerado no backend.
 */

function validate(values: ContactFormValues): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!values.titulo.trim()) {
        errors.titulo = "Informe um título para a mensagem";
    }
    if (!values.email.trim()) {
        errors.email = "Informe um e-mail ou telefone para contato";
    }
    if (!values.name.trim()) {
        errors.name = "Informe seu nome";
    }
    if (!values.mensagem.trim() || values.mensagem.trim().length < 10) {
        errors.mensagem = "Descreva sua mensagem com um pouco mais de detalhe";
    }

    return errors;
}

export default function FormOuvidoria() {
    const [expanded, { toggle }] = useDisclosure(false);
    const [values, setValues] = useState<ContactFormValues>(initialValues);
    const [type, setType] = useState<string | null>("mail");
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
            // console.log("Enviando formulário de contato:", values);
            const result = await submitContactForm(values);
            setTicketNumber(result.ticketNumber);
            setValues(initialValues);
            openSuccess();
        } catch (error) {
            console.error("Erro ao enviar formulário de contato:", error);
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
                // loaderProps={{ type: "bars" }}
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
                    <div className="text-xl bg-nef-600 text-nef-50 rounded-full p-2 flex items-center justify-center">
                        <HiOutlineChevronDown />
                    </div>
                </UnstyledButton>
            </Group>

            <Collapse expanded={expanded}>
                <Stack
                    gap="md"
                    mt="md"
                    className="border-t border-zinc-400 pt-4"
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
                        label="E-mail"
                        placeholder="nome.sobrenome@mail.com"
                        value={values.email}
                        onChange={(e) =>
                            setField("email")(e.currentTarget.value)
                        }
                        error={errors.email}
                        withAsterisk
                        classNames={{ input: "focus:border-nef-600" }}
                    />
                    <TextInput
                        label="Telefone"
                        placeholder="(XX) 9XXXX-XXXX"
                        type="tel"
                        inputMode="tel"
                        value={values.tel}
                        onChange={(e) => setField("tel")(e.currentTarget.value)}
                        error={errors.tel}
                        // withAsterisk
                        classNames={{ input: "focus:border-nef-600" }}
                    />
                    <TextInput
                        label="Nome"
                        placeholder="Como podemos te chamar?"
                        value={values.name}
                        onChange={(e) =>
                            setField("name")(e.currentTarget.value)
                        }
                        error={errors.name}
                        withAsterisk
                        classNames={{ input: "focus:border-nef-600" }}
                    />
                    <Select
                        data={Object.values(CONTACT_SECTORS).map((sector) => ({
                            value: sector.slug,
                            label: sector.label,
                        }))}
                        value={values.sector}
                        onChange={(value) => setField("sector")(value || "")}
                        label="Setor de Contato"
                        error={errors.sector}
                        withAsterisk
                    />
                    <TextInput
                        label="Título"
                        placeholder="Qual a motivação de seu contato?"
                        value={values.titulo}
                        onChange={(e) =>
                            setField("titulo")(e.currentTarget.value)
                        }
                        error={errors.titulo}
                        withAsterisk
                        classNames={{
                            input: "!border !border-zinc-300 !bg-zinc-100",
                        }}
                    />

                    <Chip.Group
                        multiple={false}
                        value={values.type}
                        onChange={(value) => setField("type")(value || "mail")}
                    >
                        <Text className="text-[14px]! text-black!">
                            Forma de contato preferida (opcional)
                        </Text>
                        <Group justify="start">
                            <Chip
                                value="mail"
                                classNames={{
                                    label: "data-checked:bg-nef-600!",
                                }}
                            >
                                E-mail
                            </Chip>
                            <Chip
                                classNames={{
                                    label: "data-checked:bg-nef-600!",
                                }}
                                value="phone"
                            >
                                Telefone
                            </Chip>
                        </Group>
                    </Chip.Group>

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
                        minRows={5}
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
                        className="bg-nef-600! rounded-full py-3 font-bold text-white transition-colors hover:bg-nef-600/90"
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
                        Você receberá esse ticket no e-mail informado. Entraremos em contato em breve para resolução.
                    </Text>
                    <Button
                        onClick={closeSuccess}
                        mt="sm"
                        className="bg-nef-600! rounded-full px-8 font-bold text-white hover:bg-nef-600/90"
                    >
                        Fechar
                    </Button>
                </Stack>
            </Modal>
        </Box>
    );
}
