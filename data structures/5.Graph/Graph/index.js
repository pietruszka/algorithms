"use strict";

class Graph{
  constructor(v){
      this.verticies = v;
      this.edges = 0;
      this.adj = [];
      this.numberOfEdge = 0;
      this.marked = [];

      for(let j = 0; j < this.verticies; j++){
          this.marked[j] = false;
      }

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

  dfs(v, target){
    this.marked[v] = true;
    if(this.adj[v] != undefined) console.log('vertex visited ',v, this.adj);
    if(target === v) console.log('found');
    for(let w in this.adj[v]){
        if(!this.marked[w]) this.dfs(w, target);
    }
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
g.dfs(0,1);
g.showGraph();