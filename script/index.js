import burgerMenu from "./modules/burgerMenu.js";
import searchControl from "./modules/searchControl.js";
import selectControl from "./modules/selectControl.js";
import slider from "./modules/slider.js";


burgerMenu({
    selectorBtn: '.navigation__btn',
    selectorMenu: '.navigation',
    classActive: 'navigation_active',
    selectorClose: '.navigation__link, .header__btn',
});

searchControl({
    selectorBtn: '.search__button',
    selectorForm: '.search',
    classActive: 'search_active',
    selectorClose: '.search__close',
    breakpoint: 760,
});

selectControl ({
    selectorBtn: '.footer__subtitle',
    selectorSelect: '.footer__nav-item',
    classActive: 'footer__nav-item_active',
    breakpoint: 760,


});

slider ({
    selectorSlider: '.hero__slider',
    selectorPagination: '.swiper-pagination',
    bulletClass: 'hero__slider-line',
    bulletActiveClass: 'hero__slider-line_active',
});


document.addEventListener('click', e => e.preventDefault());



























// const burgerBtn = document.querySelector('.navigation__btn');
// const searchBtn = document.querySelector('.search__button');
// const searchForm = document.querySelector('.search');
// const navigationActive = document.querySelector('.navigation');
// const footerSubtitles = document.querySelectorAll('.footer__subtitle');
// const footerNavItem= document.querySelector('.footer__nav-item');


// burgerBtn.addEventListener('click', () => {
//     burgerBtn.classList.toggle('navigation__btn_active');
//     navigationActive.classList.toggle('navigation__active');
// });

// searchBtn.addEventListener('click', () => {
//      searchForm.classList.toggle('search__active');
// });

// for (footerSubtitle of footerSubtitles) {
//     footerSubtitle.addEventListener('click', () => {
//      footerNavItem.classList.toggle('footer__nav-item_active');
// });

// }

