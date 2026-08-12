"use client";

import type { JobApplicationState } from "@/lib/job-application-types";
import submitJobApplication from "@/lib/submit-job-application";
import Link from "next/link";
import { useActionState, useState } from "react";
import { LuCheck, LuFileText, LuUpload } from "react-icons/lu";

const initialState: JobApplicationState = {
    success: false,
    message: "",
};

const fieldClassName =
    "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-nef-600 focus:ring-2 focus:ring-nef-600/15 disabled:cursor-not-allowed disabled:bg-zinc-100";

function FieldError({ message }: { message?: string }) {
    return message ? (
        <p className="mt-2 text-sm font-medium text-nef-700">{message}</p>
    ) : null;
}

export default function ApplicationForm() {
    const [state, formAction, pending] = useActionState(
        submitJobApplication,
        initialState,
    );
    const [fileName, setFileName] = useState("");
    const [clientFileError, setClientFileError] = useState("");

    if (state.success) {
        return (
            <div
                aria-live="polite"
                className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-emerald-50 px-6 py-10 text-center text-emerald-900"
            >
                <span className="flex size-14 items-center justify-center rounded-full bg-emerald-100">
                    <LuCheck aria-hidden="true" size={26} />
                </span>
                <h3 className="mt-5 font-title text-2xl font-semibold">
                    Currículo recebido
                </h3>
                <p className="mt-3 max-w-md leading-7">{state.message}</p>
            </div>
        );
    }

    return (
        <form action={formAction} className="space-y-6">
            <div
                aria-hidden="true"
                className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
            >
                <label>
                    Website
                    <input
                        autoComplete="off"
                        name="website"
                        tabIndex={-1}
                        type="text"
                    />
                </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-zinc-800">
                    Nome completo
                    <input
                        className={fieldClassName}
                        type="text"
                        name="name"
                        autoComplete="name"
                        maxLength={120}
                        required
                        disabled={pending}
                    />
                    <FieldError message={state.fieldErrors?.name} />
                </label>

                <label className="block text-sm font-semibold text-zinc-800">
                    E-mail
                    <input
                        className={fieldClassName}
                        type="email"
                        name="email"
                        autoComplete="email"
                        maxLength={160}
                        required
                        disabled={pending}
                    />
                    <FieldError message={state.fieldErrors?.email} />
                </label>

                <label className="block text-sm font-semibold text-zinc-800">
                    Telefone com DDD
                    <input
                        className={fieldClassName}
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        maxLength={30}
                        placeholder="(83) 99999-9999"
                        required
                        disabled={pending}
                    />
                    <FieldError message={state.fieldErrors?.phone} />
                </label>

                <label className="block text-sm font-semibold text-zinc-800">
                    Cidade
                    <input
                        className={fieldClassName}
                        type="text"
                        name="city"
                        autoComplete="address-level2"
                        maxLength={100}
                        required
                        disabled={pending}
                    />
                    <FieldError message={state.fieldErrors?.city} />
                </label>
            </div>

            <label className="block text-sm font-semibold text-zinc-800">
                Área de interesse
                <select
                    className={fieldClassName}
                    name="area"
                    defaultValue=""
                    required
                    disabled={pending}
                >
                    <option value="" disabled>
                        Selecione uma área
                    </option>
                    <option value="assistencial">
                        Assistencial e enfermagem
                    </option>
                    <option value="administrativa">Administrativa</option>
                    <option value="atendimento">
                        Atendimento e recepção
                    </option>
                    <option value="clinica">Corpo clínico</option>
                    <option value="multiprofissional">
                        Equipe multiprofissional
                    </option>
                    <option value="operacional">Serviços operacionais</option>
                    <option value="outra">Outra área</option>
                </select>
                <FieldError message={state.fieldErrors?.area} />
            </label>

            <label className="block text-sm font-semibold text-zinc-800">
                LinkedIn ou portfólio
                <span className="ml-2 font-normal text-zinc-500">
                    (opcional)
                </span>
                <input
                    className={fieldClassName}
                    type="text"
                    name="linkedin"
                    inputMode="url"
                    maxLength={300}
                    placeholder="linkedin.com/in/seu-perfil"
                    disabled={pending}
                />
                <FieldError message={state.fieldErrors?.linkedin} />
            </label>

            <label className="block text-sm font-semibold text-zinc-800">
                Conte um pouco sobre você
                <span className="ml-2 font-normal text-zinc-500">
                    (opcional)
                </span>
                <textarea
                    className={`${fieldClassName} min-h-32 resize-y`}
                    name="message"
                    maxLength={2000}
                    placeholder="Compartilhe sua experiência, formação ou objetivo profissional."
                    disabled={pending}
                />
                <FieldError message={state.fieldErrors?.message} />
            </label>

            <div>
                <span className="block text-sm font-semibold text-zinc-800">
                    Currículo em PDF
                </span>
                <label
                    className={`mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-8 text-center transition sm:flex-row sm:text-left ${
                        fileName
                            ? "border-nef-500 bg-nef-50"
                            : "border-zinc-300 bg-white hover:border-nef-400 hover:bg-nef-50/50"
                    } ${pending ? "pointer-events-none opacity-60" : ""}`}
                >
                    <input
                        className="sr-only"
                        type="file"
                        name="resume"
                        accept=".pdf,application/pdf"
                        required
                        disabled={pending}
                        onChange={(event) => {
                            const file = event.currentTarget.files?.[0];
                            setClientFileError("");
                            setFileName(file?.name ?? "");

                            if (file && file.size > 5 * 1024 * 1024) {
                                setClientFileError(
                                    "O currículo deve ter no máximo 5 MB.",
                                );
                            } else if (
                                file &&
                                file.type &&
                                file.type !== "application/pdf"
                            ) {
                                setClientFileError(
                                    "Envie um arquivo no formato PDF.",
                                );
                            }
                        }}
                    />
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-nef-100 text-nef-700">
                        {fileName ? (
                            <LuFileText aria-hidden="true" size={22} />
                        ) : (
                            <LuUpload aria-hidden="true" size={22} />
                        )}
                    </span>
                    <span className="mt-4 sm:ml-4 sm:mt-0">
                        <strong className="block text-zinc-900">
                            {fileName || "Selecione seu currículo"}
                        </strong>
                        <span className="mt-1 block text-sm font-normal text-zinc-500">
                            Apenas PDF, com no máximo 5 MB
                        </span>
                    </span>
                </label>
                <FieldError
                    message={clientFileError || state.fieldErrors?.resume}
                />
            </div>

            <div>
                <label className="flex items-start gap-3 text-sm leading-6 text-zinc-600">
                    <input
                        className="mt-1 size-4 shrink-0 accent-nef-600"
                        type="checkbox"
                        name="privacy"
                        value="accepted"
                        required
                        disabled={pending}
                    />
                    <span>
                        Autorizo o tratamento dos meus dados para participação
                        em processos seletivos da Nefruza, conforme a{" "}
                        <Link
                            href="/politica-de-privacidade"
                            target="_blank"
                            className="font-semibold text-nef-700 underline underline-offset-2 hover:text-nef-900"
                        >
                            Política de Privacidade
                        </Link>
                        .
                    </span>
                </label>
                <FieldError message={state.fieldErrors?.privacy} />
            </div>

            {state.message ? (
                <div
                    aria-live="polite"
                    className={`flex items-start gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        state.success
                            ? "bg-emerald-50 text-emerald-800"
                            : "bg-nef-50 text-nef-800"
                    }`}
                >
                    {state.success ? (
                        <LuCheck
                            aria-hidden="true"
                            className="mt-0.5 shrink-0"
                            size={18}
                        />
                    ) : null}
                    <span>{state.message}</span>
                </div>
            ) : null}

            <button
                type="submit"
                disabled={pending || Boolean(clientFileError)}
                className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-nef-700 px-7 py-3 font-bold text-white transition hover:bg-nef-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
                {pending ? "Enviando currículo..." : "Enviar currículo"}
            </button>
        </form>
    );
}
