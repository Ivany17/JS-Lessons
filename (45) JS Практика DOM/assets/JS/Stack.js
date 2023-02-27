class Stack {
    constructor(maxSize, ...args){
        this._maxSize = maxSize;
        this._size = 0;
        for (const argument of args) {
            this.push(argument);
        }
    }
    get size(){
        return this._size;
    }
    get isEmpty(){
        return this._size === 0;
    }
    push(argument){
        if(this.size >= this._maxSize){
            throw new RangeError('Stack overflow!');
        }
        this[`_${this.size}`] = argument;
        return ++this._size;
    }
    pick(){
        return this[`_${this.size - 1}`];
    }
    pop(){
        if(this.isEmpty) {
            return;
        }
        const lastItem = this[`_${this.size - 1}`];
        delete this[`_${this.size - 1}`];
        this._size;
        return lastItem;
    }
}

const stack1 = new Stack(3);


/* Задача: проверить правильность расстановки скобок ()() - true; (()) - true */
const options = {
    brackets: {
        '(': ')',
        '[': ']',
        '{': '}',
    },
    isStrict: false,
}

/**
 * @param {object} options
 * @param {string} str 
 * @returns {boolean}
 */
const checkSequence = (str, options)=>{
    const brackets = options.brackets;
    const closesBrackets = Object.values(brackets);
    const stack = new Stack(str.length);
    for (const symbol of str) {
        if(brackets[symbol]){
            stack.push(symbol);
            continue;
        }
        const lastBreaketOfStack = stack.pick();
        const correctBracket = brackets[lastBreaketOfStack];
        if(symbol === correctBracket){
            stack.pop();
        } else if(closesBrackets.includes(symbol)){
            return false;
        }
    }
    return stack.isEmpty;
}

console.log(checkSequence('()', options)); // должно быть true, а у меня false 
console.log(checkSequence('(5+2)*(7-5)-([2.0]/{44})', options)); 