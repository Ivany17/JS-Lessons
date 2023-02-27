'use strict';
// const arr = [1, 1, [2, 2, [3, 3], 2, 2], 1, 1]
// arr.flat() // [1, 1, 2, 2, Array(2), 2, 2, 1, 1] // flat - выравнивает массив на один уровень (разглаживает его)
// arr.flat(2) // [1, 1, 2, 2, 3, 3, 2, 2, 1, 1] // (2) - показывает на сколько уровней разравнять массив
// arr.flat(Infinity) // [1, 1, 2, 2, 3, 3, 2, 2, 1, 1] 

// const arr1 = [1, 1, , , [2, 2, , , [3, 3], 2, 2], 1,  ,1]
// arr1.flat(2) // [1, 1, 2, 2, 3, 3, 2, 2, 1, 1]  // flat - убирает пыстые места, так как они undefined

// const myArray1 = new MyArray(1, undefined, 1, new MyArray(2, new MyArray(3, 3, 3), 2, 2), 1, 1);
// const myArray2 = myArray1.flat(10);
// console.log(myArray2); // 1, 1, 2, 3, 3, 3, 2, 2, 1, 1


/* Symbol - это уникальное значение, которое можно использовать в качестве ключа для свойств объекта */
const mySymbol1 = Symbol('Метка для пользователя'); // без new

const object = {
    login: 'qwerty',
    mySymbol1: 'tyui',
    [mySymbol1]: 123, // Symbol(Метка для пользователя): 123
}


const arr = [1, 2, 3, 4, 5];
for (const iterator of arr) { // iterator - статическое свойство, которое определяет как обходить коллекцию 
    console.log(iterator); // 1/ 2/ 3/ 4/ 5
}

const myArray3 = new MyArray(10, 20, 30);
console.log(...myArray3);// 10 20 30

for (const iterator of myArray3) { 
    console.log(iterator); // 10/ 20/ 30
}

/* Immutable.js - сайт с паттернами для js */