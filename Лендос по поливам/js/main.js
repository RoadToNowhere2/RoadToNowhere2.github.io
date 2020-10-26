$(document).ready(function () {
    $(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 800);
    });

    $(".footer ul:last-child").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 800);
    });

    $('.mobileMenu-list').on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 800);
        if ($(window).width() <= '1130') {
          $('.mobileMenu').css('display', 'none');
        }
    });

    $('.header-languages').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.btn').on('click', function () {
       $('.modal').css('display', 'flex'); 
    });

    $('.close').on('click', function () {
        $('.modal').css('display', 'none'); 
     });

     $('.burger').on('click', function () {
        $('.mobileMenu').css('display', 'flex'); 
     });
 
     $('.close-menu').on('click', function () {
         $('.mobileMenu').css('display', 'none'); 
      });

    $('form').on('submit', function(e) {
      
        e.preventDefault();

        let name    = $(this).children('input[name="name"]').val();
        let tel     = $(this).children('input[name="tel"]').val();
        let email   = $(this).children('input[name="email"]').val();

        $.ajax({
            url: '../mail.php',
            type: 'POST',
            cache: false,
            data: { 'name':name, 
                    'tel':tel,
                    'email':email
                    },
            dataType: 'html',
            beforeSend: function() {
                $(this).children('button').prop('disabled', true);
            },
            success: function(data) {
                if ($('.modal').css('display') == 'flex' ) {
                   $('.modal').css('display', 'none')
                }
                alert('Заявка отправлена!')
                $(this).children('button').prop('disabled', false);
            }
        });
    })
});