$(document).ready(function () {
    {
      new WOW().init();
    }

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

      {

        let show = true;
        let countbox = ".prichini-inner";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            let w_height = $(window).height(); // Высота окна браузера
            let d_height = $(document).height(); // Высота всего документа
            let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.prichini-inner__block span').css('opacity', '1');
                $('.prichini-inner__block span').spincrement({
                    thousandSeparator: "",
                    duration: 2000
                });
                
                show = false;
            }
        });

      }

      {

        let show = true;
        let countbox = ".results-inner";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            let w_height = $(window).height(); // Высота окна браузера
            let d_height = $(document).height(); // Высота всего документа
            let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.results-inner__block span').css('opacity', '1');
                $('.results-inner__block span').spincrement({
                    thousandSeparator: "",
                    duration: 2000
                });
                
                show = false;
            }
        });

      }
});



