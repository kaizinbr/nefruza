import type { Metadata } from "next";

export const SITE_URL = "https://www.nefruza.com.br";
export const SITE_NAME = "Nefruza";

type PageMetadataOptions = {
    title: string;
    description: string;
    path: string;
    noIndex?: boolean;
};

export function createPageMetadata({
    title,
    description,
    path,
    noIndex = false,
}: PageMetadataOptions): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`;

    return {
        title: fullTitle,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: path,
            siteName: SITE_NAME,
            locale: "pt_BR",
            type: "website",
        },
        ...(noIndex
            ? {
                  robots: {
                      index: false,
                      follow: false,
                      noarchive: true,
                  },
              }
            : {}),
    };
}
