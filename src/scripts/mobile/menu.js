const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-menu]");
const body = document.body;



burger?.addEventListener("click", function () {


  body.classList.toggle("stop-scroll");
  nav?.classList.toggle("menu--visible");
});
