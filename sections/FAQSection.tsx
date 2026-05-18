"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig, whatsappUrl } from "@/data/site";
import { SectionHeader } from "@/sections/SectionHeader";
import { useState } from "react";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "¿Cómo compro sin escribir por WhatsApp?",
    a: "Elige tus piezas, añádelas al carrito y completa el pago en checkout. Recibirás confirmación automática (Fase 2) y seguimiento del pedido.",
  },
  {
    q: "¿Hacen envíos a toda Colombia?",
    a: "Sí. Coordinamos envío según tu ciudad. El costo se calcula en checkout antes de pagar.",
  },
  {
    q: "¿Las piezas son exactamente iguales a las fotos?",
    a: "Trabajamos arcilla polimérica a mano: pueden existir variaciones sutiles en tono o textura. Eso es parte del encanto artesanal.",
  },
  {
    q: "¿Puedo pedir un diseño personalizado?",
    a: `Para encargos especiales escríbenos por WhatsApp al ${siteConfig.whatsappDisplay} o por ${siteConfig.instagramHandle}. El checkout es para piezas del catálogo.`,
  },
  {
    q: "¿Cuánto tarda el envío?",
    a: siteConfig.shippingNote,
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="container-editorial max-w-3xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Resolvemos tus dudas"
            title="Preguntas frecuentes"
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <ul className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <FadeIn key={item.q} delay={index * 0.05}>
                <li className="overflow-hidden rounded-2xl border-2 border-pink-soft/70 bg-surface shadow-playful">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-ink">
                      {item.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/40 text-lg font-extrabold text-coral">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm font-semibold leading-relaxed text-ink-muted">
                        {item.q.includes("personalizado") ? (
                          <>
                            Para encargos especiales{" "}
                            <a
                              href={whatsappUrl(
                                "Hola Anna, me gustaría un encargo personalizado."
                              )}
                              className="link-fun"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              escríbenos por WhatsApp
                            </a>{" "}
                            ({siteConfig.whatsappDisplay}) o en{" "}
                            <a
                              href={siteConfig.instagram}
                              className="link-fun"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {siteConfig.instagramHandle}
                            </a>
                            . El checkout es para piezas del catálogo.
                          </>
                        ) : (
                          item.a
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
