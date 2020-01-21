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

  }
}


const doublyLinkedList = new DoublyLinkedList();

// PUSH_________________
doublyLinkedList.push(1);
doublyLinkedList.push(5);
doublyLinkedList.push(8);

// POP___________________


console.log('>>>> ', doublyLinkedList);