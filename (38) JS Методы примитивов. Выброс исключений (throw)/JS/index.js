'use strict';
// /* Задача: написать функцию стрелку,которая взвращает большее из двух чисел */
// const maxOfTwoNumbers = (n1, n2) => (n1 > n2 ? n1 : n2);

// /* 1 */
// const showArgs = (a, b, ...c) => {
//     console.log(c); // [3, 4, 5, 6] - потому что rest - это массив
//     console.log(...c); // 3 4 5 6
//     c.forEach(()=>{
//         console.log(this); // window
//     })
// }
// showArgs(1, 2, 3, 4, 5, 6); 

// /* 2 */
// const showArgs1 = function(a, b, ...c) {
//     c.forEach(()=>{
//         console.log(this); // undefined
//     })
// }
// showArgs1(1, 2, 3, 4, 5, 6); 

// /* 3 */
// function showArgs2(a, b, ...c) {
//     c.forEach(()=>{
//         console.log(this); // undefined
//     })
// }
// showArgs2(1, 2, 3, 4, 5, 6);

// /* 4 */
// const obj = {
//     showArgs3(a, b, ...c){
//         console.log(c); 
//         console.log(...c); 
//         c.forEach(()=>{
//             console.log(this); // object
//         })
//     }
// } 
// obj.showArgs3(1, 2, 3, 4, 5, 6); 


/* Методы примитивов */
/* Boolean */
const boolean = new Boolean(true);
console.log(boolean); // object

const boolean1 = new Boolean(false);
if(boolean1){
    console.log('true'); // true
}

const boolean2 = new Boolean(null);
if(boolean2.valueOf()){
    console.log('true'); 
} else {
    console.log('false'); // false
}

const str = 'Ivan';
if(Boolean(str)){
    console.log(Boolean(str)); // true - явно приведено к булевому типу, а не строке
} else {
    console.log('false');
}

const str1 = ''; // пустая строка
if(Boolean(str1)){
    console.log(Boolean(str1)); // false - строка
} else {
    console.log('false');
}


/* Number */
const number = new Number(10);

const num = Number(123456.789012.toFixed(2)); // 123456.79 (числовой тип) (2 = число знаков после запятой)

Number.isNaN('abcd') // false
Number.isNaN(12) // false
Number.isNaN(NaN) // true
Number.isNaN(Number('abcd')) // true

Number.isInteger('10') // false
Number.isInteger(Number('10')) // true

Number.parseInt('12%') // 12
Number.parseInt('12 с половиной') // 12 // лучше не использовать


/* String */
const userName = 'Ivan';
userName.toUpperCase() // 'IVAN'
userName.toLowerCase() // 'ivan'
userName[2] // 'a' - третья буква слова
userName[3] // 'n' - четвертая буква слова
userName.charAt(2) // 'a' 
userName.charCodeAt(2) // 101 - номер юникода

'   abcd    '.trim() // 'abcd'
'   abcd    efgh     '.trim() // 'abcd     efgh'

const strSentence = 'I have a good day';
strSentence.includes('a') // true
strSentence.includes('b') // false
strSentence.includes('day') // true
strSentence.indexOf('a') // 3 - порядковый номер символа в предложении
strSentence.indexOf('good') // 9 - порядковый номер слова в предложении, начиная с первой буквы g

const strHamlett  = 'to be or not to be'; 
strHamlett.split(' ') // ['To', 'be', 'or', 'not', 'to', 'be']
strHamlett.split('or') // ['To be', 'not to be']

// function toCapitalizeCase(strHamlett){
//     let newStr = strHamlett.toLowerCase();
//     const arrWords = newStr.split(' ');
//     const arrWordsUp = arrWords.map((word) => {
//         const letter = word[0].toUpperCase() + word.substring(1);
//         return letter;
//     });
//     newStr = arrWordsUp.join(' ');
//     return newStr;
// }

// console.log(toCapitalizeCase(strHamlett)); // To Be Or Not To Be

/* Упрощаем синтаксис этой функции */
function toCapitalizeCase(strHamlett){
    return strHamlett
    .split(' ') // split - мы разобрали предложение по слову
    .map((word) => { // map - выбрали каждое слово
        return word[0].toUpperCase() + word.toLowerCase().substring(1); // to upperCase - сделали первую букву большой, substring - остальные буквы, кроме первой, toLowerCase - маленькие буквы
    })
    .join(' '); // join - склеивает массив в строку
}

console.log(toCapitalizeCase(strHamlett)); // To Be Or Not To Be

