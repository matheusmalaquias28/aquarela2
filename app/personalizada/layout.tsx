import type { Metadata } from "next";

import { Manrope } from "next/font/google";

import { hero } from "@/lib/content-personalizada";

import "./personalizada.css";

const manropePage = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope-page",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aquarelas Personalizadas: Pinte o que Você Mais Deseja",
  description:
    "Envie uma foto e receba o molde de desenho + o guia passo a passo para pintá-la em aquarela. Transforme o sorriso do seu filho, seu pet ou qualquer foto que você ama em arte.",
};

export default function PersonalizadaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${manropePage.variable} personalizada-page`}>
      <link
        rel="preload"
        as="image"
        href={hero.poster.src}
        fetchPriority="high"
        type="image/png"
      />
      {children}
    </div>
  );
}
