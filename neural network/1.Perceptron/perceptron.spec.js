"use strict";
const assert = require('assert');
const expect = require('chai').expect;
const Perceptron = require('./Perceptron');
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
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});
console.log(new Perceptron().guess([1,5]));