import { ProductGrid } from "@/components/product/ProductGrid";
import { FadeIn } from "@/components/ui/FadeIn";
import { getBestsellers } from "@/data/products";
import { SectionHeader } from "@/sections/SectionHeader";

export function BestsellersSection() {
  return (
    <section className="section-wash-gold py-16 md:py-24">
      <div className="container-editorial">
        <FadeIn>
          <SectionHeader
            eyebrow="Favoritas de la comunidad"
            title="Más amadas"
            description="Las piezas que vuelven una y otra vez. Livianas, cómodas y llenas de personalidad."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ProductGrid products={getBestsellers()} />
        </FadeIn>
      </div>
    </section>
  );
}
