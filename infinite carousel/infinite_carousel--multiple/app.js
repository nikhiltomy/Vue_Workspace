
(function () {
    let carouselContainer = document.querySelectorAll('.carousel-container');
    console.log(carouselContainer);
    [].forEach.call(carouselContainer, function (carousel) {
        console.log(carousel);
        carouselize(carousel);
    });
})();

// (function () {
//     var carouselContainer = document.querySelectorAll('.carousel-container');
//     carouselContainer.forEach(function(carousel) {
//         carouselize(carousel);
//     });
// })();

function carouselize(carousel) {

    console.log(carousel);
    let slide = carousel.querySelector('.carousel-slider');
    let slides = carousel.querySelectorAll('.item');
    let index = 1;
    let nextBtn = carousel.querySelector('.nextBtn');
    let prevBtn = carousel.querySelector('.prevBtn');


    //Clone
    let firstClone = slides[0].cloneNode(true);
    let lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = 'firstClone';
    lastClone.id = 'lastClone';

    slide.append(firstClone);
    slide.prepend(lastClone);


    let slideWidth = 100;
    slide.style.transform = `translateX(${-slideWidth * index}%)`;
    console.log(slide.style.transform = `translateX(${-slideWidth * index}%)`)

    slide.addEventListener('transitionend', () => {
        slides = carousel.querySelectorAll('.item');
        if (slides[index].id === firstClone.id) {
            slide.style.transition = 'none';
            index = 1;
            slide.style.transform = `translateX(${-slideWidth * index}%)`;
        }
        if (slides[index].id === lastClone.id) {
            slide.style.transition = 'none';
            index = slides.length - 2;
            slide.style.transform = `translateX(${-slideWidth * index}%)`;
        }
    });

    //Button Events
    nextBtn.addEventListener('click', () => {
        slides = carousel.querySelectorAll('.item');
        if (index >= slides.length - 1) return;
        index++;
        slide.style.transition = '.5s';
        slide.style.transform = `translateX(${-slideWidth * index}%)`;
    });

    prevBtn.addEventListener('click', () => {
        slides = carousel.querySelectorAll('.item');
        if (index <= 0) return;
        index--;
        slide.style.transition = '.5s';
        slide.style.transform = `translateX(${-slideWidth * index}%)`;

    });
};






