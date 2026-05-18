/** Medios del taller — carpeta public/images/imagenes05_18 */

const WORKSHOP_BASE = "/images/imagenes05_18";

export function workshopMedia(filename: string): string {
  return `${WORKSHOP_BASE}/${encodeURIComponent(filename)}`;
}

export const workshopVideos = [
  {
    src: workshopMedia("Video1.mp4"),
    poster: workshopMedia("Aretes.jpeg"),
    title: "Proceso en el taller",
  },
  {
    src: workshopMedia("Video 2.mp4"),
    poster: workshopMedia("Earcuff.jpeg"),
    title: "Detalle artesanal",
  },
  {
    src: workshopMedia("Aretes.mp4"),
    poster: workshopMedia("Aretes1.jpeg"),
    title: "Aretes a mano",
  },
  {
    src: workshopMedia("CollarCandogasAnillo.mp4"),
    poster: workshopMedia("CollarCandongasAnilllo.jpeg"),
    title: "Sets y collares",
  },
] as const;

/** Fotos del taller (nombres descriptivos, mayo 2026) */
export const workshopPhotos = [
  "Aretes.jpeg",
  "Aretes (2).jpeg",
  "Aretes (3).jpeg",
  "Aretes (4).jpeg",
  "Aretes (5).jpeg",
  "Aretes (6).jpeg",
  "aretes (7).jpeg",
  "Aretes (8).jpeg",
  "Aretes1.jpeg",
  "Aretes2.jpeg",
  "Aretes3.jpeg",
  "Aretes4.jpeg",
  "Aretes5.jpeg",
  "Aretes6.jpeg",
  "Aretes7.jpeg",
  "AretesTopitos.jpeg",
  "candongas.jpeg",
  "Candongas (2).jpeg",
  "candongas (3).jpeg",
  "candongas (4).jpeg",
  "Candongas (5).jpeg",
  "Candongas (6).jpeg",
  "Candongas mini.jpeg",
  "candongasMini.jpeg",
  "CandongasCielo.jpeg",
  "candongaMasmelo.jpeg",
  "CandongaMasmelo (2).jpeg",
  "candongasMasmelo.jpeg",
  "CandongasMasmelo (2).jpeg",
  "Earcuff.jpeg",
  "Earcuff (2).jpeg",
  "Earcuff (3).jpeg",
  "Earcuff (4).jpeg",
  "Earcuff (5).jpeg",
  "Earcuff (6).jpeg",
  "EarcuffColores.jpeg",
  "CollarCorazones.jpeg",
  "CollarCorazones (2).jpeg",
  "collarCorazones (3).jpeg",
  "collarCorazon.jpeg",
  "CollarAmatista.jpeg",
  "collarEstrella.jpeg",
  "CollarCandongasAnilllo.jpeg",
  "anillo.jpeg",
  "Llavero.jpeg",
  "llavero (2).jpeg",
  "Cuidados.jpeg",
] as const;

export const heroMedia = {
  image: workshopMedia("Aretes3.jpeg"),
  video: workshopMedia("Video1.mp4"),
  videoPoster: workshopMedia("Aretes.jpeg"),
} as const;

export const storyMedia = {
  image: workshopMedia("Earcuff (3).jpeg"),
} as const;

export type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

export function getTallerGalleryItems(limit = 12): GalleryItem[] {
  const items: GalleryItem[] = workshopVideos.map((v) => ({
    type: "video" as const,
    src: v.src,
    poster: v.poster,
    alt: v.title,
  }));

  for (let i = 0; i < limit && i < workshopPhotos.length; i++) {
    items.push({
      type: "image",
      src: workshopMedia(workshopPhotos[i]),
      alt: `Creación artesanal Anna — foto ${i + 1}`,
    });
  }

  return items;
}

export function getInstagramMosaic(limit = 9): { src: string; alt: string }[] {
  return workshopPhotos.slice(0, limit).map((file, i) => ({
    src: workshopMedia(file),
    alt: `Anna Objetos Hechos a Mano — taller ${i + 1}`,
  }));
}
