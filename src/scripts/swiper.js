import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

var swiper = new Swiper(".brand--container-swiper", {
  loop: true,
  slidesPerView: "auto",
  autoHeight: false,
  spaceBetween: 10,
  centeredSlides: false,

  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    hide: true,
  },

  breakpoints: {
    320: {
      enabled: true,
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1.2,
    },
  },
});
