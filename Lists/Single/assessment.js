
// ---------------------------------------------jan.4.2020 --------------------------------------------------------------------------------------/////

class SinglyLinkedList { 
  constructor() { 
    // Create a head.
    this.head = null;
    // Create   a tail.
    this.tail = null;
    // Set length to zero.  
    this.length = 0; 
  }

  push(val) {
    // create a new node with value. 
    let node = new Node(val);
    // check if there is no head. 
    if(!this.head) {
    // set the head and tail to the new node. 
      this.head = node; 
      this.tail = node; 
    }
    else{ 
    // set this tail.next to new node. 
      this.tail.next = node; 
    // else set the tail to new node. 
      this.tail = node;
    }
    // increse the length by 1. 
    this.length++;
  }

  pop() {
    //check if therer is head. 
    if(!this.head) {
    // return undefined
      return undefined;
    }
    // crete a vairable called renove set to the head.
    let remove = this.head;
    // create a prev variable.  set to null.
    let prev = null; 
    // create a while loop checking for remove.next
    while(remove.next) {
    // update prev to be remove. 
      prev = remove;
    // remove update to remove.next. 
      remove = remove.next;
    }
    // set the tail to prev.
    this.tail = prev;
    // reset tail.next to null.
    if(this.tail) { 
      this.tail.next = null;
    }
    // decrease the length by; 
    this.length--;
    // check if the lenght is 1
    if(!this.length){
    // set the tail the same as the head.   
      this.head = null;
      this. tail = null;
    }
    // return remove
    return remove;
  }

  shift() {
    // check if there is length
    if(!this.length) {
    // return undefined; 
      return undefined;      
    }
    // store the head in result variable, 
    const result = this.head; 
    // update the head as th current tail.
    this.head = result.next; 
    // reduce the length by 1. 
    this.length--;  

    // check for no length
    // update head and tail to null; 
    if(!this.length) {
      this.tail = null;
    }
    // return result
    return result;
  }

  // Adding a new node to the beginning of the Linked List
  unshifting() {

  }
}


class Node { 
  constructor(val) {
    // set val.
    this.val = val; 
    // set next as null. 
    this.next = null; 
  }
}

const list = new SinglyLinkedList();

// // // PUSH_________
// list.push('ONE');
// list.push('TWO');
// list.push('THREE');
// console.log('LIST ', list);


// // POP__________
// list.push('ONE');
// list.push('TWO');
// const callOne = list.pop(); 
// console.log("TCL: callOne", callOne);// 'TWO'
// list.push('TWO');
// list.push('THREE');
// const callTwo =list.pop();
// console.log("TCL: callTwo", callTwo); //'THREE'
// list.pop();
// const callThree =list.pop();
// const callFour =list.pop();
// console.log("TCL: callThree ", callThree );//'ONE'
// console.log("TCL: callFour", callFour); // undefined

// SHIFT__________
list.push('Hello');
list.push('Bye');
const callOne = list.shift();
console.log("TCL: callOne ", callOne );
const callTwo = list.shift();
console.log("TCL: callTwo ", callTwo );

// ---
console.log('LIST ', list);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// -------------ASSESSMENT TEMPLATE FOR COPYING TO ABOVE ONLY ---------------------------\\\
// class SinglyLinkedList { 
//   constructor() { 

//   }

//   push() {

//   }

//   pop() {
    
//   }
// }


// class Node { 
//   constructor() {

//   }
// }


// const list = new SinglyLinkedList();
// list.push('ONE');
// list.push('TWO');
// list.pop(); // 'TWO'
// console.log('LIST CALL 1 ', list);//length  = 1 
// list.push('TWO');
// list.push('THREE');
// list.pop(); //'THREE'
// console.log('LIST CALL 2 ', list);//length  = 2 
// list.pop();
// list.pop();//undefined
// console.log('LIST  CALL 3 ', list); //length = 0;
