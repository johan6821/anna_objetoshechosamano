import { workshopMedia } from "@/data/media";

export type ProductCategory =
  | "aretes"
  | "earcuff"
  | "candongas"
  | "collar"
  | "anillo"
  | "llavero";

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

const w = (filename: string) => workshopMedia(filename);

const TAG: Record<ProductCategory, string> = {
  aretes: "Aretes",
  earcuff: "Earcuff",
  candongas: "Candongas",
  collar: "Collar",
  anillo: "Anillo",
  llavero: "Llavero",
};

function p(
  def: Omit<Product, "tag"> & { category: ProductCategory }
): Product {
  return { ...def, tag: TAG[def.category] };
}

/** Catálogo alineado con los nombres de archivo en public/images/imagenes05_18 */
export const products: Product[] = [
  // —— Candongas ——
  p({
    id: "candongas-masmelo-rosa",
    slug: "candongas-masmelo-rosa",
    name: "Candongas Masmelo Rosa",
    category: "candongas",
    collection: "primavera",
    desc: "Candongas en tono masmelo rosa, suaves y femeninas; perfectas para looks delicados.",
    story:
      "Inspiradas en la textura de un malvavisco: redonditas, tiernas y con ese rosa que ilumina el rostro sin gritar.",
    materials: ["Arcilla polimérica horneada", "Poste hipoalergénico", "Barniz no tóxico"],
    price: 16500,
    images: [
      w("candongaMasmelo.jpeg"),
      w("CandongaMasmelo (2).jpeg"),
      w("candongasMasmelo.jpeg"),
      w("CandongasMasmelo (2).jpeg"),
    ],
    polymerNote: "Modeladas a mano en el taller Anna.",
    featured: true,
    isNew: true,
  }),
  p({
    id: "candongas-cielo",
    slug: "candongas-cielo-azul",
    name: "Candongas Cielo Azul",
    category: "candongas",
    collection: "esenciales",
    desc: "Candongas en azul cielo, frescas y versátiles para el día a día.",
    story: "Un soplo de cielo despejado en la oreja: calma, claridad y mucho estilo artesanal.",
    materials: ["Arcilla polimérica", "Pigmentos artesanales", "Poste hipoalergénico"],
    price: 15500,
    images: [w("CandongasCielo.jpeg")],
    featured: true,
  }),
  p({
    id: "candongas-mini",
    slug: "candongas-mini",
    name: "Candongas Mini",
    category: "candongas",
    collection: "esenciales",
    desc: "Versión mini de nuestras candongas: discretas, cómodas y llenas de detalle.",
    story: "Para quien ama lo pequeño con personalidad. Ideales para segunda perforación o looks minimalistas.",
    materials: ["Arcilla polimérica", "Tamaño mini artesanal", "Barniz protector"],
    price: 12000,
    images: [w("Candongas mini.jpeg"), w("candongasMini.jpeg")],
    isNew: true,
  }),
  p({
    id: "candongas-clasicas",
    slug: "candongas-clasicas",
    name: "Candongas Clásicas",
    category: "candongas",
    collection: "color",
    desc: "Nuestro par de candongas clásico: forma redonda y color vivo en arcilla polimérica.",
    story: "El básico favorito del taller, reinventado en cada sesión de color con la misma mimo artesanal.",
    materials: ["Arcilla polimérica horneada", "Poste dorado o plateado", "Acabado brillante"],
    price: 14000,
    images: [w("candongas.jpeg"), w("Candongas (2).jpeg")],
    bestseller: true,
  }),
  p({
    id: "candongas-pastel",
    slug: "candongas-pastel",
    name: "Candongas Pastel",
    category: "candongas",
    collection: "primavera",
    desc: "Mezcla pastel en candongas: suaves, actuales y muy combinable.",
    story: "Colores que parecen sacados de un atardecer: delicados pero con presencia en la oreja.",
    materials: ["Arcilla polimérica", "Mezcla de pigmentos a mano", "Barniz no tóxico"],
    price: 15000,
    images: [w("candongas (3).jpeg")],
  }),
  p({
    id: "candongas-delicadas",
    slug: "candongas-delicadas",
    name: "Candongas Delicadas",
    category: "candongas",
    collection: "esenciales",
    desc: "Candongas de línea fina y paleta suave; ligeras y cómodas.",
    story: "Pensadas para acompañarte todos los días sin pesar: artesanía que se siente natural.",
    materials: ["Arcilla polimérica", "Diseño liviano", "Poste hipoalergénico"],
    price: 14500,
    images: [w("candongas (4).jpeg")],
  }),
  p({
    id: "candongas-intensas",
    slug: "candongas-intensas",
    name: "Candongas Intensas",
    category: "candongas",
    collection: "color",
    desc: "Candongas con color intenso y actitud; pieza protagonista del look.",
    story: "Cuando quieres que te noten con alegría: pigmentos vivos y forma perfecta de candonga.",
    materials: ["Arcilla polimérica", "Pigmentos saturados", "Barniz protector"],
    price: 16000,
    images: [w("Candongas (5).jpeg")],
    bestseller: true,
  }),
  p({
    id: "candongas-sol",
    slug: "candongas-sol",
    name: "Candongas Sol",
    category: "candongas",
    collection: "tierra",
    desc: "Candongas en tonos cálidos tipo sol y terracota; energía artesanal.",
    story: "Calor en la oreja: inspiradas en tardes doradas y en la luz que entra al taller.",
    materials: ["Arcilla polimérica", "Tonos cálidos", "Acabado artesanal"],
    price: 15500,
    images: [w("Candongas (6).jpeg")],
  }),

  // —— Aretes ——
  p({
    id: "aretes-topitos",
    slug: "aretes-topitos",
    name: "Aretes Topitos",
    category: "aretes",
    collection: "esenciales",
    desc: "Topitos en arcilla polimérica: pequeños, cómodos y con textura artesanal.",
    story: "El básico elevado: perfectos para combinar o para lucir solos con un toque handmade.",
    materials: ["Arcilla polimérica", "Ganchos hipoalergénicos", "Textura modelada a mano"],
    price: 18500,
    images: [w("AretesTopitos.jpeg")],
    featured: true,
  }),
  p({
    id: "aretes-clasicos",
    slug: "aretes-clasicos",
    name: "Aretes Clásicos",
    category: "aretes",
    collection: "color",
    desc: "Par de aretes clásicos en arcilla polimérica con acabado artesanal.",
    story: "Formas atemporales con el sello de color del taller: cada par tiene su propio carácter.",
    materials: ["Arcilla polimérica horneada", "Ganchos hipoalergénicos", "Barniz no tóxico"],
    price: 22000,
    images: [
      w("Aretes.jpeg"),
      w("Aretes (2).jpeg"),
      w("Aretes (3).jpeg"),
      w("Aretes (4).jpeg"),
    ],
    featured: true,
    bestseller: true,
  }),
  p({
    id: "aretes-coleccion-5",
    slug: "aretes-coleccion-5",
    name: "Aretes Colección 5",
    category: "aretes",
    collection: "color",
    desc: "Aretes de la quinta serie del taller: diseño y paleta propios.",
    story: "Piezas que nacen de experimentar con formas y capas hasta lograr el equilibrio perfecto.",
    materials: ["Arcilla polimérica", "Capas de color", "Ganchos reforzados"],
    price: 24000,
    images: [w("Aretes (5).jpeg"), w("Aretes (6).jpeg")],
  }),
  p({
    id: "aretes-coleccion-7",
    slug: "aretes-coleccion-7",
    name: "Aretes Colección 7",
    category: "aretes",
    collection: "bohemia",
    desc: "Aretes con movimiento y color de la serie 7; expresivos y livianos.",
    story: "Para la mujer que ama el detalle bohemio sin renunciar a la comodidad.",
    materials: ["Arcilla polimérica", "Diseño con movimiento", "Ganchos hipoalergénicos"],
    price: 26500,
    images: [w("aretes (7).jpeg"), w("Aretes (8).jpeg")],
    isNew: true,
  }),
  p({
    id: "aretes-luna",
    slug: "aretes-luna",
    name: "Aretes Luna",
    category: "aretes",
    collection: "botanica",
    desc: "Aretes inspirados en la luna: curvas suaves y acabado artesanal.",
    story: "Un guiño celestial modelado a mano, con la calidez de la arcilla horneada.",
    materials: ["Arcilla polimérica", "Forma artesanal", "Barniz protector"],
    price: 21000,
    images: [w("Aretes1.jpeg")],
  }),
  p({
    id: "aretes-sol",
    slug: "aretes-sol",
    name: "Aretes Sol",
    category: "aretes",
    collection: "tierra",
    desc: "Aretes con energía solar: tonos cálidos y presencia en el rostro.",
    story: "Luz colombiana convertida en joyería: cálidos, alegres y únicos.",
    materials: ["Arcilla polimérica", "Pigmentos cálidos", "Ganchos dorados"],
    price: 22500,
    images: [w("Aretes2.jpeg")],
  }),
  p({
    id: "aretes-primavera",
    slug: "aretes-primavera",
    name: "Aretes Primavera",
    category: "aretes",
    collection: "primavera",
    desc: "Aretes con paleta primaveral: flores, color vivo y mucho cariño.",
    story: "Como un jardín en la oreja: colores que celebran la estación y el handmade.",
    materials: ["Arcilla polimérica", "Detalle floral", "Barniz no tóxico"],
    price: 23500,
    images: [w("Aretes3.jpeg")],
    featured: true,
    isNew: true,
  }),
  p({
    id: "aretes-geometricos-color",
    slug: "aretes-geometricos-color",
    name: "Aretes Geométricos Color",
    category: "aretes",
    collection: "color",
    desc: "Formas geométricas y contraste de color en arcilla polimérica.",
    story: "Líneas y ángulos jugados con pigmentos del taller: arte que se mueve contigo.",
    materials: ["Arcilla polimérica", "Contraste de capas", "Ganchos hipoalergénicos"],
    price: 25000,
    images: [w("Aretes4.jpeg")],
  }),
  p({
    id: "aretes-arcoiris",
    slug: "aretes-arcoiris",
    name: "Aretes Arcoíris",
    category: "aretes",
    collection: "color",
    desc: "Mezcla arcoíris de capas en arcilla polimérica; pura energía.",
    story: "Cada capa es una decisión de color en el taller: vibrantes, únicos y llenos de alegría.",
    materials: ["Arcilla polimérica", "Mezcla multicolor", "Acabado artesanal"],
    price: 24500,
    images: [w("Aretes5.jpeg")],
    isNew: true,
  }),
  p({
    id: "aretes-bohemios",
    slug: "aretes-bohemios",
    name: "Aretes Bohemios",
    category: "aretes",
    collection: "bohemia",
    desc: "Aretes bohemios con capas y movimiento; largos pero livianos.",
    story: "Ritmo y color para tardes especiales: piezas que bailan con tu movimiento.",
    materials: ["Arcilla polimérica", "Capas livianas", "Ganchos reforzados"],
    price: 32000,
    images: [w("Aretes6.jpeg")],
    bestseller: true,
  }),
  p({
    id: "aretes-estrella",
    slug: "aretes-estrella",
    name: "Aretes Estrella",
    category: "aretes",
    collection: "statement",
    desc: "Aretes con forma de estrella y brillo artesanal; pieza con actitud.",
    story: "Para brillar con intención: diseño que no pasa desapercibido, hecho a mano con mimo.",
    materials: ["Arcilla polimérica", "Diseño statement", "Barniz protector"],
    price: 27000,
    images: [w("Aretes7.jpeg")],
  }),

  // —— Earcuffs ——
  p({
    id: "earcuff-clasico",
    slug: "earcuff-clasico",
    name: "Earcuff Clásico",
    category: "earcuff",
    collection: "esenciales",
    desc: "Earcuff clásico en arcilla polimérica: abraza la oreja sin perforación extra.",
    story: "Línea limpia y cómoda para el día a día: el earcuff que vuelves a elegir una y otra vez.",
    materials: ["Arcilla polimérica horneada", "Ajuste artesanal", "Acabado mate"],
    price: 18000,
    images: [
      w("Earcuff.jpeg"),
      w("Earcuff (2).jpeg"),
      w("Earcuff (3).jpeg"),
    ],
    featured: true,
    bestseller: true,
  }),
  p({
    id: "earcuff-dorado",
    slug: "earcuff-dorado",
    name: "Earcuff Dorado",
    category: "earcuff",
    collection: "botanica",
    desc: "Earcuff con detalle dorado sobre arcilla polimérica; elegancia artesanal.",
    story: "Un toque de luz en la oreja: foil y barniz aplicados a mano en el taller.",
    materials: ["Arcilla polimérica", "Detalle dorado / foil", "Barniz protector"],
    price: 21000,
    images: [w("Earcuff (4).jpeg"), w("Earcuff (5).jpeg")],
  }),
  p({
    id: "earcuff-statement",
    slug: "earcuff-statement",
    name: "Earcuff Statement",
    category: "earcuff",
    collection: "statement",
    desc: "Earcuff de mayor presencia: diseño con carácter y color.",
    story: "Para quien quiere un earcuff que hable por sí solo: audaz, cómodo y hecho a mano.",
    materials: ["Arcilla polimérica", "Diseño ancho artesanal", "Ajuste personalizado"],
    price: 28000,
    images: [w("Earcuff (6).jpeg")],
  }),
  p({
    id: "earcuff-colores",
    slug: "earcuff-colores-vivos",
    name: "Earcuff Colores Vivos",
    category: "earcuff",
    collection: "color",
    desc: "Earcuff con paleta alegre y capas de color tras el curado.",
    story: "Asimetría y color sin disculpas: la pieza favorita de quien ama expresarse.",
    materials: ["Arcilla polimérica", "Diseño multicolor", "Acabado artesanal"],
    price: 35000,
    images: [w("EarcuffColores.jpeg")],
    featured: true,
    isNew: true,
  }),

  // —— Collares ——
  p({
    id: "collar-corazones",
    slug: "collar-corazones",
    name: "Collar Corazones",
    category: "collar",
    collection: "primavera",
    desc: "Collar con dijes de corazón en arcilla polimérica; romántico y artesanal.",
    story: "Cada corazón modelado a mano: un regalo con alma o un mimo para ti misma.",
    materials: ["Arcilla polimérica", "Cadena metálica", "Dijes hechos a mano"],
    price: 48000,
    images: [
      w("CollarCorazones.jpeg"),
      w("CollarCorazones (2).jpeg"),
      w("collarCorazones (3).jpeg"),
      w("collarCorazon.jpeg"),
    ],
    featured: true,
    bestseller: true,
  }),
  p({
    id: "collar-amatista",
    slug: "collar-amatista",
    name: "Collar Amatista",
    category: "collar",
    collection: "botanica",
    desc: "Collar inspirado en tonos amatista: profundo, elegante y artesanal.",
    story: "La piedra que inspira calma, traducida a arcilla polimérica con detalle de taller.",
    materials: ["Arcilla polimérica", "Pigmentos profundos", "Cadena ajustable"],
    price: 52000,
    images: [w("CollarAmatista.jpeg")],
    featured: true,
  }),
  p({
    id: "collar-estrella",
    slug: "collar-estrella",
    name: "Collar Estrella",
    category: "collar",
    collection: "statement",
    desc: "Collar con dije estrella en arcilla polimérica; pieza con presencia.",
    story: "Una estrella hecha a mano que cuelga cerca del corazón: magia y color artesanal.",
    materials: ["Arcilla polimérica", "Dije modelado a mano", "Cadena metálica"],
    price: 45000,
    images: [w("collarEstrella.jpeg")],
  }),
  p({
    id: "collar-candongas",
    slug: "collar-candongas",
    name: "Collar con Candongas",
    category: "collar",
    collection: "primavera",
    desc: "Collar que combina cadena con candongas de arcilla polimérica.",
    story: "Lo mejor de dos mundos: el movimiento del collar y el color de nuestras candongas.",
    materials: ["Arcilla polimérica", "Candongas artesanales", "Cadena dorada"],
    price: 55000,
    images: [w("CollarCandongasAnilllo.jpeg")],
    isNew: true,
  }),

  // —— Anillo & llaveros ——
  p({
    id: "anillo-artesanal",
    slug: "anillo-artesanal",
    name: "Anillo Artesanal",
    category: "anillo",
    collection: "esenciales",
    desc: "Anillo en arcilla polimérica horneada; ligero y con diseño único.",
    story: "Joyería para las manos con el mismo mimo del taller: cómodo, colorido y único.",
    materials: ["Arcilla polimérica", "Ajuste artesanal", "Barniz protector"],
    price: 28000,
    images: [w("anillo.jpeg")],
  }),
  p({
    id: "llavero-arcilla",
    slug: "llavero-arcilla",
    name: "Llavero Arcilla",
    category: "llavero",
    collection: "color",
    desc: "Llavero en arcilla polimérica; regalo handmade con personalidad.",
    story: "Lleva un pedacito del taller contigo: ideal para regalar o coleccionar.",
    materials: ["Arcilla polimérica horneada", "Argolla metálica", "Barniz no tóxico"],
    price: 15000,
    images: [w("Llavero.jpeg")],
  }),
  p({
    id: "llavero-corazon",
    slug: "llavero-corazon",
    name: "Llavero Corazón",
    category: "llavero",
    collection: "primavera",
    desc: "Llavero con forma de corazón en arcilla polimérica.",
    story: "Un detalle pequeño con mucho cariño: hecho a mano para sonreír cada vez que lo ves.",
    materials: ["Arcilla polimérica", "Forma de corazón modelada a mano", "Argolla resistente"],
    price: 16000,
    images: [w("llavero (2).jpeg")],
    isNew: true,
  }),
];

export const collections = [
  { id: "primavera", name: "Primavera", desc: "Flores, corazones y color vivo" },
  { id: "esenciales", name: "Esenciales", desc: "Formas limpias para cada día" },
  { id: "tierra", name: "Tierra", desc: "Tonos cálidos y terracota" },
  { id: "botanica", name: "Botánica", desc: "Hojas, amatista y naturaleza" },
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
