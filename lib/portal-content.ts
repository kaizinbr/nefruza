import "server-only";

import { portalApiUrl } from "@/lib/portal-url";
import type {
    PortalBanner,
    PortalNews,
    PortalNewsSummary,
} from "@/lib/portal-types";

type ApiPayload<T> = { data: T };
type NewsWithLegacyIdentifier<T> = Omit<T, "shorten"> & {
    shorten?: string;
    slug?: string;
};

function normalizeShorten<T>(item: NewsWithLegacyIdentifier<T>) {
    const shorten = item.shorten?.trim() || item.slug?.trim();
    if (!shorten) return null;

    const normalized = { ...item, shorten };
    delete normalized.slug;
    return normalized as Omit<T, "shorten"> & { shorten: string };
}

async function getPortalData<T>(pathname: string): Promise<T> {
    const url = portalApiUrl(pathname);
    const response = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        throw new Error(
            `A API do portal respondeu com status ${response.status} em ${url}.`,
        );
    }

    const payload = (await response.json()) as ApiPayload<T>;
    if (typeof payload !== "object" || payload === null || !("data" in payload)) {
        throw new Error("A API do portal retornou uma resposta inválida.");
    }

    return payload.data;
}

export async function getPortalBanners() {
    try {
        const banners = await getPortalData<PortalBanner[]>("/banners");
        return Array.isArray(banners) ? banners : [];
    } catch (error) {
        console.error("Não foi possível carregar os banners do portal.", error);
        return [];
    }
}

export async function getPortalNews(limit = 50) {
    try {
        const news = await getPortalData<
            Array<NewsWithLegacyIdentifier<PortalNewsSummary>>
        >(
            `/news?limit=${Math.min(Math.max(Math.trunc(limit), 1), 100)}`,
        );
        return Array.isArray(news)
            ? news
                  .map(normalizeShorten<PortalNewsSummary>)
                  .filter((item): item is PortalNewsSummary => item !== null)
            : [];
    } catch (error) {
        console.error("Não foi possível carregar as notícias do portal.", error);
        return [];
    }
}

export async function getPortalNewsByShorten(shorten: string) {
    try {
        const news = await getPortalData<
            NewsWithLegacyIdentifier<PortalNews>
        >(
            `/news/${encodeURIComponent(shorten)}`,
        );
        return normalizeShorten<PortalNews>(news);
    } catch (error) {
        console.error(`Não foi possível carregar a notícia ${shorten}.`, error);
        return null;
    }
}
