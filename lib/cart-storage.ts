export type CartLine = {
  productId: string;
  quantity: number;
};

const CART_KEY = "anna-cart-v1";

export function readCartFromStorage(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        typeof line.productId === "string" &&
        typeof line.quantity === "number" &&
        line.quantity > 0
    );
  } catch {
    return [];
  }
}

export function writeCartToStorage(lines: CartLine[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(lines));
}

