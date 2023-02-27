/* Виды функций */
'use strict'; /* директива, которая говорит о том, что мы соответствуем стандарту 2015-го года.
она обрывает глобальный контекст окна и теперь каждая функция будет работать со своим this */
// function test1(){ // declaration

// };

// const test2 = function(){ // expression, где нельзя вызвать функцию перед инициализацией

// };

// /* Функция стрелка, которая не работает без директивы 'use strict'. У этой функции нет своего this,
// она ищет this из окружения, где она выполняется */
// const test3 = ()=>{
//     console.log(this);
// }


// function logItem (header, index){
//     console.log(this.title); // Green site
//     console.log(`${index+1}: ${header}`); // 1: Header1 ... 4: Header4
// };

// const site = {
//     title: 'Green site',
//     headers: ['Header1', 'Header2', 'Header3', 'Header4'],
//     showHeaders(){
//         this.headers.forEach(logItem.bind(this)); // Метод bind() создает новую функцию с определенным this     
//     }
// };

// site.showHeaders();


/* Создаем эту же функцию с помощью стрелки */
// function logItem (header, index){
//     console.log(this.title); // Green site
//     console.log(`${index+1}: ${header}`); // 1: Header1 ... 4: Header4
// };

// const site = {
//     title: 'Green site',
//     headers: ['Header1', 'Header2', 'Header3', 'Header4'],
//     showHeaders(){
//         this.headers.forEach((header, index)=>{
//             console.log(this.title);
//             console.log(`${index+1}: ${header}`);
//         });
//     }
// };

// site.showHeaders();


// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(1, 2)); // 3

// /* Упрощаем эту же функцию */
// const sum1 = (a, b) => a + b;
// console.log(sum(1, 2)); // 3


// const square = (n) => n*n;
// console.log(square(sum(1, 2))); // 9


/* ОСТАТОЧНЫЕ ПАРАМЕТРЫ rest (...) */
// const t1 = function(...rest){
//     console.log(arguments);
//     console.log(rest);
// }

// const t2 = (num, ...rest) => {
//     //console.log(arguments); // deprecated / error
//     console.log('num =', num); // num = 5
//     console.log('rest = ', rest); // rest = 6, 7, 8
// }

// console.dir(t1);
// console.dir(t2);
// t1(1, 2, 3, 4);
// t2(5, 6, 7, 8);


/* Создать функцию суммы, которая принимает неограниченное колличество параметров */
/* Первый вариант */
const sum2 = (...args) => {
    let result = null;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }
    return result;
}

/* Второй вариант */
const sum3 = (...args) => {
    let result = null;
    args.forEach((n)=>{
        result += n;
    });
    return result;
}


/* Метод reduce() применяет функцию reducer к каждому єлементу массива, возвращая одно результирующее значение. */
const sum4 = (...args) => args.reduce((result, n) => result + n);


/* Spread syntax (...) */
const arrNums1 = [8, 7, 6, 5];
const arrNums2 = [4, 3, 2, 1];
console.log(sum3(...arrNums1)); //26

const arrNums3 = [...arrNums1, 101, ...arrNums2];
console.log(arrNums3); // [8, 7, 6, 5, 101, 4, 3, 2, 1]

/* Мы используем rest только тогда, когда мы объявляем функцию  */


/* РЕКУРСИЯ (не безопасна и лучше не использовать) - когда функция вызывает саму себя */
function recursion(num){
    if(num === 0){
        return;
    }
    console.log(num); // 4/ 3/ 2/ 1
    recursion(num-1);
}

recursion(4);


/* Задача: Создать функцию,которая будет считать степень  */
const power = (num, exp) => {
    if(exp === 1) {
        return num;
    }
    return num * power(num, exp-1);
}


/* Задача: Создать функцию,которая будет считать факториал  */
const factorial = (num) => {
    if(num === 0) {
        return 1;
    }
    return num * factorial(num-1);
}

console.log(factorial(4)); //24