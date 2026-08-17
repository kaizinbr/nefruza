import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Propósito e valores",
    description: "Conheça o propósito e os valores apresentados pela Nefruza.",
    path: "/institucional/proposito-e-valores",
});

export default function PropositoEValoresLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}
