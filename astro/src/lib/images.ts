import type { ImageMetadata } from "astro";

/**
 * Carrega todas as imagens reais de src/assets/images de forma eager,
 * para que o <Image> do Astro possa otimizá-las (WebP/AVIF, responsive).
 * Uso: img("girassol1.webp")
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{webp,png,jpg,jpeg,avif}",
  { eager: true },
);

export function img(name: string): ImageMetadata {
  const key = `/src/assets/images/${name}`;
  const mod = files[key];
  if (!mod) {
    throw new Error(
      `[images] "${name}" não encontrada em src/assets/images. Disponíveis: ${Object.keys(
        files,
      )
        .map((k) => k.split("/").pop())
        .join(", ")}`,
    );
  }
  return mod.default;
}
