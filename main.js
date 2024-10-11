// 햄버거 메뉴 - aside 오픈
$(".hamburger_menu").on("click", function () {
  $("#aside").fadeIn();
});

//  aside 닫기
$(".aside-close").on("click", function () {
  $("#aside").fadeOut(); // #aside 요소 숨기기
});

//  상단 배너 닫기
$(".close").on("click", function () {
  $(".banner-top").fadeOut();
});

// 푸터 여닫기
$(".footer_top").on("click", function () {
  $(".footer_bottom").toggle();
});

// 캐러셀(3초마다)
let currentIndex = 0;
let totalSlides = 4;
let direction = 1;

setInterval(function () {
  currentIndex += direction;

  if (currentIndex === totalSlides - 1) {
    direction = -1;
  } else if (currentIndex === 0) {
    direction = 1;
  }

  $(".slide-wrapper").css("transform", `translateX(-${currentIndex * 100}vw)`);
}, 3000);
