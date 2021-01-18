// Импортируем другие js-файлы
//= src/my.js

var slider = $('.slider').slick({
    arrows: false,
    dots: true,
    vertical: true,
    slide: '.slider__body',
    responsive: [{
        breakpoint: 1200,
        settings: {
            vertical: false
        }
    }]

});

var sliderTriple = $('.our-team__slider').slick({
    slide: '.our-team__card',
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    // variableWidth: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

var sliderTriple = $('.blog__slider').slick({
    slide: '.blog__card',
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    // variableWidth: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

var sliderTriple = $('.reviews__slider').slick({
    slide: '.reviews__card',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    // variableWidth: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

var sliderTriple = $('.clients__slider').slick({
    slide: '.clients__card',
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    prevArrow: ('.clients__arrow--right'),
    nextArrow: ('.clients__arrow--left'),
    // variableWidth: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

(function ($) {

    var header = $(".header__navigation"),
        scrollTop;

    window.addEventListener('scroll', fixHeader);

    function fixHeader() {
        scrollTop = window.pageYOffset;

        if (scrollTop >= 200) {
            header.addClass('stick');
        } else {
            header.removeClass('stick');
        }
    }

    fixHeader();
})(jQuery);

$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$('.nav').on('click', 'a', function () {
    event.preventDefault();
    var topOfset;
    if (window.outerWidth < 992) {
        $("#navToggle").click();
        topOfset = 77;
    } else {
        topOfset = 89;
        // $("#navToggle").click();
    }
    var ID = $(this).attr('href');
    // получаем смещение елемента с id якоря
    var offset = $(ID).offset().top - topOfset;
    $('html,body').stop().animate({
        scrollTop: offset
    }, 1500, 'swing', function () {
        // alert("Finished animating");
    });
});