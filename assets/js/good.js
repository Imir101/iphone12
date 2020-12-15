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
        $(`${id} .modal__inner`).addClass('active');
    });
    $('.modal-close').on('click', function () {
        $(this).parents('.modal__inner, .modal').removeClass('active');
        $('body').removeClass('stopped');
        // $('.block').removeClass('active');
    });
    $('.modal__inner').on('click', function () {
        $('.modal').removeClass('active');
        $('body').removeClass('stopped');
        $(this).removeClass('active');
    });
    $('.modal__content').on('click', function(e){
        e.stopPropagation();
    });


});