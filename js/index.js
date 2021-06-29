class State {
    setInput(name, value) {
        this[name] = value;
    }
    getInput(name) {
        return this[name];
    }
};

const pageInit = () => {
    window.formState = new State();
    eventsInit();
    /*chart lines*/
    chartInit();
    /*service*/
    serviceMoreInit();
    serviceButtonsInit();
    /*main form*/
    mainFormInit();
    /*before after */
    beforeAfterLibInit();
    /*sale slider*/
    saleSliderInit();
    /*medic slider*/
    medicSliderInit();
    /*question on the main page*/
    questionMainPageInit();
    /*news slider on the main page*/
    newsMainPageSliderInit();
    /*title slider on the main page*/
    titleSliderInit();
    /*dropdowns nav*/
    dropdownInit();
    /*checkbox init*/
    checkboxInit();
    /*modal init */
    modalInit();
}

const eventsInit = () => {
    window.addEventListener('scroll', headerClassToggler);
    window.addEventListener('resize', () => {
        chartInit();
        serviceMoreInit();
    });
}

const headerClassToggler = () => {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.classList.add('header_scroll');
    } else {
        header.classList.remove('header_scroll');
    }
}

const mainFormInit = () => {
    const inputs = document.querySelectorAll('.call__form-input');
    inputs.forEach(input => {
        getMask(input);
    }) 
}

const serviceMoreInit = () => {
    let cards = document.querySelectorAll('.card');
    if ($(window).width() <= 450) {
        cards.forEach((card, index) => {
            if (index !== 0) {
                let btn = card.querySelector('.card-btn');
                let text = card.querySelector('.card-text');
                if (text) {
                    let textContent = text.textContent.slice(0,100) + '...';
                    text.textContent = textContent;
                }
            }
        });
    } else {
        cards.forEach((card, index) => {
            if (index !== 0) {
                let text = card.querySelector('.card-text');
                if (text) {
                    text.textContent = text.dataset.text;
                }
            }
        });
    }
}

const serviceButtonsInit = () => {
    let btns = document.querySelectorAll('.card-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if ($(window).width() <= 450) {
                let parent = btn.parentNode;
                let text = parent.querySelector('.card-text');
                text.textContent = text.dataset.text;
                btn.style.display = 'none';
            } 
        })
    })
}

const chartInit = () => {
    let cards = $('.rec__card_bound');
    let wrapper = $('.rec__line-wrapper');
    cards.each(function () {
        let id = $(this).data('id');
        let type = $(this).data('type');
        let dot = $('.rec__dot' + id);
        let cardCoors = $(this).position();
        let dotCoors = dot.position();
        let hr = $('.rec__hr' + id);
        let coor = {
            x1: dotCoors.left + 12 + dot.width() / 2 ,
            y1: dotCoors.top - 6 + dot.height() / 2 ,
            x2: cardCoors.left,
            y2: cardCoors.top + $(this).height() + 26
        }
        if (type === 'bottom') {
            coor = {
                x1: dotCoors.left + 3,
                y1: dotCoors.top + dot.height() - 6,
                x2: cardCoors.left + $(this).width() + 26,
                y2: cardCoors.top
            }
        } else if (type === 'right') {
            coor = {
                x1: dotCoors.left + 12 + dot.width() / 2 ,
                y1: dotCoors.top + dot.height() / 2 ,
                x2: cardCoors.left,
                y2: cardCoors.top,
            }
        }
        hr.attr('x1', coor.x1)
            .attr('y1', coor.y1)
            .attr('x2', coor.x2)
            .attr('y2', coor.y2);
    })
}

const beforeAfterLibInit = () => {
    $('.result__card').each(function() {
        $(this).twentytwenty({
            no_overlay: true
        });
    })
}

const saleSliderInit = () => {
    $('.sale__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
    });
    $('.sale__slider').on('afterChange', function(event, slick, currentSlide) {
        $('.sale .slider__pagination-item').each(function(index) {
            if (index === currentSlide) {
                $(this).addClass('slider__pagination-item_active');
            } else {
                $(this).removeClass('slider__pagination-item_active');
            }
        })
    });
    $('.sale .slider__arrow_prev').on('click', function() {
        $('.sale__slider').slick('slickPrev');
    })
    $('.sale .slider__arrow_next').on('click', function() {
        $('.sale__slider').slick('slickNext');
    })
}

const medicSliderInit = () => {
    $('.medic__content').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 450,
              settings: {
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    })
    $('.medic__manager-active').text($('.medic__content').slick('slickGetOption', 'slidesToShow'));
    $('.medic__content').on('afterChange', function(event, slick, currentSlide) {
        let countSlides = $('.medic__content').slick('slickGetOption', 'slidesToShow');
        $('.medic__manager-active').text(currentSlide + countSlides);
    });
    $('.medic-arrow_prev').on('click', function() {
        $('.medic__content').slick('slickPrev');
    })
    $('.medic-arrow_next').on('click', function() {
        $('.medic__content').slick('slickNext');
    })
}

const questionMainPageInit = () => {
    $('.drop__slide').each(function () {
        let text = $(this).children('.drop__slide-content');
        $(this).children('.drop__slide-header').click(function() {
            $(this).toggleClass('mb-small');
            $(this).children('.drop__slide-title').toggleClass('text-light-blue');
            $(this).children('.drop__slide-handle').toggleClass('drop__slide-handle_active');
            text.slideToggle(200, 'linear');
        })
    })
}

const newsMainPageSliderInit = () => {
    $('.news__list').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1441,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]
    })
    $('.news-list__prev').on('click', function() {
        $('.news__list').slick('slickPrev');
    })
    $('.news-list__next').on('click', function() {
        $('.news__list').slick('slickNext');
    })
}

const titleSliderInit = () => {
    $('.title-block__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
    $('.title-block__slider').on('afterChange', function(event, slick, currentSlide) {
        $('.title-block .slider__pagination-item').each(function(index) {
            if (index === currentSlide) {
                $(this).addClass('slider__pagination-item_active');
            } else {
                $(this).removeClass('slider__pagination-item_active');
            }
        })
    });
    $('.title-block .slider__arrow_prev').on('click', function() {
        $('.title-block__slider').slick('slickPrev');
    })
    $('.title-block .slider__arrow_next').on('click', function() {
        $('.title-block__slider').slick('slickNext');
    })
}

const dropdownInit = () => {
    $('.nav__link_have-child').each(function() {
        $(this).click(function() {
            $(this).next().slideToggle(200, 'linear');
            if ($(window).width() <= 450 && $(this).hasClass('nav__link-btn-img')) {
                $('.header').toggleClass('header_mobile-active');
            }
        })
    })
}

const checkboxInit = () => {
    $('.checkbox').each(function() {
        $(this).click(function() {
            $(this).toggleClass('checkbox_checked');          
        })
    })
}

const modalInit = () => {
    $('.modal-init_btn').click(function() {
        let id = '#' + $(this).data('id');
        $('body').toggleClass('body_no-scroll');
        $(id).toggleClass('modal_hidden');
    })
    $('.modal__exit').click(function() {
        $('.modal').addClass('modal_hidden');
        $('body').removeClass('body_no-scroll');
    })
}

const pricePricePageInit = () => {
    $('.drop__slide').each(function () {
        let text = $(this).children('.drop__slide-content');
        $(this).children('.drop__slide-header').click(function() {
            $(this).toggleClass('mb-small');
            $(this).children('.drop__slide-title').toggleClass('text-light-blue');
            $(this).children('.drop__slide-handle').toggleClass('drop__slide-handle_active');
            text.slideToggle(200, 'linear');
        })
    })
}


/*utils*/ 
const getMask = (input) => {
    let option = {};
    if (input.name === 'user_name') {
        option.mask = /^[a-zA-Zа-яА-Я ]{0,40}$/
        option.maxLength = 3;
        const mask = IMask(input, option);
        window.formState.setInput(input.name, mask)
    } else if (input.name === 'user_number') {
        option.mask = '+{7}(000)000-00-00';
        const mask = IMask(input, option);
        window.formState.setInput(input.name, mask)
    } 
}

$(document).ready(pageInit)