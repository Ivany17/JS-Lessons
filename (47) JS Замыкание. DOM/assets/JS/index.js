'use strict';
/* DOM - Document Object Model */
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

const btnSliderHandler = (direction = 'next') => () => {
    slider.currentIndex = slider[direction === 'next' ? 'nextIndex' : 'prevIndex'];
    updateView();
}

nextBtn.addEventListener('click', btnSliderHandler('next'));
prevBtn.addEventListener('click', btnSliderHandler('prev'));

const uniqueBtn = document.getElementById('unique');

// uniqueBtn.addEventListener('click', btnUniqHandler);

// function btnUniqHandler(){
//     console.log(1);
//     uniqueBtn.removeEventListener('click', btnUniqHandler); // чтобы при повторном нажатии ничего не происходило
//     uniqueBtn.disabled = true; // делает кнопку неактивной после одного
// }

// function btnUniqHandler(eventObject){
//     console.group();
//     console.dir(eventObject.currentTaget); // какой обработчик сработал (?)
//     console.dir(eventObject.target); // по какому элементу кликнули
//     console.groupEnd();
// }

// window.addEventListener('click', btnUniqHandler);
// document.addEventListener('click', btnUniqHandler);
// document.body.addEventListener('click', btnUniqHandler);

//uniqueBtn.dispatchEvent(new MouseEvent('click'));

/* Задание: отобразить информацию о кнопке ('click me'), нажав на неё */
// uniqueBtn.addEventListener('click', (e) => {
//     console.log(e.target.innerText); // click me
//     console.log(e.target.textContent); // click me
// });

// document.body.addEventListener('click', btnUniqHandler);

// function btnUniqHandler(e){
//     console.log(e.target.innerText); // click me
//     console.log(e.target.textContent); // click me
// }


// const uniqueImg = document.getElementById('unique2');

// const srcAttr = document.createAttribute('src');
// srcAttr.value = imagesDB[0];

// uniqueImg.setAttributeNode(srcAttr);


image.addEventListener('wheel', (e) => {
    const handler = e.deltaY > 0 ? btnSliderHandler('next') : btnSliderHandler('prev');
    console.log(e.deltaY); // 100 (во время скролла)
    console.log(e.wheelDeltaY); // -120 (во время скролла)
    handler();
    //e.deltaY > 0 ? btnSliderHandler('next')() : btnSliderHandler('prev')(); // или так
})