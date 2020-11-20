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
      
        $('.video-inner__block .play').on('click', function () {
          $('.modal').css('display', 'flex');
        });

        $('.modal-video__close').on('click', function () {
          $('.modal').css('display', 'none');
        });
      
      }

      // {

      //   var show = true;
      //   var countbox = ".benefits__inner";
      //   $(window).on("scroll load resize", function () {
      //       if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      //       var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      //       var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      //       var w_height = $(window).height(); // Высота окна браузера
      //       var d_height = $(document).height(); // Высота всего документа
      //       var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      //       if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      //           $('.benefits__number').css('opacity', '1');
      //           $('.benefits__number').spincrement({
      //               thousandSeparator: "",
      //               duration: 1200
      //           });
                
      //           show = false;
      //       }
      //   });

      // }
});