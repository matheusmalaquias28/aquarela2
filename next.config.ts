import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Assets em /public já estão otimizados em WebP — evita round-trip do optimizer no LCP. */
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/entregaveis-v2/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:file(avatar-*.webp|guarantee-seal.webp|favicon.svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
