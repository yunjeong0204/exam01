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


// 수평슬라이드
new Swiper('.banner .swiper', {
  direction : 'horizontal',
  loop: true, // 반복 재생
  autoplay: true, 
  slidePerView: 1,
  navigation: {
    prevEl: '.banner .prev',
    nextEl: '.banner .next'
  },
});
