
let result;

{
    let checkbox = $('.tab_1 li input');

$('.tab_1_next').on('click', function() {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            $('.calculator_curtains_inner_tab_1').fadeOut(100);
            $('.calculator_curtains_inner_tab_2').fadeIn(1000);
            $('.calculator_curtains_inner_menu').fadeOut(50);
            setTimeout($('.calculator_curtains_inner_menu').fadeIn(1000));
            $('.calculator_curtains_inner_menu h3').text('Шаг 2 из 4');
            let choice = checkbox[i].value;
            $('.first_choice').text(choice);
        } else {
            
        }
    }
});
}

{
    $('.tab_2_next').on('click', function() {
        let arr = [];
        for (let i = 1; i < 16; i++) {
           if ($(`.tab_2_1 li input#curtains_2_${i}`)[0].checked == true) {
                arr.push('1')
            }
        }
        for (let i = 16; i < 24; i++) {
            if ($(`.tab_2_2 li input#curtains_2_${i}`)[0].checked == true) {
                arr.push('1') 
            }
        }
        for (let i = 24; i < 26; i++) {
            if ($(`.tab_2_3 li input#curtains_2_${i}`)[0].checked == true) {
                arr.push('1')
            }
        }
        if (arr.length == 3) { {
                $('.calculator_curtains_inner_tab_2').fadeOut(100);
                $('.calculator_curtains_inner_tab_2_3').fadeIn(1000);
                $('.calculator_curtains_inner_menu').fadeOut(50);
                setTimeout($('.calculator_curtains_inner_menu').fadeIn(1000));
                $('.calculator_curtains_inner_menu h3').text('Шаг 3 из 4');
            }   
        }
    }); 
}