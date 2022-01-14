import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({selectorSlider, selectorPagination: el, type, bulletClass, bulletActiveClass}) => {
    new Swiper(selectorSlider, {
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
};

export default slider;