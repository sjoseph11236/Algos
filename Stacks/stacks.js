// An abstract collection of data that follows the principal last in first out. 
// The last element of the stack will be the first element removed from the stack. 
// changing the values index when using shift and unshift is very inefficent. 

class Node {
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

  //Adding values to the top of the stack 
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
    
    return this.size;

  } 

  pop(){

  }
}

let stack = new Stack();

let callOne = stack.push('google');
console.log("The LENGTH is", callOne, callOne === 1);
console.log("TCL: callOne", stack.first.val , stack.first.val === 'google');
console.log("TCL: callOne", stack.last.val , stack.last.val === 'google');
l
et callTwo = stack.push('instagram');
console.log("The LENGTH is", callTwo, callTwo === 2);
console.log("TCL: callOne", stack.first.val , stack.first.val === 'instagram');
console.log("TCL: callOne", stack.last.val , stack.last.val === 'google');

let callThree = stack.push('youtube');
console.log("The LENGTH is", callTwo, callTwo === 2);
console.log("TCL: callOne", stack.first.val , stack.first.val === 'instagram');
console.log("TCL: callOne", stack.last.val , stack.last.val === 'google');

console.log('STACK ', stack);