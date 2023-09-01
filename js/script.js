
// const mapBlock = document.getElementById('map')

// function init() {
//     var map = new YMaps.Map(map, {
//         center: [61.786664, 34.337468],
//         zoom: 16
//     });
// }

// YMaps.ready(init);

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});
