// Модуль "Заказать звонок"
export let header = document.querySelector(".header");
export let sideMenu = document.querySelector(".side-menu");
export let content = document.querySelector(".content"); //export let contnet = document.querySelector(".content");
export let footer = document.querySelector(".footer");
export let blurItems = document.querySelectorAll(".blur");

export let callButton = document.querySelector('.icon__phone');
export let tabletCallButton = document.querySelector('.button-nav--call')
export let call = document.querySelector('.call');
export let closeCallButton = document.querySelector('.close-call');

export const openCall = callButton.addEventListener('click', function() {
  call.classList.remove('hidden');
  if (window.innerWidth >= 768) {
    sideMenu.classList.add('blur');
    header.classList.add('blur');
    content.classList.add('blur'); //contnet.classList.add('blur');
    footer.classList.add('blur');
  }
}, {capture: true});

export const openTabletCall = tabletCallButton.addEventListener('click', function() {
  call.classList.remove('hidden');
  if (window.innerWidth < 1120 && window.innerWidth >= 768) {
    header.classList.add('blur');
    content.classList.add('blur'); //contnet.classList.add('blur');
    footer.classList.add('blur');
  }
}, {capture: true});

export const closeCall = closeCallButton.addEventListener('click', function() {
  call.classList.add('hidden');
  sideMenu.classList.remove('blur');
  header.classList.remove('blur');
  content.classList.remove('blur');
  footer.classList.remove('blur');
});

document.addEventListener('click', function (evt) {
  if ((!evt.composedPath().includes(sideMenu)) && (!evt.composedPath().includes(feedback)) && (!evt.composedPath().includes(call))) {
    call.classList.add('hidden');
    sideMenu.classList.remove('blur');
    header.classList.remove('blur');
    content.classList.remove('blur');
    footer.classList.remove('blur');
  }
}, {capture: true});