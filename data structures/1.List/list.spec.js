"use strict";
const assert = require('assert');
const expect = require('chai').expect;
const List = require('./List');
describe('List testing', function() {
    it("should length equal 1", ()=>{
        let lista = new List();
        lista.append("tekst");
        lista.append("tekst2");
        lista.append("tekst3");
        console.log(lista.getAllElements());
        lista.reclocate(1,2);
        console.log(lista.getAllElements());
        expect(lista.length()).to.equal(1);
    });

});
