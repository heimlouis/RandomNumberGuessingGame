class Random{
    constructor(min,max){
        this.min=min;
        this.max=max;
    }

//random nunber function
    generateRandom(){
        return Math.floor(Math.random() * (1 + this.max - this.min) + this.min);
    }
}

module.exports = Random;