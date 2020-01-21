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
}


const doublyLinkedList = new DoublyLinkedList();

console.log('>>>> ', doublyLinkedList);