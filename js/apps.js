const elHeader = document.querySelector(".header");
const elHamburger = document.querySelector(".header__hamburger")
const elOverlay = document.querySelector(".header__overlay")

elHamburger.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
})

elOverlay.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
})