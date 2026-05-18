"use client";

import { cn } from "@/lib/cn";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "btn-playful btn-playful-primary text-white",
  secondary: "btn-playful btn-playful-secondary text-white",
  ghost: "rounded-full bg-transparent font-display font-bold text-ink hover:bg-pink-soft/40",
  outline: "btn-playful btn-playful-outline",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-xs",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
} & Omit<HTMLMotionProps<"button">, "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    variants[variant],
    sizes[size],
    variant !== "ghost" && "btn-playful",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const inner = isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
