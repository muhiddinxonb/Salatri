'use strict';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 100
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 100
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 50
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },


    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});


const link = document.querySelectorAll('.value__link-list');

const hamburger = document.querySelector(".hamburger");

const menu = document.querySelector('.header__menu')
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  if (window.innerWidth <= 1200) {
    menu.classList.toggle('menu-active')
  }
});
AOS.init();