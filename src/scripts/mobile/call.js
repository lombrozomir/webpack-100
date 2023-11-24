const openBtn = document.getElementById("open-call");
const closeBtn = document.getElementById("close-call");
const menu = document.getElementById("menu__call");
const body = document.querySelector(".page__body-mobile");

openBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menu.classList.add("modal-open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.style.overflow = "auto";
});

openBtn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  menu.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (e.target === openBtn) return;
  if (menu.contains(e.target)) return;
  menu.style.display = "none";
});