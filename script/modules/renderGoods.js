import serviceGoods from "../service/serviceGoods.js";

const createCard = ({id, item, title, image, price, discountPrice}) => {
    const li = document.createElement('li');
    li.classList.add('goods__item');
    console.log(item);
    li.insertAdjacentHTML('beforeend', (`
        <article class="item">
            <img src="${image}" alt="${title}" class="item__img">
            <button class="item__favorite-btn" data0id=${id}>
                <svg width="28" height="24">
                    <use xlink:href="#heart"/>
                </svg>
            </button>
            <div class="item__control-wrapper">
                <h3 class="item__title">${title}</h3>
                <button class="item__to-card">В корзину</button>
                <p class="item__price">
                ${discountPrice ? `${discountPrice} ₽
                    <span class="item__price-old">${price} ₽</span>` : `${price} ₽`}
                </p>
                <button class="item__description-btn" data0id=${id}>
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