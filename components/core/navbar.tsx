"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "motion/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/contato", label: "Contato" },
    { href: "/servicos", label: "Serviços" },
    { href: "/convenios", label: "Convênios" },
    { href: "/noticias", label: "Notícias" },
    { href: "/equipe", label: "Equipe" },
    { href: "/institucional", label: "Sobre" },
];

const HEADER_HEIGHT = 76;

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled((prev) => {
            if (!prev && latest > 80) return true;
            if (prev && latest < 40) return false;
            return prev;
        });
    });

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-40 hidden w-full items-center justify-center border-b border-zinc-200 bg-white px-16 py-4 
                    transition-transform duration-500 ease-out lg:flex ${
                    scrolled ? "-translate-y-full" : "translate-y-0"
                }`}
            >
                <nav className="flex w-full max-w-7xl items-center justify-between">
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                            src="/img/logo.png"
                            alt="Nefruza Logo"
                            width={170}
                            height={32}
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        {navigationItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.href}
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

            <header
                className={`
                    fixed inset-x-0 top-0 z-40 flex w-full items-center justify-between border-b border-zinc-200 bg-white px-6 py-4 
                    transition-transform duration-500 ease-out lg:px-16 ${
                    scrolled ? "lg:translate-y-0" : "lg:-translate-y-full"
                }`}
            >
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/img/logo.png"
                        alt="Nefruza Logo"
                        width={150}
                        height={28}
                        priority
                    />
                </Link>

                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menu"
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-700 transition-colors hover:text-nef"
                >
                    <HiOutlineMenu size={26} />
                </button>
            </header>

            <div style={{ height: HEADER_HEIGHT }} />

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="fullscreen-menu"
                        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
                        transition={{
                            duration: 0.45,
                            ease: [0.65, 0, 0.35, 1],
                        }}
                        className="fixed inset-0 z-50 flex flex-col bg-white"
                    >
                        <div className="flex items-center justify-between px-6 py-4">
                            <Link
                                href="/"
                                className="flex items-center gap-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                <Image
                                    src="/img/logo.png"
                                    alt="Nefruza Logo"
                                    width={150}
                                    height={28}
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Fechar menu"
                                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-700 transition-colors hover:text-nef"
                            >
                                <HiOutlineX size={26} />
                            </button>
                        </div>

                        <motion.nav
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.15,
                                    },
                                },
                                closed: {},
                            }}
                            className="flex flex-1 flex-col items-center justify-center gap-2"
                        >
                            {navigationItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <motion.div
                                        key={item.href}
                                        variants={{
                                            open: { opacity: 1, y: 0 },
                                            closed: { opacity: 0, y: -12 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            aria-current={
                                                active ? "page" : undefined
                                            }
                                            className={`block px-4 py-3 text-center text-2xl transition-colors ${
                                                active
                                                    ? "font-bold text-nef"
                                                    : "text-zinc-700 hover:text-nef"
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
