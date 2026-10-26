"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

function ScrollToTopOnRouteChange() {
    const lenis = useLenis();
    const pathname = usePathname();
    const previousPathname = useRef(pathname);

    useEffect(() => {
        if (previousPathname.current === pathname) return;
        previousPathname.current = pathname;
        lenis?.scrollTo(0, { immediate: true, force: true });
    }, [pathname, lenis]);

    return null;
}

type SmoothScrollProps = {
    children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.06,
                smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
                anchors: true,
            }}
        >
            <ScrollToTopOnRouteChange />
            {children}
        </ReactLenis>
    );
}
