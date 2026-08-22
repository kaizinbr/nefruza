import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

import type { PortalRichTextNode } from "@/lib/portal-types";

function safeHref(value: unknown) {
    if (typeof value !== "string") return null;
    const href = value.trim();
    return /^(https?:|mailto:|tel:|\/|#)/i.test(href) ? href : null;
}

function youtubeEmbed(value: unknown) {
    if (typeof value !== "string") return null;

    try {
        const url = new URL(value);
        const host = url.hostname.replace(/^www\./, "");
        let videoId = "";

        if (host === "youtu.be") videoId = url.pathname.slice(1).split("/")[0];
        if (host === "youtube.com" || host === "youtube-nocookie.com") {
            videoId = url.searchParams.get("v") || "";
            if (!videoId && url.pathname.startsWith("/embed/")) {
                videoId = url.pathname.split("/")[2] || "";
            }
        }

        return /^[a-zA-Z0-9_-]{6,20}$/.test(videoId)
            ? `https://www.youtube-nocookie.com/embed/${videoId}`
            : null;
    } catch {
        return null;
    }
}

function textContent(node: PortalRichTextNode): string {
    if (typeof node.text === "string") return node.text;
    return node.content?.map(textContent).join("") ?? "";
}

function renderText(node: PortalRichTextNode, key: string) {
    let content: ReactNode = node.text ?? "";

    for (const [index, mark] of (node.marks ?? []).entries()) {
        const markKey = `${key}-mark-${index}`;
        switch (mark.type) {
            case "bold":
                content = <strong key={markKey}>{content}</strong>;
                break;
            case "italic":
                content = <em key={markKey}>{content}</em>;
                break;
            case "strike":
                content = <s key={markKey}>{content}</s>;
                break;
            case "underline":
                content = <u key={markKey}>{content}</u>;
                break;
            case "code":
                content = (
                    <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-[0.9em] text-nef-800" key={markKey}>
                        {content}
                    </code>
                );
                break;
            case "link": {
                const href = safeHref(mark.attrs?.href);
                if (href) {
                    const external = /^https?:/i.test(href);
                    content = (
                        <a
                            className="font-semibold text-nef-700 underline decoration-nef-300 underline-offset-4"
                            href={href}
                            key={markKey}
                            rel={external ? "noopener noreferrer" : undefined}
                            target={external ? "_blank" : undefined}
                        >
                            {content}
                        </a>
                    );
                }
                break;
            }
        }
    }

    return <Fragment key={key}>{content}</Fragment>;
}

function children(node: PortalRichTextNode, key: string) {
    return node.content?.map((child, index) =>
        renderNode(child, `${key}-${index}`),
    );
}

function textAlign(node: PortalRichTextNode) {
    const value = node.attrs?.textAlign;
    return value === "center" || value === "right" || value === "justify"
        ? ({ textAlign: value } satisfies CSSProperties)
        : undefined;
}

function renderNode(node: PortalRichTextNode, key: string): ReactNode {
    if (node.type === "text") return renderText(node, key);

    switch (node.type) {
        case "doc":
            return <Fragment key={key}>{children(node, key)}</Fragment>;
        case "paragraph":
            return (
                <p className="mb-6 leading-relaxed text-zinc-700 wrap-break-word" key={key} style={textAlign(node)}>
                    {children(node, key)}
                </p>
            );
        case "heading": {
            const level = Number(node.attrs?.level);
            if (level === 3) {
                return <h3 className="mt-10 mb-4 font-title text-xl font-extrabold text-nef-700" key={key} style={textAlign(node)}>{children(node, key)}</h3>;
            }
            if (level === 4) {
                return <h4 className="mt-8 mb-3 font-title text-lg font-extrabold text-nef-700" key={key} style={textAlign(node)}>{children(node, key)}</h4>;
            }
            return <h2 className="mt-10 mb-4 font-title text-2xl font-extrabold text-nef-700" key={key} style={textAlign(node)}>{children(node, key)}</h2>;
        }
        case "blockquote":
            return <blockquote className="my-8 border-l-4 border-nef-500 py-1 pl-6 text-xl text-nef-700 italic" key={key}>{children(node, key)}</blockquote>;
        case "bulletList":
            return <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-700" key={key}>{children(node, key)}</ul>;
        case "orderedList":
            return <ol className="mb-6 list-decimal space-y-2 pl-6 text-zinc-700" key={key}>{children(node, key)}</ol>;
        case "listItem":
            return <li key={key}>{children(node, key)}</li>;
        case "codeBlock":
            return <pre className="mb-6 overflow-x-auto rounded-xl bg-zinc-950 p-5 text-sm leading-7 text-zinc-100" key={key}><code>{textContent(node)}</code></pre>;
        case "horizontalRule":
            return <hr className="my-10 border-zinc-200" key={key} />;
        case "hardBreak":
            return <br key={key} />;
        case "figureImage": {
            const src = safeHref(node.attrs?.src);
            if (!src || !/^https?:/i.test(src)) return null;
            const alt = typeof node.attrs?.alt === "string" ? node.attrs.alt : "";
            const caption = typeof node.attrs?.caption === "string" ? node.attrs.caption : "";
            const requestedWidth = Number(node.attrs?.width);
            const width = Number.isFinite(requestedWidth)
                ? Math.min(Math.max(requestedWidth, 25), 100)
                : 100;

            return (
                <figure className="mx-auto my-8" key={key} style={{ width: `${width}%` }}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-nef-50">
                        <Image alt={alt} className="object-contain" fill sizes="(max-width: 1024px) 100vw, 800px" src={src} />
                    </div>
                    {caption && <figcaption className="mt-3 text-center text-sm text-zinc-500 italic">{caption}</figcaption>}
                </figure>
            );
        }
        case "youtube": {
            const src = youtubeEmbed(node.attrs?.src);
            return src ? (
                <div className="relative my-8 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-950" key={key}>
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 size-full"
                        referrerPolicy="strict-origin-when-cross-origin"
                        src={src}
                        title="Vídeo incorporado à notícia"
                    />
                </div>
            ) : null;
        }
        default:
            return <Fragment key={key}>{children(node, key)}</Fragment>;
    }
}

export function RichText({ document }: { document: PortalRichTextNode }) {
    return <div className="w-full">{renderNode(document, "document")}</div>;
}
