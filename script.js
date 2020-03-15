(function toggleActiveClass() {
    const menu = document.getElementById('menu');  
        menu.addEventListener('click', (event) => {
            menu.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
            event.target.classList.add('active');
        });
})();

(function displayPhoneToggle() {
    
    const phones = document.querySelectorAll('.slider__slide-img-container');
    phones.forEach((phone) => {
        phone.addEventListener('click', (event) => {
            
            const elStyleVisibility = getComputedStyle(event.target.childNodes[1]).visibility;
            let changeElVisible = event.target.childNodes[1];
            changeElVisible.style.visibility = (elStyleVisibility === 'visible') ? 'hidden' : 'visible';
     
        });
    });
    
})();

(function slider() {

    const slideTime = 0.5;
    
    const sliderContainer = document.querySelector('.slider__slide-container');
    const slides = [...document.querySelectorAll('.slide')];

    const prevBtn = document.querySelector('.slider__left-arrow');
    const nextBtn = document.querySelector('.slider__right-arrow');
    const sliderBlock = document.querySelector('.slider');
    const mainColor = 'rgb(240, 108, 100)';

    let clickFlag = true;
    let activeItem = null;
    let newActiveItem = null;

    function initSlider() {
        slides.forEach((slide) => 
            slide.setAttribute(
            
                `style`,
                `transition: ${slideTime}s ease-in-out;
                     animation-duration: ${slideTime}s`,
            ),
        );
    };

        function changeSlide(next) {
            if (clickFlag) {
                clickFlag = false;
                activeItem = document.querySelector('.slide-active');
                const activeItemIdx = slides.indexOf(activeItem);
                let currentBgColorSlider = getComputedStyle(sliderBlock).backgroundColor;
                let currentActiveBgColor = getComputedStyle(activeItem).backgroundColor;
                
                

                if (next) {
                    newActiveItem = slides[(activeItemIdx + 1) % slides.length];
                    
                    activeItem.classList.add('slideOutLeft');
                    newActiveItem.classList.add('slideToRight', 'slide-active');
                    
                    sliderBlock.style.backgroundColor = getComputedStyle(newActiveItem).backgroundColor;
                } else {
                    newActiveItem = slides[(activeItemIdx - 1 + slides.length) % slides.length];
                    activeItem.classList.add("slideOutRight");
                    newActiveItem.classList.add("slideToLeft", "slide-active");
                    sliderBlock.style.backgroundColor = getComputedStyle(newActiveItem).backgroundColor;
                }
            }
        }

        slides.forEach((slide) => {
            slide.addEventListener('transitionend', () => {
                if (slide === activeItem && !clickFlag) {
                    clickFlag = true;
                    activeItem.classList.remove("slide-active", "slideOutLeft", "slideToRight", "slideToLeft", "slideOutRight");
                }
            })
        })

        nextBtn.addEventListener('click', () => {
            changeSlide(true);
        });

        prevBtn.addEventListener('click', () => {
            changeSlide(false);
        });

        initSlider();

    

})();