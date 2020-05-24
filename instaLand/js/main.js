$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
    });
    
    {
        let button      = $('.js-scroll');

        button.on('click', function() {
            if ($(this).children('img').attr('src') == 'img/button-1.png') {
                let offset  = $('#scroll-item').offset().top;
                let doc_w   = $(document).width();

                $('.button-animate').css('right', '-65px');

                setTimeout(()=> {
                    $('.button-animate').css('right', 'calc( 100% + 35px )');
                }, 1000)
            
                console.log(offset)

                $('body,html').animate({scrollTop: offset}, 1500);
                if (doc_w > 500) {
                    $('.desctope-container').animate({scrollTop: offset}, 1500);
                }
            } else if ($(this).children('img').attr('src') == 'img/button-2.png' || $(this).children('img').attr('src') == 'img/button-4.png') {
                $(this).children('img.button-fade').fadeIn('fast')


                $('.js-scroll img').attr('src') == 'img/button-1.png';
                let offset  = $('#scroll-item').offset().top;
                let doc_w   = $(document).width();
            
                console.log(offset)

                $('body,html').animate({scrollTop: offset}, 1500);
                if (doc_w > 500) {
                    $('.desctope-container').animate({scrollTop: offset}, 1500);
                }

                $(this).children('img.button-fade').fadeOut(2000)
            }
        });
    }
})