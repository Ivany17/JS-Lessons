/* Задача на циклы: Написать функцию, которая выводит числа от max до min (в порядке убывания),
кратные num showRange(50,20,3); */
// const checkMath = function(num1=5, num2=4, operator='*') {
//     let result = null;
//     switch (operator) {
//         case '*':
//             return num1*num2;
//             break;
//         case '/':
//             return num1/num2;
//             break;
//         case '+':
//             return num1+num2;
//             break;
//         case '-':
//             return num1-num2;
//             break;
//         default:
//             break;
//         }
//         if(result===null || isNaN(result)){
//             return 'error!';
//         }
//     while(true){
//         const question = prompt(num1 + operator + num2);
//         if(Number(question)===result){
//             return 'WIN!';
//         }
//     }
// }
// checkMath(20,10,'+');

// // `` - обратные кавычки позволяют использовать форматированный текст 
// const num = 12;
// console.log("qwerty"+num); //qwerty12
// console.log(`sds' 
// sadfda" ${num}`);  // sds' / sadfda" 12


// /* Задача: Написать функцию с обратными кавычками, которая будет здороваться с нашим юзером */
// const user = {
//     firstName: 'Elon',
//     secondName: 'Musk',
//     age: 50,
//     isMale: true,
// }

// const sayHello = function(obj){
//     return `Hello, ${obj.firstName} ${obj.secondName}!`;
// }

// console.log(sayHello(user));

// const user2 = {
//     firstName: 'Tim',
//     secondName: 'Lee',
//     age: 56,
//     isMale: true,
// }
// console.log(sayHello(user2));


// /* Доступ к свойствам с возможностью вычисления */
// const object = {
//     name: 'pen',
//     'is writing': true, //мы можем использовать string в качестве свойства
//     12: 75,
// }

// console.log(object[12]); // 75
// console.log(object['12']); // 75
// console.log(object['is writing']); // true
// console.log(object[name]); //undefined
// console.log(object['name']); //pen

// const nameProperty = 'is writing';
// console.log(object[nameProperty]); //true


/* Задача: Создать таблицу умножения, где пример - это свойства, а ответ - это значение */
const obj = {};
obj.prop1 = 12;
obj['prop2'] = 22;

const createMultiplicationTable = function(min=3, max=5){
    const table = {};
    for(let i=min; i<max; i++){
        for(let j=1; j<max; j++){
            table['${i} * ${j} = '] = i * j; //[] - Доступ к свойствам с возможностью вычисления
        }
    }
    return table;
}

console.log(createMultiplicationTable());

/* Задача: Создать функцию, которая принимает строку и объект, а возвращает число */
const func = function(str, obj){
    return obj[str];
}

const str = '2 * 3 =';
const table = createMultiplicationTable();
console.log(func(str, table));












