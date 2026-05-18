import { ProductGrid } from "@/components/product/ProductGrid";
import { ArtShapes } from "@/components/ui/ArtShapes";
import { FadeIn } from "@/components/ui/FadeIn";
import { getNewProducts } from "@/data/products";
import { SectionHeader } from "@/sections/SectionHeader";

export function NewArrivalsSection() {
  const products = getNewProducts();

  return (
    <section className="relative section-wash-teal py-16 md:py-24">
      <ArtShapes />
      <div className="container-editorial relative">
        <FadeIn>
          <SectionHeader
            eyebrow="Recién salidos del horno"
            title="Novedades"
            description="Piezas frescas del taller. Cuando te enamoras, no esperes — cada creación es única."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ProductGrid products={products} className="lg:grid-cols-3" />
        </FadeIn>
      </div>
    </section>
  );
}
