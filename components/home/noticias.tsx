import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import type { PortalNewsSummary } from "@/lib/portal-types";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Fortaleza",
});

function newsDate(news: PortalNewsSummary) {
    return dateFormatter.format(new Date(news.publishedAt ?? news.updatedAt));
}

function NewsDetails({ news }: { news: PortalNewsSummary }) {
    return (
        <div className="flex flex-1 flex-col items-start justify-between">
            <div>
                <span className="text-xs font-bold uppercase text-zinc-500">
                    {newsDate(news)}
                    {news.tags.length > 0 && ` · ${news.tags.map((tag) => tag.name).join(", ")}`}
                </span>
                <h3 className="mt-1 mb-2 line-clamp-2 text-lg font-bold text-nef-700">
                    {news.title}
                </h3>
                {news.excerpt && (
                    <p className="mb-4 line-clamp-4 text-sm text-muted-foreground">
                        {news.excerpt}
                    </p>
                )}
            </div>
            <p className="flex flex-row gap-2 font-bold text-nef-600 transition-colors">
                Leia mais
                <span className="relative transition-all duration-300 group-hover:translate-x-2">
                    →
                </span>
            </p>
        </div>
    );
}

export default function UltimasNoticias({
    news,
}: {
    news: PortalNewsSummary[];
}) {
    const [featured, ...secondary] = news.slice(0, 4);

    return (
        <section className="w-full overflow-x-clip bg-white py-24">
            <div className="mx-auto mb-8 flex max-w-6xl flex-col px-4 md:flex-row md:items-end md:justify-between xl:px-0">
                <div className="mb-6 flex flex-col gap-4 md:mb-0">
                    <h2 className="font-title text-3xl">Por dentro da Nefruza</h2>
                    <span className="text-zinc-700">
                        Fique por dentro das notícias, comunicados e novidades da Nefruza
                    </span>
                </div>
                <Link
                    href="/blog"
                    className="flex w-fit cursor-pointer flex-row items-center gap-2 rounded-full bg-nef-600 px-8 py-3 font-bold text-white transition-all hover:bg-nef-600/90"
                >
                    Ver todas <FaArrowRight />
                </Link>
            </div>

            {!featured ? (
                <div className="mx-auto max-w-6xl px-4 py-16 text-center text-zinc-500 xl:px-0">
                    Nenhuma notícia publicada no momento.
                </div>
            ) : (
                <div className="mx-auto flex min-h-152 max-w-6xl flex-col gap-8 px-4 md:flex-row">
                    <Link
                        href={`/blog/${featured.shorten}`}
                        className="group relative flex min-h-124 w-full flex-none flex-col overflow-hidden rounded-3xl border border-transparent transition-all md:min-h-0 md:w-[calc(50%-16px)]"
                    >
                        <div className="absolute z-0 flex size-full items-center justify-center bg-nef-50">
                            {featured.coverImageUrl ? (
                                <Image
                                    src={featured.coverImageUrl}
                                    alt={featured.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <Image
                                    src="/img/placeholder.webp"
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            )}
                        </div>
                        <div className="absolute right-4 bottom-4 left-4 z-10 flex flex-1 flex-col items-start justify-between rounded-2xl bg-nef-50 p-6">
                            <NewsDetails news={featured} />
                        </div>
                    </Link>

                    {secondary.length > 0 && (
                        <div className="flex w-full flex-col gap-y-8 lg:w-[calc(50%-16px)]">
                            {secondary.map((item) => (
                                <Link
                                    href={`/blog/${item.shorten}`}
                                    key={item.id}
                                    className="group flex w-full flex-row gap-4 transition-all"
                                >
                                    <div className="flex aspect-square h-full max-h-48 items-center justify-center overflow-hidden rounded-2xl bg-nef-50">
                                        <Image
                                            src={item.coverImageUrl || "/img/placeholder.webp"}
                                            alt={item.coverImageUrl ? item.title : ""}
                                            width={180}
                                            height={180}
                                            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <NewsDetails news={item} />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
