const slides = [...document.querySelectorAll("[data-slide]")];
const dots = [...document.querySelectorAll("[data-dot]")];
const hero = document.querySelector(".hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileCarouselGroups = document.querySelectorAll(".mobile-carousel");

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

function setupMobileCarousels() {
  mobileCarouselGroups.forEach((track) => {
    const items = [...track.children];
    if (!items.length) return;

    let activeIndex = 0;
    let intervalId;

    const updateMobileCarousel = () => {
      const isMobile = window.innerWidth <= 680;
      track.style.transition = isMobile ? "transform 0.45s ease" : "none";
      track.style.transform = isMobile ? `translateX(-${activeIndex * 100}%)` : "translateX(0)";

      items.forEach((item) => {
        item.style.flex = isMobile ? "0 0 100%" : "";
        item.style.width = isMobile ? "100%" : "";
        item.style.minWidth = isMobile ? "100%" : "";
      });
    };

    const startMobileCarousel = () => {
      window.clearInterval(intervalId);
      intervalId = window.setInterval(() => {
        if (window.innerWidth > 680) return;
        activeIndex = (activeIndex + 1) % items.length;
        updateMobileCarousel();
      }, 2500);
    };

    const resetMobileCarousel = () => {
      if (window.innerWidth > 680) {
        activeIndex = 0;
        track.style.transform = "translateX(0)";
        track.style.transition = "none";
        items.forEach((item) => {
          item.style.flex = "";
          item.style.width = "";
        });
        return;
      }

      updateMobileCarousel();
      startMobileCarousel();
    };

    resetMobileCarousel();
    window.addEventListener("resize", resetMobileCarousel);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.dot));
    startSlider();
  });
});

hero?.addEventListener("mouseenter", stopSlider);
hero?.addEventListener("mouseleave", startSlider);

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
setupMobileCarousels();
