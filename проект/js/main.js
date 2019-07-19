$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu-nav').toggleClass('menu-nav_active');
});

$('.owl-carousel').owlCarousel({
  loop:true,
  responsiveClass:true,
  nav: true,
  navText: ["<img src='../img/lefe_arrow.png'>", "<img src='../img/right_arrow.png'>"],
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  navSpeed: 1500,
  autoplaySpeed: 1500,
  responsive:{
      0:{
          items:1,
          nav: false
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});