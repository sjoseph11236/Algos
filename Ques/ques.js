// A que is a first in first out data structure. 


// let que = [];

// Adding values first in
// que.push('FIRST');
// que.push(' SECOND');
// que.push('THIRD');

// console.log('The que is ', que);

// removing a values - first out
// que.shift();
// console.log('The que is ', que);

class Node {
  costructor(val) {
    this.val = val;
    this.next = null;
  }
}


class Queue { 
  constructor() {
    this.first  = null; 
    this.last  = null; 
    this.size = 0;
  }

// Add to the end 
  enqueue(val) { 
    
  }
  // remomve from the beginning
  dequeue() {

  }
}


let Que = new Queue();
console.log("TCL: Que", Que);
