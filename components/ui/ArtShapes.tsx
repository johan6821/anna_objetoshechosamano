import { cn } from "@/lib/cn";

type ArtShapesProps = {
  className?: string;
  variant?: "hero" | "section" | "card";
};

/** Blobs y formas orgánicas decorativas (no bloquean interacción). */
export function ArtShapes({ className, variant = "section" }: ArtShapesProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      >
        <div className="absolute -left-16 top-20 h-56 w-56 rounded-[45%_55%_60%_40%] bg-pink-soft/45 blur-2xl" />
        <div className="absolute right-0 top-32 h-48 w-48 rounded-[60%_40%_45%_55%] bg-cyan/25 blur-2xl" />
        <div className="absolute bottom-24 left-1/3 h-40 w-40 rounded-[50%_50%_40%_60%] bg-gold/30 blur-xl" />
        <div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-magenta/20 blur-xl" />
        <svg
          className="absolute left-[8%] top-[18%] h-14 w-14 text-teal/30"
          viewBox="0 0 64 64"
          fill="currentColor"
        >
          <circle cx="20" cy="32" r="14" />
          <circle cx="42" cy="28" r="10" opacity="0.7" />
          <circle cx="36" cy="44" r="8" opacity="0.5" />
        </svg>
        <svg
          className="absolute right-[12%] top-[42%] h-12 w-12 rotate-12 text-coral/35"
          viewBox="0 0 48 48"
          fill="currentColor"
        >
          <path d="M24 4c8 6 14 14 14 22s-6 18-14 18S10 34 10 26 16 10 24 4z" />
        </svg>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <svg
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-2 -top-2 h-10 w-10 text-gold/50",
          className
        )}
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <path d="M8 20a12 12 0 1 0 24 0 8 8 0 1 1-24 0z" />
      </svg>
    );
  }

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden opacity-80", className)}
    >
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-pink-soft/25 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-teal/15 blur-3xl" />
    </div>
  );
}
