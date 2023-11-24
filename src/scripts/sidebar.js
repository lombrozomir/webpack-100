// Боковое меню

export let closeMenu = document.querySelector(".icon__burger");
export let openMenu = document.querySelector(".button-nav--menu");
export let sideMenu = document.querySelector(".side-menu");
export let header = document.querySelector(".header");
export let content = document.querySelector(".content");
export let footer = document.querySelector(".footer");
export let blurItems = document.querySelectorAll(".blur");

export const showMenu = openMenu.addEventListener(
  "click",
  function () {
    sideMenu.classList.remove("side-menu-hidden");
    if (window.innerWidth < 1120 && window.innerWidth >= 768) {
      header.classList.toggle("blur");
      content.classList.toggle("blur");
      footer.classList.toggle("blur");
    }
  },
  { capture: true }
);

export const hiddenMenu = closeMenu.addEventListener("click", function () {
  sideMenu.classList.add("side-menu-hidden");
  if (window.innerWidth < 1120 && window.innerWidth >= 768) {
    header.classList.remove("blur");
    content.classList.remove("blur");
    footer.classList.remove("blur");
  }
});

document.addEventListener(
  "click",
  function (evt) {
    if (
      !evt.composedPath().includes(sideMenu) &&
      !evt.composedPath().includes(feedback) &&
      !evt.composedPath().includes(call)
    ) {
      sideMenu.classList.add("side-menu-hidden");
      header.classList.remove("blur");
      content.classList.remove("blur");
      footer.classList.remove("blur");
    }
  },
  { capture: true }
);
