"use client";

import { ProductImage } from "@/components/product/ProductImage";
import { ArtShapes } from "@/components/ui/ArtShapes";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { formatCOP } from "@/lib/format";
import { cn } from "@/lib/cn";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <Link href={`/producto/${product.slug}`} className="card-artisan relative block overflow-hidden p-2">
        <ArtShapes variant="card" />
        <div className="absolute left-4 top-4 z-10 flex flex-col gap-1.5">
          <span className="badge-handmade">Hecho a mano</span>
          {product.isNew && <span className="badge-new">Nuevo</span>}
          {product.bestseller && <span className="badge-star">Favorito</span>}
        </div>
        <ProductImage
          src={product.images[0]}
          alt={`${product.name} — Anna, el arte sanna`}
          className="rounded-[1rem]"
        />
      </Link>
      <div className="relative mt-4 flex flex-1 flex-col gap-2 rounded-2xl bg-surface/80 p-3">
        <span className="badge-tag w-fit">{product.tag}</span>
        <Link href={`/producto/${product.slug}`}>
          <h3 className="font-display text-lg font-extrabold text-ink transition-colors group-hover:text-pink">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 text-sm font-medium leading-relaxed text-ink-muted">
          {product.desc}
        </p>
        <p className="mt-auto pt-1 font-display text-xl font-extrabold text-coral">
          {formatCOP(product.price)}
        </p>
        <Button
          variant="primary"
          size="sm"
          className="mt-2 w-full"
          onClick={() => addItem(product.id)}
        >
          Añadir al carrito ✨
        </Button>
      </div>
    </article>
  );
}

