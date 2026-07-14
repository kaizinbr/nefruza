"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navigationItems = [
        { href: "/", label: "Home" },
        { href: "/contato", label: "Contato" },
        { href: "/servicos", label: "Serviços" },
        { href: "/convenios", label: "Convênios" },
        { href: "/noticias", label: "Notícias" },
        { href: "/equipe", label: "Equipe" },
        { href: "/institucional", label: "Sobre" },
    ];

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="flex w-full flex-col items-center justify-center border-b border-zinc-200 bg-white px-16 py-4">
            <nav className="flex w-full max-w-7xl items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="/img/logo.png"
                        alt="Nefruza Logo"
                        width={170}
                        height={32}
                        className=""
                    />
                </div>
                <div className="flex items-center gap-4">
                    {navigationItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={`${item.label}-${item.href}`}
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                className={`rounded-md px-4 py-2 transition-colors ${
                                    active
                                        ? "font-bold text-nef"
                                        : "text-zinc-700 hover:text-nef"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
