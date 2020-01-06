
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
