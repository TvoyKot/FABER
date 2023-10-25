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

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parents().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.projects-filter__select').styler();

    $('.projects__form-input--file').styler();

    
});


