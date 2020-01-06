
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

  push(val) {
    // create new node with value.
    const newNode = new Node(val);
    // check if there is no head.
    if(!this.head) {
    // set new node to head and tail. 
      this.head = newNode;
      this.tail = newNode; 
    }
    else{ 
    // Else, set the new node to tail.next.
      this.tail.next = newNode;      
    // and reassign the tail to be new node.
      this.tail = newNode; 
    } 
    // increaase the length of the list. 
    this.length++;
  }

  pop() {
    // check if there is no head. 
    if(!this.head) {
    // return undefined. 
      return undefined;
    }
    // keep track of currrent node set this.head
    let current = this.head;
    // keep track of pervious node set to null. 
    let prev = null;
    // create while loop check for current to be null. 
    while(!current.next) {  
    // update prev to be the current and update current to be the next. 
      prev = current;
      current = current.next;
    }

    console.log('PREV ', prev);
    console.log('CURRENT ', current);
    // decrease the length by 1. 
    this.length--;
    // check if the length is 1. 
    if(this.length === 1) {
    // set the head as the tail. 
      this.tail = this.head; 
    }

    this.tail = prev;
    // this.tail.next = null;
    // return previous
    return current;
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
list.push('ONE');
list.push('TWO');
list.pop();
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
