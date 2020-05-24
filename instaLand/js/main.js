$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
    });
    
    {
        let offset = $('.packages').offset().top;
    
        console.log(offset)
        $('.js-scroll').on('click', function() {
            $('body,html').animate({scrollTop: offset}, 1500);
        });
    }
})