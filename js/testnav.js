function scroll() {
  var top = $(".header-content").offset().top;
  var scrollTop = $(window).scrollTop();
  var hh = $(".header-content").height();
  if (scrollTop <= hh) {
    $(".header-content").css("background-color", "transparent");
  } else {
    $(".header-content").css("background-color", "#555555");
  }
}
$(window).on("scroll", function () {
  scroll();
});

// var $nav = $(".header-content"),
//     $header = $(".main-container"),
//     hh = $header.height();
// $(document).scroll(function () {
//   if ($(this).scrollTop() > hh) {
//     $nav.addClass("scrolled");
//   } else {
//     $nav.removeClass("scrolled");
//   }
// });
