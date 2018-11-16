$("nav a").on('click', function () {

    const scrollToSection = "#" + $(this).attr('class');

    $('body,html').animate({
        scrollTop: $(scrollToSection).offset().top
    }, 1000)
});

$(".scrollup").on('click', function () {


    $('body,html').animate({
        scrollTop: $("body").offset().top
    }, 1000)
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() > 300) $(".scrollup").fadeIn();
    else $(".scrollup").fadeOut();

});