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
    
    {
        $('.kviz_btn_1').on('click', function () {
            $('.js-kviz-1').css("transform", "translateX(-100%)");
            $('.js-kviz-1').css("opacity", "0");
            $('.js-kviz-1').css("visibility", "hidden");

            $('.js-kviz-2').css("transform", "translateX(0)");
            $('.js-kviz-2').css("opacity", "1");
            $('.js-kviz-2').css("visibility", "visible");
        });

        $('.kviz_btn_2').on('click', function () {
            $('.js-kviz-2').css("transform", "translateX(-100%)");
            $('.js-kviz-2').css("opacity", "0");
            $('.js-kviz-2').css("visibility", "hidden");

            $('.js-kviz-3').css("transform", "translateX(0)");
            $('.js-kviz-3').css("opacity", "1");
            $('.js-kviz-3').css("visibility", "visible");
        });

        $('.kviz_btn_2_prew').on('click', function () {
            $('.js-kviz-2').css("transform", "translateX(100%)");
            $('.js-kviz-2').css("opacity", "0");
            $('.js-kviz-2').css("visibility", "hidden");

            $('.js-kviz-1').css("transform", "translateX(0)");
            $('.js-kviz-1').css("opacity", "1");
            $('.js-kviz-1').css("visibility", "visible");
        });

        $('.kviz_btn_3').on('click', function () {
            $('.js-kviz-3').css("transform", "translateX(-100%)");
            $('.js-kviz-3').css("opacity", "0");
            $('.js-kviz-3').css("visibility", "hidden");

            $('.js-kviz-4').css("transform", "translateX(0)");
            $('.js-kviz-4').css("opacity", "1");
            $('.js-kviz-4').css("visibility", "visible");
        });

        $('.kviz_btn_3_prew').on('click', function () {
            $('.js-kviz-3').css("transform", "translateX(100%)");
            $('.js-kviz-3').css("opacity", "0");
            $('.js-kviz-3').css("visibility", "hidden");

            $('.js-kviz-2').css("transform", "translateX(0)");
            $('.js-kviz-2').css("opacity", "1");
            $('.js-kviz-2').css("visibility", "visible");
        });

        $('.kviz_btn_4').on('click', function () {
            $('.js-kviz-4').css("transform", "translateX(-100%)");
            $('.js-kviz-4').css("opacity", "0");
            $('.js-kviz-4').css("visibility", "hidden");

            $('.js-kviz-5').css("transform", "translateX(0)");
            $('.js-kviz-5').css("opacity", "1");
            $('.js-kviz-5').css("visibility", "visible");
        });

        $('.kviz_btn_4_prew').on('click', function () {
            $('.js-kviz-4').css("transform", "translateX(100%)");
            $('.js-kviz-4').css("opacity", "0");
            $('.js-kviz-4').css("visibility", "hidden");

            $('.js-kviz-3').css("transform", "translateX(0)");
            $('.js-kviz-3').css("opacity", "1");
            $('.js-kviz-3').css("visibility", "visible");
        });

        $('.kviz_btn_5').on('click', function () {
            $('.js-kviz-5').css("transform", "translateX(-100%)");
            $('.js-kviz-5').css("opacity", "0");
            $('.js-kviz-5').css("visibility", "hidden");

            $('.js-kviz-6').css("transform", "translateX(0)");
            $('.js-kviz-6').css("opacity", "1");
            $('.js-kviz-6').css("visibility", "visible");
        });

        $('.kviz_btn_5_prew').on('click', function () {
            $('.js-kviz-5').css("transform", "translateX(100%)");
            $('.js-kviz-5').css("opacity", "0");
            $('.js-kviz-5').css("visibility", "hidden");

            $('.js-kviz-4').css("transform", "translateX(0)");
            $('.js-kviz-4').css("opacity", "1");
            $('.js-kviz-4').css("visibility", "visible");
        });

        $('.kviz_btn_6').on('click', function () {
            $('.js-kviz-6').css("transform", "translateX(-100%)");
            $('.js-kviz-6').css("opacity", "0");
            $('.js-kviz-6').css("visibility", "hidden");

            $('.js-kviz-7').css("transform", "translateX(0)");
            $('.js-kviz-7').css("opacity", "1");
            $('.js-kviz-7').css("visibility", "visible");
        });

        $('.kviz_btn_6_prew').on('click', function () {
            $('.js-kviz-6').css("transform", "translateX(100%)");
            $('.js-kviz-6').css("opacity", "0");
            $('.js-kviz-6').css("visibility", "hidden");

            $('.js-kviz-5').css("transform", "translateX(0)");
            $('.js-kviz-5').css("opacity", "1");
            $('.js-kviz-5').css("visibility", "visible");
        });

        $('.kviz_open').on('click', function() {
            $('.modal_kviz').fadeIn(500);
            $('.modal_kviz').css('display', 'flex');
        });
    }




});