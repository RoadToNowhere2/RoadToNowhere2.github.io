$(document).ready(function(){
    $('.js-open-menu').on('click', function() {
        $('.modal').slideDown();
        $('body', 'html').css('overflow', 'hidden');
    });
    $('.close_modal_1').on('click', function() {
        $('.modal').slideUp();
        $('body', 'html').css('overflow', 'visible');
    });
    $('.js-modal').on('click', function() {
        $('.modal_form').slideDown();
        $('body', 'html').css('overflow', 'hidden');
    });
    $('.close_modal_2').on('click', function() {
        $('.modal_form').slideUp();
        $('body', 'html').css('overflow', 'visible');
    });
});