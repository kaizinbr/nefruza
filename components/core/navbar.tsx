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
import { LuChevronDown } from "react-icons/lu";
import { HoverCard, Collapse } from "@mantine/core";

type HrefValue = string | { pathname: string; query?: Record<string, string> };

interface SubNavItem {
    href: HrefValue;
    label: string;
}

interface NavItem {
    href: string;
    label: string;
    children?: SubNavItem[];
}

// Itens principais do menu + sub-itens espelhando as colunas do Footer.
// Alterar aqui reflete tanto no menu desktop (hover) quanto no menu
// fullscreen/mobile (collapse), já que ambos consomem este mesmo array.
const navigationItems: NavItem[] = [
    { href: "/", label: "Home" },
    {
        href: "/contato",
        label: "Contato",
        children: [
            { href: "/contato", label: "Fale conosco" },
            { href: "/contato/ouvidoria", label: "Ouvidoria" },
        ],
    },
    { href: "/servicos", label: "Serviços" },
    { href: "/convenios", label: "Convênios" },
    {
        href: "/blog",
        label: "Notícias",
        children: [
            { href: "/blog", label: "Blog" },
            {
                href: { pathname: "/blog", query: { category: "noticias" } },
                label: "Notícias",
            },
            {
                href: {
                    pathname: "/blog",
                    query: { category: "comunicados" },
                },
                label: "Comunicados",
            },
            { href: "/politica-de-privacidade", label: "Política de privacidade" },
            { href: "/termos-de-uso", label: "Termos de uso" },
            { href: "/codigo-de-etica", label: "Código de ética" },
        ],
    },
    { href: "/equipe", label: "Equipe" },
    {
        href: "/institucional",
        label: "Sobre",
        children: [
            { href: "/institucional", label: "A Nefruza" },
            { href: "/institucional/historia", label: "Nossa história" },
            { href: "/institucional/estrutura", label: "Nossa estrutura" },
            {
                href: "/institucional/proposito-e-valores",
                label: "Propósito e valores",
            },
            { href: "/institucional#pioneirismo", label: "Pioneirismo" },
        ],
    },
];

const HEADER_HEIGHT = 96;

function hrefToPath(href: HrefValue) {
    return typeof href === "string" ? href : href.pathname;
}

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // controla qual item do menu fullscreen está com o submenu expandido
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled((prev) => {
            if (!prev && latest > 80) return true;
            if (prev && latest < 40) return false;
            return prev;
        });
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMenuOpen(false);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpenSubmenu(null);
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
            {/* Header desktop (topo da página) */}
            <header
                className={`fixed inset-x-0 top-0 z-40 hidden w-full items-center justify-center border-b border-zinc-200 bg-white px-16 py-4 
                     h-24
                    transition-transform duration-500 ease-out lg:flex ${
                    scrolled ? "-translate-y-full" : "translate-y-0"
                }`}
            >
                <nav className="flex w-full max-w-7xl items-center justify-between">
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                            src="/img/logo.webp"
                            alt="Nefruza Logo"
                            width={170}
                            height={32}
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        {navigationItems.map((item) => {
                            const active = isActive(item.href);

                            const linkClasses = `flex items-center gap-1 rounded-md px-4 py-2 transition-colors ${
                                active
                                    ? "font-bold text-nef"
                                    : "text-zinc-700 hover:text-nef"
                            }`;

                            if (!item.children) {
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={linkClasses}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            return (
                                <HoverCard
                                    key={item.href}
                                    width={220}
                                    shadow="md"
                                    radius="md"
                                    openDelay={80}
                                    closeDelay={150}
                                    position="bottom"
                                    withinPortal
                                >
                                    <HoverCard.Target>
                                        <Link
                                            href={item.href}
                                            aria-current={
                                                active ? "page" : undefined
                                            }
                                            className={linkClasses}
                                        >
                                            {item.label}
                                            <LuChevronDown className="text-sm" />
                                        </Link>
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown className="!border-zinc-200 !p-2">
                                        <div className="flex flex-col">
                                            {item.children.map((sub) => (
                                                <Link
                                                    key={
                                                        item.label +
                                                        hrefToPath(sub.href) +
                                                        sub.label
                                                    }
                                                    href={sub.href}
                                                    className="rounded-md px-3 py-2 text-base text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-nef"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            );
                        })}
                    </div>
                </nav>
            </header>

            {/* Header fixo (aparece ao rolar / usado no mobile) */}
            <header
                className={`
                    fixed inset-x-0 top-0 z-40 flex w-full items-center justify-between border-b border-zinc-200 bg-white px-6 py-4 
                    transition-transform duration-500 ease-out lg:px-16 ${
                    scrolled ? "lg:translate-y-0" : "lg:-translate-y-full"
                }`}
            >
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/img/logo.webp"
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

            {/* Menu fullscreen colapsável (reutilizado no scroll do desktop e no mobile) */}
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
                        className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white"
                    >
                        <div className="flex items-center justify-between px-6 py-4">
                            <Link
                                href="/"
                                className="flex items-center gap-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                <Image
                                    src="/img/logo.webp"
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
                            className="flex flex-1 flex-col items-center justify-center gap-1 py-8"
                        >
                            {navigationItems.map((item) => {
                                const active = isActive(item.href);
                                const isSubmenuOpen = openSubmenu === item.href;

                                return (
                                    <motion.div
                                        key={item.href}
                                        variants={{
                                            open: { opacity: 1, y: 0 },
                                            closed: { opacity: 0, y: -12 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="flex w-full flex-col items-center"
                                    >
                                        <div className="flex items-center gap-1">
                                            <Link
                                                href={item.href}
                                                onClick={() =>
                                                    !item.children &&
                                                    setMenuOpen(false)
                                                }
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

                                            {item.children && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenSubmenu(
                                                            (prev) =>
                                                                prev === item.href
                                                                    ? null
                                                                    : item.href
                                                        )
                                                    }
                                                    aria-label={`Expandir ${item.label}`}
                                                    aria-expanded={isSubmenuOpen}
                                                    className="flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors hover:text-nef"
                                                >
                                                    <LuChevronDown
                                                        className={`text-lg transition-transform duration-300 ${
                                                            isSubmenuOpen
                                                                ? "rotate-180"
                                                                : ""
                                                        }`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {item.children && (
                                            <Collapse
                                                expanded={isSubmenuOpen}
                                                transitionDuration={250}
                                                className="w-full"
                                            >
                                                <div className="flex flex-col items-center gap-1 pb-4">
                                                    {item.children.map((sub) => (
                                                        <Link
                                                            key={
                                                                item.label +
                                                                hrefToPath(
                                                                    sub.href
                                                                ) +
                                                                sub.label
                                                            }
                                                            href={sub.href}
                                                            onClick={() =>
                                                                setMenuOpen(false)
                                                            }
                                                            className="px-4 py-1.5 text-center text-base text-zinc-500 transition-colors hover:text-nef"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </Collapse>
                                        )}
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