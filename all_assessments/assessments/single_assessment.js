class Node { 
  constructor(val) {
    this.val = val; 
    this.next = null; 
  }
}

class SinglyLinkedList { 
  constructor() { 
    this.head = null; 
    this.tail = null; 
    this.length = 0; 
  }
  // add node to the list
  push(val) {
    //Accepts a val
    // Create a newNode. 
    let newNode = new Node(val);
    // Cheak if there is head
    if(!this.head) { 
    // Set newNode to head 
      this.head = newNode;
    // Set newNode to tail
      this.tail = newNode;
    }
    else{ 
    // Else set the tail next to the newNode. 
      this.tail.next = newNode;
    // Update tail to be the newNode. 
      this.tail = newNode;
    }

    // Inceremnt the length
    this.length++;
    // return this
    return this;
  }

  // remove node from the end of the linked list
  pop() {

  }


  // remove a node from the beginning the linked list
  shift() { 

  }

  // Adding a new node to the beginning of the Linked List
  unshift(val) {



  }

  // Retriving a node by its position in the linked list. 
  get(index) {

  }

  // changing the value of a node based on it's position in the linked list
  set(index, val) {

  }


  // Adding a node to the linked list at a specific position
  insert(index, val) {

  }

  // Remove a node from the linked list at a specific position.
  remove(idx) {

  }

  // Reversing the linked list in place
  reverse() {

  }
}

const list = new SinglyLinkedList();

//  // PUSH_________
// const callOne = list.push('ONE');
// console.log("TCL: CallOne", callOne);
// console.log('The VAL is ', callOne.head.val, callOne.head.val === 'ONE');
// console.log('The VAL is ', callOne.tail.val, callOne.tail.val === 'ONE');
// console.log('The VAL is ', callOne.tail.next, callOne.tail.next === null);

// const callTwo =list.push('TWO');
// console.log("TCL: CallTwo", callTwo);
// console.log('The VAL is ', callTwo.head.val, callTwo.head.val === 'ONE');
// console.log('The VAL is ', callTwo.tail.val, callTwo.tail.val === 'TWO');
// console.log('The VAL is ', callTwo.tail.next, callTwo.tail.next === null);

// const callThree = list.push('THREE');
// console.log("TCL: CallThree", callThree);
// console.log('The VAL is ', callThree.head.val, callThree.head.val === 'ONE');
// console.log('The VAL is ', callThree.tail.val, callThree.tail.val === 'THREE');
// console.log('The VAL is ', callTwo.tail.next, callTwo.tail.next === null);


// // // POP__________
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
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.shift();
// console.log("TCL: callOne ", callOne );
// const callTwo = list.shift();
// console.log("TCL: callTwo ", callTwo );


// UNSHIFT____________
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.unshift('WHAT');
// console.log("TCL: callOne ", callOne );
// const callTwo = list.unshift('WHO');
// console.log("TCL: callTwo ", callTwo );

// GET___________
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.get(1);
// console.log("TCL: callOne ", callOne );
// const callTwo = list.get(0);
// console.log("TCL: callTwo ", callTwo );

// SET___________
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.set(1, 'STAY'); //true
// console.log("TCL: callOne ", callOne );
// const callTwo = list.set(4, 'FOR'); // false
// console.log("TCL: callTwo ", callTwo );

// // INSERT___________
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.insert(1, 'STAY'); //true 
// console.log("TCL: callOne ", callOne );
// const callTwo = list.insert(7, 'FOR'); // false 
// console.log("TCL: callTwo ", callTwo );
// const callThree = list.insert(0, 'FIRST'); //true
// console.log("TCL: callThree ", callThree );
// const callFour = list.insert(5, 'FOREVER');//true
// console.log("TCL: callFour ", callFour );

// // REMOVE___________
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.remove(1); // 'Bye'
// console.log("TCL: callOne ", callOne );
// const callTwo = list.remove(7); // undefined
// console.log("TCL: callTwo ", callTwo );
// const callThree = list.remove(-1); // undefined
// console.log("TCL: callThree ", callThree );

// // REVERSE___________
// list.push(22);
// list.push(77);
// list.push(33);
// list.push(99);
// console.log('LIST ', list); // 22 --> 77 --> 33 --> 99
// const callOne = list.reverse();
// console.log("TCL: callOne ", callOne ); // 99 --> 33 --> 77 --> 22

// ---
console.log('LIST ', list);