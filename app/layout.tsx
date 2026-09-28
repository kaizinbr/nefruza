import type { Metadata } from "next";
import "@mantine/core/styles.css";

import { Fustat, Nata_Sans } from "next/font/google";
import "./globals.css";
import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from "@mantine/core";
import Navbar from "@/components/core/navbar";
import Footer from "@/components/core/footer";
import { SITE_NAME, SITE_URL } from "@/lib/site-metadata";

const fustat = Fustat({
    variable: "--font-fustat",
    subsets: ["latin"],
});

const nataSans = Nata_Sans({
    variable: "--font-nata-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Nefruza | Serviços nefrológicos em João Pessoa",
    description:
        "Informações institucionais, serviços, convênios, equipe e canais de contato da Nefruza em João Pessoa.",
    applicationName: SITE_NAME,
    alternates: {
        canonical: "/",
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
        title: "Nefruza | Serviços nefrológicos em João Pessoa",
        description:
            "Informações institucionais, serviços, convênios, equipe e canais de contato da Nefruza em João Pessoa.",
        url: "/",
        siteName: SITE_NAME,
        locale: "pt_BR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: [
        {
            rel: "icon",
            url: "/seo/favicon-light.ico",
            media: "(prefers-color-scheme: dark)",
        },
        {
            rel: "icon",
            url: "/seo/favicon-dark.ico",
            media: "(prefers-color-scheme: light)",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-br"
            className={`${fustat.variable} ${nataSans.variable} h-full antialiased`}
            {...mantineHtmlProps}
        >
            <head>
                <ColorSchemeScript />
                <meta name="apple-mobile-web-app-title" content="Nefruza" />
            </head>
            <body className="min-h-full flex flex-col scroll-smooth">
                <MantineProvider>
                    {/* <SmoothWrapper> */}
                    <Navbar />
                    {children}
                    {/* </SmoothWrapper> */}
                </MantineProvider>
                <Footer />
            </body>
        </html>
    );
}
