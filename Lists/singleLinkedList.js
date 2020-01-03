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
  
  push(val) {
    // Create a new node with Node constructor.
    let node = new Node(val);
    // Check for head. if not add the node as head. 
    if(!this.head){
      this.head = node; 
      this.tail = node; 
    }
    else { 
      // Else set the next prop on the tail to be the new Node and reassign the tail to be the new Node.
      this.tail.next = node; 
      this.tail = node; 
    }
    // increment lenght by one. 
    this.length ++; 
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this. next = null; 
  }
}
const list = new SinglyLinkedList();
list.push('Hello');
list.push('Bye');
console.log("TCL: list", list);
console.log('TAIL ', list.tail);

// first.next = new Node('there');
// first.next.next = new Node('how');



