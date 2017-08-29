"use strict";
let listSize;
let pos;
let dataStore;

class List {
    constructor(){
        listSize = 0;
        pos = 0;
        dataStore = [];
    }

    append(element){
        dataStore[listSize++] = element;
    };

    insert(element, after){
        let insertPos = this.find(after);
        if(insertPos > -1){
            dataStore.splice(insertPos+1, 0, element);
            ++listSize;
            return true;
        }
        return false;
    };

    clear(){
        dataStore = [];
        listSize  = 0;
        pos = 0;

    };

    contain(element){
        for(let i = 0; i < dataStore.length; i++){
            if(dataStore[i] == element){
                return true;
            }
        }
        return false;
    };

    find(element){
        for(let i = 0; i < dataStore.length; i++){
            if(this.dataStore[i] == elemement){
                return i;
            }
        }
        return -1;
    };

    remove(element){
        let foundAt = this.find(element);
        if(foundAt > -1){
            dataStore.splice(foundAt, 1);
            --listSize;
            return true;
        }
        return false;
    };

    length(){
        return listSize;
    };


    front(){
        pos = 0;
    };

    end(){
        pos = listSize -1;
    };

    prev(){
        if(pos>0){
            --pos;
        }
    };

    next(){
        if(pos<listSize-1){
            ++pos;
        }
    };

    currentPosition(){
        return pos;
    };

    moveTo(position){
        pos = position;
    };

    getElement(){
        return dataStore[pos];
    };
}

module.exports = List;