// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

// 首页使用的js
import Swiper from "swiper";

const galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
//   loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const galleryTop = new Swiper(".product-swiper", {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
    delay:3000
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
