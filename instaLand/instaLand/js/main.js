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
        doc_w = $(document).width();
    
        console.log(offset)
        $('.js-scroll').on('click', function() {
            $('body,html').animate({scrollTop: offset}, 1500);
            if (doc_w > 500) {
                $('.desctope-container').animate({scrollTop: offset}, 1500);
            }
        });
    }
})