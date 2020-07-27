$(document).ready(function () {

    {
        let svg = $('.js-click > g');
        let models = ['.firm', '.hospital', '.dining', '.factory', '.electro', '.ferm'];

        $.each( models , function (index, value) { 
            $(value).on('click', function () {
                svg.removeClass("js-map");
                $(value).addClass("js-map");

                let id = $(value).data( "map-id" );
                $(`.citymap-inner__slider .citymap-inner__slider--slide`).removeClass('active');
                $('.dots li').removeClass('active-dots');

                if ($(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).hasClass('active')) {
                    return
                } else {
                    $('.citymap-inner__slider .active').fadeOut();
                    $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).addClass('active');
                    $(`.dots li[data-map-id="${id}"]`).addClass('active-dots');
                    $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).fadeIn();
                }  
            });
        });

        $('.dots li').on('click', function () {

            let id = $(this).data( "map-id" );
            
            

            svg.removeClass("js-map");
            $(`g[data-map-id="${id}"]`).addClass("js-map");
            $(`.citymap-inner__slider .citymap-inner__slider--slide`).removeClass('active');
            $('.dots li').removeClass('active-dots');

            if ($(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).hasClass('active')) {
                return
            } else {
                $('.citymap-inner__slider .active').fadeOut();
                $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).addClass('active');
                $(`.dots li[data-map-id="${id}"]`).addClass('active-dots');
                $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).fadeIn();
            }  
        });

        $('.rignt-arrow').on('click', function () {

            let id = $('.dots li.active-dots').data( "map-id" );
            
            if (id == 6) {
                id = 1;
            } else {
                id++;
            }

            svg.removeClass("js-map");
            $(`g[data-map-id="${id}"]`).addClass("js-map");
            $(`.citymap-inner__slider .citymap-inner__slider--slide`).removeClass('active');
            $('.dots li').removeClass('active-dots');

            if ($(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).hasClass('active')) {
                return
            } else {
                $('.citymap-inner__slider .active').fadeOut();
                $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).addClass('active');
                $(`.dots li[data-map-id="${id}"]`).addClass('active-dots');
                $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).fadeIn();
            }  
        });

        $('.left-arrow').on('click', function () {

            let id = $('.dots li.active-dots').data( "map-id" );
            
            if (id == 1) {
                id = 6;
            } else {
                id--;
            }

            svg.removeClass("js-map");
            $(`g[data-map-id="${id}"]`).addClass("js-map");
            $(`.citymap-inner__slider .citymap-inner__slider--slide`).removeClass('active');
            $('.dots li').removeClass('active-dots');

            if ($(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).hasClass('active')) {
                return
            } else {
                $('.citymap-inner__slider .active').fadeOut();
                $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).addClass('active');
                $(`.dots li[data-map-id="${id}"]`).addClass('active-dots');
                $(`.citymap-inner__slider .citymap-inner__slider--slide[data-map-id="${id}"]`).fadeIn();
            }  
        });

        



        // $('.firm').on('click', function () {
        //     svg.removeClass("js-map");
        //     $('.firm').addClass("js-map");
        // });

        // $('.hospital').on('click', function () {
        //     svg.removeClass("js-map");
        //     $('.hospital').addClass("js-map");
        // });

        // $('.dining').on('click', function () {
        //     svg.removeClass("js-map");
        //     $('.dining').addClass("js-map");
        // });

        // $('.factory').on('click', function () {
        //     svg.removeClass("js-map");
        //     $('.factory').addClass("js-map");
        // });

        // $('.electro').on('click', function () {
        //     svg.removeClass("js-map");
        //     $('.electro').addClass("js-map");
        // });

        // $('.ferm').on('click', function () {
        //     svg.removeClass("js-map");
        //     $('.ferm').addClass("js-map");
        // });


        
    }

    
});