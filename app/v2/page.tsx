import dynamic from "next/dynamic";
import { CtaButton } from "@/components/CtaButton";
import { HeroVideo } from "@/components/HeroVideo";
import { CHECKOUT_BASIC, CHECKOUT_COMPLETE } from "@/lib/config";
import {
  theme,
  offerBar,
  hero,
  materials,
  testimonials,
  whySection,
  idealSection,
  offerSection,
  bonusSection,
  bonusFeatures,
  plansSection,
  guarantee,
  contact,
  stepsSection,
  faq,
  footer,
} from "@/lib/content-v2";

const StickyCta = dynamic(() =>
  import("@/components/StickyCta").then((m) => m.StickyCta),
);

const Marquee = dynamic(
  () => import("@/components/Marquee").then((m) => m.Marquee),
  { loading: () => <div className="mx-auto h-[280px] w-full max-w-[480px]" aria-hidden /> },
);
/* ── palette ── */
const P = {
  cream:  "#fdf8f0",
  white:  "#ffffff",
  green:  "#3a7d44",
  dark:   "#131313",
  navy:   "#041774",
} as const;

const BELOW = "cv-auto contain-paint";

function LazyImg({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      className={className}
    />
  );
}

/* ── shared atoms ── */

function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ backgroundColor: from }}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 56 }}
        aria-hidden
      >
        <path d="M0,56 L0,28 C480,0 960,56 1440,28 L1440,56 Z" fill={to} />
      </svg>
    </div>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 13" fill="none" className={`w-4 shrink-0 ${className}`} aria-hidden>
      <path d="M17 1L6 12L1 7" stroke="#07C707" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={`w-4 shrink-0 ${className}`} aria-hidden>
      <path d="M1 1L13 13M13 1L1 13" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SecurePurchaseBadge() {
  const badge = plansSection.securePurchaseBadge;
  return (
    <LazyImg
      src={badge.src}
      alt={badge.alt}
      width={badge.width}
      height={badge.height}
      className="w-full max-w-[320px]"
    />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="z-10 inline-block rounded-full bg-badge px-4 py-2 text-[13px] font-semibold text-white">
      {children}
    </span>
  );
}

function FeatureItem({
  text,
  light = false,
  struck = false,
}: {
  text: string;
  light?: boolean;
  struck?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-3 py-[9px] font-display text-[17px] leading-snug
        ${struck ? "opacity-40 line-through" : ""}
        ${light ? "text-white" : "text-ink"}`}
    >
      {struck ? (
        <CrossIcon className="mt-[2px]" />
      ) : (
        <Check className="mt-[2px]" />
      )}
      <span>{text}</span>
    </li>
  );
}

function Avatars({ priority = false }: { priority?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center">
        {(
          [
            ["avatar-2", "size-[28px]"],
            ["avatar-4", "size-[34px]"],
            ["avatar-5", "size-[42px] z-10"],
            ["avatar-3", "size-[34px]"],
            ["avatar-1", "size-[28px]"],
          ] as [string, string][]
        ).map(([a, cls], i) => (
          <LazyImg
            key={a}
            src={`/${a}.webp`}
            alt=""
            width={42}
            height={42}
            priority={priority}
            className={`rounded-full object-cover ring-2 ring-white ${cls} ${i > 0 ? "-ml-2" : ""}`}
          />
        ))}
      </div>
      <p className="text-[13px] font-semibold text-ink">{hero.socialProofLabel}</p>
    </div>
  );
}

/* ── page ── */

export const revalidate = 3600;

export default function HomeV2() {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={hero.poster.src}
        fetchPriority="high"
        type="image/webp"
      />
    <main
      className="flex w-full flex-col overflow-x-hidden"
      style={{ "--color-brand": theme.brandColor } as React.CSSProperties}
    >
      {/* Offer bar */}
      <div className="flex items-center justify-center bg-red-600 px-4 py-[10px]">
        <p className="text-center font-display text-[12px] font-semibold leading-snug text-white">
          {offerBar.text} {today}
        </p>
      </div>

      <StickyCta />

      {/* ══ HERO ══ */}
      <section
        style={{ backgroundColor: P.cream }}
        className="px-5 pb-1 pt-4 text-center"
      >
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-5">
          <h1 className="font-display leading-[0.88] text-ink">
            <span className="block text-[26.4px] font-semibold text-brand">
              {hero.titleHighlight}
            </span>
            <span className="block text-[25px] font-normal" style={{ color: "#5a5a5a" }}>
              {hero.title}
            </span>
          </h1>

          <div className="relative mt-2 w-full max-w-[383px]">
            <HeroVideo
              src={hero.video.src}
              poster={hero.poster.src}
              alt={hero.image.alt}
              className="aspect-square w-full rounded-[12px] object-cover"
              style={{
                boxShadow: `0 0 0 3px rgba(58,125,68,0.25), 0 8px 32px rgba(58,125,68,0.12)`,
              }}
            />
          </div>

          <p className="max-w-[340px] text-[15px] leading-relaxed text-muted">
            {hero.subtitle}
          </p>

          <CtaButton
            href="#plano-completo"
            label={hero.ctaLabel}
            id="hero"
            className="w-full max-w-[382px]"
          />
          <p className="text-center text-[13px] leading-snug text-muted">
            {hero.deliveryNoteLines[0]}
            <br />
            {hero.deliveryNoteLines[1]}
          </p>
          <Avatars priority />
        </div>
      </section>

      {/* Wave cream→white */}
      <WaveDivider from={P.cream} to={P.white} />

      {/* ══ MATERIAIS ══ */}
      <section style={{ backgroundColor: P.white }} className={`${BELOW} pb-14 pt-4 text-center`}>
        <div className="mx-auto max-w-[640px] px-5">
          <h2 className="mb-7 font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {materials.title}
          </h2>
        </div>
        <Marquee
          duration={32}
          itemWidth={260}
          containerClassName="max-w-[480px] lg:max-w-[560px] mx-auto"
          imageSize={materials.imageSize}
          items={materials.items}
        />
      </section>

      {/* Wave white→green */}
      <WaveDivider from={P.white} to={P.green} />

      {/* ══ POR QUÊ ══ */}
      <section
        style={{ backgroundColor: P.green }}
        className={`${BELOW} px-6 pb-16 pt-12 text-center`}
      >
        <h2 className="mb-9 font-display text-[36px] font-semibold leading-[0.9] text-white">
          {whySection.title}
        </h2>
        <div className="mx-auto grid w-full max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whySection.cards.map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left"
            >
              <span className="text-[30px] leading-none" aria-hidden>
                {c.icon}
              </span>
              <div>
                <p className="font-display text-[19px] font-semibold leading-snug text-ink">
                  {c.title}
                </p>
                <p className="mt-1 text-[14px] leading-snug" style={{ color: "#555" }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wave green→cream */}
      <WaveDivider from={P.green} to={P.cream} />

      {/* ══ IDEAL PARA VOCÊ ══ */}
      <section
        style={{ backgroundColor: P.cream }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto max-w-[960px]">
          <h2 className="mb-9 font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {idealSection.title}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {idealSection.items.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-7 text-left"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                <span
                  className="font-display text-[52px] font-semibold leading-none select-none"
                  style={{ color: "rgba(58,125,68,0.18)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[16px] font-bold uppercase leading-tight text-ink">
                  {item.title}
                </p>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave cream→dark */}
      <WaveDivider from={P.cream} to={P.dark} />

      {/* ══ OFERTA PRINCIPAL ══ */}
      <section
        style={{ backgroundColor: P.dark }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-5">
          <Badge>{offerSection.pill}</Badge>
          <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
            {offerSection.title}
          </h2>
          <p className="font-display text-[18px] font-normal text-white/60">
            {offerSection.cardTitle}
          </p>

          <LazyImg
            src={offerSection.image.src}
            alt={offerSection.image.alt}
            width={offerSection.image.width}
            height={offerSection.image.height}
            className="w-full max-w-[383px] rounded-[12px]"
          />

          <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
            {offerSection.featuresTitle}
          </h2>

          <ul className="w-full max-w-[400px] text-left">
            {offerSection.features.map((f) => (
              <FeatureItem key={f} text={f} light />
            ))}
          </ul>

          <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
            {offerSection.guidesTitle}
          </h2>

          <ul className="w-full max-w-[400px] text-left">
            {offerSection.guideFeatures.map((f) => (
              <FeatureItem key={f} text={f} light />
            ))}
          </ul>
        </div>
      </section>

      {/* Wave dark→green */}
      <WaveDivider from={P.dark} to={P.green} />

      {/* ══ BÔNUS ══ */}
      <section
        style={{ backgroundColor: P.green }}
        className={`${BELOW} px-6 pb-16 pt-12 text-center`}
      >
        <h2 className="mb-1 font-display text-[32px] font-semibold leading-snug text-white">
          {bonusSection.titleLines[0]}
        </h2>
        <p className="mb-3 font-display text-[24px] font-normal text-white/75">
          {bonusSection.titleLines[1]}
        </p>
        <Badge>{bonusSection.pill}</Badge>

        <div className="mx-auto mt-9 grid w-full max-w-[960px] justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonusSection.items.map((b, i) => (
            <article
              key={b.title}
              className="flex w-full max-w-[320px] flex-col overflow-hidden rounded-2xl bg-white text-center"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
            >
              {b.src ? (
                <LazyImg
                  src={b.src}
                  alt={b.title}
                  width={648}
                  height={446}
                  className="h-[200px] w-full object-cover"
                />
              ) : (
                <div
                  className="h-[200px] w-full"
                  style={{ backgroundColor: "rgba(58,125,68,0.1)" }}
                />
              )}
              <div className="flex flex-col items-center gap-3 px-5 py-5">
                <div
                  className="flex size-7 items-center justify-center rounded-full font-display text-[14px] font-bold text-white"
                  style={{ backgroundColor: P.green }}
                >
                  {i + 1}
                </div>
                <h3 className="font-display text-[20px] font-semibold leading-snug text-ink">
                  {b.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>
                  {b.desc}
                </p>
                <p className="font-display text-[12px] font-bold text-alert">
                  {bonusSection.exclusiveNote[0]}
                  <br />
                  {bonusSection.exclusiveNote[1]}
                </p>
                <span className="rounded-full bg-badge px-3 py-1 text-[12px] font-bold text-white">
                  Valor: <s>{b.price}</s> GRÁTIS
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Wave green→white */}
      <WaveDivider from={P.green} to={P.white} />

      {/* ══ PLANOS ══ */}
      <section
        id="plano-completo"
        style={{ backgroundColor: P.white }}
        className={`${BELOW} scroll-mt-4 px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto max-w-[1040px]">
          <Badge>{plansSection.pill}</Badge>
          <h2 className="my-7 font-display text-[38px] font-semibold leading-[0.9] text-ink">
            {plansSection.title}
          </h2>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-start">
            {/* Plano Básico */}
            <div
              className="flex flex-col items-center gap-4 rounded-2xl border px-6 py-10"
              style={{
                backgroundColor: P.cream,
                borderColor: "#e0d5c8",
              }}
            >
              <h3 className="font-display text-[28px] font-semibold text-ink">
                {plansSection.basic.name}
              </h3>
              <LazyImg
                src={plansSection.basic.image.src}
                alt={plansSection.basic.image.alt}
                width={plansSection.basic.image.width}
                height={plansSection.basic.image.height}
                className="w-full max-w-[320px] rounded-xl"
              />
              <h4 className="font-display text-[20px] text-ink">
                {plansSection.basic.receiveLabel}
              </h4>
              <ul className="w-full max-w-[320px] text-left">
                {plansSection.basic.features.map((f) => (
                  <FeatureItem key={f} text={f} />
                ))}
                {bonusFeatures.map((f) => (
                  <FeatureItem key={f} text={f} struck />
                ))}
              </ul>
              <p className="font-display text-[18px] text-alert line-through">
                {plansSection.basic.oldPrice}
              </p>
              <p className="font-display text-[60px] font-semibold leading-none text-ink">
                {plansSection.basic.price}
              </p>
              <p className="font-display text-[16px] text-ink">
                {plansSection.basic.installments}
              </p>
              <p className="font-display text-[16px] text-ink">
                {plansSection.basic.savings}
              </p>
              <CtaButton
                href={CHECKOUT_BASIC}
                label={plansSection.basic.ctaLabel}
                id="plano_basico"
                planName="Basico"
              />
              <SecurePurchaseBadge />
              <p className="max-w-[260px] font-display text-[15px] font-semibold text-alert">
                {plansSection.upsellNote.alert}{" "}
                <span className="text-ink">{plansSection.upsellNote.body}</span>{" "}
                <span className="text-badge">{plansSection.upsellNote.highlight}</span>
              </p>
              {/* Arrow pointing down toward complete plan */}
              <svg viewBox="0 0 41.2 41.2" className="w-[32px] lg:hidden" aria-hidden>
                <path
                  d="M20.57 2.57V38.57M2.57 20.57L20.57 38.57L38.57 20.57"
                  stroke="#0C0C0C"
                  strokeWidth="5.14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Plano Completo */}
            <div className="flex flex-col items-center">
              <Badge>⚡MAIS VENDIDO</Badge>
              <div
                className="-mt-4 flex w-full flex-col items-center gap-4 rounded-2xl px-6 pb-10 pt-6"
                style={{ backgroundColor: P.dark }}
              >
                <span
                  className="mt-3 inline-block rounded-full px-4 py-2 font-display text-[13px] font-bold text-white"
                  style={{ backgroundColor: "#e30000" }}
                >
                  {plansSection.complete.badge}
                </span>
                <p
                  className="whitespace-nowrap px-3 py-2 font-display text-[22px] font-semibold text-white sm:text-[24px]"
                  style={{ backgroundColor: P.green }}
                >
                  {plansSection.complete.name}
                </p>
                <p className="flex items-center gap-2 font-display text-[16px] text-white">
                  <Check /> {plansSection.complete.allBonusesLabel}
                </p>
                <LazyImg
                  src={plansSection.complete.image.src}
                  alt={plansSection.complete.image.alt}
                  width={plansSection.complete.image.width}
                  height={plansSection.complete.image.height}
                  className="w-full max-w-[320px] rounded-xl"
                />
                <Badge>{plansSection.complete.pill}</Badge>
                <ul className="w-full max-w-[320px] text-left">
                  {plansSection.complete.features.map((f) => (
                    <FeatureItem key={f} text={f} light />
                  ))}
                </ul>
                <p className="font-display text-[18px] text-alert line-through">
                  {plansSection.complete.oldPrice}
                </p>
                <p className="font-display text-[60px] font-semibold leading-none text-white">
                  {plansSection.complete.price}
                </p>
                <p className="font-display text-[16px] text-white">
                  {plansSection.complete.installments}
                </p>
                <p className="font-display text-[16px] text-white">
                  {plansSection.complete.savings}
                </p>
                <CtaButton
                  href={CHECKOUT_COMPLETE}
                  label={plansSection.complete.ctaLabel}
                  id="plano_completo"
                  planName="Completo"
                />
                <SecurePurchaseBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave white→navy */}
      <WaveDivider from={P.white} to={P.navy} />

      {/* ══ GARANTIA ══ */}
      <section
        style={{ backgroundColor: P.navy }}
        className={`${BELOW} px-10 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex max-w-[400px] flex-col items-center gap-5">
          <LazyImg
            src="/guarantee-seal.webp"
            alt={guarantee.seal.alt}
            width={guarantee.seal.width}
            height={guarantee.seal.height}
          />
          <h2 className="font-display text-[32px] font-semibold leading-snug text-white">
            {guarantee.title}
          </h2>
          <div className="text-left text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
            <p className="text-center font-semibold">{guarantee.intro}</p>
            <p className="mt-4">{guarantee.lead}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {guarantee.bullets.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    className="mt-[7px] size-2 shrink-0 rounded-full bg-alert"
                    aria-hidden
                  />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {guarantee.outro} <strong>{guarantee.outroStrong}</strong>
            </p>
          </div>
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
            {guarantee.helpLabel}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-cta px-6 py-3 font-display text-[18px] font-semibold text-navy transition hover:brightness-110"
          >
            {contact.email}
          </a>
        </div>
      </section>

      {/* Wave navy→cream */}
      <WaveDivider from={P.navy} to={P.cream} />

      {/* ══ DEPOIMENTOS 2 ══ */}
      <section
        style={{ backgroundColor: P.cream }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-5">
          <Avatars />
          <h2 className="max-w-[340px] font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {testimonials.title}
          </h2>
        </div>
        <div className="mt-7 flex justify-center">
          <Marquee
            duration={28}
            itemWidth={220}
            containerClassName="w-full max-w-[480px] sm:max-w-[640px] lg:max-w-[960px] mx-auto"
            imageSize={testimonials.imageSize}
            items={testimonials.items}
          />
        </div>
      </section>

      {/* Wave cream→green */}
      <WaveDivider from={P.cream} to={P.green} />

      {/* ══ COMO FUNCIONA ══ */}
      <section
        style={{ backgroundColor: P.green }}
        className={`${BELOW} px-6 pb-16 pt-12 text-center`}
      >
        <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
          {stepsSection.title}
        </h2>
        <p className="mt-2 font-display text-[15px] font-normal text-white/65">
          {stepsSection.subtitle}
        </p>

        <div className="mx-auto mt-9 flex w-full max-w-[640px] flex-col gap-0">
          {stepsSection.steps.map((s, i) => (
            <div key={s.title} className="flex items-stretch gap-4 text-left">
              {/* Number + connector line */}
              <div className="flex flex-col items-center">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-full font-display text-[17px] font-bold text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.5)" }}
                >
                  {i + 1}
                </div>
                {i < stepsSection.steps.length - 1 && (
                  <div
                    className="w-[2px] flex-1 my-1"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", minHeight: 24 }}
                    aria-hidden
                  />
                )}
              </div>
              {/* Card */}
              <div className="mb-4 flex flex-1 flex-col gap-1 rounded-2xl bg-white p-5">
                <p className="font-display text-[20px] font-semibold text-ink">{s.title}</p>
                <p className="text-[13px]" style={{ color: "#666" }}>{s.desc}</p>
                <ul className="mt-1 flex flex-col gap-1">
                  {s.items.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[13px] text-ink">
                      <Check className="!w-[12px]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <CtaButton
            href="#plano-completo"
            label={stepsSection.ctaLabel}
            id="passo_a_passo"
          />
        </div>
      </section>

      {/* Wave green→white */}
      <WaveDivider from={P.green} to={P.white} />

      {/* ══ FAQ ══ */}
      <section
        style={{ backgroundColor: P.white }}
        className={`${BELOW} px-5 pb-16 pt-12`}
      >
        <div className="mx-auto max-w-[640px]">
          <h2 className="mb-8 text-center font-display text-[36px] font-semibold leading-[0.9] text-ink">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-2">
            {faq.map(([q, a]) => (
              <details
                key={q}
                className="rounded-xl"
                style={{ backgroundColor: "#f4f4f2" }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-[15px] font-semibold text-ink">
                  {q}
                  <svg
                    viewBox="0 0 13 7"
                    className="faq-chevron w-3 shrink-0 transition-transform duration-200"
                    aria-hidden
                  >
                    <path
                      d="M0.5 0.5L6.5 6.5L12.5 0.5"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-[14px] leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RODAPÉ ══ */}
      <footer
        style={{ backgroundColor: P.cream }}
        className="px-6 py-10 text-center"
      >
        <p className="text-[13px] text-ink">
          Copyright {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <p className="mt-2 text-[13px]">
          Contato:{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-semibold text-brand hover:underline"
          >
            {contact.email}
          </a>
        </p>
        <p className="mt-6 text-[11px] text-muted">{footer.legal}</p>
      </footer>
    </main>
    </>
  );
}
