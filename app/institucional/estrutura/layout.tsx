import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Estrutura",
    description: "Conheça os ambientes e a estrutura apresentados pela Nefruza.",
    path: "/institucional/estrutura",
});

export default function EstruturaLayout({ children }: { children: ReactNode }) {
    return children;
}
