import type { NextConfig } from "next";

const portalImagePatterns = process.env.R2_PUBLIC_URL
    ? [new URL(`${process.env.R2_PUBLIC_URL.replace(/\/$/, "")}/**`)]
    : [];

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "6mb",
        },
    },
    images: {
        remotePatterns: [
            ...portalImagePatterns,
            {
                protocol: "https",
                hostname: "nefruza.com.br",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.nefruza.com.br",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
