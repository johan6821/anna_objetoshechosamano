"use client";

import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { getProductById } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { formatCOP } from "@/lib/format";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function CartDrawer() {
  const {
    lines,
    isOpen,
    closeCart,
    itemCount,
    subtotal,
    removeItem,
    updateQuantity,
    isHydrated,
  } = useCart();

  if (!isHydrated) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar carrito"
            className="fixed inset-0 z-[90] bg-purple/25 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-label="Carrito de compras"
            className="fixed inset-y-0 right-0 z-[100] flex w-full max-w-md flex-col border-l-4 border-magenta/30 bg-bg shadow-card"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <div className="bg-gradient-to-r from-coral via-pink to-magenta px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-90">
                    Tu bolsa
                  </p>
                  <h2 className="flex flex-wrap items-center gap-2 font-display text-xl font-extrabold">
                    <BrandLogo variant="flat" size="sm" href={null} className="!h-8 brightness-110" />
                    <span>· compra</span>
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl hover:bg-white/30"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {itemCount === 0 ? (
                <EmptyCart />
              ) : (
                <ul className="space-y-5">
                  {lines.map((line) => {
                    const product = getProductById(line.productId);
                    if (!product) return null;
                    return (
                      <li
                        key={line.productId}
                        className="flex gap-4 rounded-xl border-2 border-pink-soft/60 bg-surface p-3 shadow-playful"
                      >
                        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-bg-warm">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-bold text-ink">
                                {product.name}
                              </p>
                              <p className="text-sm font-semibold text-coral">
                                {formatCOP(product.price)}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(product.id)}
                              className="text-xs font-bold text-magenta underline"
                            >
                              Quitar
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <QtyButton
                              label="−"
                              onClick={() =>
                                updateQuantity(product.id, line.quantity - 1)
                              }
                            />
                            <span className="min-w-6 text-center text-sm font-bold">
                              {line.quantity}
                            </span>
                            <QtyButton
                              label="+"
                              onClick={() =>
                                updateQuantity(product.id, line.quantity + 1)
                              }
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="border-t-2 border-dashed border-magenta/25 bg-surface px-6 py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display font-bold text-ink-muted">
                  Subtotal
                </span>
                <span className="font-display text-2xl font-extrabold text-coral">
                  {formatCOP(subtotal)}
                </span>
              </div>
              <p className="mb-4 text-xs font-semibold leading-relaxed text-ink-muted">
                Pago seguro en checkout — sin negociar por WhatsApp 💜
              </p>
              {itemCount > 0 ? (
                <Button href="/checkout" variant="primary" className="w-full">
                  Ir a pagar ✨
                </Button>
              ) : (
                <Button href="/catalogo" variant="outline" className="w-full">
                  Explorar colección
                </Button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function QtyButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-magenta/30 bg-pink-soft/30 text-sm font-bold hover:border-coral hover:bg-gold/30"
    >
      {label}
    </button>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <span className="text-4xl">🛍️</span>
      <p className="font-display mt-4 text-2xl font-extrabold text-ink">
        Tu bolsa está vacía
      </p>
      <p className="mt-2 max-w-xs text-sm font-semibold text-ink-muted">
        Añade piezas con color y alma. Cada una es hecha a mano en el taller.
      </p>
      <Button href="/catalogo" variant="secondary" className="mt-6">
        Ver colección
      </Button>
    </div>
  );
}
