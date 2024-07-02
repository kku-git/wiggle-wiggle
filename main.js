// 햄버거 메뉴 - aside 오픈
$(".hamburger_menu span").on("click", function () {
  console.log(2);
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
