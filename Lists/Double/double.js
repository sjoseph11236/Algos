// NOTES: 

// Every node points the next and previous pointer. 
// Doubly linked list takes more memory, but is more flexible. 


// __________________________

class Node { 
  constructor(val) {
    this.val = val;
    this.next = null; 
    this.prev = null; 
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null; 
    this.length = 0; 
  }

  // Adding a node to the end of the Doubly Linked List
  push(val) {
    // Create a new node with the value passed in 
    let newNode = new Node(val);
    // Check if the head is null.
    if(!this.head) {
      // set the head and tail to the newNode.
      this.head = newNode; 
      this.tail = newNode;
    }
      // Set the next prop on the current tail to be the node 
    this.tail.next = newNode; 
    // Set the prev prop on the newly create node to be the tail. 
    newNode.prev = this.tail; 
    // update the tail to be the newNode. 
    this.tail = newNode;
    // Increment the length. 
    this.length++;
    // return this
    return this;
  }

  // Remove the last item of the list
  pop() {
    // Check if there is head. 
    if(!this.head) {
      return undefined;  
    }
    // Store the current tail in a variable to return later
    let oldTail = this.tail;
    // if the length is 1, set the head and tail to be null; 
    if(this.length === 1) { 
      this.head = null; 
      this.tail = null; 
    }
    else { 
    // update the tail to be the previous Node. 
      this.tail = oldTail.prev;
    // Set the newTail's next to null. 
      this.tail.next = null;
    // Set the oldTail's previous to be null. 
      oldTail.prev = null;

    }
    // decrement the length. 
    this.length--;
    // return the old tail. 
    return oldTail;
  }

  // remove a node from the beginning of the list.
  shift() {
    if(!this.length) {
    // If the length is 0 return undfirned.
      return undefined;
    }
    // Store the current head prop in the variable 
    let oldHead = this.head;
    // Check if the length is 1
    if(this.length === 1) {
    // set the head and tail to null. 
      this.head = null; 
      this.tail = null; 
    }
    else { 
    // Update the head to be the next of the oldHead. 
      this.head =  oldHead.next;
    // Set the head's prev to null.
      this.head.prev = null;
    // Set the oldHeads next to null
      oldHead.next = null;
    }

    // Decrement the length. 
    this.length--;
    // reeturn the oldHead. 
    return oldHead;
  }

  // add a node to the beginning of the list
  unshift(val) {
    // Accepts a value.
    // Create a newNode.
    let newNode = new Node(val);
    // check if there is head
    if(!this.head) {
    // Set newNode as head and tail 
      this.head = newNode;
      this.tail = newNode;
    }
    else {
    // set newNode next to head.
      newNode.next = this.head;
    // set head prev to newNode.
      this.head.prev = newNode;
    // Set newNode as head. 
      this.head = newNode;
    }
    // Increment the length. 
    this.length++;
    // return the list. 
    return list;
  }

  // Get a node a at specific index. 
  get() {
    // Accepts an idx. 
    // Check if the idx is less than 0  or greater than or eqaul to the length
    // return null. 
    // Check if the idx is less than or equal to half the length of the list 
    // loop through the list starting grom the head and loop towards the middle
    // return node once its found. 
    // Check if the idx is greater than half the length 
    // Loop through the list starting from the tail and loop towards the middle. 
    // return node. 
  } 
}


const list = new DoublyLinkedList();

// // PUSH_________________
// const callOne = list.push(1);
// console.log("TCL: callOne", callOne); 
// const callTwo = list.push(5);
// console.log("TCL: callTwo", callTwo);
// const callThree = list.push(8);
// console.log("TCL: callThree", callThree);

// // POP_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.pop(); 
// console.log("TCL: callOne", callOne, callOne.val === 8); // 8
// const callTwo =  list.pop();
// console.log("TCL: callTwo", callTwo, callTwo.val === 5); //5
// const callThree = list.pop();
// console.log("TCL: callThree", callThree, callThree.val === 1); // 1
// const callFour = list.pop(); 
// console.log("TCL: callFour", callFour, callFour === undefined);// undefined

// // SHIFT_________________
// list.push(1);
// const callOne = list.shift(); // 1
// console.log("TCL: callOne", callOne, callOne.val === 1 ); //1 
// const callTwo =  list.shift();
// console.log("TCL: callTwo", callTwo, callTwo === undefined); // undefined
// list.push(5);
// list.push(8);
// const callThree = list.shift(); 
// console.log("TCL: callThree", callThree, callThree.val === 5);// 5
// list.push(1);
// list.push(5);
// list.push(8);
// const callFour = list.shift(); 
// console.log("TCL: callFour", callFour, callFour.val === 8);// 8

// // UNSHIFT_________________
// const callOne = list.unshift(1);
// console.log("TCL: callOne", callOne); 
// const callTwo = list.unshift(5);
// console.log("TCL: callTwo", callTwo);
// const callThree = list.unshift(8);
// console.log("TCL: callThree", callThree);

// GET_________________
list.push(1);
list.push(5);
list.push(8);
const callOne = list.get(2);
console.log("TCL: callOne", callOne, callOne.val === 8); 
const callTwo = list.get(-1);
console.log("TCL: callTwo", callTwo, callTwo === null);
const callThree = list.get(8);
console.log("TCL: callThree", callThree, callThree === null);

console.log('>>>> ', list);