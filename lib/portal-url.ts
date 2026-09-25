import "server-only";

// const productionPortalUrl = "http://192.168.18.152:3001";
const productionPortalUrl = "https://www.adm.nefruza.com.br";

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
