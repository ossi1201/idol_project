
$(function () {
  $(document).ready(function () {
    $(".slider").bxSlider({
      auto: true,
      mode: "fade",
      controls: false,
      pager: false,
    });
  });
});


// ハンバーガー
const ham = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});


const navLinks = document.querySelectorAll(".思い出などで");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        ham.classList.remove("active");
        nav.classList.remove("active");
    });
});


// カルーセル
const mySwiper = new Swiper ('.swiper', {

  loop: true, 
  autoplay: {delay: 3000,},

  pagination: {
    el: '.swiper-pagination', //ページネーションクラス名要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素のクラス名指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素のクラス名指定
  },

//レスポンシブ
  breakpoints: { // ブレイクポイント
    1080: { // 画面幅992px以上で適用
      slidesPerView: 1,
      spaceBetween: 40
    }}
});

(function () {
  if ($(".パーソナルカラーホワイトのおっしー").length) {
    $(".パーソナルカラーホワイトのおっしー").modalVideo({
      channel: "youtube",
      youtube: {
        controls: 1, // コントロール表示（0は非表示）
      },
    });
  }
})()

ScrollReveal().reveal('.scroll', { 
  origin: 'left', // 左から
  distance: '100px', // 50px
  duration: 2000,
  delay: 200,
  easing: 'ease-in-out',
  reset: false   // 何回もアニメーション表示
  });