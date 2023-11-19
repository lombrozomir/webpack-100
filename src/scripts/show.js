const btn = document.querySelector(".info-read__button");
const hiddenItems = document.querySelectorAll(".hidden-item");

btn.addEventListener("click", function () {
  if (btn.textContent === "Читать далее") {
    hiddenItems.forEach(function (item) {
      item.style.display = "block";
    });

    btn.textContent = "Скрыть";
  } else {
    hiddenItems.forEach(function (item) {
      item.style.display = "none";
    });

    btn.textContent = "Читать далее";
  }
});

const img = document.getElementById('info-read__img');
let rotated = false;

btn.addEventListener('click', function () {
    if (!rotated) {
        img.style.transform = 'rotate(180deg)';
    } else {
        img.style.transform = 'rotate(0deg)';
    }

    rotated = !rotated;
});

console.log(new Swiper());