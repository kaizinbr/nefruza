"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
}

interface TeamCarouselProps {
    members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
    const prefersReducedMotion = useReducedMotion();

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        containScroll: "trimSnaps",
        skipSnaps: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const handleSelect = () => {
            window.requestAnimationFrame(onSelect);
        };

        handleSelect();
        emblaApi.on("select", handleSelect);
        emblaApi.on("reInit", handleSelect);
        return () => {
            emblaApi.off("select", handleSelect);
            emblaApi.off("reInit", handleSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const active = members[selectedIndex];

    if (members.length === 0) return null;

    return (
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            {/* Photos */}
            <div className="w-full lg:w-1/2">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y">
                        {members.map((member, index) => {
                            const isActive = index === selectedIndex;
                            return (
                                <div
                                    key={member.id}
                                    className="min-w-0 shrink-0 basis-full px-2 sm:basis-[70%] lg:basis-[45%]"
                                >
                                    <button
                                        type="button"
                                        onClick={() => scrollTo(index)}
                                        className="block w-full cursor-pointer rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nef-500"
                                        aria-label={`Ver ${member.name}`}
                                        aria-current={isActive}
                                    >
                                        <motion.div
                                            animate={{
                                                scale: isActive ? 1 : 0.86,
                                                opacity: isActive ? 1 : 0.4,
                                            }}
                                            transition={
                                                prefersReducedMotion
                                                    ? { duration: 0 }
                                                    : {
                                                          duration: 0.45,
                                                          ease: [0.22, 1, 0.36, 1],
                                                      }
                                            }
                                            className="origin-center overflow-hidden rounded-2xl bg-nef-100"
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={480}
                                                height={640}
                                                className="aspect-[3/4] w-full object-cover"
                                            />
                                        </motion.div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Controls */}
                <div className="mt-6 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        aria-label="Pessoa anterior"
                        aria-disabled={!canScrollPrev}
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                            canScrollPrev
                                ? "bg-nef-500 text-white hover:bg-nef-600"
                                : "cursor-not-allowed bg-zinc-200 text-zinc-400"
                        }`}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M10 3L5 8L10 13"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="flex items-center gap-2">
                        {members.map((member, index) => (
                            <button
                                key={member.id}
                                type="button"
                                onClick={() => scrollTo(index)}
                                aria-label={`Ir para ${member.name}`}
                                className={`h-2 rounded-full transition-all ${
                                    index === selectedIndex
                                        ? "w-6 bg-nef-500"
                                        : "w-2 bg-zinc-200"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        aria-label="Próxima pessoa"
                        aria-disabled={!canScrollNext}
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                            canScrollNext
                                ? "bg-nef-500 text-white hover:bg-nef-600"
                                : "cursor-not-allowed bg-zinc-200 text-zinc-400"
                        }`}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M6 3L11 8L6 13"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={
                            prefersReducedMotion
                                ? { opacity: 0 }
                                : { opacity: 0, y: 12 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={
                            prefersReducedMotion
                                ? { opacity: 0 }
                                : { opacity: 0, y: -12 }
                        }
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <span className="mb-2 block h-1 w-10 rounded-full bg-nef-500" />
                        <h2 className="font-title text-2xl font-bold text-zinc-900 sm:text-3xl">
                            {active.name}
                        </h2>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-nef-600">
                            {active.role}
                        </h3>
                        <p className="text-zinc-600">{active.bio}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}