class DoublyLinkedList {
  constructor(val) { 
    this.val = val; 
    this.next = null; 
    this.prev = null; 
  }
}

function reverse(head) {
    // Copy head as current 
  let current = head;
  //   set prev to null. 
  let prev = null;
  //   iterate current
  while( current ){
    //   set next to current next
  let next = current.next
  //    set current.next to prev. 
  current.next = prev
  //    set current.prev to next.
  current.prev = next
  //    set prev to current.
  prev = current
  //    set current to next.
  current = next
  }
    
    return prev;
}


const head = new DoublyLinkedList(1);

head.next = new DoublyLinkedList(2);

console.log('head', reverse(head));