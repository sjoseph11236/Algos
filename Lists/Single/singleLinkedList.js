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
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null; 
  }
}
const list = new SinglyLinkedList();
list.push('Hello');
list.push('Bye');
console.log("TCL: list", list);


// first.next = new Node('there');
// first.next.next = new Node('how');


