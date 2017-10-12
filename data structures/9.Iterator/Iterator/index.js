
class Iterator{
    constructor(items){
        this.index = 0;
        this.items = items;
    };

    first(){
        this.reset();
        return this.next();
    };
    next(){
        return this.items[this.index++];
    };
    hasNext(){
        return this.index <= this.items.length;
    };
    reset(){
        this.index = 0;
    };
    each(cb){
        for(let i=this.first(); this.hasNext(); i=this.next()){
            cb(i);
        }
    };
}

let it = new Iterator([1,3,5]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


module.exports = Iterator;