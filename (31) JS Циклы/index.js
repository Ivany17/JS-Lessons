/* Шутка про возраст в этом уроке на 02:21:00 */
/* Детерминированные (определяемые) функции - функции, которые каждый раз возвращают 
один и тот же результат.Все функции делятся на чистые и грязные. Чистые функции - 
детерменированные и без побочных эффектов. */
// const sum = function(num1, num2){
//     return num1+num2;
// }

// const sub = function(num1, num2){
//     return num1-num2;
// }

// const mult = function(num1, num2){
//     return num1*num2;
// }

// const div = function(num1, num2){
//     return num1/num2;
// }

// const calc2 = function(num1=10, num2=2, operator='+') {
//     if(isNaN(num1*num2)){
//         return false;
//     }
//     let func = null;
//     switch (operator) {
//         case '+':
//             func = sum;
//             break;   
//         case '-':
//             func = sub;
//             break;      
//         case '*':
//             func = mult;
//             break;  
//         case '/':
//             func = div;
//             break; 
//     }
//     return (typeof func==='function') ? func(num1, num2) : func;
// }

// console.log(calc2(14, 7, '^')); //2

/* ФУНКЦИЯ ВЫСШЕГО ПОРЯДКА - те,которые принимают/возвращают в качестве аргумента другие функции */
// const highOrderFunction = function(num1, num2, func){
//     return func(num1, num2);
// }

// const res = highOrderFunction(2, 6, sub);  //-4
// console.log(res);


/* ЦИКЛЫ - это повторяющиеся действия */
/* Цикл с условием */
// while (true) {
//     console.log(1); // мы попали в бесконечный цикл
// }

/* Чтобы не попасть в бесконечный цикл - нужно задавать более конкретные условия */
// let count = 0; 

// while (true) { //(1 - более правильный вариант)
//     count++; // (0+1=1); (1+1=2)
//     if(count > 2){
//         break;
//     }
//     console.log(count); //[1,2]
// }
// console.log('End loop');

// while (true) { //(2)
    
//     if(count++ > 2){
//         break;
//     }
//     console.log(count); //[1,2,3]
// }
// console.log('End loop');

// while (true) { //(3)
    
//     if(++count > 2){
//         break;
//     }
//     console.log(count); //[1,2]
// }
// console.log('End loop');


/* Если мы хотим сравнить только четные числа */
// let count = 0; 

// while (true) { 
//     count++; 
//     if(count%2===1){
//         continue;
//     } if(count > 10){
//         break;
//     } 
// }
// console.log('End loop');


/* Задача: запрашивать у пользователя пароль, пока он не введет правильный */
// while (true) {
//     const password = prompt('Enter password');
//     if(password===GOOD_PASSWORD){
//         alert('Thanks');
//         break;
//     }
// }

/* Задача: исправить эту функцию,чтобы запрашивало ограниченное количество попыток */ 
// let count = MAX_COUNT_TRY;
// while (true) {
//     const password = prompt('Enter password');
//     count--;
//     if(password===GOOD_PASSWORD){
//         alert('Thanks');
//         break;
//     }
//     if(count===0){
//         alert('try is over');
//         break; 
//     }
//     alert('count try '+ count);
// }


/* Цикл с постусловием (используется крайне редко) */
// let num = 10
// do{
//     console.log(num);
// } while(num22);
/* Этот же пример, но с правильным условием */
// while (true) {
//     console.log(num);
//     if(num<22){
//         break;
//     }
// }


/* Цикл с определенным колличеством итераций */
// for(let i=1; i=MAX_COUNT_TRY; i++){
//     const password = prompt('Enter password');
//     if(password===GOOD_PASSWORD){
//         alert('Thanks');
//         break;
//     }
//     if(i+1===MAX_COUNT_TRY){
//         alert('try over');
//     }
// }


/* Задача: Написать функцию, которая найдет факториал числа */
const calcFactorial = function(number){
    if(number<0){
        return null;
    }
    if(number===0 || number===1){
        return 1;
    }
    if(number>MAX_FACTORIAL){
        return false;
    }
    let result = 1n;
    for(let i=1; i<=number; i++){
        result *= BigInt(i); //BigInt - позволяет считать большие числа
    }
    return result;
}

console.log(calcFactorial()); //1
console.log(calcFactorial(3)); //6