/* ТЕРНАРНЫЙ (УСЛОВНЫЙ) ОПЕРАТОР (... ? ... : ...) */
/* Задача с предыдущего урока: 
Написать функцию, которая проверяет возраст пользователя на совершеннолетие */
// const isAdult = function(age){
//     if(age>=18){
//         return 'adult';
//     }
//     return 'not adult';
// }

// console.log(isAdult(19)); //adult

/* Выполняем  и упрощаем эту задачу с помощью условного (тернарного) оператора */
// const isAdult2 = function(age){
//     return age>=18 ? 'adult' : 'not adult';
// }

// console.log(isAdult2(16)); //not adult

/* Если мы хотим залогировать */
// const logIsAdult = function(age){
//     const adult = age>=18 ? 'adult' : 'not adult';
//     console.log(adult);
// }

// logIsAdult(21); //adult


/* Задача: Создать функцию, которая благодарит пользователя за ввод информации
или пишет сообщение о том, что ничего не введено */
// const logDataInfo = function(){
//     const data = prompt('Enter');
//     // if(data){
//     //     console.log('thanks for: ')
//     // } else {
//     //     console.log('nothing')
//     // }
//     console.log(data ? 'thanks for: '+ data : 'nothing');
// }
// logDataInfo();

/* Упрощаем эту задачу и делаем более коректный синтаксис */
// const data = prompt('Enter');

// const logDataInfo2 = function(info){
//     console.log(info);
//     console.log(info ? 'thanks for: '+ info : 'nothing');
// }

// logDataInfo2(data);


/* ВЕТВЛЕНИЕ (ELSE IF) */
/* Задача: пользователь должен ввести положительное простое число больше ноля */
// const data = +prompt('Enter');

// if(isNaN(data)){
//     console.log('invalid data');
// } else {
//     if(data>0){
//         if(data%5===0){
//             console.log('multiple 5');
//         } else {
//             if(data%3===0){
//                 console.log('multiple 3');
//             } else {
//                 if(data%2===0){
//                     console.log('multiple 2');
//                 } else {
//                     console.log('simple number');
//                 }
//             }    
//         } 
//     } else {
//         console.log('invalid data');
//     }
// }

/* Упрощаем эту функцию с поиощью ветвления */
// const data = +prompt('Enter');

// if(isNaN(data)){
//     console.log('invalid data'); // not a number
// } else if(data>0){ // positive number
//     if(data%5===0){
//         console.log('multiple 5');
//     } else if(data%3===0){
//         console.log('multiple 3');
//     } else if(data%2===0){
//         console.log('multiple 2');
//     } else {
//         console.log('simple number');
//     }
// } else { // negative number
//     console.log('invalid data: number must be positive'); 
// }


/* ПЕРЕКЛЮЧЕНИЕ (SWITCH) */
/* Просим пользователя выбрать язык и здороваемся с ним на этом языке */
// const lang = prompt('Choose language:\n1 - ua\n2 - ru\n3 - it\n4 - en');

// if(lang === '1'){
//     console.log('Добрий день');
// } else if (lang === '2'){
//     console.log('Добрый день');
// } else if (lang === '3'){
//     console.log('Buongiorno');
// } else if (lang === '4'){
//     console.log('Good afternoon');
// } else {
//     console.log('Invalid input');
// }

/* Эта же задача, но со switch */
// const lang = prompt('Choose language:\n1 - ua\n2 - ru\n3 - it\n4 - en');

// switch (lang) {
//     case '1':
//         console.log('Добрий день');
//         break; //останавливает поиск
//     case '2': // можно нажать "2"
//     case 'ru': // а можно написать "ru"
//         console.log('Добрый день');
//         break;
//     case '3':
//         console.log('Buongiorno');
//         break;
//     case '4':
//         console.log('Good afternoon');
//         break;

//     default:
//         console.log('Invalid input');
//         break;
// }
// console.log('Thanks');


/* Задача: функция на запрос пользователя должна ответить кто он, судя по возрасту
(child, puple, adult, old) */
// const age = +prompt('enter age');

// if(isNaN(age)){
//     console.log('invalid age');
// } else if (age < 6){
//     console.log('child');
// } else if (age < 18){
//     console.log('puple');
// } else if (age < 65){
//     console.log('adult');
// } else {
//     console.log('old');
// }


/* Задача: Создать калькулятор */
const calc = function(num1=10, num2=2, operator='+') {
    if(isNaN(num1*num2)){
        return false;
    }
    switch (operator) {
        case '+':
            return num1+num2;    
        case '-':
            return num1-num2;      
        case '*':
            return num1*num2; 
        case '/':
            return num1/num2;

        default:
            return null;
    }
}

console.log(calc(14, 7, '/')); //2
// const userNumber1 = prompt('Enter first number');
// const userNumber2 = prompt('Enter secont number');
// const userOperator = prompt('Enter operator');
// console.log(calc(userNumber1, userNumber2, userOperator));

/* В нашей функции много других побочных функций. Нужно исправить синтаксис */
/* Отдельная функция для суммирования */
const sum = function(num1, num2){
    return num1+num2;
}
/* Отдельная функция для вычитания */
const sub = function(num1, num2){
    return num1-num2;
}
/* Отдельная функция для умножения */
const mult = function(num1, num2){
    return num1*num2;
}
/* Отдельная функция для деления */
const div = function(num1, num2){
    return num1/num2;
}

const calc2 = function(num1=10, num2=2, operator='+') {
    if(isNaN(num1*num2)){
        return false;
    }
    let func = null;
    switch (operator) {
        case '+':
            func = sum;
            break;   
        case '-':
            func = sub;
            break;      
        case '*':
            func = mult;
            break;  
        case '/':
            func = div;
            break; 
    }
    return (typeof func==='function') ? func(num1, num2) : func;
}

console.log(calc2(14, 7, '^')); //2