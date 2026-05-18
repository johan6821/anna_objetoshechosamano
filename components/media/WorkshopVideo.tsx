"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type WorkshopVideoProps = {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  /** reel = taller (tap, sin controles nativos); hero = portada */
  variant?: "reel" | "hero";
};

export function WorkshopVideo({
  src,
  poster,
  title,
  className,
  autoPlay = false,
  variant = "hero",
}: WorkshopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlay);
  const isReel = variant === "reel";
  const isHero = variant === "hero";
  const isPortrait = isReel || isHero;

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }, []);

  useEffect(() => {
    if (!isReel) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [isReel]);

  return (
    <article
      className={cn(
        "relative isolate overflow-hidden rounded-[1.35rem] border-[3px] border-white bg-cream-deep shadow-card",
        isPortrait ? "aspect-[9/16] w-full" : "aspect-[4/5] w-full",
        isReel && "cursor-pointer",
        className
      )}
      onClick={isReel ? togglePlay : undefined}
      onKeyDown={
        isReel
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePlay();
              }
            }
          : undefined
      }
      role={isReel ? "button" : undefined}
      tabIndex={isReel ? 0 : undefined}
      aria-label={title ?? "Video del taller Anna"}
    >
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          className={cn(
            "object-cover transition-opacity duration-300",
            playing ? "opacity-0" : "opacity-100"
          )}
          sizes={
            isHero
              ? "(max-width: 1024px) 360px, 320px"
              : isReel
                ? "(max-width: 768px) 78vw, 320px"
                : "50vw"
          }
          priority={autoPlay}
          aria-hidden
        />
      )}

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        playsInline
        muted
        loop
        autoPlay={autoPlay}
        preload={isPortrait ? "auto" : "metadata"}
        controls={false}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {isReel && !playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 pl-1 text-xl text-coral shadow-playful"
            aria-hidden
          >
            ▶
          </span>
        </div>
      )}

      {title && isReel && (
        <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent px-4 pb-4 pt-16 text-sm font-bold leading-snug text-cream">
          {title}
        </p>
      )}
    </article>
  );
}
