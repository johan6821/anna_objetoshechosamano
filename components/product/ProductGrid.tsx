import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";

type ProductGridProps = {
  products: Product[];
  className?: string;
};

export function ProductGrid({ products, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
