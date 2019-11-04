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

    $(".menu_inner a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 1100);
    });

    $(".footer_menu a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 1100);
    });

    $(".modal_menu_inner a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 1100);
        $('.modal').slideUp();
        $('body', 'html').css('overflow', 'visible');
    });
    
});