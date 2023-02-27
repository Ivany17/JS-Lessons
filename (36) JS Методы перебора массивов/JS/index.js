/* Функции высшего порядка - те функции, котрые принимают аргументом другие функции */
// /**
//  * 
//  * @param {function} howToSay 
//  * @param {string} whatToSay 
//  */
// function saySomething(howToSay, whatToSay){
//     howToSay(whatToSay);
// }

// saySomething(console.log, 'qwerty'); //qwerty


/* Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве */
// const nums = [1, 2, 3, 4, 5];

// function square(n){
//     console.log(n*n);
//     return n*n;
// }

// nums.forEach(square); // 1, 4, 9, 16, 25

// nums.forEach(
//     function(n){
//         console.log(n*n*n); // 1, 8, 27, 64, 125
//         return n*n*n;
//     }
// )


// const users = [{}, {}, {}];

// function addSubscribe(user){
//     user.isSubscribed = true;
// }

// users.forEach(addSubscribe);


/* Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в предыдущей функции
Если хотя-бы один элемент удовлетворяет условию - мы вернем true, если ни один не совпадает - false
При пустом массиве ВСЕГДА возаращает false */
// function isEven(n){
//     return n%2===0;
// }

// myArray.some(isEven); // true


// /* Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в предыдущей функции */
// function isOdd(n){
//     return n%2===0;
// }

// myArray.every(isOdd); // false


// /* Метод filter() создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции */
// function moreThenTen(n){
//     return n > 10;
// }

// myArray.filter(moreThenTen); // 12, 15, 77


/* Функция конструктор,которая создает пользователей */
function User (firstName, lastName, age, isMale, email, isSubscribed = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

function UserPrototype(){
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype = new UserPrototype();

function createRandomUsers(amount = 1){
    const db = [];
    for (let i = 0; i < amount; i++) {
        const user = new User(
            `Name${i}`,
            `Lname${i}`, // Math.ceil (91) - это округление числа в большую сторону
            Math.ceil(Math.random()*60+20), // мы хотим получить возраст от 20 до 80. Чтобы получить диапазон - нужно получить разницу этого диапазона (80-20=60) (20 - это нижняя граница нашего диапазона)
            Math.random() > 0.5, //true || false
            `email${i}@gmail.com`
            );
        db.push(user);
    }
    return db;
}

const users = createRandomUsers(50); // чтобы создать 50 пользователей
users.forEach(function(user){
    user.isSubscribed = (Math.random() > 0.5);
});
console.table(users); // если мы хотим увидеть данные в виде таблицы

/* Получить массив полных имен пользователей, используя метод map() */
/* Метод map() создает новый массив с результатом вызова указанной функции для каждого элемента массива. */
const fullNameUsers = users.map(function(user){
    return user.fullName();
});
console.table(fullNameUsers); // 'Name0 Lname0' ... 'Name99 Lname99'

/* Получить массив пользователей, которые старше 65, используя метод filter() */
function peopleAreOld(user){
    return user.age >= OLD_AGE;
}
const oldUSers = users.filter(peopleAreOld);
console.table(oldUSers); // age: 69, 72, 81...
