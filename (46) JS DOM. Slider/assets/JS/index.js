'use strict';
/* DOM - Document Object Model */
// function logMessage(){
//     console.log('hi')
// }
// /* Мы хотим добавить функционал на кнопку, которая находится в index.html */
// const [, , button] = document.getElementsByTagName('button');

// button.addEventListener('click', logMessage); // addEventListener - функция высшего порядка, которая работает только с конкретным элементом
// /* Теперь когда мы кликаем на третью кнопку в index.html - в консоли появляеется сообщение 'hi' */

// //const h1 = document.getElementById('head');
// /* Альтернативный вариант с querySelector */
// //const h1 = document.querySelector('#head');
// /* Если мы хотим обратиться к третьему h1 */
// const h1 = document.querySelector('h1+h1+h1'); // Third h1

// /* Собираем теги <li> */
// const list = document.getElementsByTagName('li'); // HTMLCollection(6) [li, li, li, li.item, li.item, li.item]
// const list1 = document.getElementsByClassName('item'); // HTMLCollection(3) [li.item, li.item, li.item]
// const list2 = document.querySelectorAll('#nav>li'); // NodeList(3) [li.item, li.item, li.item

// /* Задача: получить доступ к img (45)
// <ul> (51)
// <p> (59, 60, 61) */
// const [, imgPicture] = document.images; // или
// document.querySelector('article+article>img'); // или

// document.querySelector('ul');

// document.querySelectorAll('main>article>p'); // или
// document.querySelectorAll('p:not(.text)'); // или


/* Slider */
const imagesDB = ['https://thumbs.dreamstime.com/z/%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%B0-%D0%B8%D0%B7%D0%B2%D0%B5%D1%80%D0%B3%D0%B0-%D1%88%D0%B0%D1%80%D0%B6%D0%B0-emoji-%D0%BC%D0%B8%D0%BB%D1%8B%D0%B5-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA%D0%B8-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-103528672.jpg',
'http://data16.gallery.ru/albums/gallery/201015--48129390-m750x740-u494cf.jpg',
'https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg',
'https://hips.hearstapps.com/hmg-prod/images/2023-bmw-xm-front-three-quarters-in-motion-1664208744.jpg?crop=0.566xw:0.637xh;0.139xw,0.329xh&resize=640:*',
'https://www.gannett-cdn.com/-mm-/e40e8b85a6dc28a883d6eca175413b061dee0e34/c=0-103-1995-1230/local/-/media/2016/03/14/Phoenix/Phoenix/635935703261065656-sunset.jpg'];

const slider = new Slider(imagesDB);

const image = document.querySelector('.slide>img');

const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container>button');

function updateView(){
    image.setAttribute('src', slider.currentSlide);
}
updateView();

nextBtn.addEventListener('click', () => {
    slider.currentIndex = slider.next();
    updateView();
});

prevBtn.addEventListener('click', () => {
    slider.currentIndex = slider.prev();
    updateView();
});

