"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Modal } from "@mantine/core";
import { motion, useMotionValue } from "motion/react";
import {
    LuChevronLeft,
    LuChevronRight,
    LuX,
    LuZoomIn,
    LuZoomOut,
} from "react-icons/lu";

export interface LightboxImage {
    id: string;
    src: string;
    alt: string;
    caption?: string;
}

interface ImageLightboxProps {
    images: LightboxImage[];
    index: number;
    onIndexChange: (index: number) => void;
    onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const DOUBLE_TAP_SCALE = 2.5;

function clampScale(value: number) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function touchDistance(touches: React.TouchList) {
    const [a, b] = [touches[0], touches[1]];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

export default function ImageLightbox({
    images,
    index,
    onIndexChange,
    onClose,
}: ImageLightboxProps) {
    const [scale, setScale] = useState(1);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    // guarda a distância/escala inicial de um gesto de pinça (2 dedos)
    const pinchRef = useRef<{ distance: number; scale: number } | null>(null);

    const current = images[index];

    const resetView = useCallback(() => {
        setScale(1);
        x.set(0);
        y.set(0);
    }, [x, y]);

    // sempre que a imagem muda, volta ao zoom neutro
    // defer the reset to avoid synchronous setState inside an effect
    useEffect(() => {
        const id = window.requestAnimationFrame(() => resetView());
        return () => window.cancelAnimationFrame(id);
    }, [index, resetView]);

    const goTo = (nextIndex: number) => {
        if (images.length === 0) return;
        const wrapped = (nextIndex + images.length) % images.length;
        onIndexChange(wrapped);
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") goTo(index + 1);
            if (e.key === "ArrowLeft") goTo(index - 1);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const zoomBy = (delta: number) => {
        setScale((s) => {
            const next = clampScale(s + delta);
            if (next === 1) {
                x.set(0);
                y.set(0);
            }
            return next;
        });
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        zoomBy(-e.deltaY * 0.0025);
    };

    const handleDoubleClick = () => {
        setScale((s) => {
            const next = s > 1 ? 1 : DOUBLE_TAP_SCALE;
            if (next === 1) {
                x.set(0);
                y.set(0);
            }
            return next;
        });
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            pinchRef.current = {
                distance: touchDistance(e.touches),
                scale,
            };
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && pinchRef.current) {
            e.preventDefault();
            const ratio = touchDistance(e.touches) / pinchRef.current.distance;
            setScale(clampScale(pinchRef.current.scale * ratio));
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (e.touches.length < 2) pinchRef.current = null;
    };

    if (!current) return null;

    return (
        <Modal
            opened
            onClose={onClose}
            fullScreen
            withCloseButton={false}
            padding={0}
            transitionProps={{ transition: "fade", duration: 200 }}
            styles={{
                content: { background: "rgba(10, 8, 9, 0.97)" },
                body: { height: "100dvh", padding: 0 },
            }}
        >
            <div className="relative flex h-full w-full flex-col text-white">
                {/* Barra superior */}
                <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
                    <span className="text-sm text-white/70">
                        {index + 1} / {images.length}
                    </span>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => zoomBy(-0.5)}
                            disabled={scale <= MIN_SCALE}
                            aria-label="Diminuir zoom"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 disabled:opacity-30"
                        >
                            <LuZoomOut size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={() => zoomBy(0.5)}
                            disabled={scale >= MAX_SCALE}
                            aria-label="Aumentar zoom"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 disabled:opacity-30"
                        >
                            <LuZoomIn size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Fechar"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                        >
                            <LuX size={20} />
                        </button>
                    </div>
                </div>

                {/* Área da imagem */}
                <div
                    className="relative flex-1 touch-none overflow-hidden select-none"
                    onWheel={handleWheel}
                    onDoubleClick={handleDoubleClick}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <motion.div
                        drag={scale > 1}
                        dragElastic={0.05}
                        dragMomentum={false}
                        style={{ x, y, scale }}
                        className="flex h-full w-full items-center justify-center"
                    >
                        <div className="relative h-[85%] w-[90%]">
                            <Image
                                src={current.src}
                                alt={current.alt}
                                fill
                                sizes="100vw"
                                draggable={false}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={() => goTo(index - 1)}
                                aria-label="Imagem anterior"
                                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:left-4"
                            >
                                <LuChevronLeft size={22} />
                            </button>
                            <button
                                type="button"
                                onClick={() => goTo(index + 1)}
                                aria-label="Próxima imagem"
                                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:right-4"
                            >
                                <LuChevronRight size={22} />
                            </button>
                        </>
                    )}
                </div>

                {/* Legenda */}
                {current.caption && (
                    <p className="px-6 pb-6 text-center text-sm text-white/70">
                        {current.caption}
                    </p>
                )}
            </div>
        </Modal>
    );
}