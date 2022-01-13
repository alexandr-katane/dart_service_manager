function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});



const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const header = document.querySelector('.header');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        header.classList.toggle('_height');
    });
}

function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            if (ibg[i].classList.contains('main__back')) {
                ibg[i].style.backgroundImage = 'linear-gradient(-53.0deg, rgba(0, 184, 212, 0.9) -11%, rgba(29, 233, 182, 0.9) 111%),url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
            if (ibg[i].classList.contains('clients-rewiew__back')) {
                ibg[i].style.backgroundImage = 'linear-gradient(-53.0deg, rgba(0, 184, 212, 0.9) -3%, rgba(29, 233, 182, 0.9) 104%),url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
}

ibg();

