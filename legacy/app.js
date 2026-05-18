/**
 * Anna Objetos Hechos a Mano — El arte sanna
 * Fotografías del catálogo: carpeta /images (taller).
 */

const WA_NUMBER = "573021192550";

const POLYMER_PLACEHOLDER = "images/polymer-placeholder.svg";

/** Nombres de archivo en /images (fotos reales del taller). */
const LOCAL_PRODUCT_PHOTOS = [
  "WhatsApp Image 2026-04-30 at 10.46.38 AM.jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM (1).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM (2).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM (3).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM.jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.40 AM (1).jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.40 AM.jpeg",
  "WhatsApp Image 2026-04-30 at 10.46.39 AM (2).jpeg",
];

function imageSrc(filename) {
  return encodeURI(`images/${filename}`);
}

const COP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

/** @type {{ id: string; name: string; tag: string; desc: string; price: number; image: string; polymerNote?: string }[]} */
const PRODUCTS = [
  {
    id: "flor-primavera",
    name: "Aretes flor primavera",
    tag: "Broquel",
    desc: "Arcilla polimérica en capas, colores vivos y acabado con mimo artesanal.",
    price: 7000,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[0]),
    polymerNote: "Pieza del taller, modelada y horneada a mano.",
  },
  {
    id: "earcuff-minimal",
    name: "Earcuff minimalista",
    tag: "Earcuff",
    desc: "Forma limpia y liviana: arcilla polimérica horneada, cómoda para el día a día.",
    price: 12000,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[1]),
    polymerNote: "Referencia de textura y color del taller.",
  },
  {
    id: "gota-terracota",
    name: "Aretes gota terracota",
    tag: "Colgante corto",
    desc: "Mezcla de pigmentos tipo terracota y crema; sensación cálida y artesanal.",
    price: 15500,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[2]),
    polymerNote: "Par modelado a mano en arcilla polimérica.",
  },
  {
    id: "hoja-dorada",
    name: "Earcuff hoja dorada",
    tag: "Earcuff",
    desc: "Detalles con foil o pan de oro sobre arcilla polimérica; pieza ligera.",
    price: 18900,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[3]),
    polymerNote: "Acabado decorativo hecho en el taller.",
  },
  {
    id: "geometricos",
    name: "Aretes geométricos",
    tag: "Broquel",
    desc: "Cortes y contrastes jugados solo con arcilla polimérica y mucho color.",
    price: 22000,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[4]),
    polymerNote: "Formas definidas a mano antes del horneado.",
  },
  {
    id: "set-mariposa",
    name: "Set mariposa",
    tag: "Par + mini",
    desc: "Estampados y mezclas para combinar piezas a juego; sensación primaveral.",
    price: 28500,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[5]),
    polymerNote: "Set pensado para lucir en armonía.",
  },
  {
    id: "bohemios",
    name: "Aretes largos bohemios",
    tag: "Colgante largo",
    desc: "Capas y colgantes largos pero livianos; movimiento y color artesanal.",
    price: 32000,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[6]),
    polymerNote: "Colores vivos del taller.",
  },
  {
    id: "earcuff-doble",
    name: "Earcuff doble asimetría",
    tag: "Earcuff",
    desc: "Capas y paleta alegre tras el curado; pieza con personalidad propia.",
    price: 35000,
    image: imageSrc(LOCAL_PRODUCT_PHOTOS[7]),
    polymerNote: "Diseño asimétrico modelado a mano.",
  },
];

const cart = new Map();

function formatCOP(n) {
  return COP.format(n);
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map(
    (p) => `
    <article class="product-card" data-id="${p.id}">
      <figure class="product-figure">
        <img src="${p.image}" alt="${escapeHtml(p.name)} — anna, el arte sanna. ${escapeHtml(p.polymerNote || "")}" width="600" height="750" loading="lazy" decoding="async" data-fallback="${POLYMER_PLACEHOLDER}" />
        <figcaption class="product-brand-badge">
          <span class="product-brand-badge__name"><span class="brand-anna">anna</span></span>
          <span class="product-brand-badge__tagline">el arte sanna</span>
        </figcaption>
      </figure>
      <div class="product-body">
        <span class="product-tag">${escapeHtml(p.tag)}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="product-desc">${escapeHtml(p.desc)}</p>
        <p class="product-price">${formatCOP(p.price)}</p>
        <button type="button" class="btn btn-primary add-to-cart" data-id="${p.id}">Añadir a la bolsa</button>
      </div>
    </article>
  `
  ).join("");

  grid.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.id));
  });

  grid.querySelectorAll(".product-figure img").forEach((img) => {
    img.addEventListener("error", function onImgErr() {
      const fb = this.getAttribute("data-fallback");
      if (fb && this.src.indexOf(fb) === -1) {
        this.removeEventListener("error", onImgErr);
        this.src = fb;
      }
    });
  });
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function addToCart(id) {
  const prev = cart.get(id) || 0;
  cart.set(id, prev + 1);
  updateCartUI();
}

function removeLine(id) {
  cart.delete(id);
  updateCartUI();
}

function updateCartUI() {
  const count = [...cart.values()].reduce((a, b) => a + b, 0);
  document.getElementById("cartCount").textContent = String(count);

  const linesEl = document.getElementById("cartLines");
  const totalEl = document.getElementById("cartTotal");

  if (count === 0) {
    linesEl.innerHTML =
      '<li class="cart-line"><span>Tu bolsa está vacía.</span></li>';
    totalEl.textContent = formatCOP(0);
    return;
  }

  let total = 0;
  const items = [];
  for (const [id, qty] of cart) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) continue;
    const sub = p.price * qty;
    total += sub;
    items.push({ p, qty, sub });
  }

  linesEl.innerHTML = items
    .map(
      (x) => `
    <li class="cart-line">
      <div>
        <strong>${escapeHtml(x.p.name)}</strong>
        <span>${x.qty} × ${formatCOP(x.p.price)}</span>
      </div>
      <div>
        ${formatCOP(x.sub)}
        <button type="button" class="icon-close remove-line" data-id="${x.p.id}" aria-label="Quitar">×</button>
      </div>
    </li>
  `
    )
    .join("");

  linesEl.querySelectorAll(".remove-line").forEach((btn) => {
    btn.addEventListener("click", () => removeLine(btn.dataset.id));
  });

  totalEl.textContent = formatCOP(total);
}

function openCart() {
  const panel = document.getElementById("cartPanel");
  const overlay = document.getElementById("cartOverlay");
  panel.setAttribute("aria-hidden", "false");
  overlay.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    panel.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("cart-open");
    document.getElementById("cartToggle").setAttribute("aria-expanded", "true");
  });
}

function closeCart() {
  const panel = document.getElementById("cartPanel");
  const overlay = document.getElementById("cartOverlay");
  panel.classList.remove("is-open");
  overlay.classList.remove("is-open");
  document.body.classList.remove("cart-open");
  document.getElementById("cartToggle").setAttribute("aria-expanded", "false");
  panel.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "true");
}

function checkoutWhatsApp() {
  let total = 0;
  const lines = [];
  for (const [id, qty] of cart) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) continue;
    const sub = p.price * qty;
    total += sub;
    lines.push(`${p.name} × ${qty} = ${formatCOP(sub)}`);
  }
  if (lines.length === 0) {
    openCart();
    return;
  }
  const text = encodeURIComponent(
    `Hola, quiero pedir en Anna Objetos Hechos a Mano (el arte sanna):\n\n${lines.join("\n")}\n\nTotal: ${formatCOP(total)}`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener");
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
updateCartUI();

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", checkoutWhatsApp);
