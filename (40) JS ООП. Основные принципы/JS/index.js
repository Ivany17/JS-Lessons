'use strict';
// class Animal{ // class - это синтаксический сахар. Удобный способ создания функции конструктор
//     constructor(name, amountOfLegs, type){
//         this.name = name; // set name
//         this._amountOfLegs = amountOfLegs;
//         this._type = type;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if(typeof value === 'string'){
//             return this._name = value;
//         }
//         throw new TypeError('Name is incorrect');
//     }
//     eat(){
//         return `${this._name} is eating`;
//     }
//     static isAnimal(obj){
//         return obj instanceof Animal; // - instanceof оператор, который проверяет, принадлежит ли объект к определенному классу
//     }
// }

// const cat1 = new Animal('Pushok', 4, 'cat');
// const dog1 = new Animal('Rem', 4, 'dog');


/* 1. Инкапсуляция
   2. Наследование
   3. Полиморфизм */


/* Наследование - расширение класса */
// class User{
//     constructor(name, thurName, age){
//         this.name = name;
//         this.thurName = thurName;
//         this.age = age;
//         this.isBanned = false;
//     }
//     getFullName(){
//         return `${this.name} ${this.thurName}`;
//     }
//     static isUser(obj){
//         return obj instanceof User;
//     }
// }

// class Moderator extends User { // оператор extends указывает от какого класса наследуется другой класс
//     constructor(name, thurName, age, rules){
//         super(name, thurName, age); // super - обращение к родительскому классу (в данном случае к классу User)
//         this.rules = rules;
//     }
//     addMessage(message){}
//     removeMessage(id){}
// }

// class Admin extends User {
//     constructor(name, thurName, age, mail){
//         super(name, thurName, age);
//         this.mail = mail; // новое свойство нужно писать исключительно после super
//     }
//     toggleBan(obj){
//         if(User.isUser(obj)){
//             obj.isBanned = !obj.isBanned;
//         }
//     }
// }

// const user = new User('Ivan', 'Yarem', 24);
// const admin = new Admin('Demian', 'Mnogogrishniy', 32, 'tigrolove@gmail.com');


/* Создать class Squirell (name, color, jumping) =>
=> class FlyingSquirell (..., flying, maxDistanceOfFlying) =>
=> class PushkinSquirell (..., dance, sing, massOfTheSongs) */
// class Squirell{
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     }
//     jump(){
//         return `I\'m jumping`;
//     }
// }

// class FlyingSquirell extends Squirell{
//     constructor(name, color, maxDistanceOfFlying){
//         super(name, color);
//         this.maxDistanceOfFlying = maxDistanceOfFlying;
//     }
//     fly(){
//         return `I\'m flying`;
//     }
// }

// class PushkinSquirell extends FlyingSquirell{
//     constructor(name, color, maxDistanceOfFlying, massOfTheSongs){
//         super(name, color, maxDistanceOfFlying);
//         this.massOfTheSongs = massOfTheSongs;
//     }
//     sing(){
//         return `I\'m singing ${this.massOfTheSongs.join(',')}.`;
//     }
//     sing2(){
//         this.massOfTheSongs.forEach((song) => {console.log(song)});
//     }
//     dance(){
//         return `I\'m dancing`;
//     }
// }

// const pushkin = new PushkinSquirell('Lena', 'silver', 13, ['song1', 'song2', 'song3']);

// console.log(pushkin.sing()); // I'm singing song1,song2,song3.
// console.log(pushkin.jump()); // I'm jumping
// console.log(pushkin.fly()); // I'm flying
// console.log(pushkin.dance()); // I'm dancing


/* Инкапсуляция - скрытие логики (сложности) объекта, где нельзя менять свойства напрямую, а можно только через setter */
class Figure{
    constructor(name){
        this.name = name;
    }
    getArea(){} // getArea() - функция для расчета площади фигуры
}

/* Создаем class Triangle и найдем площадь треугольника, имея две стороны a, b, и угол angle.
(S = 1/2 * a * b * sin(angle). Поскольку нам нужны градусы, а функция дает углы только в радианах, то
нам необходимо перевести углы из радианов в градусы (180/ число PI)  */
class Triangle extends Figure{
    constructor(a, b, angle){ // если мы уверены в свойстве (name), то в конструкторе zего можно уже не добавлять
        super('Triangle');
        this.a = a;
        this.b = b;
        this.angle = angle;
    }
    getArea(){
        return 0.5 * this.a * this.b * Math.sin(this.angle * (180 / Math.PI));
    }
}

class Circle extends Figure{
    constructor(r){ 
        super('Circle');
        this.r = r;
    }
    getArea(){
        return this.r * this.r * Math.PI;
    }
}

class Square extends Figure{
    constructor(a){ 
        super('Square');
        this.a = a;
    }
    getArea(){
        return this.a * this.a;
    }
}

const tri = new Triangle(3, 4, 45);
const circ = new Circle(20);
const squa = new Square(25);


/* Полиморфизм  - способность функции обрабатывать данные разных типов*/
function getAreaFigure(figure){
    return figure.getArea();
}

getAreaFigure(tri); // 4.8364529466955055
getAreaFigure(circ); // 1256.6370614359173
getAreaFigure(squa); // 625