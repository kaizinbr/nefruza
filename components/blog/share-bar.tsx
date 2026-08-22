"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FaCheck,
    FaFacebookF,
    FaLink,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

import { SITE_URL } from "@/lib/site-metadata";

export function ShareBar({ title, shorten }: { title: string; shorten: string }) {
    const [copied, setCopied] = useState(false);
    const pageUrl = `${SITE_URL}/blog/${encodeURIComponent(shorten)}`;
    const links = [
        {
            href: `https://wa.me/?text=${encodeURIComponent(`${title} — ${pageUrl}`)}`,
            icon: FaWhatsapp,
            label: "WhatsApp",
        },
        {
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
            icon: FaFacebookF,
            label: "Facebook",
        },
        {
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} ${pageUrl}`)}`,
            icon: FaXTwitter,
            label: "X",
        },
        {
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
            icon: FaLinkedinIn,
            label: "LinkedIn",
        },
    ];

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(pageUrl);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2_000);
        } catch {
            // A barra continua funcional pelos links mesmo sem Clipboard API.
        }
    }

    return (
        <div className="flex flex-wrap items-center gap-3">
            {links.map(({ label, icon: Icon, href }) => (
                <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Compartilhar no ${label}`}
                    className="flex size-11 items-center justify-center rounded-full bg-nef-50 text-nef-600 transition-colors hover:bg-nef-600 hover:text-white"
                >
                    <Icon size={18} />
                </Link>
            ))}
            <button
                type="button"
                onClick={() => void copyLink()}
                aria-label="Copiar link"
                className={`flex size-11 items-center justify-center rounded-full transition-colors ${
                    copied
                        ? "bg-green-100 text-green-600"
                        : "bg-nef-50 text-nef-600 hover:bg-nef-600 hover:text-white"
                }`}
            >
                {copied ? <FaCheck size={16} /> : <FaLink size={16} />}
            </button>
        </div>
    );
}
