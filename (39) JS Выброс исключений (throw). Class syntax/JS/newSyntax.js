'use strict'; // здесь не обязательный
/* Пишем такую же функцию, как и в oldSyntax.js, но с новым синтаксисом */
class UserClass{
    /**
     * 
     * @param {string} name 
     * @param {string} thurName 
     * @param {number} age 
     */
    constructor(name, thurName, age){
        this.name = name;
        this.thurName = thurName;
        //this._age = age; // по соглашению, если свойство начинается с нижнего подчеркивания (_age) - к нему нельзя обращаться вне класса
        this.age = age; // вызов setter
    }
    get age(){
        return this._age; // чтобы посмотреть на (_age)
    }
    set age(age){
        if(typeof age !== 'number'){
            throw new TypeError('Age must be number');
        }
        if(age < 0 || age > MAX_AGE){
            throw new RangeError(`Age must be > 0 and < ${MAX_AGE}`);
        }
        this._age = age;
    }
    get fullName(){
        return `${this.name} ${this.thurName}`;
    }
    set fullName(newFullName){
        if(typeof newFullName !== 'string'){
            throw new TypeError('Name must be string');
        }
        const arrFullName = newFullName.split(' ');
        if(arrFullName.length !== 2){
            throw new RangeError('Name must be = 2.');
        }
        this.name = arrFullName[0];
        this.thurName = arrFullName[1];
    }
    isAdult(){
        return this.age >= ADULT_AGE;
    }
    static createTestUser(){  // статическое свойство
        return new UserClass('Test', 'Thurtest', 35);
    }
}

UserClass.createTestUser() // UserClass {name: 'Test', thurName: 'ThurTest', _age: 35}

const user2 = new UserClass('Ann', 'Lezed', 20);
console.log(user2.age); //20 (когда у нас get - скобочки не ставим)

/* Задача: создать класс Worker (name, thurName, rateForDay, dayOfWork)
countTheSalary() */
class Worker{
    constructor(name, thurName, rateForDay, dayOfWork){
        this.name = name;
        this.thurName = thurName;
        this.rateForDay = rateForDay;
        this.dayOfWork = dayOfWork;
    }
    getTheSalary(){
        return this.rateForDay * this.dayOfWork;
    }
}

const worker1 = new Worker('Igor', 'Miroshnik', 20, 5);
console.log(worker1.getTheSalary()); // 100