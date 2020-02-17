// setTimeout(()=> {
//     $('.preloader').fadeOut('slow');
// }, 300000);

// function loader() {
//     $('.load').each(function(i){
//         setTimeout( ()=> {
//             $(this).css('height', '40px');
//         }, 1000);
//     }) 
// }

// loader();



$( document ).ready(function() {
    $('.close_modal').on('click', () => {
        $('.modal').fadeOut();
        $('.modal_inner').slideUp('slow');
    })
    $('.js-modal').on('click', () => {
        $('.modal').fadeIn(); 
        $('.modal').css('display', 'flex');
        $('.modal_inner').slideDown('slow');
        $('.modal_inner').css('display', 'flex');
    })
});