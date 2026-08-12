import "server-only";

type ConfirmationResult =
    | "confirmed"
    | "already-confirmed"
    | "invalid"
    | "expired"
    | "suppressed";

function requiredEnvironment(name: string) {
    const value = process.env[name]?.trim();
    if (!value) throw new Error(`${name} não configurada.`);
    return value;
}

function getEndpoint(pathname: string) {
    const baseUrl = new URL(requiredEnvironment("NEFRUZA_PORTAL_URL"));
    if (process.env.NODE_ENV === "production" && baseUrl.protocol !== "https:") {
        throw new Error("NEFRUZA_PORTAL_URL deve utilizar HTTPS em produção.");
    }
    return new URL(pathname, `${baseUrl.origin}/`);
}

async function postToPortal<T>(pathname: string, body: unknown) {
    const response = await fetch(getEndpoint(pathname), {
        method: "POST",
        cache: "no-store",
        headers: {
            Authorization: `Bearer ${requiredEnvironment("NEWSLETTER_INTEGRATION_SECRET")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(15_000),
    });

    const result = (await response.json().catch(() => null)) as T | null;
    if (!response.ok || !result) {
        throw new Error(`A integração da newsletter respondeu com status ${response.status}.`);
    }
    return result;
}

export async function requestNewsletterSignup(input: {
    email: string;
    name?: string;
    requesterId?: string;
}) {
    await postToPortal<{ ok: true }>("/api/v1/newsletter/signup", input);
}

export async function confirmNewsletterSignup(token: string) {
    const response = await postToPortal<{ result: ConfirmationResult }>(
        "/api/v1/newsletter/confirm",
        { token },
    );
    return response.result;
}
