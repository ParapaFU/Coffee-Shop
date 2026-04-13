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
// ham nav
const hamNav = document.querySelector(".icon-ham");
// ham pop up
const hamPopUp = document.querySelector(".ham-pop-up");

// Function
// responsive hero dan header
function autoHeightHeader() {
  const heightHeader = header.offsetHeight;
  hero.style.setProperty("--hero-height", heightHeader + "px");
}

// sistem deteksi fade up
const observerFade = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const observerPopUp = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        hamPopUp.classList.remove("show");
      } else {
        hamPopUp.classList.add("show");
      }
    });
  },
  {
    threshold: 0,
  },
);

// Event
window.addEventListener("resize", autoHeightHeader);

// Program
// auto resize header/nav
autoHeightHeader();

// animasi masuk element
fadeUp.forEach((e) => observerFade.observe(e));
fadeLeft.forEach((e) => observerFade.observe(e));
fadeRight.forEach((e) => observerFade.observe(e));

// deteksi icon ham untuk memunculkan ham pop up
observerPopUp.observe(hamNav);
