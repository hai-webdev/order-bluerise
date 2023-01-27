// 引入公共css
import "../common/reset.css";
import "./index.less";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
// 首页使用的js
import Swiper from "swiper";


const bannerSwiper = new Swiper(".banner-swiper", {
    loop: true,
    speed:500,
    autoplay:{
        delay: 3000
    },
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    }
})

// tabChange(".tab-item", ".product-catelist-item");

// function tabChange(tab, cont){
//     $(tab).on("click", function(){
//         $(tab).removeClass("active");
//         $(this).addClass("active");
//         var index = $(this).index();
//         $(cont).hide();
//         $(cont).eq(index).show();
//     })
// }

