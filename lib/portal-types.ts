export type PortalBanner = {
    altText: string;
    description: string | null;
    desktopImageUrl: string;
    destinationUrl: string;
    id: string;
    mobileImageUrl: string;
    name: string;
    openInNewTab: boolean;
    order: number;
};

export type PortalTag = {
    name: string;
    slug: string;
};

export type PortalNewsSummary = {
    author: { name: string } | null;
    coverImageUrl: string | null;
    excerpt: string | null;
    id: string;
    publishedAt: string | null;
    shorten: string;
    tags: PortalTag[];
    title: string;
    updatedAt: string;
};

export type PortalRichTextNode = {
    attrs?: Record<string, unknown>;
    content?: PortalRichTextNode[];
    marks?: Array<{
        attrs?: Record<string, unknown>;
        type?: string;
    }>;
    text?: string;
    type?: string;
};

export type PortalNews = Omit<PortalNewsSummary, "author"> & {
    author: {
        bio: string | null;
        imageUrl: string | null;
        name: string;
        professionalTitle: string | null;
        registrationNumber: string | null;
        registrationType: string | null;
        specialty: string | null;
    } | null;
    content: PortalRichTextNode;
};
