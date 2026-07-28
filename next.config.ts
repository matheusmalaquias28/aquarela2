import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Assets em /public já estão otimizados em WebP — evita round-trip do optimizer no LCP. */
    unoptimized: true,
  },
};

export default nextConfig;
