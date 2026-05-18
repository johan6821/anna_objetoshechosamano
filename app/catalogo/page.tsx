import { ProductGrid } from "@/components/product/ProductGrid";
import { FadeIn } from "@/components/ui/FadeIn";
import { collections, products } from "@/data/products";
import { SectionHeader } from "@/sections/SectionHeader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Colección",
  description:
    "Explora aretes, earcuffs y sets en arcilla polimérica hechos a mano en Colombia.",
};

type CatalogPageProps = {
  searchParams: Promise<{ filter?: string; coleccion?: string }>;
};

function catalogHref(filter?: string, coleccion?: string): string {
  const params = new URLSearchParams();
  if (filter) params.set("filter", filter);
  if (coleccion) params.set("coleccion", coleccion);
  const q = params.toString();
  return q ? `/catalogo?${q}` : "/catalogo";
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { filter, coleccion } = await searchParams;

  const filtered = (() => {
    let list = products;
    if (coleccion) {
      list = list.filter((p) => p.collection === coleccion);
    }
    if (filter === "nuevos") {
      list = list.filter((p) => p.isNew);
    }
    if (filter === "bestsellers") {
      list = list.filter((p) => p.bestseller);
    }
    return list;
  })();

  const activeCollection = collections.find((c) => c.id === coleccion);

  const filterLabel = activeCollection
    ? activeCollection.name
    : filter === "nuevos"
      ? "Novedades"
      : filter === "bestsellers"
        ? "Más vendidos"
        : "Toda la colección";

  const description = activeCollection
    ? activeCollection.desc
    : "Piezas modeladas a mano en arcilla polimérica. Elige, añade al carrito y paga en minutos.";

  return (
    <div className="pb-24 pt-8 md:pt-12">
      <div className="container-editorial">
        <FadeIn>
          <SectionHeader
            eyebrow="Catálogo"
            title={filterLabel}
            description={description}
          />
        </FadeIn>

        <FadeIn delay={0.04} className="mb-10">
          <h3 className="eyebrow mb-4">Colecciones</h3>
          <p className="mb-4 text-sm font-semibold text-ink-muted">
            Toca una colección para ver solo esas piezas. Puedes combinar con los
            filtros de abajo.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((col, i) => {
              const active = coleccion === col.id;
              const count = products.filter((p) => p.collection === col.id).length;
              return (
                <Link
                  key={col.id}
                  href={
                    active
                      ? catalogHref(filter, undefined)
                      : catalogHref(filter, col.id)
                  }
                  className={`card-artisan block p-5 transition-shadow hover:shadow-card ${
                    active ? "ring-2 ring-coral ring-offset-2" : ""
                  }`}
                  style={{
                    borderColor:
                      i % 3 === 0
                        ? "rgb(255 168 163 / 0.8)"
                        : i % 3 === 1
                          ? "rgb(27 176 209 / 0.5)"
                          : "rgb(237 189 14 / 0.6)",
                  }}
                >
                  <h4 className="font-display text-lg font-extrabold text-ink">
                    {col.name}
                    <span className="ml-2 text-sm font-semibold text-ink-muted">
                      ({count})
                    </span>
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-ink-muted">
                    {col.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.05} className="mb-12 flex flex-wrap gap-2">
          {[
            {
              href: catalogHref(undefined, coleccion),
              label: "Todas",
              active: !filter,
            },
            {
              href: catalogHref("nuevos", coleccion),
              label: "Nuevas ✨",
              active: filter === "nuevos",
            },
            {
              href: catalogHref("bestsellers", coleccion),
              label: "Más vendidas 💜",
              active: filter === "bestsellers",
            },
          ].map((chip) => (
            <Link
              key={chip.href}
              href={chip.href}
              className={
                chip.active
                  ? "btn-playful btn-playful-primary px-5 py-2 text-sm"
                  : "btn-playful btn-playful-outline px-5 py-2 text-sm font-bold"
              }
            >
              {chip.label}
            </Link>
          ))}
        </FadeIn>

        {filtered.length === 0 ? (
          <FadeIn delay={0.08}>
            <p className="rounded-2xl border-2 border-dashed border-magenta/25 bg-surface/90 p-8 text-center font-semibold text-ink-muted">
              No hay piezas con estos filtros.{" "}
              <Link href="/catalogo" className="text-coral underline">
                Ver todo el catálogo
              </Link>
            </p>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <ProductGrid products={filtered} />
          </FadeIn>
        )}
      </div>
    </div>
  );
}
