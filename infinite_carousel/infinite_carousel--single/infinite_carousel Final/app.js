const carouselContainer = document.querySelector('.carousel-container');
const slide = document.querySelector('.carousel-slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let btns = document.querySelectorAll(".btn");
console.log(nextBtn);

let slides = document.querySelectorAll('.item');
let index = 1;
// sliderLength= slide.childElementCount;
// console.log(sliderLength);


//Clone
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length-1].cloneNode(true);

firstClone.id = 'firstClone';
lastClone.id = 'lastClone';

slide.append(firstClone);
slide.prepend(lastClone);


const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;

slide.addEventListener('transitionend',()=>{
    slides = document.querySelectorAll('.item');
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if(slides[index].id === lastClone.id){
        slide.style.transition = 'none';
        index = slides.length-2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});



    
//Button Events
nextBtn.addEventListener('click',()=>{
    slides = document.querySelector('.item');
    if(index >= slides.length-1) return;
    index ++;
    slide.style.transition ='.5s';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
})

prevBtn.addEventListener('click',()=>{
    slides = document.querySelectorAll('.item');
    if(index <= 0) return;
    index --;
    slide.style.transition ='.5s';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
   
})