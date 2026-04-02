// DOM
// header
const header = document.querySelector("header");
// hero
const hero = document.querySelector(".hero");

// Function
// responsive hero dan header
function autoHeightHeader() {
  const heightHeader = header.offsetHeight;
  hero.style.setProperty("--hero-height", heightHeader + "px");
}

// Event
window.addEventListener("resize", autoHeightHeader);

// Program
autoHeightHeader();
