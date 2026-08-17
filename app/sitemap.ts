import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site-metadata";

const lastContentReview = new Date("2026-08-17T00:00:00-03:00");

const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/institucional", changeFrequency: "monthly", priority: 0.8 },
    {
        path: "/institucional/estrutura",
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        path: "/institucional/proposito-e-valores",
        changeFrequency: "yearly",
        priority: 0.6,
    },
    { path: "/equipe", changeFrequency: "monthly", priority: 0.7 },
    { path: "/servicos", changeFrequency: "monthly", priority: 0.8 },
    { path: "/convenios", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contato", changeFrequency: "monthly", priority: 0.8 },
    {
        path: "/contato/ouvidoria",
        changeFrequency: "yearly",
        priority: 0.5,
    },
    {
        path: "/trabalhe-conosco",
        changeFrequency: "monthly",
        priority: 0.5,
    },
    {
        path: "/perguntas-frequentes",
        changeFrequency: "monthly",
        priority: 0.6,
    },
    {
        path: "/politica-de-privacidade",
        changeFrequency: "yearly",
        priority: 0.3,
    },
    {
        path: "/termos-de-uso",
        changeFrequency: "yearly",
        priority: 0.3,
    },
    {
        path: "/codigo-de-etica",
        changeFrequency: "yearly",
        priority: 0.4,
    },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map(({ path, changeFrequency, priority }) => ({
        url: new URL(path, SITE_URL).toString(),
        lastModified: lastContentReview,
        changeFrequency,
        priority,
    }));
}
