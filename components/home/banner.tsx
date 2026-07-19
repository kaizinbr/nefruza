"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CallChatRoundedIcon } from "@solar-icons/react/broken/call-chat-rounded";
import { UserIdIcon } from "@solar-icons/react/broken/user-id";
import { DocumentMedicineIcon } from "@solar-icons/react/broken/document-medicine";

const slides = [
    {
        desktop: "/banner/desktop.webp",
        mobile: "/banner/mobile.webp",
        alt: "Nefruza - Serviços Nefrológicos",
    },
    {
        desktop: "/banner/desktop.webp",
        mobile: "/banner/mobile.webp",
        alt: "Nefruza - Cuidado especializado",
    },
];

const menuItems = [
    { icon: CallChatRoundedIcon, label: "Quem Somos" },
    { icon: CallChatRoundedIcon, label: "Contato" },
    { icon: DocumentMedicineIcon, label: "Nossos serviços" },
    { icon: UserIdIcon, label: "Notícias" },
    { icon: UserIdIcon, label: "Convênios aceitos" },
];

const AUTOPLAY_INTERVAL = 6000;

export default function Banner() {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

    const goTo = useCallback(
        (index: number) => setCurrent(((index % total) + total) % total),
        [total]
    );
    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    useEffect(() => {
        const id = setInterval(next, AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [next]);

    return (
        <div className="relative flex w-full flex-col items-center min-h-[60vh] sm:min-h-[80vh] mb-84">
            <div className="relative w-full h-[80vh] sm:h-[80vh] lg:absolute lg:inset-0 lg:h-full overflow-hidden bg-nef-800">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === current ? "z-10 opacity-100" : "z-0 opacity-0"
                        }`}
                    >
                        {/* Desktop image */}
                        <Image
                            src={slide.desktop}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="hidden object-cover sm:block"
                        />
                        {/* Mobile image */}
                        <Image
                            src={slide.mobile}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover lg:hidden"
                        />
                        {/* subtle overlay for legibility of any future overlaid text */}
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                ))}

                {/* Arrows */}
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Slide anterior"
                    className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-nef-800 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white active:scale-95 sm:left-6 sm:h-12 sm:w-12"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M15 6l-6 6 6 6"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={next}
                    aria-label="Próximo slide"
                    className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-nef-800 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white active:scale-95 sm:right-6 sm:h-12 sm:w-12"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Dots — logo acima do card de menu absoluto */}
                <div className="absolute inset-x-0 bottom-20 lg:bottom-36 z-20 flex items-center justify-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => goTo(index)}
                            aria-label={`Ir para o slide ${index + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === current
                                    ? "w-6 bg-white"
                                    : "w-2 bg-white/50 hover:bg-white/80"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Menu card */}
            <div
                className={`
                    static lg:absolute lg:left-1/2 top-full
                    lg:-translate-x-1/2 lg:-translate-y-1/3 
                    -mt-16 lg:mt-0

                    grid-cols-2 gap-4 z-30 grid w-[92%] max-w-5xl
                    rounded-3xl bg-white p-6 shadow-xl
                    sm:flex sm:flex-row sm:flex-wrap sm:items-start sm:justify-center
                    sm:gap-6 sm:p-8
                    md:grid-cols-3 lg:grid-cols-5
                `}
            >
                {menuItems.map(({ icon: Icon, label }) => (
                    <div
                        key={label}
                        className={`
                            group flex aspect-3/4 w-full flex-col items-center
                            justify-center gap-4 rounded-xl border border-zinc-100
                            bg-white px-4 py-8 text-center shadow-sm
                            transition-all duration-300
                            hover:-translate-y-1 hover:border-nef-500 hover:shadow-lg
                            sm:h-56 sm:w-36 sm:px-8 sm:py-12
                        `}
                    >
                        <div
                            className={`
                                flex h-14 w-14 items-center justify-center rounded-full
                                bg-nef-50 text-nef-600 transition-colors duration-300
                                group-hover:bg-nef-600 group-hover:text-white
                                sm:h-16 sm:w-16
                            `}
                        >
                            <Icon size={28} className="sm:hidden" />
                            <Icon size={32} className="hidden sm:block" />
                        </div>
                        <h3 className="text-sm font-semibold text-zinc-800 sm:text-base">
                            {label}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}