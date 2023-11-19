import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

var swiper = new Swiper('.brand--container-swiper', {

    slidesPerView: 'auto',
    autoHeight: false,
    centeredSlides: false,
    spaceBetween: 10,
    centeredSlides: false,
    
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    // },

    scrollbar: {
        hide: true
    },

    breakpoints: {
        320: {
            slidesPerView: 1.25
        }
    }
});