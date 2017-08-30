"use strict";

let handlers;
class Observer{
    constructor(){
        handlers = [];
    };

    subscribe(cb){
        handlers.push(cb);
    };

    unsubscribe(cb){
        handlers = handlers.filter(item=>{
            if(item !== cb){
                return item;
            }
        });
    };
    fire(o, thisObject){
        let scope = thisObject || window;
        handlers.forEach()
    };
};

module.exports = Observer;