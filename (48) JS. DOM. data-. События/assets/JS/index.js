'use strict';
/* DOM - Document Object Model */
// /* Задание1: при наведении мышкой на кнопки, их содержимое меняется местами 
// Задание2: нажать можно только на кнопку open (index.html: 14, 15) */
// const [openBtn, closeBtn] = document.querySelectorAll('button');

// const switchInnerText = ({target}) => { // для нажатия только на кнопку open
//     const openElem = target === closeBtn ? openBtn : closeBtn;
//     const closeElem = target === closeBtn ? closeBtn : openBtn;  

//     const buffer = openElem.textContent; //  чтобы контент в кнопках менялся
//     openElem.textContent = closeElem.textContent;
//     closeElem.textContent = buffer;

//     closeElem.removeEventListener('mouseenter', switchInnerText);
//     openElem.addEventListener('mouseenter', switchInnerText);
// }

// const clickHandler = ({target}) => {
//     console.log(target);
// }

// //openBtn.addEventListener('mouseenter', switchInnerText); // чтобы сработало Задание 2, пришлось закоментировать эту строку. Но она нужна для Задания 1
// closeBtn.addEventListener('mouseenter', switchInnerText);

// openBtn.addEventListener('click', clickHandler);
// closeBtn.addEventListener('click', clickHandler);


// /* Задание: при нажатии на кнопку мы получаем информацию о её пути ("http://127.0.0.1:5500") (index.html: 17, 18) */
// const btns = document.querySelectorAll('button');

// const btnHandler = ({target:{dataset:{path}}}) => {console.log(path);}
// for(const btn of btns) {
//     btn.addEventListener('click', btnHandler); 
//     }


/* Задание: по клику на кнопку изменить её стиль (index.html: 20) */
// const btns = document.querySelectorAll('button');
// const root = document.getElementById('root');

// const btnColor = ({
//     target:{
//         dataset:{color},
//         parentNode: parentRoot
//     }
// }) => {
//     parentRoot.style.backgroundColor = color;
// }

// for (const btn of btns) {
//     btn.addEventListener('click', btnColor);
// }


// const handler = (e) => {
//     //e.cancelBubble = true;
//     e.stopPropagation();
//     console.group();
//     console.dir(e.target);
//     console.dir(e.currentTarget);
//     console.groupEnd();
// }

// for (const btn of btns) {
//     btn.addEventListener('click', btnColor);
//     btn.addEventListener('click', handler);
//     btn.addEventListener('click', () => {console.log(123)}, {capture:true, once:true});
// }

// document.getElementById('root').addEventListener('click', handler);
// document.body.addEventListener('click', handler);
// document.addEventListener('click', handler);
// window.addEventListener('click', handler);


/* Задание */
const handler = ({currentTarget}) =>{
    console.log(currentTarget, 'immersion');
}
for (const btn of btns) {
    btn.addEventListener('click', handler, true);
}

document.getElementById('root').addEventListener('click', handler), true;
document.body.addEventListener('click', handler, true);
document.addEventListener('click', handler, true);
window.addEventListener('click', handler, true);
