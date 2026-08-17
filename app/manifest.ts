import type { MetadataRoute } from "next";

import { SITE_NAME } from "@/lib/site-metadata";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: SITE_NAME,
        description:
            "Informações institucionais, serviços e canais de contato da Nefruza.",
        id: "/",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#b81832",
        lang: "pt-BR",
        categories: ["health", "medical"],
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
