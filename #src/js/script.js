@@include('functions.js');
@@include('spoilers.js');
@@include('swiper.min.js');
@@include('sliders.js');
@@include('inputmask.js');
@@include('form.js');

let video = document.querySelector('video');
let videoWrapper = document.querySelector('.video');
videoWrapper.addEventListener('click', function (e) {
    const target = e.target;
    if (target.closest('.stug-video')) {
        video.classList.add('_active');
        video.play();
    } else {
        video.classList.remove('_active');
        video.paused;
    }
});

window.onscroll = function showHeader() {
    let header = document.querySelector(".header");
    if (window.pageYOffset > 40) {
        header.classList.add("_active");
    } else {
        header.classList.remove("_active");
    }
}

