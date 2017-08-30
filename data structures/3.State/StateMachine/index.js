"use strict";

class StateMachine{
  constructor(){
      this.count = 0;
      this.currentState = new Init(this);
  };

  change(state){
      if(this.count++>= 10) return;
      this.currentState = state;
      this.currentState.go();
  };

  start(){
      this.currentState.go();
  };
};

//States
//Init --> Idle --> State --> Idle --> State2

class Init{
    constructor(sm){
        this.SM = sm;
    };

    go(){
        this.SM.change(new Idle(this.SM));
    };
};

// this state decide which state should be used next
class Idle{
    constructor(sm){
        this.SM = sm;
        console.log('idle');
    };

    go(){
        this.SM.change(new State(this.SM));
    };
};

class State{
    constructor(sm){
        this.SM = sm;
    };

    go(){
        this.SM.change(new Idle(this.SM));
    };
};

let v = new StateMachine();
v.start();