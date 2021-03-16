const sliderWrapper = document.querySelector('.slider__wrapper'),
      sliderInner = document.querySelector('.slider__inner'),
      slides = document.querySelectorAll('.slider__slide'),
      sliderNext = document.querySelector('.slider__next'),
      sliderPrev = document.querySelector('.slider__prev'),
      sliderDots = document.querySelector('.slider__dots'),
      sliderCurrent = document.querySelector('.slider__current'),
      sliderTotal  = document.querySelector('.slider__total');


let index = 1,
    width = window.getComputedStyle(sliderWrapper).width,
    offset,
    dots = [],
    indexF = index + 1;



sliderNext.addEventListener('click', ()=> {
    index++;
    sliderStart();
});

sliderPrev.addEventListener('click', ()=> {
    index--;
    sliderStart();
});

function sliderDotsStart () {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');

        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        sliderDots.append(dot);
        dots.push(dot);
    }
}

function sliderCurrentFunct () {
    if (index < 10) {
        sliderCurrent.textContent = '0' + index;
        sliderTotal.textContent = '0' + slides.length;
    } else {
        sliderCurrent.textContent = index;
        sliderTotal.textContent = slides.length;
    }
}

function sliderDotsCorrect () {
    dots.forEach(element => {
        element.classList.remove('dot-active')
    });
    dots[index - 1].classList.add('dot-active');
}

function slidesCorrect () {
    offset = (index - 1) * +width.replace(/\D/g, '');
    sliderInner.style.transform = `translateX(-${offset}px)`;
}

function sliderStart () {

    if (index - 1 >= slides.length) {
        index = 1;
    } if (index < 0) {
        index = slides.length - 1;
    }
    
    slidesCorrect();

    dots.forEach(element => {
        element.addEventListener('click', (e)=> {
            const slideTo = e.target.getAttribute('data-slide-to');
            index = slideTo;

            slidesCorrect();
            sliderDotsCorrect();
            sliderCurrentFunct();
        });
    });

    sliderDotsCorrect();
    sliderCurrentFunct();
}

sliderDotsStart();
sliderStart();
