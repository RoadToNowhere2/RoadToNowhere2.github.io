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

            let kviz_1 = $('input[name="kviz_2_radio"]:checked').val();
            $('#kviz_value_1').val(kviz_1)
            
            let kviz_2 = $('input[type="range"]').val();
            $('#kviz_value_2').val(kviz_2)

            let kviz_3 = $('input[name="kviz_4_radio"]:checked').val();
            $('#kviz_value_3').val(kviz_3)

            let kviz_4 = $('input[name="kviz_5_radio"]:checked');
            let value_arr = [];
            
            kviz_4.each(function(i, input) {
                value_arr.push($(input).val());
              });
            console.log(value_arr)
            $('#kviz_value_4').val(value_arr)

            let kviz_5 = $('input[name="kviz_6_radio"]:checked').val();
            $('#kviz_value_5').val(kviz_5)
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
        $('.close_kviz').on('click', function() {
            $('.modal_kviz').fadeOut(500);
        });

        $('#range_slider').on('input change', function() {
            let range = $(this).val();
            $('.input_value span').text(range);
        });
    }

    {
        $('#kviz_submit_btn').on('click', function() {
            let name = $('#kviz_name').val();
            let tel = $('#kviz_tel').val();
            let kviz_value_1 = $('#kviz_value_1').val();
            let kviz_value_2 = $('#kviz_value_2').val();
            let kviz_value_3 = $('#kviz_value_3').val();
            let kviz_value_4 = $('#kviz_value_4').val();
            let kviz_value_5 = $('#kviz_value_5').val();
      
            if  (name == "") {
              $('#kviz_name').css("border-bottom", "1px solid red");
              return false;
            } else if  (tel == "") {
              $('#kviz_name').css("border-bottom", "1px solid #ffcd19");
              $('#kviz_tel').css("border-bottom", "1px solid red");
              return false;
            } 
      
            $.ajax({
              url: '../kvizmail.php',
              type: 'POST',
              cache: false,
              data: { 'name':name, 
                      'tel':tel,
                      'kviz_value_1':kviz_value_1,
                      'kviz_value_2':kviz_value_2,
                      'kviz_value_3':kviz_value_3,
                      'kviz_value_4':kviz_value_4,
                      'kviz_value_5':kviz_value_5 },
              dataType: 'html',
              beforeSend: function() {
                  $('#kviz_submit_btn').prop('disabled', true);
              },
              success: function(data) {
                  if (data != true) {
                      setTimeout(function(){
                      alert('Ошибка!!!');
                      }, 100);
                  } else {
                      $('#kviz_form').trigger('reset');
                      $('.modal_kviz').fadeOut();
                  }
                  $('#kviz_submit_btn').prop('disabled', false);
              }
          });
        })
    }

    {
        $('#modal_submit_btn_1').on('click', function() {
      
            let name = $('#name_form_1').val();
            let tel = $('#tel_form_1').val();
      
            if  (name == "") {
              $('#name_form_1').css("border", "1px solid red");
              return false;
            } else if  (tel == "") {
              $('#name_form_1').css("border", "1px solid #fff");
              $('#tel_form_1').css("border", "1px solid red");
              return false;
            } 
      
            $.ajax({
              url: '../mail.php',
              type: 'POST',
              cache: false,
              data: { 'name_form':name, 
                      'tel_form':tel},
              dataType: 'html',
              beforeSend: function() {
                  $('#modal_submit_btn_1').prop('disabled', true);
              },
              success: function(data) {
                  if (data != true) {
                      setTimeout(function(){
                      alert('Ошибка!!!');
                      }, 100);
                  } else {
                      $('.modal_form_inner').trigger('reset');
                      $('.modal_form').fadeOut();
                      $('body', 'html').css('overflow', 'visible');
                  }
                  $('#modal_submit_btn_1').prop('disabled', false);
              }
          });
        })

    }

    {
        $('#modal_submit_btn_2').on('click', function() {
      
            let name = $('#name_form_2').val();
            let tel = $('#tel_form_2').val();
      
            if  (name == "") {
              $('#name_form_2').css("border", "1px solid red");
              return false;
            } else if  (tel == "") {
              $('#name_form_2').css("border", "1px solid #fff");
              $('#tel_form_2').css("border", "1px solid red");
              return false;
            } 
      
            $.ajax({
              url: '../mail.php',
              type: 'POST',
              cache: false,
              data: { 'name_form':name, 
                      'tel_form':tel},
              dataType: 'html',
              beforeSend: function() {
                  $('#modal_submit_btn_2').prop('disabled', true);
              },
              success: function(data) {
                  if (data != true) {
                      setTimeout(function(){
                      alert('Ошибка!!!');
                      }, 100);
                  } else {
                      $('#form_footer').trigger('reset');
                  }
                  $('#modal_submit_btn_2').prop('disabled', false);
              }
          });
        })

    }

    {
        $('.js-work-1').on('click', function() {
            if($('.js-work-1').hasClass('accordion_active')) {
                $('.accordion_active .modal_work_1_hidden').slideUp();
                $('.js-work-1').removeClass('accordion_active');
            }
            
            if(!$('.js-work-1').hasClass('accordion_active')) {
                $(this).addClass('accordion_active');
                $('.accordion_active .modal_work_1_hidden').slideDown();
            }
        });
        
        $('.js-modal-work-1').on('click', function() {
            $('.modal_work_1').fadeIn();
        });
        $('.close_modal_work_1').on('click', function() {
            $('.modal_work_1').fadeOut();
        });
    }

    {
        $('.js-work-2').on('click', function() {
            if($('.js-work-2').hasClass('accordion_active')) {
                $('.accordion_active .modal_work_2_hidden').slideUp();
                $('.js-work-2').removeClass('accordion_active');
            }
            
            if(!$('.js-work-2').hasClass('accordion_active')) {
                $(this).addClass('accordion_active');
                $('.accordion_active .modal_work_2_hidden').slideDown();
            }
        });
        
        $('.js-modal-work-2').on('click', function() {
            $('.modal_work_2').fadeIn();
        });
        $('.close_modal_work_2').on('click', function() {
            $('.modal_work_2').fadeOut();
        });
    }

    {
        $('.js-work-3').on('click', function() {
            if($('.js-work-3').hasClass('accordion_active')) {
                $('.accordion_active .modal_work_3_hidden').slideUp();
                $('.js-work-3').removeClass('accordion_active');
            }
            
            if(!$('.js-work-3').hasClass('accordion_active')) {
                $(this).addClass('accordion_active');
                $('.accordion_active .modal_work_3_hidden').slideDown();
            }
        });
        
        $('.js-modal-work-3').on('click', function() {
            $('.modal_work_3').fadeIn();
        });
        $('.close_modal_work_3').on('click', function() {
            $('.modal_work_3').fadeOut();
        });
    }
});