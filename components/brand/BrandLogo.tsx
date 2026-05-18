import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";

const LOGO_CIRCULAR = { w: 500, h: 500 } as const;
const LOGO_FLAT = { w: 766, h: 166 } as const;

type BrandLogoVariant = "circular" | "flat";
type BrandLogoSize = "header" | "hero" | "footer" | "sm";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  size?: BrandLogoSize;
  className?: string;
  href?: string | null;
};

const circularBox: Record<BrandLogoSize, string> = {
  sm: "size-10",
  header: "size-[3.25rem] sm:size-14 md:size-[4.5rem]",
  hero: "size-20 sm:size-24",
  footer: "size-14 md:size-16",
};

const flatBox: Record<BrandLogoSize, string> = {
  sm: "h-7 max-w-[140px]",
  header: "h-9 max-w-[200px]",
  hero: "h-11 max-w-[min(88vw,380px)] sm:h-14 md:h-[3.75rem] md:max-w-[420px]",
  footer: "h-10 max-w-[220px] md:h-12 md:max-w-[260px]",
};

export function BrandLogo({
  variant = "circular",
  size = "header",
  className,
  href = "/",
}: BrandLogoProps) {
  const image =
    variant === "circular" ? (
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          circularBox[size],
          className
        )}
      >
        <Image
          src={siteConfig.logos.circular}
          alt={`${siteConfig.name} — ${siteConfig.tagline}`}
          width={LOGO_CIRCULAR.w}
          height={LOGO_CIRCULAR.h}
          className="size-full object-contain"
          priority={size === "header"}
          sizes="72px"
        />
      </span>
    ) : (
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center",
          flatBox[size],
          className
        )}
      >
        <Image
          src={siteConfig.logos.flat}
          alt={siteConfig.brandWord}
          width={LOGO_FLAT.w}
          height={LOGO_FLAT.h}
          className="h-full w-auto max-w-full object-contain object-left"
          priority={size === "hero"}
          sizes="(max-width: 768px) 75vw, 420px"
        />
      </span>
    );

  if (href) {
    return (
      <Link href={href} className="group inline-flex shrink-0" aria-label={siteConfig.name}>
        {image}
      </Link>
    );
  }

  return image;
}
