window.addEventListener("DOMContentLoaded", function () {
  const resizableSwiper = function (breakpoint, swiperClass, swiperSettings) {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper("(max-width: 767px)", ".swiper-1", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.25,
      },

      480: {
        slidesPerView: 1.4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
  });

  resizableSwiper("(max-width: 767px)", ".swiper-2", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.25,
      },

      480: {
        slidesPerView: 1.4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
  });

  resizableSwiper("(max-width: 767px)", ".swiper-3", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.25,
      },

      480: {
        slidesPerView: 1.4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
  });
});

export let button = document.querySelector(".button--show-all");
export let tabletItems = document.querySelectorAll(".tablet-hidden");
export let desktopItems = document.querySelectorAll(".desktop-hidden");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (window.innerWidth < 1120) {
    for (let i = 0; i < tabletItems.length; i++) {
      tabletItems[i].classList.toggle("tablet-hidden");
    }
  } else {
    for (let i = 0; i < desktopItems.length; i++) {
      desktopItems[i].classList.toggle("desktop-hidden");
    }
  }
  if (button.textContent === "Показать все") {
    button.textContent = "Скрыть";
    button.classList.toggle("button--read-more");
    button.classList.toggle("button--hidden");
  } else {
    button.textContent = "Показать все";
    button.classList.toggle("button--read-more");
    button.classList.toggle("button--hidden");
  }
});

export let typeContButton = document.querySelector(
  ".type-container__button-show-all"
);
export let typeContTabletItems = document.querySelectorAll(
  ".type-container--tablet-hidden"
);
export let typeContDesktopItems = document.querySelectorAll(
  ".type-container--desktop-hidden"
);

typeContButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (window.innerWidth < 1120) {
    for (let i = 0; i < typeContTabletItems.length; i++) {
      typeContTabletItems[i].classList.toggle("type-container--tablet-hidden");
    }
  } else {
    for (let i = 0; i < typeContDesktopItems.length; i++) {
      typeContDesktopItems[i].classList.toggle(
        "type-container--desktop-hidden"
      );
    }
  }
  if (typeContButton.textContent === "Показать все") {
    typeContButton.textContent = "Скрыть";
    typeContButton.classList.toggle("button--read-more");
    typeContButton.classList.toggle("button--hidden");
  } else {
    typeContButton.textContent = "Показать все";
    typeContButton.classList.toggle("button--read-more");
    typeContButton.classList.toggle("button--hidden");
  }
});

export let descriptionButton = document.querySelector(".description-button");
export let descriptionHidden = document.querySelector(".description-hidden");

export const showDescription = descriptionButton.addEventListener(
  "click",
  function (evt) {
    evt.preventDefault();
    descriptionHidden.classList.toggle("description-hidden");
    if (descriptionButton.textContent === "Читать далее") {
      descriptionButton.textContent = "Скрыть";
      descriptionButton.classList.toggle("button--read-more");
      descriptionButton.classList.toggle("button--hidden");
    } else {
      descriptionButton.textContent = "Читать далее";
      descriptionButton.classList.toggle("button--read-more");
      descriptionButton.classList.toggle("button--hidden");
    }
  }
);


