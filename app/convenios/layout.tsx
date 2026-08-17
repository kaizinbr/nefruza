import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Convênios",
    description: "Consulte os convênios apresentados pela Nefruza.",
    path: "/convenios",
});

export default function ConveniosLayout({ children }: { children: ReactNode }) {
    return children;
}
