import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "História",
    description: "Página institucional reservada à história da Nefruza.",
    path: "/institucional/historia",
    noIndex: true,
});

export default function HistoriaLayout({ children }: { children: ReactNode }) {
    return children;
}
