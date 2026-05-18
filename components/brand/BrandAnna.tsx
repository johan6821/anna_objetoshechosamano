import { cn } from "@/lib/cn";

type BrandAnnaProps = {
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "strong";
};

/** Palabra “anna” con la misma voz tipográfica del logo (Lilita One). */
export function BrandAnna({ className, as: Tag = "span" }: BrandAnnaProps) {
  return <Tag className={cn("brand-anna", className)}>anna</Tag>;
}
