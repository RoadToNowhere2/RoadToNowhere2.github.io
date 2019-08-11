$("#owl-carousel-1").owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  responsive:{
    0:{
        items:1
    },
    500:{
        items:2
    },
    768:{
        items:4
    },
    992: {
        items:4
    }
  }
});

$("#owl-carousel-2").owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  items: 1,
  URLhashListener: true,
  smartSpeed: 2000,
  startPosition: "URLHash"
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});

// Модальное окно

// открыть по кнопке
$(".js-button-campaign").click(function() {
  $(".js-overlay-campaign").fadeIn();
  $(".js-overlay-campaign").addClass("disabled");
});

// закрыть на крестик
$(".js-close-campaign").click(function() {
  $(".js-overlay-campaign").fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function(e) {
  var popup = $(".js-popup-campaign");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".js-overlay-campaign").fadeOut();
  }
});