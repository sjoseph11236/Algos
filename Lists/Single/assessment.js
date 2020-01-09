
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

  }

  pop() {

  }

  shift() {

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
