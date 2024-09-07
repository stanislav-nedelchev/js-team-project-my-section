import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-container', {
  speed: 500,
  // loop: true,

  navigation: {
    nextEl: '.projects-button.next',
    prevEl: '.projects-button.prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  //   ==============Flip==========
  // effect: 'flip',
  // speed: 1000,

  //    ==============coverflow==========
  // effect: 'coverflow',
  // speed: 1100,

  //    ==============cubeEffect==========
  effect: 'cube',
  speed: 1100,
});
