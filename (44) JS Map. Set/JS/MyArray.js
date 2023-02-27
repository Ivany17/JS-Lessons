/* Работа с неограниченным колличеством аргументов */
/* data */
function MyArray(){
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.push(arguments[i]);
    }
}
/* logic */
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
        this.forEach = function(func){
            for (let i = 0; i < this.length; i++) {
                func(this[i]); 
            }
        }
        this.some = function(func){
            for (let i = 0; i < this.length; i++) {
                if(func(this[i])){
                    return true;
                }
            }
            return false;
        }
        this.every = function(func){
            for (let i = 0; i < this.length; i++) {
                if(func(this[i])===false){
                    return false;
                }
            }
            return true;
        }
        this.filter = function(func){
            const result = new MyArray();
            for (let i = 0; i < this.length; i++) {
                if(func(this[i])){
                    result.push(this[i]);
                }
            }
            return result;
        }
};
/* prototype */
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1, 1, 12, 15, 77);
myArray.push(1, 2, 3);
myArray.pop();
console.log(myArray);