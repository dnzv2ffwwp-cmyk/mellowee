const products = [
  ["01-ivory-wrap-bodysuit.png", "아이보리 랩 바디수트", "39,000", "35,100", "newborn"],
  ["02-dusty-pink-daisy-romper.png", "더스티 핑크 데이지 롬퍼", "43,000", "36,550", "baby"],
  ["03-butter-moon-sleepsuit.png", "버터 문 슬립웨어", "42,000", "33,600", "newborn"],
  ["04-powder-blue-knit-romper.png", "파우더 블루 니트 롬퍼", "38,000", "34,200", "baby"],
  ["05-lavender-pinafore-set.png", "라벤더 피나포어 세트", "49,800", "44,800", "kids"],
  ["06-terracotta-hood-set.png", "테라코타 후드 세트", "52,000", "47,200", "kids"],
  ["07-blue-gingham-set.png", "블루 깅엄 데일리 세트", "47,000", "39,950", "baby"],
  ["08-mustard-quilted-vest.png", "머스터드 퀼팅 베스트", "42,000", "38,400", "kids"],
  ["09-mint-raincoat.png", "민트 레인 코트", "61,000", "54,900", "kids"],
  ["10-dusty-rose-tiered-dress.png", "더스티 로즈 티어드 드레스", "51,000", "43,350", "kids"],
  ["11-deep-teal-polo-set.png", "딥 틸 폴로 상하 세트", "48,000", "40,800", "junior"],
  ["12-cocoa-corduroy-overall-set.png", "코코아 코듀로이 오버롤", "56,000", "47,600", "kids"],
  ["13-coral-cardigan-skirt-set.png", "코랄 가디건 스커트 세트", "58,000", "49,300", "junior"],
  ["14-sage-utility-jacket.png", "세이지 유틸리티 재킷", "55,000", "46,750", "junior"],
  ["15-lavender-sweat-set.png", "라벤더 스웨트 세트", "49,000", "41,650", "kids"],
  ["16-navy-sailor-dress.png", "네이비 세일러 원피스", "54,000", "45,900", "junior"],
  ["17-butter-gingham-set.png", "버터 깅엄 상하 세트", "47,000", "39,950", "baby"],
  ["18-oatmeal-trench-coat.png", "오트밀 트렌치 코트", "69,000", "58,650", "junior"],
].map(([image, name, original, sale, category], index) => ({ image, name, original, sale, category, index }));

const productList = document.querySelector("[data-product-list]");
const bestList = document.querySelector("[data-best-list]");
const countLabel = document.querySelector("[data-product-count]");
const sortSelect = document.querySelector("[data-sort]");
const categoryButtons = [...document.querySelectorAll("[data-category]")];

function productCard(product, best = false, position = 0) {
  return `
    <article class="catalog-card${best ? " catalog-card--best" : ""}" data-product-category="${product.category}">
      <a class="catalog-card__image" href="./product-detail.html">
        ${best ? `<span class="catalog-card__rank">BEST${position + 1}</span>` : position < 2 ? '<span class="catalog-card__new">NEW</span>' : ""}
        <img src="./assets/products/${product.image}" alt="${product.name}" />
      </a>
      <div class="catalog-card__body">
        <p class="catalog-card__brand">MELLOWEE</p>
        <h3><a href="./product-detail.html">${product.name}</a></h3>
        ${best ? "" : '<button class="catalog-card__wish" type="button" aria-label="찜하기">♡</button>'}
        <p class="catalog-card__price"><del>${product.original}원</del><strong>${product.sale}원</strong></p>
        ${best ? "" : '<p class="catalog-card__point"><svg class="catalog-card__point-icon" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><circle cx="6" cy="6" r="4" fill="currentColor"></circle></svg>300원</p>'}
      </div>
    </article>`;
}

function renderProducts(category = "all") {
  if (!productList) return;
  const filtered = products.filter((product) => category === "all" || product.category === category);
  let sorted = [...filtered];
  if (sortSelect?.value === "low") sorted.sort((a, b) => Number(a.sale.replace(",", "")) - Number(b.sale.replace(",", "")));
  if (sortSelect?.value === "high") sorted.sort((a, b) => Number(b.sale.replace(",", "")) - Number(a.sale.replace(",", "")));
  productList.innerHTML = sorted.map((product, index) => productCard(product, false, index)).join("");
  if (countLabel) countLabel.textContent = `총 ${sorted.length}개의 상품이 있습니다.`;
  bindWishButtons();
}

function bindWishButtons() {
  document.querySelectorAll(".catalog-card__wish").forEach((button) => {
    button.addEventListener("click", () => {
      const active = button.classList.toggle("is-active");
      button.textContent = active ? "♥" : "♡";
      button.setAttribute("aria-label", active ? "찜 해제" : "찜하기");
    });
  });
}

if (bestList) bestList.innerHTML = products.slice(0, 8).map((product, index) => productCard(product, true, index)).join("");

let activeCategory = new URLSearchParams(window.location.search).get("category") || "all";
if (!["all", "newborn", "baby", "kids", "junior", "acc", "gift"].includes(activeCategory)) activeCategory = "all";
categoryButtons.forEach((button) => {
  button.classList.toggle("is-active", button.dataset.category === activeCategory);
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProducts(activeCategory);
  });
});
sortSelect?.addEventListener("change", () => renderProducts(activeCategory));
renderProducts(activeCategory);

document.querySelectorAll("[data-product-thumb]").forEach((button) => {
  button.addEventListener("click", () => {
    const mainImage = document.querySelector("[data-product-main-image]");
    if (!mainImage) return;
    mainImage.src = button.dataset.productThumb;
    mainImage.style.objectPosition = button.dataset.position || "center";
    document.querySelectorAll("[data-product-thumb]").forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

const quantityInput = document.querySelector("[data-quantity]");
const totalPrice = document.querySelector("[data-total-price]");
const basePrice = 37800;

function updateTotal() {
  const quantity = Math.max(1, Number(quantityInput?.value) || 1);
  if (quantityInput) quantityInput.value = quantity;
  if (totalPrice) totalPrice.textContent = `${(basePrice * quantity).toLocaleString("ko-KR")}원`;
}

document.querySelector("[data-quantity-minus]")?.addEventListener("click", () => {
  if (quantityInput) quantityInput.value = Math.max(1, Number(quantityInput.value) - 1);
  updateTotal();
});
document.querySelector("[data-quantity-plus]")?.addEventListener("click", () => {
  if (quantityInput) quantityInput.value = Number(quantityInput.value) + 1;
  updateTotal();
});
quantityInput?.addEventListener("change", updateTotal);

document.querySelectorAll("[data-detail-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.detailTab;
    document.querySelectorAll("[data-detail-tab]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-detail-panel]").forEach((panel) => { panel.hidden = panel.dataset.detailPanel !== target; });
  });
});

document.querySelector("[data-login-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector("[data-form-message]");
  const id = form.elements.userId.value.trim();
  const password = form.elements.password.value;
  message.textContent = id && password ? "포트폴리오용 화면으로 실제 로그인은 연결되지 않습니다." : "아이디와 비밀번호를 모두 입력해 주세요.";
});

document.querySelectorAll("[data-recent-delete]").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".recent-item")?.remove();
    const list = document.querySelector("[data-recent-list]");
    if (list && !list.querySelector(".recent-item")) list.insertAdjacentHTML("beforeend", '<p class="recent-empty">최근 본 상품이 없습니다.</p>');
  });
});

document.querySelectorAll("[data-demo-action]").forEach((button) => {
  button.addEventListener("click", () => alert("포트폴리오용 화면입니다. 실제 주문 기능은 연결되지 않았습니다."));
});
