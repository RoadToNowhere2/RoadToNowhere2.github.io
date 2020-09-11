$(document).ready(function() {

    $('.js-open-btn').on('click', () => {
        $('.content').css('opacity', '0');
        $('.cards').css('opacity', '0');
        $('.content').css('visibility', 'hidden');
        $('.cards').css('visibility', 'hidden');

        $('.kviz_modal').fadeIn();
        $('.background').attr('src', 'img/kviz_open_bg.jpg');
    });

    let count = 4;

    $('.js-btn-next').on('click', () => {
        if (count == 4) {
            $('.left_menu h2 span').text('3');
            $('.right_menu h3 span').text('2');
            $('.green_line').css('width', 'calc(100% / 4)');
            $('.step_1').fadeOut(500)
            setTimeout(()=> {
                $('.step_2').fadeIn(500);
            }, 600);
        } else if (count == 3) {
            $('.left_menu h2 span').text('2');
            $('.right_menu h3 span').text('3');
            $('.green_line').css('width', 'calc(100% / 2)');
            $('.step_2').fadeOut(500)
            setTimeout(()=> {
                $('.step_3').fadeIn(500);
            }, 600);
        } else if (count == 2) {
            $('.left_menu h2 span').text('1');
            $('.right_menu h3 span').text('4');
            $('.green_line').css('width', 'calc(100% / 1.25)');
            $('.step_3').fadeOut(500)
            setTimeout(()=> {
                $('.step_4').fadeIn(500);
            }, 600);
            $('.btn_next img').attr('src', 'img/zakonchit_kviz.png');
        } else if (count == 1) {
            $('.left_menu').fadeOut(500)
            $('.right_menu').fadeOut(500)
            setTimeout(()=> {
                $('.left_menu_last').fadeIn(500);
                $('.left_menu_last').css('display', 'flex');
                $('.right_menu_last').fadeIn(500);
                $('.right_menu_last').css('display', 'flex');
            }, 600);
            
            let kviz_1 = $('input[name="kviz_1"]:checked').val();
            let kviz_2 = $('input[name="kviz_2"]:checked').val();
            let kviz_3 = $('input[name="kviz_3"]:checked').val();
            let kviz_4 = $('input[name="kviz_4"]:checked').val();

            $('input[name="kviz_submit_1"]').val(kviz_1);
            $('input[name="kviz_submit_2"]').val(kviz_2);
            $('input[name="kviz_submit_3"]').val(kviz_3);
            $('input[name="kviz_submit_4"]').val(kviz_4);

            $('.kviz_otvet_4').text(`| ${kviz_1} занятий`)
            $('.kviz_otvet_3').text(`| ${kviz_4}`)
            $('.kviz_otvet_2').text(`| ${kviz_3}`)
            $('.kviz_otvet_1').text(`| ${kviz_2}`)
        }


        count--
    });


    $(".kviz_submit_5").mask("+7(999)-999-99-99");

    $('#submit_kviz').on('click', function() {
        
        let tel = $('.kviz_submit_5').val();
        let kviz_value_1 = $('#kviz_submit_1').val();
        let kviz_value_2 = $('#kviz_submit_2').val();
        let kviz_value_3 = $('#kviz_submit_3').val();
        let kviz_value_4 = $('#kviz_submit_4').val();

        console.log(kviz_value_1)
        console.log(kviz_value_2)
        console.log(kviz_value_3)
        console.log(kviz_value_4)
  
        if  (tel == "") {
          $('.right_menu_last .kviz_submit_5').css("box-shadow", "inset 5px 8px 84px rgba(196, 20, 20, 0.16)");
          return false;
        } 

        $.ajax({
            url: 'mail.php',
            type: 'POST',
            cache: false,
            data: { 'tel':tel,
                    'kviz_value_1':kviz_value_1,
                    'kviz_value_2':kviz_value_2,
                    'kviz_value_3':kviz_value_3,
                    'kviz_value_4':kviz_value_4
                 },
            dataType: 'html',
            beforeSend: function() {
                $('#submit_kviz').prop('disabled', true);
            },
            success: function() {
                setTimeout(function(){
                alert('Спасибо, ваше сообщение успешно отправленно!');
                }, 100);
                $('#submit_kviz').prop('disabled', false);
            }
        });
  
        
    });


});
