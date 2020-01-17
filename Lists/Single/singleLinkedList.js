// Notes: 

// A linked list consisit of nods and each node has a value and a pointer to anotehr node and null.

// Lists: 

// Do No have Indexes
// connected via next poitner
// Random access is not allowed

// Benifits: 
// East to insert and delete

class SinglyLinkedList{
  constructor() {
    // assign a node as the head. 
    this.head = null;
    // assign a node as the tail 
    this.tail = null;
    // Keep track of how many new nodes
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
    // check if the index less than zero ang greater than the length.
    if(index < 0 || index > this.length) {
      return false;
    }
    // if the index is the same as length use push.
    if(index === this.length){
      this.push(val);
      return true;
    }
    // if the index is zero use unshift. 
    if(index === 0) {
      this.unshift(val);
      return true;
    }
    // get the node at the target position
    let targetNode = this.get(index);
    // find the node before the target index.
    let beforeTargetNode = this.get(index - 1);
    // Create new Node  with val. 
    let newNode = new Node(val);
    // set the next prop on the node be the new node. 
    newNode.next = targetNode;
    // set the before target node next prop to the new Node. 
    beforeTargetNode.next = newNode;
    // increment the length
    this.length++;

    // return true.
    return true;
  }

  // Remove a node from the linked list at a specific position.
  remove(index) {
    // accept an index.
    // check if the index is less than zero greate than the length and return undefined. 
    if(index < 0 || index > this.length) { 
      return undefined;
    }
    // if this index is the same as the length - -1 pop
    if(index === this.length - 1 ) { 
      return this.pop();
    }
    // if the index is 0 shift. 
    if(index === 0) {
      return this.shift();
    }
    // get the node before the target index. 
    let beforeTargetNode = this.get(index - 1);
    // set the nedxt prop to the beforeNode  to the next of the removednNode. 
    let targetNode = this.get(index);
    beforeTargetNode.next = targetNode.next;
    // Decrement the length
    this.length--;
    // return the value of the removedNode
    return targetNode;
  }

  // Reversing the linked list in place
  reverse() {
    // Swap the head and tail.
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    // Create a variable called next.
    let next = null;
    // Create a varaible called prev.
    let prev = null;
    // Creat a variable called current intialized to the head prop. 
    let current = this.tail;
    // loop through the list. 
    while(current) {
      // console.log(" Current is  ", current);
      // console.log("Curent.next is ", current.next);
    // Set next to be the next property on whatever node is. 
      next = current.next;
      // console.log('Next is ', next);
    // Set the next property on the node to be whateve prev is. 
      current.next = prev;
      // console.log("Curent.next is now ", current.next);
    // Set the prev to be the value of the node variable. 
      prev = current;
      // console.log("prev is ", prev);
    // Set the node variable to be the value of the next variable. 
      current = next;
      // console.log('Current will be >>>>> ', current);
    }
  }
}


class Node {
  constructor(val) {
    this.val = val;
    this.next = null; 
  }
}
const list = new SinglyLinkedList();

// PUSH_______
// list.push('Hello');
// list.push('Bye');

// // SHIFT__________
// list.push('Hello');
// list.push('Bye');
// const callOne = list.shift();
// console.log("TCL: callOne ", callOne );
// const callTwo = list.shift();
// console.log("TCL: callTwo ", callTwo );

// console.log('LIST ', list);


// UNSHIFT__________
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
// list.push('Hello');
// list.push('Bye');
// list.push('HEY');
// const callOne = list.remove(1);
// console.log("TCL: callOne ", callOne );
// const callTwo = list.remove(7);
// console.log("TCL: callTwo ", callTwo );
// const callThree = list.remove(-1);
// console.log("TCL: callThree ", callThree );

// REVERSE___________
list.push(22);
list.push(77);
list.push(33);
list.push(99);
console.log('LIST ', list);
list.reverse();
// const callOne = list.remove(1);
// console.log("TCL: callOne ", callOne );
// const callTwo = list.remove(7);
// console.log("TCL: callTwo ", callTwo );
// const callThree = list.remove(-1);
// console.log("TCL: callThree ", callThree );

console.log('LIST ', list);

// first.next = new Node('there');
// first.next.next = new Node('how');



