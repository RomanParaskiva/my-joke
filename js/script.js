
// const mapBlock = document.getElementById('map')

// function init() {
//     var map = new YMaps.Map(map, {
//         center: [61.786664, 34.337468],
//         zoom: 16
//     });
// }

// YMaps.ready(init);

// swiper

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


// Выпадающий список

const welcomeBtn = document.querySelector('.welcome__btn');
const welcomeBtnContent = document.querySelector('.welcome__btn__content');
const sms = document.getElementById('sms');
const smsContent = document.querySelector('.sms__content');
const mainFooter = document.getElementById('main__footer')
const mainContent = document.getElementById('main__content')
const mobileBtn = document.querySelector('.mobile-btn')
const burger = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header__inner');
const container = document.querySelector('.container');
const mobileImg = document.querySelector('.mobile-logo');
const body = document.querySelector('body')

function toogleClass (el, className, targeClassName) {

}

welcomeBtn.addEventListener('click', () => {
    welcomeBtn.classList.toggle('open-menu');
    welcomeBtnContent.classList.toggle('open-menu');

    const listener = e => {
        if(!welcomeBtn.contains(event.target)) {
            welcomeBtn.classList.remove('open-menu');
            welcomeBtnContent.classList.remove('open-menu');
        } 
    }

    if(welcomeBtn.classList.contains("open-menu")) {
        document.addEventListener("click", listener, false)
    } else {
        document.removeEventListener("click", listener, false)
    }
});


sms.addEventListener('click', () => {
    sms.classList.toggle('open-menu');
    smsContent.classList.toggle('open-menu');
});

sms.addEventListener('mouseleave', () => {
    sms.classList.remove('open-menu');
    smsContent.classList.remove('open-menu');
});

// Бургер



burger.addEventListener('click', () => {
    burger.classList.toggle('open-menu');
    menu.classList.toggle('open-menu');
    container.classList.toggle('open-menu');
    mobileImg.classList.toggle('open-menu');
    body.classList.toggle('open-menu');
    mainContent.classList.toggle('open-burger');
});

// Main swap


mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('open-menu')
    mainFooter.classList.toggle('open-menu')
    mainContent.classList.toggle('open-menu')
})
