const openBtn = document.getElementById("open-menu");

const closeBtn = document.getElementById("close-menu");

const menu = document.getElementById("menu");

const body = document.querySelector(".page__body-mobile");

openBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menu.classList.add("modal-open");
  document.body.style.overflow = "hidden";
//   document.body.style.pointerEvents = "none";
});

closeBtn.addEventListener("click", () => {
 
  menu.style.display = "none";
  document.body.style.overflow = "auto";
});
