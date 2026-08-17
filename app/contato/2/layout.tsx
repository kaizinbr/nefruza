import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Contato",
    description: "Página alternativa dos canais de contato da Nefruza.",
    path: "/contato/2",
    noIndex: true,
});

export default function ContatoAlternativoLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}
