"use strict";

let handlers;
class Observer{
    constructor(){
        handlers = [];
    };

    subscribe(observer){
        handlers.push(observer);
    };

    unsubscribe(observer){
        handlers = handlers.filter(item=>{
            if(item !== observer){
                return item;
            }
        });
    };
    notify(){
        for(let i=0; i<handlers.length; i++){
            handlers[i].onUpdate();
        }
    };
};

class ObserableObject extends Observer{
    constructor(){
        super();
        this.subscribe(new Notif());
        this.subscribe(new Notif());
        this.subscribe(new Notif());

        this.notify();
    };

};

class Notif{
    onUpdate(){
        console.log('update!');
    };
};
new ObserableObject();

module.exports = Observer;