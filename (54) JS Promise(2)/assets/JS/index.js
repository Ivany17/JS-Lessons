'use strict';
fetch('./assets/js/data-json') // fetch возвращает promise
    .then((response) => response.json()) // response.json возвращает promise
    .then((data) => {
        console.log(JSON.stringify(data));
    })
    .catch((err) => { 
        if(err instanceof SyntaxError){ //instanceof - оператор принадлежности к определенному классу 
            console.log('проверь запятые!');
        }
    })
    .finally(() => console.log('end'))


// const userNum = +prompt(){}
// if(isNaN(userNum)){
//     throw new Error();
// }

// console.log('qwerty');

// //try{}catch{}
// //try{}finally{}
// try{
//     console.log('try 1');
//     if(true){
//         throw new Error();
//     } 
//     console.log('try 2');
// }catch{
//     console.log('catch error');
// }finally{
//     console.log('finally');
// }

// console.log('end');


console.log('start'); // синхронная строчка

setTimeout(() => {
    console.log('setTimeout');
}, 0)

const prom1 = new Promise((resolve, reject) => { // синхронный код
    console.log('Promise start');
    resolve();
    reject();
    console.log('Promise end');
})

prom1 // асинхронный код
    .then(() =>{
        console.log('resolve');
    })
    .catch(() =>{
        console.log('reject');
    })
    .finally(() =>{
        console.log('finally');
    })
console.log('end');


/* Создаем Promise на основе примитива */
function handlePromise(promise){
    return promise.then((data) => {
        console.log('in function: ', data)
    })
    .catch((err) => {
        console.log('in function: ', err)
    })
}

const number = Promise.resolve(10);
handlePromise(number);
handlePromise(Promise.reject('error'));


/* Деллегирование событий */
const root = document.getElementById('root');
root.addEventListener('click', handlerList);
function handlerList({target}){
    if(target.parentNode === root){
        target.innerText += '!';
    }
}