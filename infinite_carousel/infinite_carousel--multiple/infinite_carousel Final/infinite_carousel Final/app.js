
(function () {
    var carouselContainer = document.querySelectorAll('.carousel-container');
    [].forEach.call(carouselContainer, function (carousel) {
        carouselize(carousel);
    });
})();


function carouselize(carousel) {

    var slide = carousel.querySelector('.carousel-slider');
    var slides = carousel.querySelectorAll('.item');
    var index = 1;
    var nextBtn = carousel.querySelector('.nextBtn');
    var prevBtn = carousel.querySelector('.prevBtn');


    //Clone
    var firstClone = slides[0].cloneNode(true);
    var lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = 'firstClone';
    lastClone.id = 'lastClone';

    slide.append(firstClone);
    slide.prepend(lastClone);


    var slideWidth = 100;
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
}




