"use client";

import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductImage } from "@/components/product/ProductImage";
import { StickyAddToCart } from "@/components/product/StickyAddToCart";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/data/products";
import { getRelatedProducts } from "@/data/products";
import { siteConfig } from "@/data/site";
import { useCart } from "@/hooks/use-cart";
import { formatCOP } from "@/lib/format";
import { cn } from "@/lib/cn";
import { useState } from "react";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const related = getRelatedProducts(product);

  return (
    <>
      <div className="container-editorial pb-32 pt-6 md:pb-24 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-pink-soft/60 to-cyan/20 blur-sm" />
            <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white shadow-card">
              <span className="badge-handmade absolute left-4 top-4 z-10">
                Hecho a mano
              </span>
              <ProductImage
                src={product.images[activeImage]}
                alt={product.name}
                priority
                className="rounded-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-2">
                {product.images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "relative h-16 w-14 overflow-hidden rounded-lg border-2",
                      activeImage === index
                        ? "border-coral shadow-playful"
                        : "border-pink-soft/60"
                    )}
                  >
                    <ProductImage src={src} alt="" className="!aspect-auto h-full w-full" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:py-4">
            <span className="badge-tag">{product.tag}</span>
            {product.isNew && (
              <span className="badge-new ml-2">Nuevo</span>
            )}
            <h1 className="display-md mt-3">{product.name}</h1>
            <p className="mt-3 font-display text-3xl font-extrabold text-coral">
              {formatCOP(product.price)}
            </p>
            <p className="mt-5 text-base font-semibold leading-relaxed text-ink-muted">
              {product.story}
            </p>

            <ul className="mt-8 space-y-3 rounded-2xl border-2 border-dashed border-magenta/25 bg-surface/90 p-5 text-sm font-semibold text-ink-muted">
              <li>
                <strong className="text-pink">Materiales:</strong>{" "}
                {product.materials.join(" · ")}
              </li>
              <li>
                <strong className="text-teal">Envío:</strong>{" "}
                {siteConfig.shippingNote}
              </li>
              {product.polymerNote && (
                <li>
                  <strong className="text-magenta">Taller:</strong>{" "}
                  {product.polymerNote}
                </li>
              )}
            </ul>

            <div className="mt-8 hidden flex-wrap gap-3 md:flex">
              <Button size="lg" onClick={() => addItem(product.id)}>
                Añadir al carrito ✨
              </Button>
              <Button href="/checkout" variant="outline" size="lg">
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t-2 border-dashed border-magenta/20 pt-14">
            <h2 className="display-md mb-10">También te puede gustar</h2>
            <ProductGrid products={related} />
          </section>
        )}
      </div>

      <StickyAddToCart product={product} />
    </>
  );
}
