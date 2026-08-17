import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Equipe",
    description: "Conheça a equipe multidisciplinar apresentada pela Nefruza.",
    path: "/equipe",
});

export default function EquipeLayout({ children }: { children: ReactNode }) {
    return children;
}
