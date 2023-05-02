// header
const btnmenuicons = document.querySelector('.menu-icons');
const btnnav = document.querySelector('.nav');
const btngroup = document.querySelector('.btngroup');

const mobile = document.querySelector('.mo-nav');
const btnclose = document.querySelector('.btn-close');


btnmenuicons.addEventListener('click', function () {
  mobile.classList.add('active');
});

btnclose.addEventListener('click', function () {
  mobile.classList.remove('active');
});


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





// scroll
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

