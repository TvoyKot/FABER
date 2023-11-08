// // Берём все кнопки "вперёд"
// let buttons = document.querySelector("slick-next");
// console.log(buttons)

// // циклом проходимся по каждой кнопке
// buttons.forEach(function (button) {
//   // Объявляем событие нажатия на кнопку вперёд
//   button.addEventListener("click", function(evt) {
//     // находим "блок" слайдера
//     let block = evt.target.closest('.slider-container'),
//         // для ранее найденного блока берём все слайды
//         slides = block.querySelectorAll('.recomendation-slider__item'),
//         // находим индекс активного слайда
//         currentIndex = [...slides].indexOf(block.querySelector('.slide.block'));
//         // находим индекс следующего слайда
//         // если текущий слайд последний - начинаем "с нуля"
//         nextIndex = currentIndex < (slides.length-1) ? currentIndex+1 : 0;
//     // удаляем класс у текущего слайда
//     slides[currentIndex].classList.remove("block");
//     // добавляем класс следующему слайду
//     slides[nextIndex].classList.add("block");
//   })
// });


$(function () {

    $('.recomendation-slider').slick(
        {
            nextArrow: '<button class="recomendation-slider__btn slick-arrow slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            prevArrow: '<button class="recomendation-slider__btn slick-arrow slick-prev"><img src="images/svg/icon-arrow.svg" alt="icon"></button>'
        });

    $('.review-slider').slick(
        {
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<button class="review-slider__btn slick-arrow slick-next"><img src="images/svg/icon-arrow.svg" alt="icon"></button>',
            prevArrow: false
        });


    let slider = $('.slider-container');
    console.log(slider)

    $('.counter-slider__totall').text(slider.slick("getSlick").slideCount);

    slider.on("afterChange", function (event, slick, currentSlide) {
        $('.counter-slider__current').text(currentSlide + 1)
    }
    );

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
                dots: false
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



    const mapElements = document.querySelectorAll('.map-element');
    const mapText = document.querySelectorAll('.project-technology__item');

    mapElements.forEach(mapElement => {
        mapElement.addEventListener('mouseover', function() {
        mapText.style.display = 'none';
        })
    })

    
});


