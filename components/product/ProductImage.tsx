"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspect?: "portrait" | "square";
};

export function ProductImage({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  aspect = "portrait",
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cream-deep",
        aspect === "portrait" ? "aspect-[4/5]" : "aspect-square",
        className
      )}
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        onError={() => setImgSrc("/images/polymer-placeholder.svg")}
      />
    </div>
  );
}

