import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedido confirmado",
};

export default function SuccessPage() {
  return (
    <div className="container-editorial flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow text-terracotta">Gracias</p>
      <h1 className="display-md mt-3 max-w-lg text-balance">
        Tu pedido fue recibido
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">
        En la Fase 2 recibirás confirmación automática por correo y podrás
        seguir el estado de tu envío. Mientras tanto, estamos preparando tus
        piezas con el mismo cariño del taller.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/catalogo" variant="primary">
          Seguir comprando
        </Button>
        <Button href="/" variant="outline">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}
