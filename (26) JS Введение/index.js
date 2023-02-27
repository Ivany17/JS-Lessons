// alert(77);
// window.alert(77); // одно и то же
/* в этом случае появится консоль с цифрой 77 */

console.log(1); // 1 (navy blue)
/* Выводит значение */
console.log(undefined); // undefined
console.log('test'); // test
console.log('1'); // 1 (black)
console.log(null); // null (light-green)
console.log(true); // true (violet)


/* Создаем переменные (variable) 
Переменная начинается только с буквы, с символа _ или $. Латиница без пробелов с цифрой в середине, или конце, регистрозависимая */
//var // устаревшее
// let num1;
/* инициализация */
// num1 = 33;
/* логирование */
// console.log(num1); // 33

// num1 = 44;
// console.log(num1); // 44

// const num3 = 55;
//  {
//     let num3 = 'qwerty';
//     console.log(num3); // qwerty
//  }


1 + 2 // 3
0.1 + 0.2 // 0.3000000000001
1 / 0 // Infinity
1 / -0 // -Infinity
0 / 0 // NaN (not a number)
12/ 'qw' // NaN
NaN + 2 // NaN

const obj = null; // null - конкретное значение


/* Унарные, биарные и тернарные операторы */
// () - группировка

/* Конкатинация */
'El' + 'on' // 'Elon'
20 + '1' // '201'
undefined + '1' // undefined1
444 + '' // '444'
true + 1 // 2  (true = 1)
false + 1 // 1 (false = 0)
true - true // 0
true / 0 // Infinity
false / false // NaN
'15' / 3 // 5
2 ** 3 // 8
2 ** -3 // 0.125
2 ** 0.5 // 1.41421


let num = 10;
console.log(num, typeof num) // 10 (navy blue) 'number' (red)

let str = '10';
console.log(str, typeof str) // 10 number (grey)

let varNull = null;
console.log(varNull, typeof varNull) // null (grey) 'object' (red)


/* Boolean */
let cond = true;
if(cond){
    console.log(cond); // true
}

let cond2 = 0;
if(cond){
    console.log(cond); // false
}

/*
false
0 +0 -0
' '
NaN
null
undefined */

let condition = 'null' * 0;
console.log(condition, typeof condition); // NaN 'number'

let condition1 = '12' * 0;
console.log(condition, typeof condition); // 0 'number'

let condition2 = '12' / 0;
console.log(condition, typeof condition); // Infinity 'number'