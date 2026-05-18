import { CheckoutForm } from "@/app/checkout/CheckoutForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Completa tu compra de forma segura.",
};

export default function CheckoutPage() {
  return (
    <div className="container-editorial py-12 md:py-20">
      <p className="eyebrow">Paso final</p>
      <h1 className="display-md mt-2">Tu pedido</h1>
      <p className="mt-3 max-w-xl text-ink-muted">
        Fase 2 integrará Wompi o Mercado Pago para pago automático. Por ahora
        validamos el flujo de compra y el resumen del pedido.
      </p>
      <CheckoutForm />
    </div>
  );
}
