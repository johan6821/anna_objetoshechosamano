# anna_objetoshechosamano

Tienda en línea de **Anna Objetos Hechos a Mano** — aretes y earcuffs artesanales en arcilla polimérica, hechos a mano en Colombia.

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run start`| Servidor de producción   |
| `npm run lint` | ESLint                   |

## Estructura

```
app/           Páginas (home, catálogo, producto, checkout)
components/    UI, layout, producto, marca
sections/      Bloques de la homepage
data/          Catálogo y configuración del sitio
hooks/         Carrito (localStorage)
public/images/ Fotos y logos
```

## Marca y contacto

- Instagram: [@anna_objetoshechosamano](https://www.instagram.com/anna_objetoshechosamano/)
- WhatsApp: +57 302 119 2550

## Despliegue

Compatible con [Vercel](https://vercel.com) u otro hosting estático/Node. Configura `NEXT_PUBLIC_SITE_URL` con la URL pública del sitio.

## Documentación

Ver [docs/arquitectura.md](docs/arquitectura.md) para detalle técnico del proyecto.
