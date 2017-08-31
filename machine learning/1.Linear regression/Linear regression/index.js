"use strict";


class LinearRegression{
    constructor(set){
        this.set = set;
    };

    _avg(){
        let sumX = 0, sumY = 0;
        for(let number of this.set){
            sumX += number.x;
            sumY += number.y;
        }
        return {avgX: sumX/this.set.length, avgY: sumY/this.set.length};
    };

    calculate(){
        let num = 0, dom = 0, avg = this._avg();
        for(let number of this.set){
            num += (number.x - avg.avgX)*(number.y-avg.avgY);
            dom += Math.pow((number.x - avg.avgX),2);
        }

        let m = num/dom;
        let b = avg.avgY - m * avg.avgX;

        return {m,b};
    };
}

let lr = new LinearRegression([{x:1,y:3},{x:2,y:7},{x:3,y:3},{x:4,y:6}]);
console.log(lr.calculate());

