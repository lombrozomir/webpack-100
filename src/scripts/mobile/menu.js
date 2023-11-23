const openBtn = document.getElementById("open-menu");

const closeBtn = document.getElementById("close-menu");

const menu = document.getElementById("menu");

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

// функционал закрытия меню по клику на свободную область
// openBtn.addEventListener("click", (e) => {
//   e.stopPropagation(); 
//   menu.style.display = "block";
// });

// document.addEventListener("click", (e) => {
//   if (e.target === openBtn) return;
//   if (menu.contains(e.target)) return;
//   menu.style.display = "none";
// });
