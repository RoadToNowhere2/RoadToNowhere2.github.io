$(document).ready(function () {


	{
        $(".header-menu a").on("click", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top - 30;
            $('body,html').animate({scrollTop: top}, 800);
            if ($(window).width() <= '1000') {
              $('.header-menu').css('display', 'none');
            }
		});
		
		$('.burger').on("click", function () {
			$('.header-menu').css('display', 'flex');
		})

		$('.close').on("click", function () {
			$('.header-menu').css('display', 'none');
		})
      }


    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	
	$('#open-popup').magnificPopup({
		items: [
		  {
			src: '../sertificates/1.jpg',
		  },
		  {
			src: '../sertificates/2.jpg',
		  },
		  {
			src: '../sertificates/3.jpg',
		  },
		  {
			src: '../sertificates/4.jpg',
		  },
		  {
			src: '../sertificates/5.jpg',
		  },
		  {
			src: '../sertificates/6.jpg',
		  },
		  {
			src: '../sertificates/7.jpg',
		  },
		  {
			src: '../sertificates/8.jpg',
		  },
		],
		gallery: {
		  enabled: true
		},
		type: 'image' // this is a default type
	});
    
    $('.catalog-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
			  breakpoint: 1130,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 1,
			  }
			},
		  ]
	  });
	  
	  $('.clients-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,
				}
			  },
		  ]
	  });
	  

	  {
		let slides 	= $('.catalog-slider__slide');
		let nav 	= $('.catalog-nav a');

		$(nav).each(function(index, element) {

			$(element).on('click', function(event) {
				event.preventDefault();

				let dataVagon = $(element).data('vagon');

				if (!$(element).hasClass('active')) {

					$(slides).each(function(index, element) {

						$(element).removeClass('filterVagon');

						let dataVagonSlide =$(element).data('vagonslide');

						if (dataVagon == dataVagonSlide && !$(element).hasClass('slick-cloned')) {
							$(element).addClass('filterVagon');
						} 
					})

					$('.filtering').slick('slickUnfilter');

					$('.filtering').slick('slickFilter', '.filterVagon');

					nav.each(function(index, element) {
						$(element).removeClass('active');
					})
				  	$(this).addClass('active');
          if (screen.width <= '1024') {
               let id  = $('.catalog-slider'),
                top = $(id).offset().top - 100;
            $('body,html').animate({scrollTop: top}, 800);
          }
				} else {

				  	$('.filtering').slick('slickUnfilter');
				  	$(this).removeClass('active');
				}	

			
			})
		})
		
          }
		
	  
          
        
});
 