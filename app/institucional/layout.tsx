import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Institucional",
    description: "Conheça a Nefruza e suas informações institucionais.",
    path: "/institucional",
});

export default function InstitucionalLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}
