"use client";

import { Button } from "@/components/ui/Button";
import type { Product } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { formatCOP } from "@/lib/format";

type StickyAddToCartProps = {
  product: Product;
};

export function StickyAddToCart({ product }: StickyAddToCartProps) {
  const { addItem } = useCart();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-magenta/30 bg-gradient-to-r from-bg via-surface to-pink-soft/40 p-4 backdrop-blur-md md:hidden">
      <>
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm font-extrabold text-ink">
              {product.name}
            </p>
            <p className="font-display text-lg font-extrabold text-coral">
              {formatCOP(product.price)}
            </p>
          </div>
          <Button
            size="md"
            className="shrink-0"
            onClick={() => addItem(product.id)}
          >
            Añadir ✨
          </Button>
        </div>
      </>
    </div>
  );
}
