import type { Metadata } from "next";
import { hero } from "@/lib/content-v2";

export const metadata: Metadata = {
  title: "Aquarelas da Natureza | Pinturas Realistas Prontas para Usar",
  description:
    "+35 pinturas guiadas com desenhos-base prontos, referências coloridas e sequências visuais. Ideal para iniciantes que querem pintar aquarelas lindas da natureza.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={hero.poster.src}
        fetchPriority="high"
        type="image/webp"
      />
      {children}
    </>
  );
}
