"use client";

import { WorkshopVideo } from "@/components/media/WorkshopVideo";
import { FadeIn } from "@/components/ui/FadeIn";
import { workshopMedia, workshopPhotos, workshopVideos } from "@/data/media";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/sections/SectionHeader";
import Image from "next/image";

export function TallerMediaSection() {
  const mosaic = workshopPhotos.slice(0, 11);

  return (
    <section className="section-wash-teal py-16 md:py-24" id="taller">
      <div className="container-editorial">
        <FadeIn>
          <SectionHeader
            eyebrow="Detrás de cada pieza"
            title="Así nace en el taller"
            description="Proceso real, manos reales, color y textura de arcilla polimérica horneada."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:max-w-2xl md:grid-cols-2 md:gap-7 md:overflow-visible md:pb-0 lg:max-w-3xl lg:gap-8">
          {workshopVideos.map((video, i) => (
            <FadeIn
              key={video.src}
              delay={i * 0.06}
              className="w-[min(78vw,300px)] shrink-0 snap-center md:w-full"
            >
              <WorkshopVideo
                src={video.src}
                poster={video.poster}
                title={video.title}
                variant="reel"
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-12">
          <p className="eyebrow mb-6 text-center">Momentos del taller</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
            {mosaic.map((file, i) => (
              <div
                key={file}
                className={cn(
                  "relative overflow-hidden rounded-xl border-2 border-white shadow-playful",
                  i === 0 || i === 5
                    ? "col-span-2 row-span-2 aspect-square"
                    : "aspect-square"
                )}
              >
                <Image
                  src={workshopMedia(file)}
                  alt={`Taller Anna — ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
