"use strict";

class Point{
    constructor(){
        this.x = (Math.random()*2)-1;
        this.y = (Math.random()*2)-1;

        if(this.x>this.y) this.result = 1;
        else this.result = -1;
    };

    showPoint(){
        return {x:this.x,y:this.y,result:this.result};
    };


}


module.exports = Point;