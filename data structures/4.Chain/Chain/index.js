"use strict";

class Point{
    constructor(){
        this.x = 0;
        this.y = 0;
    };

    move(x=1,y=1){
        this.x += x;
        this.y += y;

        return this;
    };

    getPosition(){
        return {x: this.x, y:this.y};

        return this;
    };
};

let result = new Point().move(4,3).move(7,7).getPosition();
console.log(result);