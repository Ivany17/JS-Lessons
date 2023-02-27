/* Задача: Посчитать периметр квадрата */
// let sideSquare = prompt('Enter side square', '10');

// const getPerimetrSquare = function() {
//     return 4*sideSquare;
// }

// alert(getPerimetrSquare());
/* Некорректный синтаксис */

// let sideSquare = prompt('Enter side square', '10');
// /**
//  * 
//  * @param {number} side 
//  * @returns {number | null}
//  */

// const getPerimetrSquare = function(side) {
//     if(isNaN(side)){
//         return null;
//     }
//     return 4*side;
// }

// const convertNumber = function(value) {
//     if (value === '' || value === null || isNaN(Number(value))) {
//         return NaN;
//     }
//     return Number(value);
// }

// console.log(getPerimetrSquare(3)); //12 
// let changeSideSquare = convertNumber(sideSquare); // вводится значение в prompt
// console.log(getPerimetrSquare(changeSideSquare));

/* Задача: Написать функцию, которая проверяет возраст пользователя на совершеннолетие */
// const isAdult = function(age, AGE_ADULT=18){
//     return age>=AGE_ADULT;
// }

// console.log(isAdult(2)); //false
// console.log(isAdult(18)); //true
// console.log(isAdult(17)); //false


// const logWord = function(word='sample', sign='!'){
//     console.log(word+sign)
// }

// logWord(); //sample!
// logWord('Qwerty'); //Qwerty!
// logWord(undefined,'?'); //sample?


/* Задача: Создать функцию checkMultiplicity, которая принимает
два числа и проверяет кратность первого вторым */
// const checkMultiplicity = function(num1,num2){
//     return num1%num2===0;
// }

// console.log(checkMultiplicity(20,4)); //true
// console.log(checkMultiplicity(20,3)); //false


/* Задача: Функция должна вернуть true, если число больше 20 и кратно 7.
В остальных случаях функция возвращает false */
// const checkCondition = function(num) {
//     return num%7===0 && num>20
// }

// console.log(checkCondition(prompt('Enter number')));


/* Задача: Функция проверяет возможность существования треугольника по трем числам -
длинам трех сторон (Требуется сравнить каждую сторону с суммой двух других. 
Если хотя бы в одном случае сторона окажется больше либо равна сумме двух других, 
то треугольника с такими сторонами не существует). Функция должна возвращать булевое значение */
// const checkTriangle = function(num1,num2,num3){
//     return num1+num2>num3 && num2+num3>num1 && num1+num3>num2;
// }

// console.log(checkTriangle(3,4,5)); //true
// console.log(checkTriangle(1,13,3)); //false


/* Задача: Решение квадратного уравнения (ax^2+bx+c=0) */
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {null | number[]}
 */
const solveSquareEquation = function(a,b,c) {
    const D = b*b-4*a*c;
    if(D<0){
        return null;
    }
    if(D===0){
        const x = -b / (2*a);
        return [x, x];
    }
    const x1 = (-b + D**0.5) / (2*a);
    const x2 = (-b - D**0.5) / (2*a);
    return [x1,x2];
}

console.log(solveSquareEquation(-1,-2,15)); //[-5,3]
console.log(solveSquareEquation(1,12,36)); //[-6]
console.log(solveSquareEquation(5,3,7)); //null
console.log(solveSquareEquation(undefined,undefined,1)); //чтобы обосначить только с