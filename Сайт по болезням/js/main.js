$(document).ready(function() {

    {

        doc_w = $('body').width();

        if (doc_w < 1000) {
            $('.first-screen .first-screen__bg').attr('src', 'img/bg-header-mobile.png')
        }

        if (doc_w < 800) {
            $('.first-screen .first-screen__bg').attr('src', 'img/test.png')
        }
    
    }

    {
            $('.accordion-inner__block--header').click(function () {
                $(this).next().slideToggle('slow');
                $(this).toggleClass('active');


                $('.accordion-inner__block--header').not(this).next().slideUp('slow');
                $('.accordion-inner__block--header').not(this).removeClass('active');
                $('.accordion-inner__block--header').not(this).children('.accordion-button').children('.text').text('Открыть ответ');

                if ($(this).hasClass('active')) {
                    $(this).children('.accordion-button').children('.text').text('Закрыть ответ');
                    $(this).children('.accordion-button').children('img').css('transform', 'rotate(180deg)');
                    $('.accordion-inner__block--header').not(this).children('.accordion-button').children('img').css('transform', 'rotate(0)');
                } else {
                    $(this).children('.accordion-button').children('.text').text('Открыть ответ');
                    $(this).children('.accordion-button').children('img').css('transform', 'rotate(0)');
                }
            });
    }

    {
        $('.mobile-menu').on('click', function() {
            $(this).toggleClass('active');
            $('.header-menu ul').toggleClass('flex')
        });
    }
        $('.first-screen__video').on('click', function() {
            $('.modal-video').fadeIn();
            $('.modal-video').css('display', 'flex');
            $('.modal-video__inner').append('<iframe class="iframe__1" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        });

        $('.modal-video').on('click', function (e) {
            if (e.target) {
                $('.modal-video').fadeOut();
                $('.iframe__1').detach();
            }
        });

        

        $('.video').on('click', function() {
            $('.modal-video').fadeIn();
            $('.modal-video').css('display', 'flex');
            $('.modal-video__inner').append('<iframe class="iframe__1" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        });

        
    {
        let video = [
            '<iframe src="https://www.youtube.com/embed/i1SIAyYuIGs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/NDgWWYdhhzM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/_ALpvqbLZzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/-H8PmP9BYOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/rq_aFEcZ9jY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/ZbVAJbqe6xI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/-iSg9GG7bsc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/Tqk9rVwiIZ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/hqXGmqSbkSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/YT0gWL3bU2U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/vXWdQNymtZc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/Ipupr0bUVmM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ]

        let videoButtons = $('.reviews .container .video-card');

        

        $.each(videoButtons, function(i, value){
            $(value).on('click', function() {
                let reviews = `<div class="modal-rev-${i}">
                            <div class="modal-rev-${i}__inner">
                                ${video[i]}
                            </div>
                        </div>`;
                $('body').append(reviews)
                $(`.modal-rev-${i}`).fadeIn();
                $(`.modal-rev-${i}`).css('display', 'flex');
                $(`.modal-rev-${i}`).on('click', function (e) {
                    if (e.target) {
                        $(`.modal-rev-${i}`).fadeOut();
                        $(`.modal-rev-${i}`).detach();
                    }
                });
            });
        });
        
    }

    {
        $("ul").on('click', '[href*="#"]', function(e){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
          });

          doc_w = $('body').width();

          if (doc_w < 1000) {
            $("ul").on('click', '[href*="#"]', function(e){
                var fixed_offset = 100;
                $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
                e.preventDefault();
                $('.header-menu ul').removeClass('flex');
                $('.mobile-menu').removeClass('active');
            });
        }
    }

    {
        animate()

        function animate() {
            $('.first-screen__top--block ul li:nth-child(1)').css('transform', 'translateY(-6px)');
            
            setTimeout(() => {
                $('.first-screen__top--block ul li:nth-child(2)').css('transform', 'translateY(-6px)');
            }, 400);

            setTimeout(() => {
                $('.first-screen__top--block ul li:nth-child(3)').css('transform', 'translateY(-6px)');
            }, 800);

            setTimeout(() => {
                $('.first-screen__top--block ul li:nth-child(4)').css('transform', 'translateY(-6px)');
            }, 1200);

            setTimeout(() => {
                $('.first-screen__top--block ul li:nth-child(1)').css('transform', 'translateY(0px)');
            }, 1000);

            setTimeout(() => {
                $('.first-screen__top--block ul li:nth-child(2)').css('transform', 'translateY(0px)');
            }, 1400);

            setTimeout(() => {
                $('.first-screen__top--block ul li:nth-child(3)').css('transform', 'translateY(0px)');
            }, 1800);

            setTimeout(() => {
                $('.first-screen__top--block ul li:nth-child(4)').css('transform', 'translateY(0px)');
            }, 2200);
        }

        setInterval(() => {
            animate();
        }, 3200);
        
    }


});