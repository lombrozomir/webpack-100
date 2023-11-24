window.addEventListener('DOMContentLoaded', function () {

    const resizableSwiper = function(breakpoint, swiperClass, swiperSettings) {
      let swiper;
    
      breakpoint = window.matchMedia(breakpoint);
    
      const enableSwiper = function(className, settings) {
                swiper = new Swiper(className, settings);
      }
    
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
    
      breakpoint.addEventListener('change', checker);
      checker();
    }
    
    resizableSwiper(
      '(max-width: 767px)',
      '.swiper-1',
      {
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
      }
    );
    
    resizableSwiper(
      '(max-width: 767px)',
      '.swiper-2',
      {
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
      }
    );
    
    resizableSwiper(
      '(max-width: 767px)',
      '.swiper-3',
      {
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
      }
    );
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
    
    export let typeContButton = document.querySelector(".type-container__button-show-all");
    export let typeContTabletItems = document.querySelectorAll(".type-container--tablet-hidden");
    export let typeContDesktopItems = document.querySelectorAll(".type-container--desktop-hidden");
      
    typeContButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (window.innerWidth < 1120) {
        for (let i = 0; i < typeContTabletItems.length; i++) {
          typeContTabletItems[i].classList.toggle("type-container--tablet-hidden");
        }
      } else {
        for (let i = 0; i < typeContDesktopItems.length; i++) {
          typeContDesktopItems[i].classList.toggle("type-container--desktop-hidden");
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
      
    export const showDescription = descriptionButton.addEventListener("click", function (evt) {
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
      });
    
    // Боковое меню
    
    export let closeMenu = document.querySelector('.icon__burger');
    export let openMenu = document.querySelector('.button-nav--menu');
    export let sideMenu = document.querySelector('.side-menu');
    export let header = document.querySelector('.header');
    export let contnet = document.querySelector('.content');
    export let footer = document.querySelector('.footer');
    export let blurItems = document.querySelectorAll('.blur');
    
    export const showMenu = openMenu.addEventListener('click', function() {
      sideMenu.classList.remove('side-menu-hidden');
      if (window.innerWidth < 1120 && window.innerWidth >= 768) {
        header.classList.toggle('blur');
        contnet.classList.toggle('blur');
        footer.classList.toggle('blur');
      }
    }, {capture: true});
    
    export const hiddenMenu = closeMenu.addEventListener('click', function() {
      sideMenu.classList.add('side-menu-hidden');
      if (window.innerWidth < 1120 && window.innerWidth >= 768) {
          header.classList.remove('blur');
          contnet.classList.remove('blur');
          footer.classList.remove('blur');
      }
    });
    
    document.addEventListener('click', function (evt) {
      if ((!evt.composedPath().includes(sideMenu)) && (!evt.composedPath().includes(feedback)) && (!evt.composedPath().includes(call))) {
        sideMenu.classList.add('side-menu-hidden');
        header.classList.remove('blur');
        contnet.classList.remove('blur');
        footer.classList.remove('blur');
      }
    }, {capture: true});
    
    // Модуль "Обратная связь"
    
    export let feedbackButton = document.querySelector('.icon__chat');
    export let tabletFeedbackButton = document.querySelector('.button-nav--chat')
    export let feedback = document.querySelector('.feedback');
    export let closeFeedbackButton = document.querySelector('.close-feedback')
    
    export const openFeedback = feedbackButton.addEventListener('click', function() {
      feedback.classList.remove('hidden');
      if (window.innerWidth >= 768) {
        sideMenu.classList.add('blur');
        header.classList.add('blur');
        contnet.classList.add('blur');
        footer.classList.add('blur');
      }
    }, {capture: true});
    
    export const openTabletFeedback = tabletFeedbackButton.addEventListener('click', function() {
      feedback.classList.remove('hidden');
      if (window.innerWidth < 1120 && window.innerWidth >= 768) {
        header.classList.add('blur');
        contnet.classList.add('blur');
        footer.classList.add('blur');
      }
    }, {capture: true});
    
    export const closeFeedback = closeFeedbackButton.addEventListener('click', function() {
      feedback.classList.add('hidden');
      sideMenu.classList.remove('blur');
      header.classList.remove('blur');
      contnet.classList.remove('blur');
      footer.classList.remove('blur');
    });
    
    document.addEventListener('click', function (evt) {
      if ((!evt.composedPath().includes(sideMenu)) && (!evt.composedPath().includes(feedback)) && (!evt.composedPath().includes(call))) {
        feedback.classList.add('hidden');
        sideMenu.classList.remove('blur');
        header.classList.remove('blur');
        contnet.classList.remove('blur');
        footer.classList.remove('blur');
      }
    }, {capture: true});
    
    // Модуль "Заказать звонок"
    
    export let callButton = document.querySelector('.icon__phone');
    export let tabletCallButton = document.querySelector('.button-nav--call')
    export let call = document.querySelector('.call');
    export let closeCallButton = document.querySelector('.close-call');
    
    export const openCall = callButton.addEventListener('click', function() {
      call.classList.remove('hidden');
      if (window.innerWidth >= 768) {
        sideMenu.classList.add('blur');
        header.classList.add('blur');
        contnet.classList.add('blur');
        footer.classList.add('blur');
      }
    }, {capture: true});
    
    export const openTabletCall = tabletCallButton.addEventListener('click', function() {
      call.classList.remove('hidden');
      if (window.innerWidth < 1120 && window.innerWidth >= 768) {
        header.classList.add('blur');
        contnet.classList.add('blur');
        footer.classList.add('blur');
      }
    }, {capture: true});
    
    export const closeCall = closeCallButton.addEventListener('click', function() {
      call.classList.add('hidden');
      sideMenu.classList.remove('blur');
      header.classList.remove('blur');
      contnet.classList.remove('blur');
      footer.classList.remove('blur');
    });
    
    document.addEventListener('click', function (evt) {
      if ((!evt.composedPath().includes(sideMenu)) && (!evt.composedPath().includes(feedback)) && (!evt.composedPath().includes(call))) {
        call.classList.add('hidden');
        sideMenu.classList.remove('blur');
        header.classList.remove('blur');
        contnet.classList.remove('blur');
        footer.classList.remove('blur');
      }
    }, {capture: true});