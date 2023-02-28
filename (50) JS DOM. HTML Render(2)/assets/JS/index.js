'use strict';
const cardsContainer = document.getElementById('cardsContainer');
const HTMLElements = actors
  .filter((actor) => actor.name && actor.birthDate && actor.photo) // убирает пользователя без имени
  .map((actor) => createActorCards(actor));

function createActorCards(actor){
  const p = createElement('p', {classNames:['cardDescription']},
    document.createTextNode(actor.birthDate || 'unknown')
  );
  const h2 = createElement('h2', {classNames:['cardName']},
    document.createTextNode(actor.name || 'noname')
  );
  const article = createElement('article', {classNames:['cardContainer']},
    createImageWrapper(actor),
    h2,
    p,
  );
  return createElement('li', {classNames:['cardWrapper']}, article);

  /* Второй вариант */
  // return createElement('li', {classNames:['cardWrapper']},[
  //   createElement('article', {classNames:['cardContainer']},[
  //     createImageWrapper(actor),
  //     createElement('h2', {classNames:['cardName']},[
  //       document.createTextNode(actor.name || 'noname')
  //     ]),
  //     createElement('p', {classNames:['cardDescription']},[
  //       document.createTextNode(actor.birthDate || 'unknown')
  //     ]),
  //   ])
  // ]);
}

cardsContainer.append(...HTMLElements);

/**
 * 
 * @param {string} type 
 * @param {object} options
 * @param {string} options.typeEvent 
 * @param {string[]} options.classNames
 * @param {Function} options.onClick
 * @param {Node[]} children 
 * return {Node}
 */
function createElement(type, {classNames, typeEvent, onClick}, ...children){ /* Для второго варианта children без rest */
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.addEventListener(typeEvent, onClick);// для примера
  elem.append(...children);
  return elem;
}

function createImageWrapper(actor){
  const {id, name} = actor;
  const imgWrapper = document.createElement('div');
  imgWrapper.setAttribute('id', `wrapper${id}`);
  imgWrapper.classList.add('cardImageWrapper');

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(name[0] || 'noname'));
  initials.style.backgroundColor = stringToColour(name || '');

  imgWrapper.append(initials);
  createImage(actor);
  return imgWrapper;
}

function createImage({photo, name, id}){
  const img = document.createElement('img');
  img.classList.add('cardImage');
  img.setAttribute('src', photo);
  img.setAttribute('alt', name);
  img.dataset.id = id;
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);
  //return img;
}

/* handles */
function handleImageError({target}){
    target.remove();
}
function handleImageLoad({target, 
  target:{
    dataset:{id}
  }
}){
    document.getElementById(`wrapper${id}`).append(target);
}

/* utilits (https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript) */
function stringToColour(str) { // цвет для фото
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }



/* New tema */
/* FORM */
const messageArray = [];

const form = document.getElementById('root-form');
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const {target: {textInput}} = e;
  /* Задание1: после нажатич на кнопку добавлять значение инпута в массив, если оно не пустое */
  const inputValue = textInput.value.trim();
  if(inputValue){
    messageArray.push(inputValue);
    form.reset();
  }
  /* Задание2: рендерить на странице то, что добавилось в массив */
  console.dir(messageArray);
})