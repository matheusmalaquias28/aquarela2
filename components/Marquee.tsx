import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Item = { src?: string; alt: string; size?: { width: number; height: number } };

type Props = {
  items: Item[];
  /** Segundos para a trilha percorrer um ciclo completo. */
  duration?: number;
  /** Largura de cada item em px (define quantos aparecem por vez). */
  itemWidth?: number;
  /** Dimensões intrínsecas das imagens (para o next/image calcular o aspect ratio). */
  imageSize?: { width: number; height: number };
  /** Largura máxima do container do carrossel. */
  containerClassName?: string;
};

/**
 * Carrossel infinito e contínuo, só com CSS.
 * A trilha é renderizada duas vezes; a animação desloca -50% e reinicia sem emenda.
 */
export function Marquee({
  items,
  duration = 20,
  itemWidth = 188,
  imageSize = { width: 386, height: 578 },
  containerClassName = "max-w-[382px]",
}: Props) {
  return (
    <div className={`w-full overflow-hidden rounded-[7px] ${containerClassName}`}>
      <div
        className="marquee-track flex w-max gap-[6px]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) =>
          items.map((it, i) => {
            const dims = it.size ?? imageSize;
            const sharedClass = "shrink-0 rounded-[7px] object-cover";
            const sharedStyle = { width: itemWidth };
            return it.src ? (
              <Image
                key={`${copy}-${i}`}
                src={it.src}
                alt={copy === 0 ? it.alt : ""}
                aria-hidden={copy === 1}
                width={dims.width}
                height={dims.height}
                className={sharedClass}
                style={sharedStyle}
                unoptimized
              />
            ) : (
              <ImagePlaceholder
                key={`${copy}-${i}`}
                alt={copy === 0 ? it.alt : ""}
                aria-hidden={copy === 1}
                width={dims.width}
                height={dims.height}
                className={sharedClass}
                style={sharedStyle}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}
