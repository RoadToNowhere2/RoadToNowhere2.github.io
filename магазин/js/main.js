// подключаем слайдер owl caurusel2 для шапки
$(document).ready(function() {
  $("#owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 1500,
    dotsSpeed: 1500,
    autoplayHoverPause: true,
    responsive : {
      0: {
        dots: false
      },
      400 : {
        dots: true
      }
    }
  });
});

// подключаем тот же слайдер для галереи
$(document).ready(function() {
  $("#slider_2").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    navSpeed: 1500,
    responsive: {
      100 : {
        items: 1
      },
      400 : {
        items: 2
      },
      768 : {
        items: 3
      },
      992 : {
        items: 5
      }
    }
  });
});

// бургер-кнопка в шапку сайта
$(".btn-menu").on("click", function(e) {
  e.preventDefault();
  $(this).toggleClass("menu-btn_active");
  $(".menu-nav").toggleClass("menu-nav_active");
});
