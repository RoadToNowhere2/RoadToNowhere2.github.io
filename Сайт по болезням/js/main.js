$(document).ready(function() {

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

        $('.video img').on('click', function() {
            $('.modal-video').fadeIn();
            $('.modal-video').css('display', 'flex');
            $('.modal-video__inner').append('<iframe class="iframe__1" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        });

        $('.search-block').on('click', function() {
            $('.modal-sert').fadeIn();
            $('.modal-sert').css('display', 'flex');
        });

        $('.modal-sert').on('click', function (e) {

            let image = $('.modal-sert img');

            if (e.target != image) {
                $('.modal-sert').fadeOut();
            }
        });
    {
        let video = [
            '<iframe class="reviews__1" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe class="reviews__2" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe class="reviews__3" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe class="reviews__4" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe class="reviews__5" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe class="reviews__6" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe class="reviews__7" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            '<iframe class="reviews__8" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
        $("body").on('click', '[href*="#"]', function(e){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
          });

          doc_w = $('body').width();

          if (doc_w < 1000) {
            $("body").on('click', '[href*="#"]', function(e){
                var fixed_offset = 100;
                $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
                e.preventDefault();
                $('.header-menu ul').removeClass('flex');
                $('.mobile-menu').removeClass('active');
            });
        }
    }

    {

            doc_w = $('body').width();

            if (doc_w < 1000) {
                $('.first-screen .first-screen__bg').attr('src', 'img/bg-header-mobile.png')
            }

            if (doc_w < 800) {
                $('.first-screen .first-screen__bg').attr('src', 'img/test.png')
            }
        
    }


});