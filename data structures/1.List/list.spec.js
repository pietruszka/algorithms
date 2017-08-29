"use strict";
const assert = require('assert');
const expect = require('chai').expect;
const List = require('./List');
describe('List testing', function() {
    it("should length equal 1", ()=>{
        let lista = new List();
        lista.append({el:1});
        console.log(lista.getElement());
        expect(lista.length()).to.equal(1);
    });

});
