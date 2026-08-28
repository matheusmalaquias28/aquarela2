"use client";

type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página, enviado ao dataLayer e ao Pixel. */
  id: string;
  /** Nome do plano ("Basico" | "Completo"): dispara o evento CtaPlano<nome> no Pixel. O InitiateCheckout fica por conta da Hotmart, para não duplicar. */
  planName?: string;
  className?: string;
};

function scrollToHash(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : "";
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CtaButton({ href, label, id, planName, className = "" }: Props) {
  const isHash = href.startsWith("#");
  const isExternalCheckout = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      onClick={isHash ? (e) => { e.preventDefault(); scrollToHash(href); } : undefined}
      data-cta-id={id}
      data-cta-label={label}
      data-plan-name={planName}
      data-external={isExternalCheckout ? "1" : undefined}
      className={`cta-pulse flex h-[72px] w-full max-w-[365px] items-center justify-center rounded-full bg-cta font-display text-[24px] font-semibold text-white ${className}`}
    >
      {label}
    </a>
  );
}
