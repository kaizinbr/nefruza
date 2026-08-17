import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Serviços",
    description: "Conheça os serviços apresentados pela Nefruza.",
    path: "/servicos",
});

export default function ServicosLayout({ children }: { children: ReactNode }) {
    return children;
}
