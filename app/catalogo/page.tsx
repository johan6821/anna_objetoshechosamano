import { ProductGrid } from "@/components/product/ProductGrid";
import { FadeIn } from "@/components/ui/FadeIn";
import { collections, products } from "@/data/products";
import { SectionHeader } from "@/sections/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colección",
  description:
    "Explora aretes, earcuffs y sets en arcilla polimérica hechos a mano en Colombia.",
};

type CatalogPageProps = {
  searchParams: Promise<{ filter?: string }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { filter } = await searchParams;

  const filtered = (() => {
    if (filter === "nuevos") return products.filter((p) => p.isNew);
    if (filter === "bestsellers") return products.filter((p) => p.bestseller);
    return products;
  })();

  const filterLabel =
    filter === "nuevos"
      ? "Novedades"
      : filter === "bestsellers"
        ? "Más vendidos"
        : "Toda la colección";

  return (
    <div className="pb-24 pt-8 md:pt-12">
      <div className="container-editorial">
        <FadeIn>
          <SectionHeader
            eyebrow="Catálogo"
            title={filterLabel}
            description="Piezas modeladas a mano en arcilla polimérica. Elige, añade al carrito y paga en minutos."
          />
        </FadeIn>

        <FadeIn delay={0.05} className="mb-12 flex flex-wrap gap-2">
          {[
            { href: "/catalogo", label: "Todas", active: !filter },
            {
              href: "/catalogo?filter=nuevos",
              label: "Nuevas ✨",
              active: filter === "nuevos",
            },
            {
              href: "/catalogo?filter=bestsellers",
              label: "Más vendidas 💜",
              active: filter === "bestsellers",
            },
          ].map((chip) => (
            <a
              key={chip.href}
              href={chip.href}
              className={
                chip.active
                  ? "btn-playful btn-playful-primary px-5 py-2 text-sm"
                  : "btn-playful btn-playful-outline px-5 py-2 text-sm font-bold"
              }
            >
              {chip.label}
            </a>
          ))}
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProductGrid products={filtered} />
        </FadeIn>

        <section className="mt-20 border-t-2 border-dashed border-magenta/25 pt-14">
          <h3 className="eyebrow mb-6">Colecciones</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((col, i) => (
              <article
                key={col.id}
                className="card-artisan p-6"
                style={{
                  borderColor:
                    i % 3 === 0
                      ? "rgb(255 168 163 / 0.8)"
                      : i % 3 === 1
                        ? "rgb(27 176 209 / 0.5)"
                        : "rgb(237 189 14 / 0.6)",
                }}
              >
                <h4 className="font-display text-xl font-extrabold text-ink">
                  {col.name}
                </h4>
                <p className="mt-2 text-sm font-semibold text-ink-muted">
                  {col.desc}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

