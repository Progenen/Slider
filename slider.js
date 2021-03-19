

class Slider {
    constructor(obj) {

        this.dots = obj.dots;

        if (this.dots === true) {
            this.dotsClass = obj.dotsClass;
            if (this.dotsClass == undefined) {
                this.dotsClass = '.slider-dots'
            } else {
                this.dotsClass = obj.dotsClass;
            }
        }

        this.current = obj.current;

        if (this.current == true) {
            if (this.current == undefined) {
                this.current = '.slider-current'
            } else {
                this.currentClass = obj.currentClass;
            }
        }

        this.slider = obj.slider;
    }

    render() {
        const slider = document.querySelector(this.slider);
        const sliderWrapper = slider.querySelector('.slider-wrapper');
        const sliderInner = sliderWrapper.querySelector('.slider-inner')
        const slides = sliderInner.querySelectorAll('div');
        const sliderPrev = slider.querySelector('.slider-prev');
        const sliderNext = slider.querySelector('.slider-next');
        let sliderDots;
        let sliderCurrent;
        let sliderTotal;

        if (this.dots === true) {
            sliderDots = document.querySelector(this.dotsClass);
        }

        if (this.current === true) {
            sliderCurrent = document.querySelector(this.currentClass + ' .current');
            sliderTotal = document.querySelector(this.currentClass + ' .total');
        }

        let index = 1,
        width = sliderWrapper.clientWidth,
        offset,
        dots = [];
        // main
        console.log(width);

        sliderNext.addEventListener('click', ()=> {
            index++;
            sliderStart();
            
            if (this.dots === true) {
                sliderDotsCorrect();
            }
            if (this.current === true) {
                sliderCurrentFunct();
            }
        });

        sliderPrev.addEventListener('click', ()=> {
            index--;
            sliderStart();
            if (this.dots === true) {
                sliderDotsCorrect();
            }
            if (this.current === true) {
                sliderCurrentFunct();
            }
        });

        function slidesCorrect () {

            offset = (index - 1) * width;
            sliderInner.style.transform = `translateX(-${offset}px)`;
        }
        
        function sliderStart () {

            slides.forEach(element => {
                element.style.width = width+'px';
            });

            sliderWrapper.style.width = width + 'px';
        
            if (index - 1 >= slides.length) {
                index = 1;
            } if (index < 1) {
                index = slides.length;
            }
            
            slidesCorrect();

            
        }
        
        // dots
        
        if (this.dots === true) {
            sliderDotsStart();
            sliderDotsCorrect();
        }

        if (this.dots === true) {
            dots.forEach(element => {
                element.addEventListener('click', (e)=> {
                    const slideTo = e.target.getAttribute('data-slide-to');
                    index = slideTo;
        
                    slidesCorrect();
                    sliderCurrentFunct();
                });
            });
        
            sliderDotsCorrect();
        }

        function sliderDotsStart () {
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('li');
        
                dot.classList.add('slider-dot');
                dot.setAttribute('data-slide-to', i + 1);
                sliderDots.append(dot);
                dots.push(dot);
            }
        }

        function sliderDotsCorrect () {
            dots.forEach(element => {
                element.classList.remove('slider-dot-active')
            });
            dots[index-1].classList.add('slider-dot-active');
        }

        //current

        if (this.current === true) {
            sliderCurrentFunct();
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
        
        sliderStart();
    }

}