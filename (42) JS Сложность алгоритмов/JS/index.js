'use strict';
// O() (BigO (О большое)) - показывает верхнюю границу зависимости между входными параметрами и количеством операций, которые выполняет процесс


/* Константная сложность O(1) (получить элемент по индексу) - количество операций не зависит от количества данных */ 
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr[4]); // 5


/* Линейная сложность O(n) (перебрать все значения) - количество операций прямо зависит от количества данных */ 
// const linearSearch = (arr, key) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === key){
//             return i;
//         }
//     }
//     return -1;
// } 


/* Квадратичная сложность O(n^2) (вложенные циклы) */ 
// const createTableMult = (limit) => {
//     const table = [];
//     for(let i = 1; i <= limit; i++){
//         for(let j = 1; j <= limit; j++){
//             table.push(`${i} * ${j} = ${i * j}`);
//         }
//     }
//     return table;
// }
// console.log(createTableMult(5)); // (25)


/* Логарифмическая сложность (отсортированный массив) - бинарный поиск */
// const sortedArr = [4, 5, 6, 7, 8, 9]; 

// const binarySearch = (arr, key) => {
//     let start = 0;
//     let end = arr.length-1;
//     let middle; // index
//     while(start <= end){
//         middle = Math.round((start + end) / 2);
//         if(arr[middle] === key){
//             return middle;
//         }
//         if(arr[middle] < key){
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch(sortedArr, 6)); // 2


/* Связанные списки */