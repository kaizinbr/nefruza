import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Notícias",
    description: "Notícias, comunicados e novidades da Nefruza.",
    path: "/blog",
    noIndex: true,
});

export default function BlogLayout({ children }: { children: ReactNode }) {
    return children;
}
