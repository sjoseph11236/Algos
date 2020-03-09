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
}

const First = new Graph();
First.addVertex('Tokyo');
First.addVertex('California');
First.addVertex('New York');
First.addEdge('New York', 'Tokyo');
First.addEdge('New York', 'California');
First.removeEdge('New York', 'California');
console.log('FIRST ', First);


module.exports = {
  Graph
}