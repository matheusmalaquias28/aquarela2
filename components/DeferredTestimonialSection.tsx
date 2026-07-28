"use client";

import dynamic from "next/dynamic";

const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection").then((m) => m.TestimonialSection),
  { ssr: false, loading: () => <div className="mx-auto h-[280px] w-full max-w-[480px]" aria-hidden /> },
);

export function DeferredTestimonialSection() {
  return <TestimonialSection />;
}
