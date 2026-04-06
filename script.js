// ── Products data ──
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
    icon: "⚙️",}
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

// ── Render product cards ──
function renderProducts() {
  const grid = document.getElementById("products-grid");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.cat = p.category;

    const badgeClass = p.condition === "new" ? "new" : "used";
    const badgeLabel = p.condition === "new" ? "New" : "Used";

    const specsHtml = p.specs.map(s => `<span class="spec-tag">${s}</span>`).join("");

    card.innerHTML = `
      <div style="position:relative">
        <div class="product-img-placeholder">${p.icon}</div>
        <span class="product-badge ${badgeClass}">${badgeLabel}</span>
      </div>
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
          <button class="btn-inquire" data-id="${p.id}">Inquire</button>
        </div>
      </div>`;

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
