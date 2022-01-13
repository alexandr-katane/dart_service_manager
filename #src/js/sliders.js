
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }

        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }


let mainSlider = new Swiper(".clients-slider", {
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 70,
    navigation: {
        nextEl: '.clients-slider__arrow_next',
        prevEl: '.clients-slider__arrow_prev',
    },
    breakpoints: {

        768: {
            slidesPerView: 2,

        },
        320: {
            slidesPerView: 1,
        },
    },
});




let secondSlider = new Swiper(".slider-team__body", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider-team__arrow_next',
        prevEl: '.slider-team__arrow_prev',
    },
});


let arrowNext = document.querySelector(".slider-team__arrow_next");
let arrowPrev = document.querySelector(".slider-team__arrow_prev");
arrowNext.style.backgroundImage = 'url(' + document.querySelector(".slider-team .swiper-slide-next").querySelector('img').src + ')';;

secondSlider.on('slideChangeTransitionStart', function () {
    if (document.querySelector(".slider-team .swiper-slide-prev")) {
        arrowPrev.classList.add('_active');
        arrowPrev.style.backgroundImage = 'url(' + document.querySelector(".slider-team .swiper-slide-prev").querySelector('img').src + ')';
    } else {
        arrowPrev.classList.remove('_active');
    }
    if (document.querySelector(".slider-team .swiper-slide-next")) {
        arrowNext.classList.add('_active');
        arrowNext.style.backgroundImage = 'url(' + document.querySelector(".slider-team .swiper-slide-next").querySelector('img').src + ')';;
    } else {
        arrowNext.classList.remove('_active');
    }

});