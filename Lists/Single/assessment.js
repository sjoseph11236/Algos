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
    // store a new node with a val 
    const node = new Node(val);
    // check if the list has head
    if(!this.head) { 
    // if it doesnt set new node as head and tail 
      this.head = node; 
      this.tail = node; 
    }
    else {
      // set this.tail.next to tail 
      this.tail.next = node; 
      this.tail = node; 
    }
    // update this.tail 
    // increase length. 
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
