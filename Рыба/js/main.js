$(document).ready(function () {

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    document.querySelector('.burger').addEventListener('click', function () {
        document.querySelector('.header-top ul').classList.toggle('active');
        document.querySelector('.burger').classList.toggle('active');
    });

    $(".header-top ul a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top - 100;

        if ($(window).width() <= '1000'){
            $('.header-top ul').removeClass('active');
            $('.burger').removeClass('active');
        }

        $('html').animate({ scrollTop: destination }, 500);
    });

    $(".header-main .btn").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top - 100;
        $('html').animate({ scrollTop: destination }, 500);
    });

    $('.modal .close').click(function (e) { 
        $('.modal').css('display', 'none');
    });

    $('.modal-catalog-1 .close').click(function (e) { 
        $('.modal-catalog-1').css('display', 'none');
    });

    $('.modal-catalog-2 .close').click(function (e) { 
        $('.modal-catalog-2').css('display', 'none');
    });

    $('.modal-catalog-3 .close').click(function (e) { 
        $('.modal-catalog-3').css('display', 'none');
    });

    $('.modal-catalog-4 .close').click(function (e) { 
        $('.modal-catalog-4').css('display', 'none');
    });

    $('.js-modal').click(function (e) { 
        e.preventDefault();
        $('.modal').css('display', 'flex');
    });

    $('.modal-catalog-open-1').click(function (e) { 
        e.preventDefault();
        $('.modal-catalog').css('display', 'none');
        $('.modal-catalog-1').css('display', 'flex');
    });

    $('.modal-catalog-open-2').click(function (e) { 
        e.preventDefault();
        $('.modal-catalog').css('display', 'none');
        $('.modal-catalog-2').css('display', 'flex');
    });

    $('.modal-catalog-open-3').click(function (e) { 
        e.preventDefault();
        $('.modal-catalog').css('display', 'none');
        $('.modal-catalog-3').css('display', 'flex');
    });

    $('.modal-catalog-open-4').click(function (e) { 
        e.preventDefault();
        $('.modal-catalog').css('display', 'none');
        $('.modal-catalog-4').css('display', 'flex');
    });




    $('.catalog-inner__block img').on('mouseenter', function() {
        $(this).addClass('animate__animated');
        $(this).addClass('animate__zoomIn');

        let item = $(this);

        setTimeout(function() {
            $(item).removeClass('animate__animated');
            $(item).removeClass('animate__zoomIn');
        }, 1000)
    })






    $(function(){
        $("#tel").mask("+7 999 999 99 99");
    });


});
