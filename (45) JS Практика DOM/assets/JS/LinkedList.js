class LinkedListIterator {
    constructor(list){
        this.list = list;
        this.currentElem = null;
    }
    next(){
        this.currentElem = this.currentElem
            ? this.currentElem.next
            : this.list.head;
        return {
            value: this.currentElem ? this.currentElem.value : undefined,
            done: !this.currentElem,
        }
    }
}

class ListItem {
    constructor(value){
        this._value = value;
        this.next = null;
        this.previous = null;
    }
    get value(){
        return this._value;
    }
    set value(value){
        this._value = value;
    }
}
class LinkedList {
    constructor(...args){ // rest - собирает элементы в массив // args === [1, 2, 3, 4]
        this.length = 0;
        this.head = null;
        this.tail = null;
        for (const argument of args){
            this.push(argument);
        }
    }
    push(argument){
        const newItem = new ListItem(argument);
        if(this.length === 0){
            this.head = newItem;
            this.tail = newItem;
        } else {
            this.tail.next = newItem;
            newItem.previous = this.tail;
            this.tail = newItem;
        }
        return ++this.length;
    }
    [Symbol.iterator](){
        return new LinkedListIterator(this);
    }
}

const list = new LinkedList(1, 2, 3, 4);
console.log(...list); // 1 2 3 4