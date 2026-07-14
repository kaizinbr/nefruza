import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
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
