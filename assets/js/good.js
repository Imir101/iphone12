$(function() {
    // $('.slider__inner').owlCarousel({
    //     items: 1,
    // });
    $('.burger-menu').on('click', function () {
        $('.menu').toggleClass('active');
    });

    $('.modal-call').on('click', function () {
        let id = $(this).attr('href');
        $(id).addClass('active');
        $('body').addClass('stopped');
        // $('.block').addClass('active');
        $(id).find('.modal__inner').addClass('modal-close');
    });
    $('.modal-close').on('click', function () {
        $(this).parents('.modal').removeClass('active');
    })



});