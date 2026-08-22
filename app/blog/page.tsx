import Image from "next/image";
import Link from "next/link";

import { getPortalNews } from "@/lib/portal-content";
import type { PortalNewsSummary, PortalTag } from "@/lib/portal-types";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Fortaleza",
});

function newsDate(news: PortalNewsSummary) {
    return dateFormatter.format(new Date(news.publishedAt ?? news.updatedAt));
}

function NewsCard({ news }: { news: PortalNewsSummary }) {
    return (
        <Link
            href={`/blog/${news.shorten}`}
            className="group flex w-full flex-none flex-col transition-all md:w-[45%] lg:w-[31%]"
        >
            <div className="relative flex aspect-5/3 max-h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-nef-50">
                <Image
                    src={news.coverImageUrl || "/img/placeholder.webp"}
                    alt={news.coverImageUrl ? news.title : ""}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 31vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="mt-4 flex flex-1 flex-col items-start justify-between">
                <div>
                    <span className="text-xs font-bold uppercase text-nef-600">
                        {newsDate(news)}
                        {news.tags.length > 0 && ` · ${news.tags.map((tag) => tag.name).join(", ")}`}
                    </span>
                    <h2 className="mt-1 mb-2 line-clamp-2 text-lg font-bold text-nef-700">
                        {news.title}
                    </h2>
                    {news.excerpt && (
                        <p className="mb-4 line-clamp-4 text-sm text-muted-foreground">
                            {news.excerpt}
                        </p>
                    )}
                </div>
                <span className="flex flex-row gap-2 font-bold text-nef-600 transition-colors">
                    Leia mais
                    <span className="relative transition-all duration-300 group-hover:translate-x-2">
                        →
                    </span>
                </span>
            </div>
        </Link>
    );
}

function uniqueTags(news: PortalNewsSummary[]) {
    const tags = new Map<string, PortalTag>();
    for (const item of news) {
        for (const tag of item.tags) tags.set(tag.slug, tag);
    }
    return [...tags.values()].sort((a, b) =>
        a.name.localeCompare(b.name, "pt-BR"),
    );
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{
        category?: string | string[];
        gategory?: string | string[];
    }>;
}) {
    const [allNews, query] = await Promise.all([getPortalNews(100), searchParams]);
    const requestedCategory = query.category ?? query.gategory ?? "";
    const activeCategory = (
        Array.isArray(requestedCategory) ? requestedCategory[0] : requestedCategory
    ).toLowerCase();
    const tags = uniqueTags(allNews);
    const news = activeCategory
        ? allNews.filter((item) =>
              item.tags.some((tag) => tag.slug === activeCategory),
          )
        : allNews;

    return (
        <div className="flex flex-1 flex-col items-center justify-center font-sans">
            <main className="w-full">
                <section className="relative isolate overflow-hidden bg-linear-to-br from-nef-900 to-nef-600">
                    <div aria-hidden="true" className="absolute -top-40 -right-24 size-136 rounded-full border border-white/10" />
                    <div aria-hidden="true" className="absolute -top-20 -right-10 size-104 rounded-full border border-white/10" />
                    <div aria-hidden="true" className="absolute top-12 right-14 size-68 rounded-full bg-white/[0.04]" />
                    <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                        <span className="mb-4 text-sm font-bold tracking-[0.18em] text-white/70 uppercase">
                            Notícias
                        </span>
                        <h1 className="max-w-2xl font-title text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
                            Notícias e novidades
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            Fique por dentro das notícias, comunicados e novidades da Nefruza
                        </p>
                    </div>
                </section>

                <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:py-12">
                    <div className="mb-8 flex w-full flex-row flex-wrap gap-4">
                        <Link
                            href="/blog"
                            className={`rounded-full border px-4 py-2 text-base font-bold transition-colors sm:text-lg ${
                                !activeCategory
                                    ? "border-nef-600 bg-nef-600 text-zinc-50 hover:bg-nef-800"
                                    : "border-zinc-300 text-zinc-900 hover:bg-zinc-200"
                            }`}
                        >
                            Todos
                        </Link>
                        {tags.map((tag) => (
                            <Link
                                href={`/blog?category=${encodeURIComponent(tag.slug)}`}
                                key={tag.slug}
                                className={`rounded-full border px-4 py-2 text-base font-bold transition-colors sm:text-lg ${
                                    activeCategory === tag.slug
                                        ? "border-nef-600 bg-nef-600 text-zinc-50 hover:bg-nef-800"
                                        : "border-zinc-300 text-zinc-900 hover:bg-zinc-200"
                                }`}
                            >
                                {tag.name}
                            </Link>
                        ))}
                    </div>

                    {news.length > 0 ? (
                        <div className="mb-8 flex w-full flex-row flex-wrap justify-between gap-8">
                            {news.map((item) => (
                                <NewsCard news={item} key={item.id} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 text-center text-zinc-500">
                            Nenhuma notícia encontrada nesta categoria.
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
