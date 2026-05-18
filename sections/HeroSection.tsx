"use client";

import { WorkshopVideo } from "@/components/media/WorkshopVideo";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { ArtShapes } from "@/components/ui/ArtShapes";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { heroMedia } from "@/data/media";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-6 md:pb-20 md:pt-10">
      <ArtShapes variant="hero" />
      <div className="container-editorial relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <FadeIn className="z-10">
            <span className="sticker-float mb-5">✨ hecho a mano en Colombia</span>
            <div className="mt-2">
              <BrandLogo variant="flat" size="hero" href={null} />
            </div>
            <h1 className="display-xl mt-5 text-balance">
              Accesorios en{" "}
              <span className="bg-gradient-to-r from-teal to-cyan bg-clip-text text-transparent">
                arcilla polimérica
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg font-semibold leading-relaxed text-ink-muted">
              Color, textura y mucho cariño en cada pieza. Taller real, manos
              reales: aretes, earcuffs, collares, candongas y más.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/catalogo" size="lg">
                Ver colección 🌸
              </Button>
              <Button href="/catalogo?filter=nuevos" variant="outline" size="lg">
                Novedades
              </Button>
              <Button href="/#taller" variant="secondary" size="lg" className="sm:min-w-0">
                Ver el taller
              </Button>
            </div>
            <p className="mt-6 text-sm font-semibold text-magenta">
              Compra directa · Envíos Colombia · {siteConfig.instagramHandle}
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[min(100%,340px)]">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-pink-soft via-gold/40 to-cyan/30 opacity-80 blur-sm"
                aria-hidden
              />
              <WorkshopVideo
                src={heroMedia.video}
                poster={heroMedia.videoPoster}
                variant="hero"
                autoPlay
              />
              <div className="absolute -bottom-4 -left-2 z-10 rotate-[-6deg] rounded-2xl border-2 border-magenta/25 bg-surface px-4 py-3 shadow-playful md:-left-6">
                <p className="font-display text-sm font-extrabold text-coral">
                  Arcilla horneada
                </p>
                <p className="text-xs font-semibold text-ink-muted">
                  Cada pieza es única 💜
                </p>
              </div>
              <div className="absolute -right-2 top-8 z-10 rotate-[5deg] rounded-full bg-gold px-3 py-1.5 text-xs font-extrabold text-ink shadow-playful md:-right-4">
                100% handmade
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
