// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";
import $ from "jquery";

$(".menu-btn").on("click", function(){
    $(this).toggleClass("active");
    $(".nav-list").slideToggle();
    $(".mask").fadeToggle();
})