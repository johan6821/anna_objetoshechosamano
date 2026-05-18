import { workshopMedia } from "@/data/media";

export type ProductCategory =
  | "aretes"
  | "earcuff"
  | "colgante-corto"
  | "colgante-largo"
  | "sets";

export type Product = {
  id: string;
  slug: string;
  name: string;
  tag: string;
  category: ProductCategory;
  collection: string;
  desc: string;
  story: string;
  materials: string[];
  price: number;
  images: string[];
  polymerNote?: string;
  featured?: boolean;
  isNew?: boolean;
  bestseller?: boolean;
};

const img = (filename: string) => `/images/${encodeURIComponent(filename)}`;
const w = (filename: string) => workshopMedia(filename);

const PHOTOS = [
  "WhatsApp Image 2026-04-30 at 10.46.38 AM.jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM (1).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM (2).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM (3).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM.jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.40 AM (1).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.40 AM.jpeg",
] as const;

export const products: Product[] = [
  {
    id: "flor-primavera",
    slug: "aretes-flor-primavera",
    name: "Aretes flor primavera",
    tag: "Broquel",
    category: "aretes",
    collection: "primavera",
    desc: "Arcilla polimérica en capas, colores vivos y acabado con mimo artesanal.",
    story:
      "Inspirados en el primer sol de primavera: pétalos modelados a mano, capa a capa, hasta lograr una flor que se siente viva en la oreja.",
    materials: ["Arcilla polimérica horneada", "Ganchos hipoalergénicos", "Barniz no tóxico"],
    price: 7000,
    images: [img(PHOTOS[0])],
    polymerNote: "Pieza del taller, modelada y horneada a mano.",
    featured: true,
    isNew: true,
  },
  {
    id: "earcuff-minimal",
    slug: "earcuff-minimalista",
    name: "Earcuff minimalista",
    tag: "Earcuff",
    category: "earcuff",
    collection: "esenciales",
    desc: "Forma limpia y liviana: arcilla polimérica horneada, cómoda para el día a día.",
    story:
      "Para quienes aman lo discreto con personalidad. Una línea suave que abraza la oreja sin perforación extra.",
    materials: ["Arcilla polimérica", "Ajuste artesanal", "Acabado mate"],
    price: 12000,
    images: [img(PHOTOS[1]), w("Earcuff.jpeg"), w("Earcuff (2).jpeg")],
    polymerNote: "Referencia de textura y color del taller.",
    featured: true,
    bestseller: true,
  },
  {
    id: "gota-terracota",
    slug: "aretes-gota-terracota",
    name: "Aretes gota terracota",
    tag: "Colgante corto",
    category: "colgante-corto",
    collection: "tierra",
    desc: "Mezcla de pigmentos tipo terracota y crema; sensación cálida y artesanal.",
    story:
      "Tonos de tierra y luz dorada. Cada gota guarda pequeñas variaciones que cuentan que fue hecha por manos humanas.",
    materials: ["Arcilla polimérica", "Pigmentos minerales", "Ganchos dorados"],
    price: 15500,
    images: [img(PHOTOS[2])],
    polymerNote: "Par modelado a mano en arcilla polimérica.",
    featured: true,
  },
  {
    id: "hoja-dorada",
    slug: "earcuff-hoja-dorada",
    name: "Earcuff hoja dorada",
    tag: "Earcuff",
    category: "earcuff",
    collection: "botanica",
    desc: "Detalles con foil o pan de oro sobre arcilla polimérica; pieza ligera.",
    story:
      "Una hoja que captura la luz. El detalle dorado nace en el taller, sin exagerar: elegancia artesanal.",
    materials: ["Arcilla polimérica", "Pan de oro / foil", "Barniz protector"],
    price: 18900,
    images: [img(PHOTOS[3]), w("Earcuff (3).jpeg"), w("Earcuff (4).jpeg")],
    polymerNote: "Acabado decorativo hecho en el taller.",
    bestseller: true,
  },
  {
    id: "geometricos",
    slug: "aretes-geometricos",
    name: "Aretes geométricos",
    tag: "Broquel",
    category: "aretes",
    collection: "color",
    desc: "Cortes y contrastes jugados solo con arcilla polimérica y mucho color.",
    story:
      "Formas que juegan con el movimiento del rostro. Geometría imperfecta, vibrante y llena de alegría.",
    materials: ["Arcilla polimérica", "Contraste de capas", "Ganchos hipoalergénicos"],
    price: 22000,
    images: [img(PHOTOS[4]), w("Aretes (5).jpeg"), w("Aretes (6).jpeg")],
    polymerNote: "Formas definidas a mano antes del horneado.",
    isNew: true,
  },
  {
    id: "set-mariposa",
    slug: "set-mariposa",
    name: "Set mariposa",
    tag: "Par + mini",
    category: "sets",
    collection: "primavera",
    desc: "Estampados y mezclas para combinar piezas a juego; sensación primaveral.",
    story:
      "Un vuelo de color en tres piezas. Pensado para regalar o para lucir un look completo con un solo gesto.",
    materials: ["Arcilla polimérica", "Set coordinado", "Empaque artesanal"],
    price: 28500,
    images: [img(PHOTOS[5]), w("Candongas mini.jpeg"), w("candongasMini.jpeg")],
    polymerNote: "Set pensado para lucir en armonía.",
    featured: true,
  },
  {
    id: "bohemios",
    slug: "aretes-largos-bohemios",
    name: "Aretes largos bohemios",
    tag: "Colgante largo",
    category: "colgante-largo",
    collection: "bohemia",
    desc: "Capas y colgantes largos pero livianos; movimiento y color artesanal.",
    story:
      "Largos, ligeros y llenos de ritmo. Cada capa se mueve contigo — ideal para tardes doradas y fotos que brillan.",
    materials: ["Arcilla polimérica", "Capas livianas", "Ganchos reforzados"],
    price: 32000,
    images: [img(PHOTOS[6]), w("Candongas (5).jpeg"), w("Candongas (6).jpeg")],
    polymerNote: "Colores vivos del taller.",
    bestseller: true,
  },
  {
    id: "earcuff-doble",
    slug: "earcuff-doble-asimetria",
    name: "Earcuff doble asimetría",
    tag: "Earcuff",
    category: "earcuff",
    collection: "statement",
    desc: "Capas y paleta alegre tras el curado; pieza con personalidad propia.",
    story:
      "Para la mujer que no pide permiso para brillar. Asimetría deliberada, color sin disculpas.",
    materials: ["Arcilla polimérica", "Diseño asimétrico", "Acabado artesanal"],
    price: 35000,
    images: [
      w("EarcuffColores.jpeg"),
      w("Earcuff (5).jpeg"),
      w("Earcuff (6).jpeg"),
    ],
    polymerNote: "Diseño asimétrico modelado a mano.",
    isNew: true,
  },
];

export const collections = [
  { id: "primavera", name: "Primavera", desc: "Flores, mariposas y color vivo" },
  { id: "esenciales", name: "Esenciales", desc: "Formas limpias para cada día" },
  { id: "tierra", name: "Tierra", desc: "Tonos cálidos y terracota" },
  { id: "botanica", name: "Botánica", desc: "Hojas, oro y naturaleza" },
  { id: "bohemia", name: "Bohemia", desc: "Movimiento y capas largas" },
  { id: "statement", name: "Statement", desc: "Piezas con actitud propia" },
  { id: "color", name: "Color", desc: "Vibrante y expresivo" },
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getProductsByCollection(collectionId: string): Product[] {
  return products.filter((p) => p.collection === collectionId);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
