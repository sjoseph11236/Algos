// An abstract collection of data that follows the principal last in first out. 
// The last element of the stack will be the first element removed from the stack. 
// changing the values index when using shift and unshift is very inefficent. 

class Node() {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack { 
  constructor() {
    this.first = null; 
    this.last = null; 
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.first) {
      this.first = newNode; 
      this.last = newNode;
    }
    else{ 
      let temp = this.first; 
      this.first = newNode; 
      this.first.next = temp;
    }
  
    this.size++;
    
    return 

  }
}
stack.push('google');
stack.push('instagram');
stack.push('youtube');

console.log('STACK ', stack);