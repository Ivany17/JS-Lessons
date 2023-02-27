//alert(77);
/* в этом случае появится консоль с цифрой 77 */

//console.log(12%5);
/* так мы определяем остаток. В данном случае в консоли появится 2 */

//let messUser = 'Masha tells:\u2721\n\'Hi!\'';
/* \' - добавляет одинарную кавычку
\u добавляет элемент
 \n переносит текст на новую строку*/
//console.log(messUser);

// let iter = 5;
// iter++;
// /* постфикс увеличивает число на 1. Ответ 6 */
// console.log(iter++);

// let number = false;
// console.log(+number);


// /* Логическое сложение ИЛИ || */
// let conc1 = 1 || 'Elon';
// /* В этом случае возвращает первую правду ('Elon') */
// console.log(conc1);

// let conc2 = '' || 0;
// /* В этом случае возвращает последнюю ложь (0) */
// console.log(conc2);


// /* Логическое умножение И && */
// let cond1 = 0 && 'Elon';
// /* В этом случае возвращает первую ложь (0) */
// console.log(cond1);

// let cond2 = 2 && 'Elon';
// /* В этом случае возвращает последнюю правду ('Elon') */
// console.log(cond2);

// /* Задача: определить входит ли number = 15 в диапазон между min = 10 и max = 15 */
// let number = 15;
// let min = 10;
// let max = 20;

// if (number>=min && number <=max) {
//     console.log(true)
// }

// /* Задача: определить, что number1 = 9 НЕ входит в диапазон между min1 = 10 и max1 = 15 */
// let number1 = 9;
// let min1 = 10;
// let max1 = 20;

// if (number1<min1 || number1>max1) {
//     console.log(true)
// }


// /* Операции присваивания */
// let number = 12;
// number += 10;
// /*22*/
// number %= 5;
// /*2*/
// number **= 3;
// /*8*/
// number /= number;
// /*1*/
// number *= 4;
// /*4*/
// console.log(number);

// let nameUser = 'Elon';
// nameUser += ' Musk';
// /*'Elon Musk*/
// console.log(nameUser);

// let nameUser1 = 'Elon';
// nameUser1 += +' Musk';
// /*'ElonNaN*/
// console.log(nameUser1);

// let nameUser2 = 'Elon';
// nameUser2 += +'10';
// /*'Elon10*/
// console.log(nameUser2);

// 7 == '7';
// /* true - НЕСТРОГОЕ равенство сравнивает ЗНАЧЕНИЯ 
// НЕ ИСПОЛЬЗУЕТСЯ! */ 

// 7 === '7';
// /* false - СТРОГОЕ равенство сравнивает ТИПЫ  */
// 7 !== '7';
// /* true */
// 7 === +'7';
// /* true */

// NaN === NaN;
// /* false, потому что это уникальное представление НЕчисла */
// null === null;
// /* true */
// undefined === undefined;
// /* true */

/* Задача: (1) создать две переменные со значеними 45 и 12
И выполнить с ними 5 арифметических операций с логированием
(2) Создать переменные со значениями: 101, true, 'Java', 'Elon Musk', null
(3) Переделать код с использованием операторов присваивания, инкремент и декремент
let number = 23;
number = number + 11;
number = number / 2;
number = number - 1;
number = number * 11;
number = number + 1;
number = number % 5;*/