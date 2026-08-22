import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ shorten: string }>;
}) {
    const { shorten } = await params;

    return createPageMetadata({
        title: "Notícia",
        description: "Conteúdo informativo publicado no site da Nefruza.",
        path: `/blog/${encodeURIComponent(shorten)}`,
        noIndex: true,
    });
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
    return children;
}
