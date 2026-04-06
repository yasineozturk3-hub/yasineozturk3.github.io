// ── Products data ──
// To add images: put your image files in an "images" folder next to index.html,
// then list them like: images: ["images/cat320-1.jpg", "images/cat320-2.jpg"]
// Leave images: [] to show the emoji placeholder instead.
const products = [
  {
    id: 1,
    name: "CAT 320 Hydraulic Excavator",
    category: "excavators",
    categoryLabel: "Excavators",
    condition: "used",
    price: "$142,000",
    year: "2019",
    hours: "3,200 hrs",
    specs: ["20-ton class", "Cat C7.1 engine", "Long reach boom"],
    desc: "Well-maintained hydraulic excavator, ideal for site prep, trenching, and demolition. Full service records available.",
    icon: "🏗️",
    images: ["images/excavator.jpg]",]
  },
  {
    id: 2,
    name: "Komatsu WA380 Wheel Loader",
    category: "loaders",
    categoryLabel: "Loaders",
    condition: "used",
    price: "$98,500",
    year: "2020",
    hours: "1,850 hrs",
    specs: ["4.5 yd³ bucket", "Komatsu SAA6D engine", "AC cab"],
    desc: "High-capacity wheel loader with excellent visibility and fuel efficiency. Suitable for quarry, aggregate, and earthmoving.",
    icon: "🚛",
    images: [],
  },
  {
    id: 3,
    name: "Volvo A40G Articulated Dump Truck",
    category: "trucks",
    categoryLabel: "Dump Trucks",
    condition: "used",
    price: "$215,000",
    year: "2021",
    hours: "2,100 hrs",
    specs: ["40-ton payload", "6×6 drive", "Onboard weighing"],
    desc: "Heavy-duty articulated dump truck built for extreme terrain. Excellent traction and load control on any job site.",
    icon: "🚚",
    images: [],
  },
  {
    id: 4,
    name: "John Deere 850L Dozer",
    category: "dozers",
    categoryLabel: "Dozers",
    condition: "new",
    price: "$385,000",
    year: "2024",
    hours: "New",
    specs: ["175 hp", "Semi-U blade", "Grade control ready"],
    desc: "Brand-new John Deere dozer with SmartGrade integration capability. Powerful, efficient, and operator-friendly design.",
    icon: "🚜",
    images: [],
  },
  {
    id: 5,
    name: "Liebherr LTM 1100 Mobile Crane",
    category: "cranes",
    categoryLabel: "Cranes",
    condition: "used",
    price: "$520,000",
    year: "2018",
    hours: "4,400 hrs",
    specs: ["100-ton capacity", "60m main boom", "All-terrain chassis"],
    desc: "Versatile all-terrain mobile crane with excellent lift capacity. Comes with full documentation and recent load test certification.",
    icon: "🏭",
    images: [],
  },
  {
    id: 6,
    name: "Bomag BW213 Vibratory Roller",
    category: "compaction",
    categoryLabel: "Compaction",
    condition: "used",
    price: "$62,000",
    year: "2020",
    hours: "1,200 hrs",
    specs: ["13-ton roller", "Smooth drum", "ECONOMIZER system"],
    desc: "Single-drum vibratory roller with compaction measurement. Great for road base and large fill compaction projects.",
    icon: "⚙️",
    images: [],
  },
  {
    id: 7,
    name: "Manitowoc Grove GMK5150L Crane",
    category: "cranes",
    categoryLabel: "Cranes",
    condition: "used",
    price: "$890,000",
    year: "2019",
    hours: "3,800 hrs",
    specs: ["150-ton capacity", "11.6m carrier", "Megatrak suspension"],
    desc: "Premium all-terrain crane with outstanding reach and lifting capacity. Well-maintained with complete service history.",
    icon: "🏭",
    images: [],
  },
  {
    id: 8,
    name: "Hamm HD 90 Tandem Roller",
    category: "compaction",
    categoryLabel: "Compaction",
    condition: "new",
    price: "$78,500",
    year: "2024",
    hours: "New",
    specs: ["9-ton", "Dual drum", "Oscillation option"],
    desc: "New tandem roller with optional oscillation mode for sensitive compaction near structures. Ideal for asphalt paving.",
    icon: "⚙️",
    images: [],
  },
  {
    id: 9,
    name: "Hitachi ZX350LC Excavator",
    category: "excavators",
    categoryLabel: "Excavators",
    condition: "used",
    price: "$168,000",
    year: "2022",
    hours: "980 hrs",
    specs: ["35-ton class", "HIOS III hydraulics", "ZAXIS system"],
    desc: "Low-hour excavator with intelligent machine control. Precision digging and excellent fuel economy for heavy-duty work.",
    icon: "🏗️",
    images: [],
  },
  {
    id: 10,
    name: "Roller",
    category: "compaction",
    categoryLabel: "Compaction",
    condition: "new",
    price: "$7,500",
    year: "2024",
    hours: "New",
    specs: ["9-ton", "Dual drum", "Oscillation option"],
    desc: "New tandem roller with optional oscillation mode for sensitive compaction near structures. Ideal for asphalt paving.",
    icon: "⚙️",
    images: [],
  },
];

const categories = [
  { key: "all", label: "All Equipment" },
  { key: "excavators", label: "Excavators" },
  { key: "loaders", label: "Loaders" },
  { key: "dozers", label: "Dozers" },
  { key: "trucks", label: "Dump Trucks" },
  { key: "cranes", label: "Cranes" },
  { key: "compaction", label: "Compaction" },
];

// ── Render filter buttons ──
function renderFilters() {
  const bar = document.getElementById("filter-bar");
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat.key === "all" ? " active" : "");
    btn.textContent = cat.label;
    btn.dataset.cat = cat.key;
    btn.addEventListener("click", () => filterProducts(cat.key, btn));
    bar.appendChild(btn);
  });
}

// ── Build carousel HTML for a product ──
function buildCarousel(p) {
  const badgeClass = p.condition === "new" ? "new" : "used";
  const badgeLabel = p.condition === "new" ? "New" : "Used";
  const hasImages = p.images && p.images.length > 0;

  let slidesHtml = "";
  if (hasImages) {
    slidesHtml = p.images.map(src =>
      `<div class="carousel-slide"><img src="${src}" alt="${p.name}" loading="lazy" /></div>`
    ).join("");
  } else {
    slidesHtml = `<div class="carousel-slide"><div class="carousel-placeholder">${p.icon}</div></div>`;
  }

  const multipleImages = hasImages && p.images.length > 1;

  return `
    <div class="carousel" data-index="0">
      <div class="carousel-track">${slidesHtml}</div>
      <span class="product-badge ${badgeClass}">${badgeLabel}</span>
      ${multipleImages ? `
        <button class="carousel-btn prev" aria-label="Previous">&#8592;</button>
        <button class="carousel-btn next" aria-label="Next">&#8594;</button>
        <div class="carousel-dots">
          ${p.images.map((_, i) => `<button class="carousel-dot ${i === 0 ? "active" : ""}" data-i="${i}"></button>`).join("")}
        </div>
        <span class="carousel-counter">1 / ${p.images.length}</span>
      ` : ""}
    </div>`;
}

// ── Wire up carousel controls for a card ──
function initCarousel(card, totalSlides) {
  if (totalSlides <= 1) return;

  const carousel = card.querySelector(".carousel");
  const track    = carousel.querySelector(".carousel-track");
  const dots     = carousel.querySelectorAll(".carousel-dot");
  const counter  = carousel.querySelector(".carousel-counter");
  const prevBtn  = carousel.querySelector(".carousel-btn.prev");
  const nextBtn  = carousel.querySelector(".carousel-btn.next");

  function goTo(idx) {
    carousel.dataset.index = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    counter.textContent = `${idx + 1} / ${totalSlides}`;
    prevBtn.classList.toggle("hidden", idx === 0);
    nextBtn.classList.toggle("hidden", idx === totalSlides - 1);
  }

  // Hide prev on first slide initially
  prevBtn.classList.add("hidden");

  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    goTo(Math.max(0, +carousel.dataset.index - 1));
  });
  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    goTo(Math.min(totalSlides - 1, +carousel.dataset.index + 1));
  });
  dots.forEach(dot => {
    dot.addEventListener("click", e => {
      e.stopPropagation();
      goTo(+dot.dataset.i);
    });
  });
}

// ── Render product cards ──
function renderProducts() {
  const grid = document.getElementById("products-grid");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.cat = p.category;

    const specsHtml = p.specs.map(s => `<span class="spec-tag">${s}</span>`).join("");
    const totalSlides = p.images && p.images.length > 0 ? p.images.length : 1;

    card.innerHTML = `
      ${buildCarousel(p)}
      <div class="product-body">
        <div class="product-category">${p.categoryLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-specs">${specsHtml}
          <span class="spec-tag">${p.year}</span>
          <span class="spec-tag">${p.hours}</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${p.price}
            <small>Contact for financing</small>
          </div>
          <button class="btn-inquire">Inquire</button>
        </div>
      </div>`;

    initCarousel(card, totalSlides);
    card.querySelector(".btn-inquire").addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

// ── Filter ──
function filterProducts(cat, activeBtn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  activeBtn.classList.add("active");

  document.querySelectorAll(".product-card").forEach(card => {
    if (cat === "all" || card.dataset.cat === cat) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// ── Modal ──
function openModal(product) {
  const overlay = document.getElementById("modal-overlay");
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-label").textContent =
    `${product.categoryLabel} · ${product.condition === "new" ? "New" : "Used"} · ${product.year}`;
  document.getElementById("modal-equipment").value = product.name;
  document.getElementById("modal-form-success").style.display = "none";
  document.getElementById("modal-form").style.display = "block";
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ── Smooth scroll for nav links ──
function setupNav() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ── Contact form submit ──
function setupContactForm() {
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("contact-success").style.display = "block";
  });
}

// ── Modal form submit ──
function setupModalForm() {
  document.getElementById("modal-form").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("modal-form").style.display = "none";
    document.getElementById("modal-form-success").style.display = "block";
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProducts();
  setupNav();
  setupContactForm();
  setupModalForm();
});
