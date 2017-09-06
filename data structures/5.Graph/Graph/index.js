"use strict";

class Graph{
  constructor(v){
      this.verticies = v;
      this.edges = 0;
      this.adj = [];
      this.numberOfEdge = 0;

      for(let i = 0; i < this.verticies; ++i){
          this.adj[i] = [];
          this.adj[i].push("");
      }
  };

  addEdge(v,w){
      this.adj[v].push(w);
      this.adj[w].push(v);
      this.edges++;
  };

  showGraph(){
      for(let i = 0; i< this.verticies; ++i){
          //putstr(i + " -> ");
          for(let j = 0; j < this.verticies; ++j){
              if(this.adj[i][j] != undefined){
                  console.log(`${i} -> ${this.adj[i][j]}`);
                  //putstr(this.adj[i][j]+ ' ');
              }
          }
          //print();
      }
  };
};


let g  = new Graph(3);
g.addEdge(0,1);
g.addEdge(0,2);

g.showGraph();