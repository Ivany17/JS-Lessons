'use strict';
// const obj = {
//     prop: 123,
// }

// const map1 = new Map();
// map1.set(1,'one'); // key: 1; value: "one"
// map1.set(obj, 'object'); // key: {prop: 1}; value: "object"

// console.log(map1.get(obj)); // object

// map1.delete(1);


/* Создаем словарь */
const dictionary = new Map();
dictionary.set('кошка', 'cat');
dictionary.set('утка', 'duck');
dictionary.set('заяц', 'hare');
dictionary.set('волк', 'wolf');
dictionary.set('лисица', 'fox');
dictionary.set('медведь', 'bear');

const str = 'Кошка Утка Волк Плов Лисица Заяц Медведь';

// const translate = (str) => {
//     const lowerCaseStr = str.toLowerCase(); // перевели слова в нижний регистр
//     const wordsArray = lowerCaseStr.split(' '); // разбили на отдельные слова
//     const wordsTranslatedArray = wordsArray.map((word) =>{ // map - метод перебора, который работает с КАЖДЫМ словом
//         if(dictionary.has(word)){ // has - проверяет наличие элемента
//             return dictionary.get(word); // get - принимает ключ ('собака'), а возвращает значение ('dog')
//         }
//         return word;
//     });
//     const translatedStr = wordsTranslatedArray.join(' '); // join - склеивает отдельные слова в строку
//     return translatedStr;
// }

// console.log(translate(str)); // cat duck wolf плов fox hare bear

/* Рефакторим эту функцию */
const translate = (dictionary, str, separator = ' ') => {
    return str.toLowerCase()
            .split(separator)
            .map((word) => (dictionary.has(word) ? dictionary.get(word) : word))
            .join(separator);
}

// console.log(translate(dictionary, str));

/* Собираем в массив */
// const iteratorKeys = dictionary.keys(); // iterator - переберает ключи/значения
// for (const iterator of iteratorKeys) {
//     console.log(iterator); // кошка /утка /заяц /волк /лисица /медведь
// }

// const iteratorValues = dictionary.values();
// for (const iterator of iteratorValues) {
//     console.log(iterator); // cat /duck /hare /wolf /fox /bear
// }

/* Рефакторим эту функцию */
// const keysArray = [];
// for (const iterator of dictionary.keys()) {
//     keysArray.push(iterator); // (6) ['кошка', 'утка', 'заяц', 'волк', 'лисица', 'медведь']
// }

// const valuesArray = [];
// for (const iterator of dictionary.values()) {
//     valuesArray.push(iterator); // (6) ['cat', 'duck', 'hare', 'wolf', 'fox', 'bear']
// }

/* Рефакторим эту функцию */
const keysArray = [...dictionary.keys()]; // (6) ['кошка', 'утка', 'заяц', 'волк', 'лисица', 'медведь']

const valuesArray = [...dictionary.values()]; // (6) ['cat', 'duck', 'hare', 'wolf', 'fox', 'bear']


const set1 = new Set('abcd'); // {'a', 'b', 'c', 'd', 7}
set1.add(7);


const nums1 = [1, 2, 3];
const nums2 = [2, 3, 4];

const unique1 = new Set([...nums1, ...nums2]); // (4) {1, 2, 3, 4}
const unique2 = [...new Set([...nums1, ...nums2])]; // (4) [1, 2, 3, 4]