import burgerMenu from "./modules/burgerMenu.js";
import searchControl from "./modules/searchControl.js";
import selectControl from "./modules/selectControl.js";
import slider from "./modules/slider.js";
// import serviceGoods from "./service/serviceGoods.js";
import renderGoods from "./modules/renderGoods.js";
import interceptLink from "./modules/interceptLink.js";
import itemModal from "./modules/itemModal.js";
import addFavorite from "./modules/addFavorite.js";


burgerMenu({
    selectorBtn: '.navigation__btn',
    selectorMenu: '.navigation',
    classActive: 'navigation_active',
    selectorClose: '.navigation__link, .header__btn',
});


selectControl ({
    selectorBtn: '.footer__subtitle',
    selectorSelect: '.footer__nav-item',
    classActive: 'footer__nav-item_active',
    breakpoint: 760,


});

const checkSlider = slider ({
    selectorParentSlider: '.hero',
    selectorSlider: '.hero__slider',
    selectorPagination: '.swiper-pagination',
    bulletClass: 'hero__slider-line',
    bulletActiveClass: 'hero__slider-line_active',
});

searchControl({
    selectorBtn: '.search__button',
    selectorForm: '.search',
    classActive: 'search_active',
    selectorClose: '.search__close',
    breakpoint: 760,
    callback: checkSlider,
});


// checkSlider();
renderGoods(location.search);
interceptLink(checkSlider);

itemModal({
    selectorHandler: '.item__description-btn',
    selectorParent: '.goods__list',
    selectorModal: '.overlay_item',
    classActive: 'overlay_active',
    closeSelector: '.modal-item__btn-to-cart, .overlay__button-close',    
});

addFavorite({
    linkFavoriteHandler: '.header__btn-favorite', 
    targetSelector: '.item__favorite-btn', 
    parentSelector: '.goods__list', 
});

addFavorite({
    linkFavoriteHandler: '.header__btn-favorite', 
    targetSelector: '.modal-item__btn-to-favorite', 
    changeActiveClass: '.item__favorite-btn',
});



























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

