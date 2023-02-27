/* НАСЛЕДОВАНИЕ (__proto__) */
// function toString(){ // здесь мы переопределяем метод прототипа
//     return `${this.firstName} ${this.lastName}`;  
// }

// const animal = {
//     go: function(){
//         return `${this.firstName} is walking`;
//     } 
// }

// const man = {
//     eat: function(){
//         return `${this.firstName} is eating`;
//     }
// }

// man.__proto__ = animal;

// const student1 = { // {} - это синтаксический сахар 
//     id: 1,
//     firstName: 'Ivan',
//     lastName: 'Yarem',
//     age: 24,
//     isMale: true,
//     toString: toString, // если свойство является методом, то можно назначить этот метод (39)
// };
// console.log(student1.toString()); // Ivan Yarem
// student1.__proto__ = man; // __proto__ - свойство, которое позволяет наследоваться одному литеральному объекту от второго
// console.log(student1.eat()); // Ivan is eating
// console.log(student1.go()); // Ivan is walking

// const student2 = {
//     id: 2,
//     firstName: 'Anna',
//     lastName: 'Lezed',
//     age: 20,
//     isMale: false,
//     toString, // свойства, у которых значения являются функциями называются методами
// }
// console.log(student2.toString());
// student2.__proto__ = man;
// console.log(student2.eat());

/* Переделываем всё на конструктор */
// function Student(firstName, lastName, age, isMale){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.isMale = isMale;
// };

// const student = new Student('Ivan', 'Yarem', 24, true);

// console.log(student);

/* Создаем такую же функцию, но уже без new (53) (Хотя там всё равно есть new.. непонятно) */
// function StudentPrototype(){
//     this.toString = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     this.eat = function(){
//         return `${this.firstName} is eating`;
//     }
//     this.go = function(){
//         return `${this.firstName} is walking`;
//     } 

// }

// /**
//  * 
//  * @param {string} firstName 
//  * @param {string} lastName 
//  * @param {number} age 
//  * @param {boolean} isMale 
//  * @returns instance Student
//  */
// function Student(firstName, lastName, age, isMale){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.isMale = isMale;
//     if(!new.target){ // new - это директива, а target - это свойство этого объекта new
//         return new Student(firstName, lastName, age, isMale);
//     }
// };
// Student.prototype = new StudentPrototype();

// const student = new Student('Ivan', 'Yarem', 24, true);

// console.log(student.toString());


/* Задача: создать функцию newLadder();
value - текущая ступенька (начальная = 0)
newLadderPrototype();

up();
down();
showStep(); */
function Ladder(){
    this.value = 0;
}

function LadderPrototype(){
    this.up = function(){
        this.value++;
        return this;
    }
    this.down = function(){
        this.value--;
        return this;
    }
    this.showStep = function(){
        return this.value;
    }
}

Ladder.prototype = new LadderPrototype();

const ladder1 = new Ladder();

const step = ladder1.up().up().up().down().up().up().down().showStep(); //3
console.log(step);