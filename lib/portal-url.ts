import "server-only";

const productionPortalUrl = "https://nefruza-adm.vercel.app";

export function portalApiUrl(pathname: string) {
    const configuredUrl =
        process.env.NEFRUZA_PORTAL_API_URL?.trim() ||
        productionPortalUrl;
    const baseUrl = configuredUrl.replace(/\/$/, "");
    const apiBase = baseUrl.endsWith("/api/v1")
        ? baseUrl
        : `${baseUrl}/api/v1`;

    return `${apiBase}/${pathname.replace(/^\//, "")}`;
}
