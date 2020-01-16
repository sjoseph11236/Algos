
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
  // add node to the list
  push(val) {
    // Create a new node with Node constructor.
    let node = new Node(val);
    // Check for head. if not add the node as head and tail;s
    if(!this.head){
      this.head = node; 
      this.tail = node; 
    }
    else { 
      // Else set the next prop on the tail to be the new Node and reassign the tail to be the new Node.
      this.tail.next = node; 
      this.tail = node; 
    }
    // increment length by one. 
    this.length++; 
  }

  // remove node from the end of the linked list
  pop() {
    // check if no nodes to return undefined. 
    if(!this.head){
      return undefined;
    }
    // Loop through the list until you reach the tail. 
    let current = this.head; 
    // set the next property of the 2nd to last node to be null.  
    let newTail = null; 
    while(current.next) {
    // set the tail to be the 2nd to last node.  
      newTail = current;
      current = current.next; 
    }

    this.tail = newTail;
    //rest tail to null
    if(this.tail){
      this.tail.next = null;
    }
    // Decrement the length of the list by 1. 
    this.length --;
    // Return the value od the node removed. 
    if(!this.length) {
      this.head = null; 
      this.tail = null;
    }
    return current;
  }


  // remove a node from the beginning the linked list
  shift() { 
    // check if there is length.
    if(!this.length){
      return undefined;
    }
    // store the current head in target variable.
    const oldHead = this.head; 
    // set the head prop. the currents next prop.
    this.head = oldHead.next;
    // decrement the lenght by 1. 
    this.length--;
    // check ig lenght is zero.
    if(!this.length) {
      // 
      this.tail = null;
    }
    // return the target.
    return oldHead;
  }

  // Adding a new node to the beginning of the Linked List
  unshift(val) {
    // accepts a value
    // create a new node.
    let newHead = new Node(val);
    // if no head set head and tail to be new node. 
    if(!this.head) {
      this.head = newHead;
      this.tail = newHead;
    }
    else{
    // set the new node next prop to the current head prop
      newHead.next = this.head; 
      // set the head prop on the list to be the new node
      this.head = newHead;
    }


    // incremenet the length by 1. 
    this.length++;
    // return the linked list.
    return this;
  }

  // Retriving a node by its position in the linked list. 
  get(index) {
    // accept an index
    // check if the index is less than zero or greater than or equal to the length of the list, return null
    if(index < 0 || index >= this.length) {
      return null;
    }
    // loop through the list for until you reach the index and return the node at the specific index. 
    let count = 0;
    let result = this.head;

    while(count !== index) {
      result = result.next;
      // increment counter
      count++;
    }

    return result;
  }

  // changing the value of a node based on it's position in the linked list
  set(index, val) {
    // accept a value and index 
    // use get function to find the specific node 
    let targetNode = this.get(index);
    // if no node is found return false
    if(!targetNode) {
      return false;
    }
    else{
    // if node is found set the value of the node to be the value of the passsed ot function and return true. 
      targetNode.val = val; 
      return true;
    }
  }

  // Adding a node to the linked list at a specific position
  insert(index, val) {
    
  }

  // Remove a node from the linked list at a specific position.
  remove(idx) {
    // Accept an index argument. 
    // Check if the index is less than or greater that this.length.
    if(idx < 0 || idx > this.length) {
    // return undefined. 
      return undefined;
    }
    // Check if the index is equal to the first value.
    if(idx === 0 ) {
    // return the shift method.
      return this.shift();
    }
    // Check if the index is equal to the last value. 
    if(idx === this.length - 1) {
    // call the pop method.
      return this.pop();
    }
    // Create a counter set to zero.
    let counter = 0;
    // Create a targetNode variable set to the head. 
    let targetNode = this.head;
    // Create a prev variable set as null. 
    let prev = null;
    // create a while loop that checks for count to eqaul idx. 
    while(counter !== idx) {
    // prev is set to targetNode.
      prev = targetNode;
    // targetNode is set targetNode.next.
      targetNode = targetNode.next;
    // increment the counter. 
      counter++;
    }
    // set prev.next to targetNode.next. 
    prev.next = targetNode.next;
    // decrement the length
    this.length--;
    // return the targetNode;
    return targetNode;
  }

  // Reversing the linked list in place
  reverse() {
    // Create a temp varaible to hold the head. 
    let temp = this.head;
    // Swap the head and tail. 
    this.head = this.tail;
    this.tail = temp;
    // create a prev varaible set to null. 
    let prev = null; 
    // Create a next variabele set to null. 
    let next = null; 
    // Set a current variable to the tail. 
    let  current = this.tail;
    // Create a while loop that checks for current. 
    while(current) {
    // update next with the next vaule from current. 
      next = current.next; 
    // update the current's next to prev. 
      current.next = prev;
    // update prev to be current.
      prev = current;
    // update current to be next.
      current = next;
    }
    // return the updated list. 
    return this;
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
// list.push('Hello');
// list.push('Bye');
// const callOne = list.shift();
// console.log("TCL: callOne ", callOne );
// const callTwo = list.shift();
// console.log("TCL: callTwo ", callTwo );


// UNSHIFT____________
// list.push('Hello');
// list.push('Bye');
// const callOne = list.unshift('WHAT');
// console.log("TCL: callOne ", callOne );
// const callTwo = list.unshift('WHO');
// console.log("TCL: callTwo ", callTwo );

// GET___________
// list.push('Hello');
// list.push('Bye');
// const callOne = list.get(1);
// console.log("TCL: callOne ", callOne );
// const callTwo = list.get(0);
// console.log("TCL: callTwo ", callTwo );

// SET___________
// list.push('Hello');
// list.push('Bye');
// const callOne = list.set(1, 'STAY');
// console.log("TCL: callOne ", callOne );
// const callTwo = list.set(3, 'FOR');
// console.log("TCL: callTwo ", callTwo );

// INSERT___________
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.insert(1, 'STAY');
// console.log("TCL: callOne ", callOne );
// const callTwo = list.insert(7, 'FOR');
// console.log("TCL: callTwo ", callTwo );

// REMOVE___________
list.push('Hello');
list.push('Bye');
list.push('HEY');
const callOne = list.remove(1);
console.log("TCL: callOne ", callOne );
const callTwo = list.remove(7);
console.log("TCL: callTwo ", callTwo );
const callThree = list.remove(-1);
console.log("TCL: callThree ", callThree );

// REVERSE___________
// list.push(22);
// list.push(77);
// list.push(33);
// list.push(99);
// console.log('LIST ', list);
// const callOne = list.reverse();
// console.log("TCL: callOne ", callOne );




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
