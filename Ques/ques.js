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
    // Accepts a val. 
    // Create newNode with that val.
    let newNode = new Node(val);
    console.log('NEW NODE ', newNode);
    // if no first
    if(!this.first) { 
    // Set first to newNode.
      this.fist = newNode;
    // Set last to newNode.      
      this.last = newNode;
    }
    else{ 
     // Else set the last next to newNode
      this.last.next = newNode;
    // Set last to newNode.
      this.last = newNode;
    }
    // Increment the size.
    this.size++;
    // return the size
    return this.size;
  }

  // remomve from the beginning
  dequeue() {

  }
}


let que = new Queue();
const callOne = que.enqueue(56);
console.log("TCL: callOne", callOne, callOne === 1);
console.log('The FIRST should be >>> ', que.first,  que.fist  === 56);
// console.log('The LAST  should be >>> ', que.last.val,  que.last.val  === 56);
// const callTwo = que.enqueue(32);
// console.log("TCL: callOne", callTwo, callTwo === 2);
// const callThree = que.enqueue(17);
// console.log("TCL: callOne", callThree, callThree === 3);
console.log("TCL: Que", que);
