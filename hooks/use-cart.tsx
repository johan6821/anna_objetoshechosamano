"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProductById } from "@/data/products";
import {
  readCartFromStorage,
  writeCartToStorage,
  type CartLine,
} from "@/lib/cart-storage";

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  isHydrated: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setLines(readCartFromStorage());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    writeCartToStorage(lines);
  }, [lines, isHydrated]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const itemCount = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines]
  );

  const subtotal = useMemo(
    () =>
      lines.reduce((sum, line) => {
        const product = getProductById(line.productId);
        if (!product) return sum;
        return sum + product.price * line.quantity;
      }, 0),
    [lines]
  );

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setLines((prev) => {
      if (quantity <= 0) {
        return prev.filter((line) => line.productId !== productId);
      }
      const exists = prev.some((line) => line.productId === productId);
      if (!exists) return [...prev, { productId, quantity }];
      return prev.map((line) =>
        line.productId === productId ? { ...line, quantity } : line
      );
    });
  }, []);

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      setLines((prev) => {
        const existing = prev.find((line) => line.productId === productId);
        if (!existing) return [...prev, { productId, quantity }];
        return prev.map((line) =>
          line.productId === productId
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((productId: string) => {
    setLines((prev) => prev.filter((line) => line.productId !== productId));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const value: CartContextValue = {
    lines,
    isOpen,
    itemCount,
    subtotal,
    isHydrated,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen((open) => !open),
    addItem,
    removeItem,
    updateQuantity: setQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
}

