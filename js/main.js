// DOM
// header
const header = document.querySelector("header");
// hero
const hero = document.querySelector(".hero");
// fade up
const fadeUp = document.querySelectorAll(".fade-up");
// fade left
const fadeLeft = document.querySelectorAll(".fade-left");
// fade right
const fadeRight = document.querySelectorAll(".fade-right");

// Function
// responsive hero dan header
function autoHeightHeader() {
  const heightHeader = header.offsetHeight;
  hero.style.setProperty("--hero-height", heightHeader + "px");
}

// sistem deteksi fade up
const observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

// Event
window.addEventListener("resize", autoHeightHeader);

// Program
autoHeightHeader();
fadeUp.forEach((e) => observer.observe(e));
fadeLeft.forEach((e) => observer.observe(e));
fadeRight.forEach((e) => observer.observe(e));
