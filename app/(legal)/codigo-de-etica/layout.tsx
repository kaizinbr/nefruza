import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Código de ética para pacientes",
    description:
        "Consulte as diretrizes de conduta e respeito mútuo apresentadas pela Nefruza.",
    path: "/codigo-de-etica",
});

export default function CodigoDeEticaLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}
