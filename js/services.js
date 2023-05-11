var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 2,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

function scroll() {
  var top = $(".header-content").offset().top;
  var scrollTop = $(window).scrollTop();
  var hh = $(".header-content").height();
  if (scrollTop <= hh) {
    $(".header-content").css("background-color", "transparent");
  } else {
    $(".header-content").css("background-color", "#f9f9f9");
  }
  if (scrollTop <= hh) {
    $(".header-link-item").css("color", "#FFF");
  } else {
    $(".header-link-item").css("color", "#212529");
  }
}
$(window).on("scroll", function () {
  scroll();
});

$(".showmenu").on("click", function () {
  $(this).toggleClass("on");
  $(".header-link").toggleClass("menu-show");
  // $(".menu-show").toggleClass('hidden');
});


$(function () {
  AOS.init({
    offset: 200,
    easing: "ease-in-sine",
  });
});
