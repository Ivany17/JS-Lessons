class Queue {
    constructor(){
        this._head = 0;
        this._tail = 0;
        for (const argument of args) {
            this.push(argument);
        }
    }
    get size(){
        return this._tail - this._head;
    }

    push(value){ // добавляет в очередь
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }
    unshift(){ // удаляет из очереди
        if(this.size){
            const delItem = this[this._head];
            delete this[this._head];
            return delItem;
        }
    }
}