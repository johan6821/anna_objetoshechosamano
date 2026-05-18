import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteConfig, whatsappUrl } from "@/data/site";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-4 border-magenta/20 section-wash-purple py-14">
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-coral/15 blur-3xl"
        aria-hidden
      />
      <div className="container-editorial relative grid gap-10 md:grid-cols-3">
        <div>
          <BrandLogo variant="flat" size="footer" />
          <p className="mt-4 max-w-xs text-sm font-semibold leading-relaxed text-ink-muted">
            Taller creativo en Colombia. Arcilla polimérica, color y mucho amor
            en cada par.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explorar</p>
          <ul className="space-y-2 text-sm font-semibold text-ink-muted">
            <li>
              <Link href="/catalogo" className="link-fun">
                Colección completa
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="link-fun">
                Checkout
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="link-fun">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Conectar</p>
          <ul className="space-y-3 text-sm font-semibold">
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-fun"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl("Hola, tengo una consulta desde la web de Anna.")}
                target="_blank"
                rel="noopener noreferrer"
                className="link-fun"
              >
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
              <span className="mt-1 block text-xs font-normal text-ink-muted">
                Solo soporte y encargos especiales
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-editorial relative mt-10 flex flex-col gap-2 border-t-2 border-dashed border-magenta/20 pt-8 text-xs font-semibold text-ink-muted md:flex-row md:items-center md:justify-between">
        <span>
          © {year} {siteConfig.name}. Precios en COP · Colombia
        </span>
        <span>Objetos hechos a mano · Arcilla polimérica 💜</span>
      </div>
    </footer>
  );
}
