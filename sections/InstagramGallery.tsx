import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getInstagramMosaic } from "@/data/media";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { SectionHeader } from "@/sections/SectionHeader";

export function InstagramGallery() {
  const workshopTiles = getInstagramMosaic(6);
  const productTiles = products.slice(0, 3).map((p) => ({
    src: p.images[0],
    alt: p.name,
  }));
  const tiles = [...workshopTiles, ...productTiles].slice(0, 9);

  return (
    <section className="section-wash-pink py-16 md:py-24">
      <div className="container-editorial">
        <FadeIn>
          <SectionHeader
            eyebrow="Desde el taller"
            title="Síguenos en Instagram"
            description="Inspiración diaria, procesos y novedades antes que nadie."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {tiles.map((tile, i) => (
            <FadeIn key={tile.src} delay={i * 0.04}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-playful"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-magenta/50 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-bold text-white">Ver en IG</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Button href={siteConfig.instagram} variant="secondary" size="lg">
            {siteConfig.instagramHandle} 📸
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
