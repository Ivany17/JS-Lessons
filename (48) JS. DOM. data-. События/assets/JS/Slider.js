class Slider {
    constructor(images, currentIndex=0){
        this._images = images;
        this._currentIndex = currentIndex;
    }
    get images(){
        return this._images;
    }
    get currentIndex(){
        return this._currentIndex;
    }
    set currentIndex(value){
        if(typeof value !== 'number' || !Number.isInteger(value) || value < 0){
            throw new TypeError();
        }
        this._currentIndex = value;
    }
    get currentSlide(){
        return this._images[this.currentIndex];
    }
    get nextIndex(){
        return (this._currentIndex+1)%this._images.length;
    }
    get prevIndex(){
        return (this._currentIndex-1 + this._images.length)%this._images.length;
    }
}