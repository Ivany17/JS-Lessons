// let userInput = prompt('Enter number: '); /* prompt - делает всплывающее поле */
// console.log(typeof userInput);
// /* type of string */

// let userInput1 = prompt('Enter number: '); 
// console.log(userInput1); /* показывает значение, котороее ввел пользователь */
// console.log(isNaN(Number(userInput1))); /* показывает числовое ли значение */
// console.log(Number(userInput1)); /* приводит значение в числовое */
// console.log(typeof Number(userInput1)); 
// /* type of number */

// let userInput2 = prompt('Enter number: ');

// let isNotNumber = userInput2 === '' || userInput2 === null || isNaN(Number(userInput2));
// if (isNotNumber) {
//     console.log('error')
// } else {
//     console.log('well done!')
// }

/* FUNCTION */
// function myFirstFunction(){
//     console.log('text in function')
// }
// myFirstFunction();
// /* Не правильный синтаксис */

// const mySecondFunction = function (){
//     console.log('text in function 2')
// }
// mySecondFunction();
// /* Правильный синтаксис */
// console.log(mySecondFunction);


/* Задача: посчитать сумму чисел, которые ввел пользователь */
// const getSumTwoNums = function(){
//     let userInput3 = prompt('enter first number');
//     let userInput4 = prompt('enter second number');

//     let checkEmpty = userInput3 === '' || userInput3 === null || userInput4 === '' || userInput4 === null;
//     let sum = Number(userInput3) + Number(userInput4);

//     if (checkEmpty || isNaN(sum)) {
//         console.log('error')
//     } else {
//         console.log(userInput3, '+', userInput4, '=', sum)
//     }
// }
// getSumTwoNums();
// /* Хорошая функция ОДНОЗАДАЧНА, поэтому эта функция не коректна! 
// Нужно разбить её на несколько функций */


// /* Описание функции перед самой функцией */
// /**
//  * 
//  * @param {any} num1
//  * @param {any} num2
//  * @returns {boolean|number}
//  */
// /* Эта функция только определяет тип (число/не число) */
// const isNotNumber = function(num){
//     return num === '' || num === null || isNaN(Number(num));
// }

// /* Эта функция только суммирует */
// const getSumTwoNums2 = function(num1, num2){
//         if (isNotNumber(num1) || isNotNumber(num2)) {
//             return false;
//         }
//         return Number(num1) + Number(num2); /* return может быть много раз в функции, но сработает только один */
//     }

// let userInput3 = prompt('enter first number');
// let userInput4 = prompt('enter second number');

// let result = getSumTwoNums2(userInput3, userInput4);
// if (result === false) {
//     console.log('error');
// } else {
//     console.log(result);
// }


// /* Задача: Написать функцию, которая возвращает максимальное значение из двух (одного типа)
//  Если невозможно сравнить - возвращает null
//  Значение спрашиваем у пользователя */
// /**
//  * return the maximum value of two if they are of the same type
//  * @param {any} val1 
//  * @param {any} val2 
//  * @returns {any | null}
//  */
//  const retMaxValOfTwo = function(val1, val2){
//     if (typeof val1 === typeof val2) {
//         if (val1>val2) {
//             return val1;
//         } else {
//             return val2;
//         }
//     }
//     return null;
//  }

// console.log(retMaxValOfTwo('102', '12'));
// console.log(retMaxValOfTwo(12, undefined));
// console.log(retMaxValOfTwo(12, 102));
// console.log(retMaxValOfTwo('q', 'a'));
// console.log(retMaxValOfTwo(true, false));

// /* Задача: Написать функцию, которая определяет четность числа */
const isEven = function(val){
    if (typeof val === 'number') {
        return val%2 === 0;
    }
    return null;
}
console.log(isEven(12));
console.log(isEven(13));
console.log(isEven('abc'));