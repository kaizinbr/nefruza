import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsCalendar2Date, BsPersonCircle } from "react-icons/bs";

import { RichText } from "@/components/blog/rich-text";
import { ShareBar } from "@/components/blog/share-bar";
import { getPortalNews, getPortalNewsByShorten } from "@/lib/portal-content";
import { createPageMetadata } from "@/lib/site-metadata";
import type { PortalNews, PortalNewsSummary, PortalTag } from "@/lib/portal-types";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Fortaleza",
});

function newsDate(news: PortalNewsSummary) {
    return dateFormatter.format(new Date(news.publishedAt ?? news.updatedAt));
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

function authorTitle(author: NonNullable<PortalNews["author"]>) {
    const registration = [author.registrationType, author.registrationNumber]
        .filter(Boolean)
        .join(" ");
    return [author.professionalTitle, author.specialty, registration]
        .filter(Boolean)
        .join(" · ");
}

function NewsCard({ news }: { news: PortalNewsSummary }) {
    return (
        <Link
            href={`/blog/${news.shorten}`}
            className="group flex flex-col overflow-hidden rounded-3xl border border-transparent bg-nef-50 transition-all hover:border-nef-400"
        >
            <div className="relative aspect-5/3 w-full">
                <Image
                    src={news.coverImageUrl || "/img/placeholder.webp"}
                    alt={news.coverImageUrl ? news.title : ""}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col items-start justify-between p-6">
                <div>
                    <span className="text-xs font-bold uppercase text-nef-600">
                        {newsDate(news)}
                        {news.tags.length > 0 && ` · ${news.tags.map((tag) => tag.name).join(", ")}`}
                    </span>
                    <h3 className="mt-1 mb-2 line-clamp-2 text-lg font-bold text-nef-700">
                        {news.title}
                    </h3>
                    {news.excerpt && (
                        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                            {news.excerpt}
                        </p>
                    )}
                </div>
                <span className="rounded-full bg-nef-600 px-8 py-3 font-bold text-white transition-colors hover:bg-nef-600/90">
                    Leia mais →
                </span>
            </div>
        </Link>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ shorten: string }>;
}): Promise<Metadata> {
    const { shorten } = await params;
    const news = await getPortalNewsByShorten(shorten);

    if (!news) {
        return createPageMetadata({
            title: "Notícia não encontrada",
            description: "A notícia solicitada não está disponível.",
            path: `/blog/${encodeURIComponent(shorten)}`,
            noIndex: true,
        });
    }

    return createPageMetadata({
        title: news.title,
        description: news.excerpt || "Conteúdo informativo publicado pela Nefruza.",
        path: `/blog/${encodeURIComponent(news.shorten)}`,
    });
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ shorten: string }>;
}) {
    const { shorten } = await params;
    const [news, allNews] = await Promise.all([
        getPortalNewsByShorten(shorten),
        getPortalNews(100),
    ]);
    if (!news) notFound();

    const otherNews = allNews.filter((item) => item.shorten !== news.shorten);
    const currentTags = new Set(news.tags.map((tag) => tag.slug));
    const related = [...otherNews]
        .sort((a, b) => {
            const score = (item: PortalNewsSummary) =>
                item.tags.filter((tag) => currentTags.has(tag.slug)).length;
            return score(b) - score(a);
        })
        .slice(0, 3);
    const recent = otherNews.slice(0, 4);
    const tags = uniqueTags(allNews);
    const category = news.tags[0]?.name ?? "Notícias";

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16 font-sans md:px-16 xl:px-0">
            <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
                <Link href="/" className="hover:text-nef-600">Início</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-nef-600">Notícias</Link>
                <span>/</span>
                <span className="font-medium text-nef-600">{category}</span>
            </nav>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
                <main className="flex w-full min-w-0 flex-col items-start">
                    <span className="text-sm font-bold uppercase text-nef-500">{category}</span>
                    <h1 className="mt-1 mb-4 font-title text-3xl leading-tight font-extrabold sm:text-4xl">
                        {news.title}
                    </h1>

                    <div className="mb-4 flex w-full flex-row flex-wrap items-center gap-4">
                        <span className="flex items-center gap-2 text-sm text-zinc-600">
                            <BsCalendar2Date /> {newsDate(news)}
                        </span>
                        {news.author && (
                            <>
                                <span className="text-zinc-300">·</span>
                                <span className="flex items-center gap-2 text-sm text-zinc-600">
                                    <BsPersonCircle /> {news.author.name}
                                </span>
                            </>
                        )}
                    </div>

                    <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-3xl bg-nef-50">
                        <Image
                            src={news.coverImageUrl || "/img/placeholder.webp"}
                            alt={news.coverImageUrl ? news.title : ""}
                            fill
                            sizes="(max-width: 1024px) 100vw, 800px"
                            className="object-cover"
                            priority
                        />
                    </div>

                    <RichText document={news.content} />

                    <div className="mt-4 mb-12 w-full border-t border-zinc-100 pt-8">
                        <h2 className="mb-4 font-bold text-nef-700">Compartilhe essa notícia</h2>
                        <ShareBar title={news.title} shorten={news.shorten} />
                    </div>

                    {news.author && (
                        <div className="mb-12 w-full">
                            <h2 className="mb-4 font-bold text-nef-700">Sobre o autor</h2>
                            <div className="flex items-center gap-5 rounded-3xl bg-nef-50 p-6">
                                {news.author.imageUrl ? (
                                    <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
                                        <Image
                                            src={news.author.imageUrl}
                                            alt={news.author.name}
                                            fill
                                            sizes="80px"
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-nef-100 font-title text-2xl font-bold text-nef-700">
                                        {news.author.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <div>
                                    <p className="font-bold text-nef-700">{news.author.name}</p>
                                    {authorTitle(news.author) && (
                                        <p className="mb-2 text-sm font-semibold text-nef-600">
                                            {authorTitle(news.author)}
                                        </p>
                                    )}
                                    {news.author.bio && (
                                        <p className="text-sm leading-relaxed text-zinc-600">{news.author.bio}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {related.length > 0 && (
                        <div className="w-full">
                            <h2 className="mb-6 text-xl font-bold text-nef-700">Notícias relacionadas</h2>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {related.map((item) => <NewsCard key={item.id} news={item} />)}
                            </div>
                        </div>
                    )}
                </main>

                <aside className="hidden w-full lg:block">
                    <div className="sticky top-28 flex flex-col gap-10">
                        {tags.length > 0 && (
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-nef-700">Categorias</h2>
                                <ul className="flex flex-col gap-1">
                                    {tags.map((tag) => (
                                        <li key={tag.slug}>
                                            <Link
                                                href={`/blog?category=${encodeURIComponent(tag.slug)}`}
                                                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-nef-700 transition-colors hover:bg-nef-50 hover:text-nef-600"
                                            >
                                                {tag.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {recent.length > 0 && (
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-nef-700">Mais recentes</h2>
                                <ul className="flex flex-col gap-4">
                                    {recent.map((item) => (
                                        <li key={item.id}>
                                            <Link href={`/blog/${item.shorten}`} className="group flex items-center gap-3">
                                                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-nef-50">
                                                    <Image
                                                        src={item.coverImageUrl || "/img/placeholder.webp"}
                                                        alt={item.coverImageUrl ? item.title : ""}
                                                        fill
                                                        sizes="64px"
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="line-clamp-2 text-sm font-semibold text-nef-700 transition-colors group-hover:text-nef-600">{item.title}</p>
                                                    <span className="text-xs text-zinc-500">{newsDate(item)}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
}
