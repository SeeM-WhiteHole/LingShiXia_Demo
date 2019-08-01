var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView : 3,
    centeredSlides : false,
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});