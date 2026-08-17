import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Ouvidoria",
    description: "Conheça os canais de ouvidoria disponibilizados pela Nefruza.",
    path: "/contato/ouvidoria",
});

export default function OuvidoriaLayout({ children }: { children: ReactNode }) {
    return children;
}
