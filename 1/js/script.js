$(document).ready(function () {
    $('.btn').on('click', () => {
        $('.modal-podarok').css('left', '0');
        $('.container').css('filter', 'blur(20px)');
    });

    $('.modal-podarok .close-modal').on('click', () => {
        $('.modal-podarok').css('left', '-100%');
        $('.container').css('filter', 'blur(0)');
    });


});