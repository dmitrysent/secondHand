import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({selectorParentSlider, selectorSlider, selectorPagination: el, type, bulletClass, bulletActiveClass}) => {
    const swiper = new Swiper(selectorSlider, {
        autoplay: false,
        loop: true,
        effect: "fade",
        pagination: {
            el,
            bulletClass,
            bulletActiveClass,
            clickable: true
        }
    });

    const checkSlider = () => {
        const regexp = /\?(search|category|list)=/;
        const href = location.href;
        if (regexp.test(href)) {
            swiper.disable();
            document.querySelector(selectorParentSlider)?.remove();
        } else {
            swiper.init();
        }
    };

    checkSlider();
    return checkSlider;
};

export default slider;