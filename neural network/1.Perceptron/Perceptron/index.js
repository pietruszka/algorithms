"use strict";

const sign = (num)=>{
    if(num >= 0) return 1;
    return -1;
};

class Perceptron {
    constructor(){
        //set initial random weights of input data
        this.weight = [(Math.random()*2)-1,(Math.random()*2)-1];
    };

    guess(inputs){
        let sum = 0;
        if(!Array.isArray(inputs)) throw new TypeError("Input argument should be an array.");
        if(inputs.length !== 2) throw new TypeError("Algorithm expect inputs argument of size 2.");
        inputs.map((input, index) => sum += input * this.weight[index]);
        return sign(sum);
    };
};

module.exports = Perceptron;