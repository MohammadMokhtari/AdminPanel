import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  mousewheel: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   type: 'bullets',
  // },
  navigation: false,
});
