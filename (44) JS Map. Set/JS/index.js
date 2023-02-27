'use strict';
/* Деструктуризация - способ создания переменной */
const user = {
    privateInfo: {
        id: 123,
        name: 'Ivan',
        thurName: 'Shev',
        bDay: {
            day: 12,
            month: 7,
            year: 1996,
        },
    },
    contactInfo: {
        phone: '123-23-23',
        adress: {
            town: 'New York City',
            street: 'Avenue',
            house: 311,
        },
        mail: 'ivanshev@gmail.com',
    },
    profession: 'teacher',
}

console.log(user.privateInfo.bDay.day); // 12

const {profession:profUser} = user;
console.log(profUser); // teacher

const {privateInfo:{name:userName, thurName:userThurName}, contactInfo:{phone}} = user;
console.log(userName); // Ivan
console.log(userThurName); // Shev
console.log(phone); // 123-23-23

const {privateInfo:{bDay:{year}}} = user;
console.log(year); // 1996

const getFullName = ({privateInfo:{name, thurName}}) => {
    return `${name} ${thurName}`;
}

console.log(getFullName(user)); // Ivan Shev


const nums = [1, 2, 3, 4, 5];

const [one, ...rest] = nums; // (4) [2, 3, 4, 5]
