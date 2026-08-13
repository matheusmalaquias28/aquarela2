// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://aquarelasdanatureza.com",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Otimização local via sharp (WebP/AVIF, responsive)
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: "auto",
  },
});
