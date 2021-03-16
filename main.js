const sliderWrapper = document.querySelector('.slider__wrapper'),
      sliderInner = document.querySelector('.slider__inner'),
      slides = document.querySelectorAll('.slider__slide'),
      sliderNext = document.querySelector('.slider__next'),
      sliderPrev = document.querySelector('.slider__prev'),
      sliderDots = document.querySelector('.slider__dots');

let index = 0,
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
        sliderDots.append(dot);
        dots.push(dot);

        dot.addEventListener('click', ()=> {
            dots.forEach(element => {
                element.classList.remove('dot-active')
            });
            dot.classList.add('dot-active');
            index = i;
        });
    }
    console.log(index);
}

function sliderStart () {

    if (index >= slides.length) {
        index = 0;
    } if (index < 0) {
        index = slides.length - 1;
    }
    
    offset = index * +width.replace(/\D/g, '');
    sliderInner.style.transform = `translateX(-${offset}px)`;

}

sliderDotsStart();
console.log(index);
sliderStart();
