const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLieft = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLieft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
        }
    }
    
    slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
    }px)`;
    slideLieft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
    }px)`;
    }