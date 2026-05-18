"use client";

import { Button } from "@/components/ui/Button";
import { getProductById } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { formatCOP } from "@/lib/format";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function CheckoutForm() {
  const router = useRouter();
  const { lines, subtotal, itemCount, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  if (itemCount === 0) {
    return (
      <div className="mt-12 rounded-2xl border border-ink/5 bg-surface p-10 text-center">
        <p className="font-display text-2xl">Tu bolsa está vacía</p>
        <Button href="/catalogo" className="mt-6" variant="secondary">
          Ir al catálogo
        </Button>
      </div>
    );
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Fase 2: llamar API Wompi/MercadoPago
    setTimeout(() => {
      clearCart();
      router.push("/exito");
    }, 800);
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-12 lg:grid-cols-5">
      <div className="space-y-6 lg:col-span-3">
        <fieldset className="space-y-4 rounded-2xl border border-ink/5 bg-surface p-6">
          <legend className="px-2 font-medium">Datos de envío</legend>
          <Input label="Nombre completo" name="name" required />
          <Input label="Correo electrónico" name="email" type="email" required />
          <Input label="Teléfono / WhatsApp" name="phone" required />
          <Input label="Ciudad" name="city" required />
          <Input label="Dirección" name="address" required />
        </fieldset>
        <fieldset className="space-y-4 rounded-2xl border border-ink/5 bg-surface p-6">
          <legend className="px-2 font-medium">Pago</legend>
          <p className="text-sm text-ink-muted">
            Próximamente: tarjeta, PSE y Nequi con confirmación automática. Sin
            negociar por chat.
          </p>
        </fieldset>
      </div>

      <aside className="lg:col-span-2">
        <div className="sticky top-24 rounded-2xl border border-ink/5 bg-surface p-6">
          <h2 className="font-display text-xl">Resumen</h2>
          <ul className="mt-4 space-y-4">
            {lines.map((line) => {
              const product = getProductById(line.productId);
              if (!product) return null;
              return (
                <li key={line.productId} className="flex gap-3">
                  <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-md bg-cream-deep">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-ink-muted">
                      {line.quantity} × {formatCOP(product.price)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex justify-between border-t border-ink/5 pt-4">
            <span className="text-ink-muted">Subtotal</span>
            <span className="text-lg font-medium">{formatCOP(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs text-ink-muted">
            Envío se calcula en la pasarela (Fase 2).
          </p>
          <Button
            type="submit"
            className="mt-6 w-full"
            disabled={loading}
          >
            {loading ? "Procesando…" : "Confirmar pedido (demo)"}
          </Button>
        </div>
      </aside>
    </form>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-ink-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-lg border border-ink/10 bg-cream px-4 outline-none transition-colors focus:border-terracotta"
      />
    </label>
  );
}
