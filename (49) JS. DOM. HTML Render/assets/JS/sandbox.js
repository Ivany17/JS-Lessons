'use strict';
/* Замыкание - комбинация функций и её лексического окружения */
// let value = 10;
// function log(){ // лексисческое окружение (все переменные, которые доступны функции) функции log. Здесь она определена
//     console.log('log: ', value); // log: 10
// }

// function wrapper(){
//     let value = 20;
//     console.log('wrapper: ', value); // wrapper: 20

//     log(); // замыкание
// }

// wrapper();

/* В случае, если бы function log() поместили в function wrapper() */
// let value1 = 10;

// function wrapper(){
//     let value1 = 20;
//     console.log('wrapper: ', value1); // wrapper: 20

//     function log(){
//         console.log('log: ', value1); // log: 20
//     }

//     log();
// }

// wrapper();

/* Функция в первую очередь смотрит внутри себя, дальше смотрит на своё окружение. Если там нет переменной, она вызодит ещё дальше. */
// let value2 = 10;
// const test = 88;

// function wrapper(){
//     let value2 = 20;
//     console.log('wrapper: ', value2); // wrapper: 20

//     function log(){
//         console.log('log: ', test); // log: 88 (?)
//     }

//     log(); // замыкание
// }

// wrapper();


/* Делаем функцию счетчик */
// function createCounter(initial){
//     let i=initial; // замкнутая переменная
//     return function counter(){
//         return ++i;
//     }
// }

// const counter1 = createCounter(10);
// console.log(counter1()); // 11 (потому что счетчик начинается с 10)
// const counter2 = createCounter();

/* Из функции также можно вернуть объект */
function createCounter(initial){
    let i=initial; // замкнутая переменная
    return{
        increment(){
            return ++i;
        },
        decrement(){
            return --i;
        }
    }
}

const counter1 = createCounter(10);
console.log(counter1.increment()); // 11
console.log(counter1.decrement()); // 10
const counter2 = createCounter();


/* Задание: написать функцию createAdder(n), которая возвращает другую функцию. 
Возвращенная функция должна складывать получаемый аргумент m с аргументом n

const adder = createAdder(10):
adder(4); // 14
adder(3); // 17
adder(10); // 27 */
const createAdd = (n) => (m) => (n += m);

const adder = createAdd(10);