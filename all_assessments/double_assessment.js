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
    // Accept a val. 
    // Create a newNode. 
    let newNode = new Node(val);
    // check  for head. 
    // If no head set newNode to head.
    if(!this.head) {
      this.head = newNode; 
      this.tail = newNode; 
    }
    else {  
    // Else, set this.tail.next to newNode.
      this.tail.next = newNode; 
    // Set newNode.prev to  this.tail. 
      newNode.prev = newNode;
    // Set this.tail to newNode. 
      this.tail = newNode;
    }
    // Increament the length. 
    this.length++; 
    // return this
    return this;
  }

  // Remove the last item of the list
  pop() {
    // Check if there is a head.
    // Return undefined. 
    if(!this.head) return undefined;
    // Store the tail in targetNode
    let targetNode = this.tail;
    // Check if the length is 1
    if(this.length == 1) { 
    // set head and tail to null
      this.head = null;
      this.tail = null;
    }
    else {
    // Update tail to targetNOde.prev 
      this.tail = targetNode.prev;    
    // set tail.next to null
      this.tail.next = null;
    // Update the targetNode prev to be null. 
      targetNode.prev = null; 
    }
    // Decrement the length
    this.length--;
    // Return targetNode
    return targetNode;
  }

  // remove a node from the beginning of the list.
  shift() {
    // Check if there is a head.
    // Return undefined.
    if(!this.head) return undefined;
    // Set removeNode to head.
    let removeNode = this.head;
    if(this.length === 1) {
    // Set this.head to null.
      this.head = null;
    // Set this.tail to null. 
      this.tail = null;
    }
    else { 
    // Else Set the head removeNode.next.
      this.head = removeNode.next;
    // Set the head.prev to null.
      this.head.prev = null;      
    }
    // Update the removeNode.next to be null.
    removeNode.next = null;
    // Decrement the length
    this.length--;
    // Return removeNode
    return removeNode;
  }

  // add a node to the beginning of the list
  unshift(val) {

  }

  // Get a node a at specific index. 
  get(idx) {

  } 

  // Replacing the value of node  in the list.
  set(val, idx) {

  }

  // adding a node in the list at a certian position
  insert(val, idx) {

  }

  // removing a node at a cetain position
  remove(idx) { 

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
// console.log('This list head is ', list.head.val === 1);
// console.log('This list tail is ', list.tail.val === 8);

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
// console.log("TCL: callFour", callFour, callFour  === undefined); // undefined

// SHIFT_________________
list.push(1);
const callOne = list.shift(); // 1
console.log("TCL: callOne", callOne, callOne.val === 1 ); //1 
console.log('CallFour has a NEXT of ', callOne.next, callOne.next === null); //true
console.log('CallFour has a PREV of ', callOne.prev, callOne.prev === null); //true 
const callTwo =  list.shift();
console.log("TCL: callTwo", callTwo, callTwo === undefined); // undefined
list.push(5);
list.push(9);
const callThree = list.shift(); 
console.log("TCL: callThree", callThree, callThree.val === 5);// 5
list.push(13);
list.push(5);
list.push(12);
const callFour = list.shift(); 
console.log("TCL: callFour", callFour, callFour.val === 9);// 9
console.log('CallFour has a NEXT of ', callFour.next, callFour.next === null); //null
console.log('CallFour has a PREV of ', callFour.prev, callFour.prev === null); //null

// // UNSHIFT_________________
// const callOne = list.unshift(1);
// console.log("TCL: callOne", callOne); 
// const callTwo = list.unshift(5);
// console.log("TCL: callTwo", callTwo);
// const callThree = list.unshift(8);
// console.log("TCL: callThree", callThree);
// console.log('This list head is ', list.head.val === 8);
// console.log('This list tail is ', list.tail.val === 1);

// // GET_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.get(2); 
// console.log("TCL: callOne", callOne, callOne.val === 8); //8 
// const callTwo = list.get(-1);
// console.log("TCL: callTwo", callTwo, callTwo === null); //null
// const callThree = list.get(8);
// console.log("TCL: callThree", callThree, callThree === null); //null

// // SET_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.set(9, 2);
// console.log("TCL: callOne", callOne); //true 
// console.log('The val at INDEX 2 is: ', list.tail.val , list.tail.val === 9 );
// const callTwo = list.set(9, -1);
// console.log("TCL: callTwo", callTwo); //false
// const callThree = list.set(9, 8);
// console.log("TCL: callThree", callThree); //false

// // // INSERT_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.insert(9, 2);
// console.log("TCL: callOne", callOne); //true
// console.log('The val at INDEX 2 is: ', list.head.next.next.val , list.head.next.next.val === 9 );
// const callTwo = list.insert(9, -1);
// console.log("TCL: callTwo", callTwo); //false
// const callThree = list.insert(9, 8);
// console.log("TCL: callThree", callThree); //false
// const callFour = list.insert(10, 4);
// console.log("TCL: callFour", callFour); //true  
// console.log('The val at the TAIL is ', list.tail.val, list.tail.val === 10);

// // // REMOVE_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.remove(1);
// console.log("TCL: callOne", callOne, callOne.val === 5); //true 
// console.log('CallOne has a NEXT of ', callOne.next, callOne.next === null); //null
// console.log('CallOne has a PREV of ', callOne.prev, callOne.prev === null); //null
// const callTwo = list.remove(-1);
// console.log("TCL: callTwo", callTwo, callTwo === undefined); //undefined
// const callThree = list.remove(8);
// console.log("TCL: callThree", callThree, callThree === undefined); //undfined
// const callFour = list.remove(1);
// console.log("TCL: callFour", callFour, callFour.val === 8); //true
// console.log('CallFour has a NEXT of ', callFour.next, callFour.next === null); //null
// console.log('CallFour has a PREV of ', callFour.prev, callFour.prev === null); //null

console.log('>>>> ', list);