'use strict';
/* FORM */
// const state = [];

// const form = document.getElementById('root-form');
// const list = document.getElementById('list');

// form.addEventListener('submit', (e) =>{
//   e.preventDefault();
//   const {target: {textInput: {value: inputText}}} = e;
//   const inputValue = inputText.trim();
//   const validatorName = /^[A-Z][a-z]{3,12}$/;
//   if(validatorName.test(inputValue) && !state.includes(inputValue)){
//     state.push(inputValue);
//     form.reset();
//     const li = createElement('li', {classNames:['item']}, document.createTextNode(inputValue));
//     const btn = createElement('button', // создание кнопки,при нажатии на которую текст сотрется
//     {typeEvent:'click', onClick:deleteHandler.bind(li), dataValue:inputValue}, 
//     document.createTextNode('x')); 
//     li.append(btn);
//     list.append(li);
//   }
//   console.dir(state);
// })

// function deleteHandler({target:{dataset:{value}}}){ // здесь надпись удаляется
//   this.remove();
//   state.splice(state.indexOf(value), 1);
// }

// function createElement(type, {dataValue='', classNames=[], typeEvent='', onClick=null}, ...children){
//   const elem = document.createElement(type);
//   if(dataValue){
//     elem.dataset.value = dataValue;
//   }
//   if(classNames.length){
//     elem.classList.add(...classNames);
//   }
//   elem.addEventListener(typeEvent, onClick);
//   elem.append(...children);
//   return elem;
// }


/* EVENT LOOP */
/* Loupe (http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) */
const btn = document.getElementById('btn');

btn.addEventListener('click', btnHandler);

function btnHandler(e){

}


/* Отложенные запуски */
const identificator = setTimeout(()=>{ // задержка
  console.log('hi!');
}, 100) // 100 миллисекунд - время задержки

const identificator2 = setInterval(()=>{ // способ вызова через определенное время
  console.log('hi!');
}, 300) // 300 миллисекунд - время вызова

clearInterval(identificator2); // метод, который очищает

/* Задание: написать функцию, которая последовательно выводит числа от 1 до 10 через пол секунды */
counter();
function counter(){
  let i = 1;
  const id = setInterval(()=>{
    console.log(i++)
    if(i > 10){
      clearInterval(id);
    }
  }, 500)
}