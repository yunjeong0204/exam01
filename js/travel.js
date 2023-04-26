// 수평슬라이드
new Swiper('.banner .swiper', {
  // direction : 'horizontal',
  loop: true, // 반복 재생
  autoplay: {
    delay: 5000
  },
  slidesPerView: 4,
  navigation: {
    prevEl: '.banner .swiper-button-prev',
    nextEl: '.banner .swiper-button-next',
  },
});

// swiper api
// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,

//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   }
// })

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEl, 
      triggerHook: 0.8 
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller()); 
});

