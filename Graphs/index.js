class Graph { 
  constructor() { 
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => {
      if(edge !== vertex2) return edge;
    });
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => {
      if(edge !== vertex1) return edge;
    });
  }

  removeVertex( vertex ){
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFristSeachRecursion(vertex){ 
    // Accept a vertex.
    // Create a list to store  visited
    // Create am object to store visited verticies.
    // create a helper function with acceps a vetes. 
    // check if vertex is empty
    // 
  }
}

const First = new Graph();
// First.addVertex('Tokyo');
// First.addVertex('California');
// First.addVertex('New York');
// First.addEdge('New York', 'Tokyo');
// First.addEdge('New York', 'California');
// First.removeEdge('New York', 'California');
// First.removeVertex('New York');
// console.log('FIRST ', First);

First.addVertex('A');
First.addVertex('B');
First.addVertex('C');
First.addVertex('D');
First.addVertex('E');
First.addVertex('F');

First.addEdge('A','B');
First.addEdge('A','C');
First.addEdge('B','D');
First.addEdge('C','E');
First.addEdge('D','E');
First.addEdge('D','F');
First.addEdge('E','F');

console.log('FIRST ', First);



module.exports = {
  Graph
}