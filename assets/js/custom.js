$(document).ready(function(){
    // mobile menu
    $('.mob-menu').click(function(){
        $(this).toggleClass('active');
            $('.overlay-menu').slideToggle();
    });
    // slick slider
    $('.slide-wrap').slick({
        dots: true,
        arrows: false,
      });
      $('.slider-wrapper').slick({
        centerMode: true,
        mobileFirst:true,
        centerPadding: '44px',
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
          ]
      });
});
