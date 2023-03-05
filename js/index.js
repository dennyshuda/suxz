const navElement = document.getElementById("nav");
const navMenuElement = document.getElementById("nav__menu");
const navListElement = document.querySelector(".nav__list");

window.onscroll = () => {
  if (window.scrollY > 50) {
    navElement.classList.add("nav__scroll");
  } else {
    navElement.classList.remove("nav__scroll");
  }
};

navMenuElement.addEventListener("click", () => {
  navListElement.classList.toggle("nav__mobile");
});
