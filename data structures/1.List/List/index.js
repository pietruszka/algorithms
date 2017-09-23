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

    //Add new element to the end.
    append(element){
        dataStore[listSize++] = element;
    };
    //Add new element after existing.
    insert(element, after){
        let insertPos = after;
        if(insertPos > -1){
            dataStore.splice(insertPos+1, 0, element);
            ++listSize;
            return true;
        }
        return false;
    };

    //Delete all list elements.
    clear(){
        dataStore = [];
        listSize  = 0;
        pos = 0;

    };
    //Check if element exists in the list. Return boolean.
    contain(element){
        for(let i = 0; i < dataStore.length; i++){
            if(dataStore[i] == element){
                return true;
            }
        }
        return false;
    };
    //Find element in the list. Return index or -1.
    find(element){
        for(let i = 0; i < dataStore.length; i++){
            if(dataStore[i] == element){
                return i;
            }
        }
        return -1;
    };
    reclocate(from, to){

        let itemFrom = dataStore[from];
        console.log(itemFrom, dataStore);

        this.remove(itemFrom);
        console.log(itemFrom, dataStore);

        this.insert(itemFrom,to)

    };

    //Splice array at found item's index. (at, howManyRemove, addItem) add before at
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
    getAllElements(){
        return dataStore;
    };
}

module.exports = List;