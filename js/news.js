

const newsPageInit = () => {
    /*slider on the news page*/
    newsPageSliderInit();
    /*slider on the detail news page*/
    newsDetailPageSliderInit();
}

const newsPageSliderInit = () => {
    $('.news-main__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
    $('.news-main .slider__arrow_prev').on('click', function() {
        $('.news-main__slider').slick('slickPrev');
    })
    $('.news-main .slider__arrow_next').on('click', function() {
        $('.news-main__slider').slick('slickNext');
    })
}
const newsDetailPageSliderInit = () => {
    $('.newdet-content__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
    })
    $('.newdet-content .slider__arrow_prev').on('click', function() {
        $('.newdet-content__slider').slick('slickPrev');
    })
    $('.newdet-content .slider__arrow_next').on('click', function() {
        $('.newdet-content__slider').slick('slickNext');
    })
}

$(document).ready(newsPageInit)