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
    if(!this.first) return null; 

    let temp = this.first
    if(this.first === this.last){
      this.last = null;
    }
  
    this.fisrt = this.first.next;
    this.size--;

    return temp.val;
  }
}

let stack = new Stack();

// // PUSH
// let callOne = stack.push('google');
// console.log("The LENGTH is", callOne, callOne === 1);
// console.log("TCL: callOne", stack.first.val , stack.first.val === 'google');
// console.log("TCL: callOne", stack.last.val , stack.last.val === 'google');

// let callTwo = stack.push('instagram');
// console.log("The LENGTH is", callTwo, callTwo === 2);
// console.log("TCL: callTwo", stack.first.val , stack.first.val === 'instagram');
// console.log("TCL: callTwo ", stack.last.val , stack.last.val === 'google');

// let callThree = stack.push('youtube');
// console.log("The LENGTH is", callThree, callTwo === 2);
// console.log("TCL: callTHREE", stack.first.val , stack.first.val === 'youtube');
// console.log("TCL: callTHREE", stack.last.val , stack.last.val === 'google');


// POP
stack.push('google');
stack.push('instagram');
stack.push('youtube');

let callOne = stack.pop();
console.log("TCL: callOne ", callOne, callOne === 'youtube');
let callTwo = stack.pop();
console.log("TCL: callTwo ", callTwo , callTwo === 'instagram');
let callThree = stack.pop();
console.log("TCL: callThree", callThree, callThree === 'google');

console.log('STACK ', stack);