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
  get(idx) {
    // Accepts an idx. 
    // Check if the idx is less than 0  or greater than or eqaul to the length
    // return null. 
    if(idx < 0 || idx >= this.length) return null;
    // Find the midpoint.
    const midpoint = Math.floor( this.length / 2);
    // Create a counter.
    let count  = 0; 
    // Create a target varaible set null;
    let target = this.head;
    // Check if the idx is less than or equal to half the length of the list 
    if(idx  <= midpoint) {
    // loop through the list starting from the head and loop towards the middle      
      while(count < idx) {
        // updated target as target.hext.
        target = target.next;
    // Increment count.
        count++;
      }
    }
    else{
    // set count to last index. 
      count = this.length - 1;
    // targe set to tail. 
      target = this.tail;
    // Loop through the list starting from the tail and loop towards the middle.       
      while( count > idx) {
        target = target.prev;
      // decrement count. 
        count--;
      }
    }

    // return node. 
    return target;
  } 

  // Replacing the value of node  in the list.
  set(val, idx) {
    // Accept val, idx.
    // Create a result and cal the get method at specified idx
    let result = this.get(idx);

    // Check if result is not null. set the val to the node 
    if(result) {
      result.val  = val;
    // return true.
      return true;
    }
    // return false.
    return false;
  }

  // adding a node in the list at a certian position
  insert(val, idx) {
    // Accept val and idx
    // Check if the idx is valid: less than zero or greater than or eqaul to this.length
    // return false. 
    if(idx < 0 || idx > this.length) return false;
    // if the index is 0.
    if(idx === 0) {
    // call unshift.
    this.unshift(val);
    // return true.
      return true;
    }
    // if index is the same as the length -1 push. 
    if(idx === this.length ) {
      this.push(val);
      return true;
    }
    // Create a newNode with val. 
    let newNode = new Node(val);
    // Create a foundNode call get with idx.
    let foundNode = this.get(idx - 1);
    // Set newNode next to foundNode
    newNode.next = foundNode.next;

    // Set foundNode.next to newNode. 
    foundNode.next = newNode;
    // Set NewNode.prev to foundNode
    newNode.prev  = foundNode;
    // Set NowNOde.next.prev to newNode.
    newNode.next.prev = newNode;
    // increment length
    this.length++;
    // return true.
    return true;
  }

  // removing a node at a cetain position
  remove() { 
    // Accept idx
    // validate idx is not less than 0 or greater than or eqal to this.length. 
    // Set foundNode to the call with passed idx. 
    // Set prevNode to foundNode.prev 
    // Set afterNode to foundNode.next
    // Update the foundNode.next to null
    // Update the foundNode.prev to null. 
    // Update the prevNode.next to afterNode.
    // Update the afterNode.prev to prevNode. 
    // decrement the length. 
    // return foundNode. 
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
// console.log("TCL: callOne", callOne, callOne === true); 
// const callTwo = list.set(9, -1);
// console.log("TCL: callTwo", callTwo, callTwo === null);
// const callThree = list.set(9, 8);
// console.log("TCL: callThree", callThree, callThree === null);

// // // INSERT_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.insert(9, 2);
// console.log("TCL: callOne", callOne, callOne === true); 
// const callTwo = list.insert(9, -1);
// console.log("TCL: callTwo", callTwo, callTwo === null);
// const callThree = list.insert(9, 8);
// console.log("TCL: callThree", callThree, callThree === null);
// const callFour = list.insert(10, 4);
// console.log("TCL: callFour", callFour, callFour === true);

// // REMOVE_________________
list.push(1);
list.push(5);
list.push(8);
const callOne = list.insert(9, 2);
console.log("TCL: callOne", callOne, callOne === true); 
const callTwo = list.insert(9, -1);
console.log("TCL: callTwo", callTwo, callTwo === null);
const callThree = list.insert(9, 8);
console.log("TCL: callThree", callThree, callThree === null);
const callFour = list.insert(10, 4);
console.log("TCL: callFour", callFour, callFour === true);

console.log('>>>> ', list);