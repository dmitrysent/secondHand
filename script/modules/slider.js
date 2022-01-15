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
        const href = location.href;
        if (href.includes('?')) {
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