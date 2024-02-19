const swiper = new Swiper('.swiper', {
    spaceBetween: 15,
    slidesPerView: 1, 
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });
  var width = window.innerWidth;

  if (width > 700 && width < 800) {
      swiper.params.slidesPerView = 2;
  }else if(width<700){
      swiper.params.slidesPerView = 1;
  }
  window.addEventListener('resize', function () {
    var width = window.innerWidth;

    if (width > 700 && width < 768) {
        swiper.params.slidesPerView = 2;
    }else if(width<700){
        swiper.params.slidesPerView = 1;
    }
});