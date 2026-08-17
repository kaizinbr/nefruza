import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Contato",
    description: "Consulte os canais de atendimento e a localização da Nefruza.",
    path: "/contato",
});

export default function ContatoLayout({ children }: { children: ReactNode }) {
    return children;
}
