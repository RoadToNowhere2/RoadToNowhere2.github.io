$(document).ready(function () {
    $('.slider-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
      });

      {
        $('.burger').on('click', function() {
          $(this).toggleClass('active');
          $('.header-menu').toggleClass('active');
        })
      
      
      }
});