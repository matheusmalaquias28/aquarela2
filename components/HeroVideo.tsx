"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/** MP4 só carrega na viewport; o poster LCP fica no <img> do server. */
export function HeroVideo({ src, alt, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || active) return;

    const start = () => {
      setActive(true);
      el.src = src;
      el.load();
      el.play().catch(() => {});
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            start();
            io.disconnect();
          }
        },
        { rootMargin: "80px" },
      );
      io.observe(el);
      return () => io.disconnect();
    }

    start();
  }, [active, src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      className={`${className} ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
    />
  );
}
