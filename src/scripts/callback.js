// Модуль "Обратная связь"
export let header = document.querySelector(".header");
export let sideMenu = document.querySelector(".side-menu");
export let content = document.querySelector(".content");
export let footer = document.querySelector(".footer");
export let blurItems = document.querySelectorAll(".blur");

export let feedbackButton = document.querySelector(".icon__chat");
export let tabletFeedbackButton = document.querySelector(".button-nav--chat");
export let feedback = document.querySelector(".feedback");
export let closeFeedbackButton = document.querySelector(".close-feedback");

export const openFeedback = feedbackButton.addEventListener(
  "click",
  function () {
    feedback.classList.remove("hidden");
    if (window.innerWidth >= 768) {
      sideMenu.classList.add("blur");
      header.classList.add("blur");
      content.classList.add("blur");
      footer.classList.add("blur");
    }
  },
  { capture: true }
);

export const openTabletFeedback = tabletFeedbackButton.addEventListener(
  "click",
  function () {
    feedback.classList.remove("hidden");
    if (window.innerWidth < 1120 && window.innerWidth >= 768) {
      header.classList.add("blur");
      content.classList.add("blur");
      footer.classList.add("blur");
    }
  },
  { capture: true }
);

export const closeFeedback = closeFeedbackButton.addEventListener(
  "click",
  function () {
    feedback.classList.add("hidden");
    sideMenu.classList.remove("blur");
    header.classList.remove("blur");
    content.classList.remove("blur");
    footer.classList.remove("blur");
  }
);

document.addEventListener(
  "click",
  function (evt) {
    if (
      !evt.composedPath().includes(sideMenu) &&
      !evt.composedPath().includes(feedback) &&
      !evt.composedPath().includes(call)
    ) {
      feedback.classList.add("hidden");
      sideMenu.classList.remove("blur");
      header.classList.remove("blur");
      content.classList.remove("blur");
      footer.classList.remove("blur");
    }
  },
  { capture: true }
);
