'use strict';
// /* Сереализация - процесс перевода структуры данных в последовательность байтов
// значение undefined, функция не сереализуются */
// const user = {
//   name: 'Elon',
//   thurName: 'Musk',
//   age: 50,
//   getFullName(){
//     return `${this.name} ${this.thurName}`;
//   },
//   children: ['one', 'two'],
//   isAdult: true,
//   hasPet: undefined,
//   isUkrainian: null,
//   [Symbol('test')]: 123,
//   friends: {
//     friend1: 'Tom',
//     friend2: 'Tim',
//   }
// }
// console.log(user);
// const serializeUser = JSON.stringify(user);
// console.log(serializeUser);

// /* Десереализация */
// const deserializeUser = JSON.parse(serializeUser);
// console.log(deserializeUser);


// function f(){ // бесконечный цикл
//   console.log(1);
//   setTimeout(() => {
//     f();
//   }, 0)
// }

// f()


// let i = 0;
// function f(){
//   console.log(i++);
//   f();
// }

// f();


// const id = setTimeout( // setTimeout - синхронная функция
//   () => {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//   },
// 200)

// clearTimeout(id);


/* Promises - возможность ассинхронных действий */
// const promise = fetch('./assets/js/data.json');
// // console.log(promise);
// promise.then((response) => {
//     console.log('ok'); // ok
//     console.log(response); // Response {type: 'basic', url: 'http://127.0.0.1:5500/(53)%20JS%20Promise/assets/js/data.json', redirected: false, status: 200, ok: true, …}
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.table(data);
//     })
// })

fetch('./assets/js/data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        /* Задача: вывести в консоль только строковый параметр */
        data.forEach((user) => {
            console.log(user.name);
        });
    })
    .catch((error) => {console.log(error);})
    .finally(() => {console.log('end');})


const myFirstPromise = new Promise(executor);

function executor(resolve, reject){
    Math.random() > 0.5 ? resolve() : reject();
}

myFirstPromise
    .then((data) => {console.log(data);})
    .catch((err) => {console.log(err);})

function timeOut(ms){
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms);
    })
}


/* Подгружаем картинку */
function loadImage(path){
    const image = new Image(); // конструктор для создания картинок
    image.src = path;
    return new Promise((resolve, reject) =>{
        image.addEventListener('load', () => {
            resolve(image);
        })
        image.addEventListener('error', () => {
            reject(new Error('path invalid'))
        })
    }) 
}

loadImage('https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652341068/EducationHub/photos/ocean-waves.jpg')
.then((elem) => {
    document.body.prepend(elem);
})
.catch((err) => {
    console.log(err);
})