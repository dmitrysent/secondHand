const burgerBtn = document.querySelector('.navigation__btn');
const searchBtn = document.querySelector('.search__button');
const searchForm = document.querySelector('.search');
const navigationActive = document.querySelector('.navigation')


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('navigation__btn_active');
    navigationActive.classList.toggle('navigation__active');
});

searchBtn.addEventListener('click', () => {
     searchForm.classList.toggle('search__active');
});

