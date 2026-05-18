"use client";

import { BrandLogo } from "@/components/brand/BrandLogo";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/catalogo", label: "Colección" },
  { href: "/#historia", label: "Historia" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b-2 border-magenta/15 bg-bg/95 shadow-playful backdrop-blur-md"
          : "bg-bg/80 backdrop-blur-sm"
      )}
    >
      <div className="container-editorial flex min-h-[4.5rem] items-center justify-between gap-3 py-2 md:min-h-[5.25rem] md:py-2.5">
        <BrandLogo variant="circular" size="header" />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-sm font-bold text-ink-muted transition-colors hover:text-pink",
                pathname === link.href && "text-coral"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="btn-playful btn-playful-secondary relative flex h-11 shrink-0 items-center justify-center gap-2 px-4 text-sm"
          aria-label="Abrir carrito"
        >
          Bolsa 🛍️
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gold text-[0.7rem] font-extrabold text-ink">
            {itemCount}
          </span>
        </button>
      </div>
    </header>
  );
}
