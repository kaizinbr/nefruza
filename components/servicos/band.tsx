"use client";

import { motion, useReducedMotion } from "motion/react";
import { IconType } from "react-icons";

export interface Service {
    icon: IconType;
    title: string;
    description: string;
}

interface ServiceBandProps {
    eyebrow: string;
    title: string;
    services: Service[];
    tone: "dark" | "light";
    variant: "grid" | "list";
}

const toneClasses = {
    dark: {
        band: "bg-nef-900",
        eyebrow: "text-nef-300",
        title: "text-white",
        body: "text-nef-100/80",
        chip: "bg-nef-500/15 text-nef-300",
        divider: "divide-white/10",
        hover: "hover:bg-white/[0.04]",
    },
    light: {
        band: "bg-nef-100",
        eyebrow: "text-nef-600",
        title: "text-zinc-900",
        body: "text-zinc-600",
        chip: "bg-nef-500/10 text-nef-600",
        divider: "divide-nef-500/10",
        hover: "hover:bg-white/60",
    },
} as const;

export default function ServiceBand({
    eyebrow,
    title,
    services,
    tone,
    variant,
}: ServiceBandProps) {
    const prefersReducedMotion = useReducedMotion();
    const c = toneClasses[tone];

    return (
        <section
            className={`relative w-full overflow-hidden rounded-4xl ${c.band} px-6 py-10 sm:px-10 sm:py-12`}
        >
            {/* decorative gradient accent, ties back to the hero arc */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-linear-to-br from-nef-500 to-nef-700 opacity-20 blur-3xl"
            />

            <div className="relative flex flex-col items-start gap-1 text-left">
                <span
                    className={`text-xs font-bold uppercase tracking-widest ${c.eyebrow}`}
                >
                    {eyebrow}
                </span>
                <h2
                    className={`font-title text-2xl font-bold sm:text-3xl ${c.title}`}
                >
                    {title}
                </h2>
            </div>

            {variant === "grid" ? (
                <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isFeatured = index === 0;
                        return (
                            <motion.div
                                key={service.title}
                                whileHover={
                                    prefersReducedMotion ? undefined : { y: -4 }
                                }
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className={`flex flex-col items-start gap-3 rounded-2xl p-6 text-left ${
                                    tone === "dark" ? "bg-white/[0.03]" : "bg-white"
                                } ${
                                    isFeatured
                                        ? "sm:col-span-2 sm:flex-row sm:items-start sm:gap-5 lg:col-span-1 lg:flex-col"
                                        : ""
                                }`}
                            >
                                <span
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.chip}`}
                                >
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <h3
                                        className={`mb-1.5 font-bold ${c.title} ${
                                            isFeatured ? "text-lg" : "text-base"
                                        }`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${c.body}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            ) : (
                <div className={`relative mt-8 divide-y ${c.divider}`}>
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                whileHover={
                                    prefersReducedMotion
                                        ? undefined
                                        : { x: 4 }
                                }
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className={`flex items-start gap-5 rounded-xl px-3 py-5 text-left transition-colors ${c.hover}`}
                            >
                                <span
                                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${c.chip}`}
                                >
                                    <Icon size={18} />
                                </span>
                                <div>
                                    <h3 className={`mb-1 font-bold ${c.title}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${c.body}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}