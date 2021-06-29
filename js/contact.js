const contactPageInit = () => {
    /*slider on the contact page*/
    contactPageSliderInit();
    /*map on the contact page*/
    contactPageMapInit();
}

const contactPageSliderInit = () => {
    $('.contact-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
    $('.contact-slider').on('afterChange', function(event, slick, currentSlide) {
        $('.contact-slider-container .slider__pagination-item').each(function(index) {
            if (index === currentSlide) {
                $(this).addClass('slider__pagination-item_active');
            } else {
                $(this).removeClass('slider__pagination-item_active');
            }
        })
    });
    $('.contact-slider-container .slider__arrow_prev').on('click', function() {
        $('.contact-slider').slick('slickPrev');
    })
    $('.contact-slider-container .slider__arrow_next').on('click', function() {
        $('.contact-slider').slick('slickNext');
    })
}

const contactPageMapInit = () => {
    const init = () => {
        const myMap = new ymaps.Map("contact-map", {
            center: [45.037430, 38.973154],
            zoom: 14
        });
        const geolocationControl = new ymaps.control.GeolocationControl({
            options: {noPlacemark: true}
        });
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('typeSelector');
        addingGeoObjects(myMap);
    }
    const addingGeoObjects = (map) => {
        const coorArray = [[45.037430, 38.973154], [45.038430, 38.978154]]
        coorArray.forEach(item => {
            const placemark = new ymaps.Placemark(item, {}, {
                iconLayout: 'default#image',
                iconImageHref: '../images/marker-map.svg',
                iconImageSize: [33, 48],
                iconImageOffset: [-3, -42]
            });
            map.geoObjects.add(placemark);
        })
    }
    ymaps.ready(init);
}

$(document).ready(contactPageInit)