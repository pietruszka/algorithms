"use strict";

class Graph{
  constructor(){
      this.verticies = [];
      this.edges = [];
      this.numberOfEdge = 0;
  };

  addVertex(vertex){
      this.verticies.push(vertex);
      this.edges[vertex] = [];
  };
};