import { BrandAnna } from "@/components/brand/BrandAnna";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { ArtShapes } from "@/components/ui/ArtShapes";
import { FadeIn } from "@/components/ui/FadeIn";
import { storyMedia } from "@/data/media";
import Image from "next/image";

export function StorySection() {
  return (
    <section className="relative section-wash-pink py-16 md:py-24" id="historia">
      <ArtShapes />
      <div className="container-editorial relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeIn>
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-magenta/30 to-cyan/25 blur-md"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border-4 border-white shadow-card">
              <Image
                src={storyMedia.image}
                alt="Detalle de joyería artesanal Anna"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <span className="sticker-float absolute -bottom-3 -right-2 md:-right-6">
              con amor 💜
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="eyebrow">Nuestra historia</p>
          <div className="mt-3">
            <p className="display-md text-balance leading-tight text-ink">
            Donde la arcilla se convierte en identidad
            </p>
            <div className="mt-4 flex flex-col items-start gap-2">
              <BrandLogo variant="flat" size="footer" href={null} className="!h-11 md:!h-[3.25rem]" />
              <span className="brand-tagline text-[0.65rem] md:text-xs">El arte sanna</span>
            </div>
          </div>
          <div className="mt-8 space-y-4 text-base font-semibold leading-relaxed text-ink-muted">
            
            <p>
              Anna nació en 2020, entre colores, ideas y el deseo de construir una vida más cercana
              a mis hijos, sin dejar de crear.
            </p>
            <p>
              La arcilla polimérica se convirtió en la manera de transformar todo aquello 
              que siempre ha hecho parte de mi vida — el arte, la moda, la música 
              y las manualidades — en pequeñas piezas llenas de personalidad.
            </p>
            <p>
              En nuestro taller, cada pieza nace entre colores, formas y manos reales.
              La arcilla polimérica se transforma lentamente en pequeños objetos llenos
              de personalidad.
            </p>
            <p>
              Creamos accesorios para personas que aman expresarse — piezas
              livianas, cómodas y llenas de personalidad, con el sello de{" "}
              <BrandAnna className="text-2xl" />.
            </p>
            <p className="rounded-2xl border-2 border-dashed border-magenta/30 bg-surface/90 p-4 text-ink">
              Solo arcilla polimérica horneada. Cada pieza puede variar un poco en
              tono: es parte de la magia del handmade.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
