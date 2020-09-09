$(document).ready(function () {
    $('.btn').on('click', () => {
        $('.modal-podarok').css('left', '0');
        $('.container').css('filter', 'blur(20px)');
        if ($(window).width() <= '1000'){
            $('body').css('overflow', 'hidden');
            $('html').css('overflow', 'hidden');
        }
    });

    $('.modal-podarok .close-modal').on('click', () => {
        $('.modal-podarok').css('left', '-100%');
        $('.container').css('filter', 'blur(0)');
        if ($(window).width() <= '1000'){
            $('body').css('overflow', 'scroll');
            $('html').css('overflow', 'scroll');
        }
    });

    

    
});