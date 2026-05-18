import { ProductGrid } from "@/components/product/ProductGrid";
import { ArtShapes } from "@/components/ui/ArtShapes";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getFeaturedProducts } from "@/data/products";
import { SectionHeader } from "@/sections/SectionHeader";

export function FeaturedCollection() {
  const products = getFeaturedProducts();

  return (
    <section className="relative py-16 md:py-24" id="destacados">
      <ArtShapes />
      <div className="container-editorial relative">
        <FadeIn>
          <SectionHeader
            eyebrow="Selección del taller"
            title="Piezas que enamoran al primer vistazo"
            description="Curamos lo mejor de cada colección: color, forma y ese detalle artesanal que solo sale modelando a mano."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ProductGrid products={products} />
        </FadeIn>
        <FadeIn delay={0.2} className="mt-12 text-center">
          <Button href="/catalogo" variant="secondary" size="lg">
            Ver toda la colección 🎨
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
