/* ОБЪЕКТЫ */
/* Синтаксический сахар */
// const object = { 
//     display: 'flex', // свойства
//     margin: '15px',
//     justifyContent: 'center',
//     visibility: true,
//     resize: function(){ // методы
//         return 'resize';
//     },
// };


// const cat = {
//     name: 'Muha',
//     isMale: false,
//     color: 'grey',
//     breed: 'yard',
//     age: 2,
//     isSleeping: true,
//     talk: function(){
//         return 'meow';
//     },
//     run: function(){
//         return 'i\'m running';
//     },
// };

// //alert(cat); // не используется
// cat.age++; // age: 3 (чтобы увеличить число)
// console.log(cat);
// console.log(cat.name); // чтобы посмотреть только свойство name
// console.log(cat.talk()); //чтобы выводить только методы
// delete cat.isSleeping; // чтобы удалять свойства
// cat.countLegs = 4; // чтобы добавлять свойства


/* Функция конструктор */
function Cat(name, isMale, color, breed, age){ // название функции конструктора начинается с большой буквы
    this.name = name;
    this.isMale = isMale;
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.talk = function(){
        return 'meow';
    };
} 

const newCat = new Cat('Muha', false, 'grey', 'yard', 2); // директива new создает новые объекты
const kitty = new Cat('Kitty', false, 'white', 'pers', 3);
console.log(kitty.name + ' tells ' + kitty.talk()); // kitty tells meow


/* Задача: Создать функцию конструктор для пользователя, где будут указаны:
name, thurname, age. Метод возвращает full name (name + thurname).
Создать трех пользователей */
function User(name, thurname, age){
    this.name = name;
    this.thurname = thurname;
    this.age = age;
    this.fullName = function(){
        return this.name + ' ' + this.thurname;
    };
}

const userIvan = new User('Ivan', 'Yaremko', 24);
const userAnna = new User('Anna', 'Pakhmutova', 20);
const userNazar = new User('Nazar', 'Ptushchenko', 26);
console.log(userNazar.name + ' tells ' + userNazar.fullName());


/* Задача: Создать функцию конструктор Country для пользователя, где будут указаны:
name, population, area. Метод возвращает getDensity (population / area). */
function Country(name, population, area){
    this.name = name;
    this.population = population;
    this.area = area;
    this.getDensity = function (){
        return this.population / this.area;
    };
}

const countryUkraine = new Country('Ukraine', 603700, 40);
const countryItalia = new Country('Italy', 302073, 59);
const countryGermany = new Country('Germany', 357588, 83);
console.log(countryItalia.getDensity()); // 5119.8813


/* Задача: Создать функцию конструктор Auto для пользователя, где будут указаны:
name, maxSpeed, speed = 0. Метод возвращает accelerate(value), break(value), stop(value) */
function Auto(name, maxSpeed){
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.accelerate = function(value){
        if(value < 0){
            return false; // чтобы нельзя было прописать число с минусом
        }
        this.speed += value;
        if(this.speed >= this.maxSpeed){
            return (this.speed = this.maxSpeed);  // потому что скорость никак не может быть больше maxSpeed
        }
        return this.speed;
    };
    this.break = function(value){
        if(value < 0){
            return false;
        }
        this.speed = this.speed - value;
        if(this.speed < 0){
            return (this.speed = 0);  // потому что скорость никак не может быть меньше ноля
        }  
        return this.speed;
    };
    this.stop = function(){
        return (this.speed = 0);
    };
}

const carBmw = new Auto('BMW', 250);
