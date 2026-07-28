import { Marquee } from "@/components/Marquee";
import { testimonials } from "@/lib/content";

export function TestimonialSection() {
  return (
    <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] py-[26px]">
      <Marquee duration={28} itemWidth={250} imageSize={testimonials.imageSize} items={testimonials.items} />
    </section>
  );
}
