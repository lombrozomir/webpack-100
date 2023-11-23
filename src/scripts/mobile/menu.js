const openBtn = document.getElementById("open-menu");

const closeBtn = document.getElementById("close-menu");

const menu = document.getElementById("menu");

openBtn.addEventListener("click", () => {
  menu.style.display = "block";
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.style.overflow = 'auto'; 
});
