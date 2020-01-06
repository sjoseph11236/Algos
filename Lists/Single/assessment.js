
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
    // create new node with value.
    const newNode = new Node(val);
    // check if there is no head.
    if(!this.head) {
    // set new node to head and tail. 
      this.head = newNode;
      this.tail = newNode; 
    }
    else{ 
    // Else, set the new node to tail.next.
      this.tail.next = newNode;      
    // and reassign the tail to be new node.
      this.tail = newNode; 
    } 
    // increaase the length of the list. 
    this.length++;
  }

  pop() {
    // check if there is no head. 
    if(!this.head) {
    // return undefined. 
      return undefined;
    }
    // keep track of currrent node set this.head
    let current = this.head;
    // keep track of pervious node set to null. 
    let prev = null;
    // create while loop check for current to be null. 
    while(current.next) {  
    // update prev to be the current and update current to be the next. 
      prev = current;
      current = current.next;
    }

    this.tail = prev;

    // check if there is a this.tail 
    if(this.tail) {
    // update next to be null; 
      this.tail.next  = null; 
    }

    this.length--;
    // check if the length is 0. 
    if(!this.length) {
    // set the head as the tail. 
      this.head = null;
      this.tail = null;
    }
    // return previous
    return current;
  }

  shift() {
    // check if there not  is head.
    if(!this.head) {
    // return undefined.
      return undefined;
    }
    // set oldHead to the current head. 
    const oldHead = this.head;
    // set this.head to oldHead.next.
    this.head = oldHead.next;
    // decrease the length.
    this.length--;
    // check if length is 0.
    if(!this.length) {
    // update this.tail to be null.
      this.tail = null;
    }
    // return oldHead.
    return oldHead;
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

// // PUSH_________
// list.push('ONE');
// list.push('TWO');
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
// console.log("TCL: callThree ", callThree );//undefined

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
