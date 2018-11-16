$(document).on('scroll', function () {


    const windowHeight = $(window).height(); //pobieranie wysokości okna pregladarki, która nie liczy się do scrolla
    const valueScroll = $(this).scrollTop(); //pobieranie aktualnej wartości scrolla

    const $tool1 = $('.tool1'); //pobieranie opisu "html" tak jak w css
    const tool1FromTop = $tool1.offset().top; // ustalanie odległosci do górnej krawedzi dokumentu
    const tool1Height = $tool1.outerHeight(); //pobieranie wysokości elementy z paddingami i marginesami

    if (valueScroll > tool1FromTop + tool1Height - windowHeight) {
        $tool1.addClass('active');
    }
    const $tool2 = $('.tool2');
    const tool2FromTop = $tool2.offset().top;
    const tool2Height = $tool2.outerHeight();
    if (valueScroll > tool2FromTop + tool2Height - windowHeight) {
        $tool2.addClass('active');
    }

    const $tool3 = $('.tool3');
    const tool3FromTop = $tool3.offset().top;
    const tool3Height = $tool3.outerHeight();

    if (valueScroll > tool3FromTop + tool3Height - windowHeight) {
        $tool3.addClass('active');
    }
    const $tool4 = $('.tool4');
    const tool4FromTop = $tool4.offset().top;
    const tool4Height = $tool4.outerHeight();

    if (valueScroll > tool4FromTop + tool4Height - windowHeight) {
        $tool4.addClass('active');
    }
    const $tool5 = $('.tool5');
    const tool5FromTop = $tool5.offset().top;
    const tool5Height = $tool5.outerHeight();

    if (valueScroll > tool5FromTop + tool5Height - windowHeight) {
        $tool5.addClass('active');
    }
    const $tool6 = $('.tool6');
    const tool6FromTop = $tool6.offset().top;
    const tool6Height = $tool6.outerHeight();

    if (valueScroll > tool6FromTop + tool6Height - windowHeight) {
        $tool6.addClass('active');
    }
    const $tool7 = $('.tool7');
    const tool7FromTop = $tool7.offset().top;
    const tool7Height = $tool7.outerHeight();

    if (valueScroll > tool7FromTop + tool7Height - windowHeight) {
        $tool7.addClass('active');
    }
    const $tool8 = $('.tool8');
    const tool8FromTop = $tool8.offset().top;
    const tool8Height = $tool8.outerHeight();

    if (valueScroll > tool8FromTop + tool8Height - windowHeight) {
        $tool8.addClass('active');
    }
    const $tool9 = $('.tool9');
    const tool9FromTop = $tool9.offset().top;
    const tool9Height = $tool9.outerHeight();

    if (valueScroll > tool9FromTop + tool9Height - windowHeight) {
        $tool9.addClass('active');
    }
    // sekcja projekt
    const $a1 = $('.a1');
    const a1FromTop = $a1.offset().top;
    const a1Height = $a1.height();
    if (valueScroll > a1FromTop + a1Height / 2 - windowHeight) {
        $a1.addClass('active');
    }
    const $a2 = $('.a2');
    const a2FromTop = $a2.offset().top;
    const a2Height = $a2.height();
    if (valueScroll > a2FromTop + a2Height / 2 - windowHeight) {
        $a2.addClass('active');
    }
    const $a3 = $('.a3');
    const a3FromTop = $a3.offset().top;
    const a3Height = $a3.height();
    if (valueScroll > a3FromTop + a3Height / 2 - windowHeight) {
        $a3.addClass('active');
    }



    if (valueScroll < 1000) {
        $('article').removeClass('active');
    }
});