$(document).ready(function() {
    
    {
        // language-select
        $('.header-inner .language-select').on('click', function() {
            $('.header-inner .language-select ul').toggleClass('active');
        });
    }

    {
        // scroll-button
        let offset = $('.main .game-banners').offset().top;

        offset = offset - 100;

        $('a.scroll-icon').on('click', function(event) {
            event.preventDefault();
            
            $('body,html').animate({scrollTop: offset}, 1500);
        });
    }


})