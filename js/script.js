const slides = [...document.querySelectorAll("[data-slide]")];
const dots = [...document.querySelectorAll("[data-dot]")];
const hero = document.querySelector(".hero");
const searchButton = document.querySelector("[data-search-button]");
const searchPanel = document.querySelector("[data-search-panel]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentSlide = 0;
let sliderTimer;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === currentSlide;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });

  dots.forEach((dot, dotIndex) => {
    const active = dotIndex === currentSlide;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });
}

function stopSlider() {
  window.clearInterval(sliderTimer);
}

function startSlider() {
  if (reduceMotion || slides.length < 2) return;
  stopSlider();
  sliderTimer = window.setInterval(() => showSlide(currentSlide + 1), 5000);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.dot));
    startSlider();
  });
});

hero?.addEventListener("mouseenter", stopSlider);
hero?.addEventListener("mouseleave", startSlider);

searchButton?.addEventListener("click", () => {
  const willOpen = searchPanel.hidden;
  searchPanel.hidden = !willOpen;
  searchButton.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) searchPanel.querySelector("input")?.focus();
});

searchPanel?.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.querySelectorAll("img[data-fallback-src]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      image.src = image.dataset.fallbackSrc;
    },
    { once: true },
  );
});

document.querySelectorAll("img[data-hide-on-error]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      image.hidden = true;
    },
    { once: true },
  );
});

showSlide(0);
startSlider();
