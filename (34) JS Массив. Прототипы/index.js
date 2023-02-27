// const obj = {};
// obj.prop1 = 12;
// obj['prop 1'] = 12;


// const t1 = 1; //Когда мы сравниваем примитивы с одинаковыми значениями
// const t2 = 1; // то t1=t2

// const obj1 = {}; // когда мы сравниваем объекты с одинаковыми з-начениями,
// const obj2 = {}; // то obj1!=obj2 (не равно), ведь здесь сравниваются адреса

// const link = obj1; // копирование по ссылке
// console.log(obj1 === link); // true, потому что эти адреса одинаковы
// console.log(obj2 === link); // false, потому что эти адреса не одинаковы

// link.prop2 = 44; // значит у obj1 появилось новое свойство prop2

/* Напоминаем способы создания объектов */
// const obj1 = {}; // синтаксический сахар
// const obj2 = Object();
// const obj3 = new Object();

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// function MyObj(){
//     //new моздает пустой объект для функции конструктора и этот новый объект - this
//     if(!new.target){ //теперь мы можем создавать объекты без слова new
//         return new MyObj();
//     }
// }

// const myObj = MyObj(); 
// console.log(myObj); // MyObj{}

// const myObj2 = new MyObj(); 
// console.log(myObj2); // MyObj{}


/* МАССИВЫ (ARRAY) */
// const phArray = new Array('123-45-67', '890-12-34', '567-89-01');
// const phArray2 = ['123-45-67', '890-12-34', '567-89-01']; // синтаксический сахар


//console.dir(f) // чтобы посмотреть на функцию, как на объект


/* logic */
// function MyArrayProto(){
//     this.push = function(item){ // push - добавляет элемент в конец
//         this[this.length] = item;
//         return ++this.length;
//         }
//         this.pop = function(){ // pop - удаляет последний элемент
//             if(this.length===0){
//                 return; // Если вызвать pop() на пустом массиве,он вернет undefined 
//             }
//             const item = this[--this.length-1];
//             delete this[this.length];
//             return item;
//         }
// };
// /* data */
// function MyArray(){
//     this.length = 0;
// }
// /* prototype - статическое свойство, потому что вызывается ТОЛЬКО от имени конструктора*/
// MyArray.prototype = new MyArrayProto(); // prototype указывает, от кого мы должны наследоваться

// const myArray = new MyArray();


/* Работа с неограниченным колличеством аргументов */
function MyArrayProto(){
        this.push = function(){ 
            for (let i = 0; i < arguments.length; i++) {
                this[this.length++] = arguments[i];  
            }
            return this.length;
        }
            this.pop = function(){ 
                if(this.length===0){
                    return; 
                }
                const item = this[--this.length];
                delete this[this.length];
                return item;
            }
    };

    function MyArray(){
        this.length = 0;
        for (let i = 0; i < arguments.length; i++) {
            this.push(arguments[i]);
        }
    }
   
    MyArray.prototype = new MyArrayProto();
    MyArray.prototype.newMethod = function(){}; 
    
    const myArray = new MyArray(1, 1, 12, 15, 77);
    myArray.push(1, 2, 3);
    myArray.pop();
    console.log(myArray);