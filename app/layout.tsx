import type { Metadata } from "next";
import { Fredoka, Manrope } from "next/font/google";
import { DeferredVercel } from "@/components/DeferredVercel";
import { TrackingHead } from "@/components/TrackingHead";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Aquarelas da Natureza | Pinturas Realistas Prontas para Usar",
  description:
    "+35 pinturas guiadas com desenhos-base prontos, referências coloridas e sequências visuais. Ideal para iniciantes que querem pintar aquarelas lindas da natureza.",
  openGraph: {
    title: "Aquarelas da Natureza | Pinturas Realistas Prontas para Usar",
    description:
      "Desenhos-base prontos, referências coloridas e sequências visuais que orientam cada etapa. Comece a pintar hoje, mesmo sem experiência.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${manrope.variable} antialiased`}>
      <body>
        <TrackingHead />
        {children}
        <DeferredVercel />
      </body>
    </html>
  );
}
