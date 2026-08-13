"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

/** Poster nativo do vídeo como LCP; MP4 só carrega na viewport. */
export function HeroVideo({ src, poster, alt, className = "", style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (active) return;
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
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      className={className}
      style={style}
    />
  );
}
