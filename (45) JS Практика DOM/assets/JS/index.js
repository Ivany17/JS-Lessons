'use strict';
/* Задача: есть два пользователя и два массива. Нужно связать пользователей и сообщения а так же определить, какая структура данных необходима для этого
linked list
queue
stack
map (выбрали)
set */
// const user1 = {
//     id: 1,
//     name: 'Elon',
//     age: 50,
// }
// const user2 = {
//     id: 1,
//     name: 'Elen',
//     age: 20,
// }

// const msgElon = ['12', 'hi!', 'bye!'];
// const msgElen = ['Qwerty', 'hello', 'Add!'];

/* Решение */
// const msgUsers = new Map ();
// msgUsers.set(user1.id, msgElon);
// msgUsers.set(user2.id, msgElen);

// const getUserMessages = ({id}) => {
//     const msgs = msgUsers.get(id);
//     msgs.forEach(message => console.log(message)); // Qwerty /hello! /Add! // forEach() - метод, который перебирает каждый элемент массива
// }

// getUserMessages(user1);

/* Упрощаем */
// const getUserMessages = ({id}) => {
//     msgUsers.get(id).forEach(message => console.log(message)); // Qwerty /hello! /Add! // forEach() - метод, который перебирает каждый элемент массива
// }

// getUserMessages(user1);


/* Задача: Написать функцию, которая проверяет может ли одна строка быть создана из символов другой строки 

compare('test', 'sett') => true
compare('list', 'lost') => false

1) Сравнить по длина две строки
2) Создать словарь (Map) для каждого параметра
ключ - буква, значение - количество
для каждого символа:
    - проверить существование ключа
    - если есть - увеличиваем значение на 1
    - если нет - устанавливаем значение 1
3) Сравниваем эти словари по размеру
4) Если одинаковые по размеру, то сравниваем значения по ключам */
// const compare = (str1, str2) => {
//     if(str1.length !== str2.length){
//         return false;
//     }
//     const mapToString1 = new Map();
//     for (const letter of str1) {
//         if(mapToString1.has(letter)){
//             const amount = mapToString1.get(letter);
//             mapToString1.set(letter, amount+1);
//         } else {
//             mapToString1.set(letter, 1);
//         }      
//     }
//     const mapToString2 = new Map();
//     for (const letter of str2) {
//         if(mapToString2.has(letter)){
//             const amount = mapToString1.get(letter);
//             mapToString2.set(letter, amount+1);
//         } else {
//             mapToString2.set(letter, 1);
//         }      
//     }
//     if(mapToString1.size !== mapToString2.size){ // сравнили словари по размеру
//         return false;
//     }
//     for (const key of mapToString1.keys()) {
//         if(mapToString1.get(key) !== mapToString2.get(key)){
//             return false;
//         }
//     }
//     return true;
// }

// compare ('test', 'sett'); // Map(3) {'t' => 2, 'e' => 1, 's' => 1}

// /* Упрощаем */
// const createMap = (str) => {
//     const mapToString = new Map();
//     for (const letter of str) { // разбираем строку на элементы
//         if(mapToString.has(letter)){ // проверяем наличие ээлементов
//             const amount = mapToString.get(letter);
//             mapToString.set(letter, amount+1); // если элемент есть - увеличиваем его количество на 1
//         } else {
//             mapToString.set(letter, 1); // если элемента нет - создаем (буква встретилась один раз)
//         }      
//     }
//     return mapToString;
// }

// const compare = (str1, str2) => {
//     const mapToString1 = createMap(str1);
//     const mapToString2 = createMap(str2);
//     if(mapToString1.size !== mapToString2.size){ // сравнили словари по размеру
//         return false;
//     }
//     for (const key of mapToString1.keys()) {
//         if(mapToString1.get(key) !== mapToString2.get(key)){ // сравниваем количество элементов по ключу
//             return false;
//         }
//     }
//     return true;
// }

// compare ('test', 'sett'); // Map(3) {'t' => 2, 'e' => 1, 's' => 1}
// console.log(compare ('test', 'sett')); // true


/* DOM - Document Object Model */
function logMessage(){
    console.log('hi')
}
/* Мы хотим добавить функционал на кнопку, которая находится в index.html */
const [, , button] = document.getElementsByTagName('button');

button.addEventListener('click', logMessage); // addEventListener - функция высшего порядка, которая работает только с конкретным элементом
/* Теперь когда мы кликаем на третью кнопку в index.html - в консоли появляеется сообщение 'hi' */