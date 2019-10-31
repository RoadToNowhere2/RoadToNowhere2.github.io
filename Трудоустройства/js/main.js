$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    autoplaySpeed: 2500,
    smartSpeed: 2500,
    smartSpeed: 2500,
    dragEndSpeed: 2500,
    loop: true
  });


  {
    let criteriaAll     = $('.criteria_inner');
    let mainCriteriaAll = $('.criteria');

    for (let i = 0; i < criteriaAll.length; i++) {
      criteriaAll.mousemove(function () { 
        $(this).addClass('active')
        $(mainCriteriaAll).addClass('criteria_active')
      })
      criteriaAll.mouseout(function () { 
        $(this).removeClass('active')
        $(mainCriteriaAll).removeClass('criteria_active')
      })
    }
    $('.active p.invisible').css('opacity', '1')
    setTimeout(function() {
      $('.active p.invisible').css('opacity', '1')
      $('.active p.invisible').css('visibility', 'visible')
    }, 300)
  }

  {
    $('.js-modal').on('click', function() {
      $('.modal').fadeIn();
      $('body').css('overflow', 'hidden');
      $('html').css('overflow', 'hidden');
    });
    $('.js-close-modal').on('click', function(){
      $('.modal').fadeOut();
      $('body').css('overflow', 'visible');
      $('html').css('overflow', 'visible');
    });
  }
  {
  $('.modal').on('.click', function() {
    if(!$('.modal_form')) {
      $(this).fadeOut();
    }
  });
  }



});
