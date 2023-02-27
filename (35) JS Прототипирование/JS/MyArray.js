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

const myArray = new MyArray(1, 1, 12, 15, 77);
myArray.push(1, 2, 3);
myArray.pop();
console.log(myArray);