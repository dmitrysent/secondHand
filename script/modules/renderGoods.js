import serviceGoods from "../service/serviceGoods.js";
import {getStorage} from "../service/serviceStorage.js";

const createCard = ({id, item, title, image, price, discountPrice}) => {
    const allFavorite = getStorage('favorite');

    const li = document.createElement('li');
    li.classList.add('goods__item');
    li.insertAdjacentHTML('beforeend', (`
        <article class="item">
            <img src="${image}" alt="${title}" class="item__img">
            <button class="${allFavorite.includes(id) ? 'item__favorite-btn active' : 'item__favorite-btn'}" data-id="${id}">
                <svg width="28" height="24">
                    <use xlink:href="#heart"/>
                </svg>
            </button>
            <div class="item__control-wrapper">
                <h3 class="item__title">${title}</h3>
                <button class="item__to-card to-card" data-id="${id}">В корзину</button>
                <p class="item__price">
                ${discountPrice ? `${discountPrice} ₽
                    <span class="item__price-old">${price} ₽</span>` : `${price} ₽`}
                </p>
                <button class="item__description-btn" data-id=${id}>
                    <span class="item__description-text">Подробнее</span>
                </button>
            </div>
        </article>
    `));

    return li
};

const renderCards = (parent) => {
    return (data) => {
        const arr = data.map(createCard);
        parent.append(...arr);
    }
};

const renderGoods = (query) => {
    const list = document.querySelector('.goods__list');
    list.textContent = '';

    serviceGoods(renderCards(list), query);
};

export default renderGoods;