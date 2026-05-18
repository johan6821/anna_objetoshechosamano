export const siteConfig = {
  name: "Anna Objetos Hechos a Mano",
  tagline: "El arte sanna",
  brandWord: "anna",
  description:
    "Aretes y earcuffs artesanales en arcilla polimérica. Piezas coloridas, hechas a mano en Colombia con cariño y creatividad.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es-CO",
  currency: "COP",
  whatsapp: "573021192550",
  whatsappDisplay: "+57 302 119 2550",
  instagram: "https://www.instagram.com/anna_objetoshechosamano/",
  instagramHandle: "@anna_objetoshechosamano",
  shippingNote: "Envíos a todo Colombia · 3–7 días hábiles según ciudad",
  supportHours: "Respondemos consultas en horario laboral",
  logos: {
    /** Logo circular — header / favicon */
    circular: "/images/logo-circular.png",
    /** Wordmark horizontal — hero, textos */
    flat: "/images/logo-plano.png",
  },
} as const;

export function whatsappUrl(text: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
