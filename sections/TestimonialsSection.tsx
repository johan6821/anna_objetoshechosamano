import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/sections/SectionHeader";

const testimonials = [
  {
    quote:
      "Llegaron rapidísimo y son aún más bonitos en persona. Se nota el trabajo manual en cada detalle.",
    author: "Camila R.",
    city: "Bogotá",
    emoji: "🌸",
  },
  {
    quote:
      "Súper livianos y cómodos. Por fin compré online sin tener que escribir mil veces por WhatsApp.",
    author: "Valentina M.",
    city: "Medellín",
    emoji: "✨",
  },
  {
    quote:
      "El color es vibrante pero elegante. Ya me preguntaron tres veces dónde los compré.",
    author: "Laura S.",
    city: "Cali",
    emoji: "💜",
  },
];

const cardColors = [
  "from-pink-soft/80 to-surface",
  "from-cyan/20 to-surface",
  "from-gold/30 to-surface",
];

export function TestimonialsSection() {
  return (
    <section className="section-wash-purple py-16 md:py-24">
      <div className="container-editorial">
        <FadeIn>
          <SectionHeader
            eyebrow="Voces reales"
            title="Lo que dicen quienes ya lucen Anna"
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.author} delay={i * 0.08}>
              <blockquote
                className={`flex h-full flex-col rounded-2xl border-2 border-white bg-gradient-to-br ${cardColors[i]} p-7 shadow-playful`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-display mt-3 text-lg font-extrabold leading-snug text-ink">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm font-bold text-magenta">
                  — {item.author}, {item.city}
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
