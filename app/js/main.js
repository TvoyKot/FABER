


$(function () {

    $('.recomendation-slider--one').slick(
        {
            nextArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--next slick-arrow slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            prevArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--prev slick-arrow slick-prev"><img src="images/svg/icon-arrow.svg" alt="icon"></button>'
        });
    $('.recomendation-slider--second').slick(
        {
            nextArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--next slick-arrow slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            prevArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--prev slick-arrow slick-prev"><img src="images/svg/icon-arrow.svg" alt="icon"></button>'
        });

    $('.recomendation-slider--third').slick(
        {
            nextArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--next slick-arrow slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            prevArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--prev slick-arrow slick-prev"><img src="images/svg/icon-arrow.svg" alt="icon"></button>'
        });


    $('.recomendation-slider--fourth').slick(
        {
            nextArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--next slick-arrow slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            prevArrow: '<button class="recomendation-slider__btn recomendation-slider__btn--prev slick-arrow slick-prev"><img src="images/svg/icon-arrow.svg" alt="icon"></button>'
        });



    $('.review-slider').slick(
        {
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<button class="review-slider__btn slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            prevArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
    );

    let reviewSlider = $('.review-slider');
    $('.review-slider__counter-totall').text(reviewSlider.slick("getSlick").slideCount);

    reviewSlider.on("afterChange", function (event, slick, currentSlide) {
        $('.review-slider__count-current').text(currentSlide + 1)
    });


    let sliderOne = $('.recomendation-slider--one');
    $('.counter-slider__totall--one').text(sliderOne.slick("getSlick").slideCount);

    sliderOne.on("afterChange", function (event, slick, currentSlide) {
        $('.counter-slider__current--one').text(currentSlide + 1)
    });


    let sliderSecond = $('.recomendation-slider--second');
    $('.counter-slider__totall--second').text(sliderSecond.slick("getSlick").slideCount);

    sliderSecond.on("afterChange", function (event, slick, currentSlide) {
        $('.counter-slider__current--second').text(currentSlide + 1)
    });

    let sliderThird = $('.recomendation-slider--third');
    $('.counter-slider__totall--third').text(sliderThird.slick("getSlick").slideCount);

    sliderThird.on("afterChange", function (event, slick, currentSlide) {
        $('.counter-slider__current--third').text(currentSlide + 1)
    });

    let sliderFourth = $('.recomendation-slider--fourth');
    $('.counter-slider__totall--fourth').text(sliderFourth.slick("getSlick").slideCount);

    sliderFourth.on("afterChange", function (event, slick, currentSlide) {
        $('.counter-slider__current--fourth').text(currentSlide + 1)
    });



    $('.project-content__slider-block').slick(
        {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="project-slider__btn slick-arrow slick-prev"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            nextArrow: '<button class="project-slider__btn slick-arrow slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            asNavFor: '.project-content__slider-nav',
            dots: false
        });

    $('.project-content__slider-nav').slick(
        {
            slidesToShow: 10,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 8
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parents().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.projects-filter__select').styler();

    $('.projects__form-input--file').styler();

    $('.project-calc__radio-btn').styler();

    $('.project-calc__select').styler();

    $('.menu-nav__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.filter-btn').on('click', function () {
        $('.product__tabs').toggleClass('product__tabs--active');
        $('.projects-filter').toggleClass('projects-filter--active');
        $('.projects-filter__select--label').toggleClass('projects-filter__select--active');
    });
});


