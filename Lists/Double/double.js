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
    newNode.prv = this.tail; 
    // update the tail to be the newNode. 
    this.tail = newNode;
    // Increment the length. 
    this.length++;
  }
}


const doublyLinkedList = new DoublyLinkedList();

// PUSH_________________
doublyLinkedList.push(1);
doublyLinkedList.push(5);
doublyLinkedList.push(8);

console.log('>>>> ', doublyLinkedList);