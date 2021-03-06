(function toggleActiveClass() {
    const menu = document.getElementById('menu');  
        menu.addEventListener('click', (event) => {
            menu.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
            event.target.classList.add('active');
        });
})();

(function displayPhoneToggle() {
    
    const leftPhone = document.querySelector('.slider__slide-img-container.left-phone');
    const rightPhone = document.querySelector('.slider__slide-img-container.right-phone');
    
        leftPhone.addEventListener('click', (event) => {
            
            const elStyleVisibility = getComputedStyle(leftPhone.childNodes[1]).visibility;
            let changeElVisible = event.target.childNodes[1];
            changeElVisible.style.visibility = (elStyleVisibility === 'visible') ? 'hidden' : 'visible';
     
        });

        rightPhone.addEventListener('click', (event) => {
            
            const elStyleVisibility = getComputedStyle(rightPhone.childNodes[1]).visibility;
            let changeElVisible = event.target.childNodes[1];
            changeElVisible.style.visibility = (elStyleVisibility === 'visible') ? 'hidden' : 'visible';
     
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
                    sliderBlock.style.borderBottom = (currentBgColorSlider === 'rgb(100, 139, 240)') ? '6px solid #ea666b' : '6px solid #6974fb';
                } else {
                    newActiveItem = slides[(activeItemIdx - 1 + slides.length) % slides.length];
                    activeItem.classList.add("slideOutRight");
                    newActiveItem.classList.add("slideToLeft", "slide-active");
                    sliderBlock.style.backgroundColor = getComputedStyle(newActiveItem).backgroundColor;
                    sliderBlock.style.borderBottom = (currentBgColorSlider === 'rgb(100, 139, 240)') ? '6px solid #ea666b' : '6px solid #6974fb';  

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

(function randomPosItems() {
    const portfolioList = document.querySelector('.portfolio-list');
    const tagsBlock = document.querySelector('.filter-tags');
    function newPos() {
        let lastChild = portfolioList.children[portfolioList.children.length-1];
        let firstChild = portfolioList.children[0];
        for (let i = portfolioList.children.length; i >= 0; i--) {
            portfolioList.insertBefore(lastChild, firstChild);
        }
       
    }

    tagsBlock.addEventListener('click', (event) => {
        tagsBlock.querySelectorAll('.filter-tags__tag').forEach((tag) => tag.classList.remove('active-tag'));
            if (event.target.className === 'filter-tags__tag') {
                event.target.classList.add('active-tag');
                newPos();
            }
            
        
    });

})();

(function portfolioImageBorder() {
    const portfolioList = document.querySelector('.portfolio-list');
    const listWrapper = document.querySelector('.portfolio-list-wrapper');
    let border = (screen.width < 768) ? 'img-border-visible' : 'img-border';
    
    listWrapper.style.overflow = (portfolioList.children.length > 12) ? 'hidden' : 'visible';
    portfolioList.addEventListener('click', (event) => {
        portfolioList.querySelectorAll('img').forEach((img) => img.classList.remove('img-border-visible', 'img-border'));
        if (event.target.tagName === 'IMG' && portfolioList.children.length <= 12) {
            event.target.classList.add(border);
        }
    })
})();

(function modalWindow() {
    const form = document.querySelector('.quote__quote-form');
    const themeField = document.querySelector('.subject-field');
    const descriptionField = document.querySelector('.textarea-block');
    const modal = document.querySelector('.modal-background');
    const themeModal = document.querySelector('.theme');
    const descriptionModal =  document.querySelector('.description');
    const okBtn = document.querySelector('.ok');
    
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.checkValidity()) return false;
        themeModal.innerHTML = (themeField.value === '') ? 'Без темы' : `Тема: ${themeField.value}`;
        descriptionModal.innerHTML = (descriptionField.value === '') ? 'Без описания' : `Описание: ${descriptionField.value}`;
        modal.style.left = '0';
    });

    okBtn.addEventListener('click', (event) => {
        modal.style.left = '100%';
    });
})();

(function mobileMenu() {
    const mainBurger = document.querySelector('.burger-default-container');
    const mobileBurger = document.querySelector('.burger-container');
    const mobileMenuOverlay = document.querySelector('.mobile__mobile-menu-overlay');

    mainBurger.addEventListener('click', (event) => {
        mobileMenuOverlay.style.right = '0';
    });

    mobileBurger.addEventListener('click', (event) => {
        mobileMenuOverlay.style.right = '100%';
    });

})();

