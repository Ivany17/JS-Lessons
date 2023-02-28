'use strict';
/* FORM */
const messageArray = [];

const form = document.getElementById('root-form');
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const {target: {textInput}} = e;
  /* Задание1: после нажатич на кнопку добавлять значение инпута в массив, если оно не пустое 
  и соответствует строке типа Name Thurname
  name {3,12} thurName {2,17}.
  Сообщить пользователю об успехе/ неудаче */
  const inputValue = textInput.value.trim();
  // const validator = /(^[A-Z][a-z]{3,12} [A-z][a-z]{2,17}$)|(^[А-Я][а-я]{3,12} [А-Я][а-я]{2,17}$)/;
  /* Задание4: Инпут соответствует строке типа Фамилия И. О. (рус) */
  const validator = /^[А-Я][а-я]{3,12} ([А-Я]\.){2}$/;
  if(validator.test(inputValue)){
    messageArray.push(inputValue);
    /* Задание3: после добавления - очищать форму */
    form.reset();
  }
  /* Задание2: рендерить на странице то, что добавилось в массив */
  console.dir(messageArray);
})