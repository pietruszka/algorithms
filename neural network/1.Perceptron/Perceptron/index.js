"use strict";
//step 2. activation function
const sign = (num)=>{
    if(num >= 0) return 1;
    return -1;
};

class Perceptron {
    constructor(learningRate){
        //set initial random weights of input data
        this.weight = [(Math.random()*2)-1,(Math.random()*2)-1];
        this.lr = learningRate || 0.1;
    };

    guess(inputs){
        let sum = 0;
        if(!Array.isArray(inputs)) throw new TypeError("Input argument should be an array.");
        if(inputs.length !== 2) throw new TypeError("Algorithm expect inputs argument of size 2.");

        //step 1. count sum
        inputs.map((input, index) => sum += input * this.weight[index]);
        return sign(sum);
    };

    train(inputs, target){
        let guess = this.guess(inputs);
        let err = target - guess;
        console.log('bef',this.weight, inputs, guess, err)

        for(let i=0;i<this.weight.length;i++){
            this.weight[i] += err * inputs[i] * this.lr;
        }
        console.log('aft',this.weight)
    };

    showWeights(){
        return this.weight;
    };
};

module.exports = Perceptron;