import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "relative mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-3 inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-coral" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className="display-md relative inline-block text-ink">
        {title}
        <span
          className="absolute -bottom-2 left-0 h-1.5 w-16 rounded-full bg-gradient-to-r from-gold via-coral to-pink md:w-24"
          aria-hidden
        />
      </h2>
      {description && (
        <p className="mt-6 text-base font-semibold leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </header>
  );
}
