"use strict";
const assert = require('assert');
const expect = require('chai').expect;
const Perceptron = require('./Perceptron');
const Point = require('./Perceptron/Point');
describe('Perceptron execution', function() {
    describe('#guess()', function() {
        it('should throw Error object if input argument isn\'t a table', function() {
            expect(()=>{new Perceptron().guess(1)}).to.throw(TypeError, /Input argument should be an array./);
            expect(()=>{new Perceptron().guess("1")}).to.throw(TypeError, /Input argument should be an array./);
            expect(()=>{new Perceptron().guess([1,2])}).to.not.throw(TypeError, /Input argument should be an array./);

        });
        it('should throw Error when input array\'s length is not equal 2', ()=>{
            expect(()=>{new Perceptron().guess([1,2])}).to.not.throw(TypeError, /Algorithm expect inputs argument of size 2./);
            expect(()=>{new Perceptron().guess([1,2,3])}).to.throw(TypeError, /Algorithm expect inputs argument of size 2./);
            expect(()=>{new Perceptron().guess([1])}).to.throw(TypeError, /Algorithm expect inputs argument of size 2./);
        });
    });
});
describe('Perceptron performence', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            let perceptron = new Perceptron(0.1);

            // learning set y=x
            let learningSet = [];
            for(let i = 0; i<1000; i++){
                let point = new Point();
                learningSet.push(point);
                console.log(point.showPoint(),'[1111]');
            }
            console.log(perceptron.showWeights(), learningSet.map(el=>el.showPoint().x));
            learningSet.forEach(point=>perceptron.train([point.showPoint().x, point.showPoint().y], point.showPoint().result));
            console.log(perceptron.showWeights(), (perceptron.showWeights()[0]/perceptron.showWeights()[1])*100);

            console.log([0.5,0.5], perceptron.guess([0.5,0.5]));
            console.log([0.7,0.5], perceptron.guess([0.7,0.5]));
            console.log([0.8,0.5], perceptron.guess([0.8,0.5]));
            console.log([0.4,0.5], perceptron.guess([0.4,0.5]));
            console.log([0.2,0.5], perceptron.guess([0.3,0.5]));
            console.log([0.1,0.5], perceptron.guess([0.2,0.5]));



            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});
console.log(new Perceptron().guess([1,5]));