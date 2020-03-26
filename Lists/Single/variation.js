class singlyLinkedList { 
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new singlyLinkedList(1);

const add = (head, val) => {   
  // create node
  const node = new singlyLinkedList(val);
  // creat prev set null
  let prev = null; 
  // create a current set to head
  let curr = head; 
  // iterate through the list
  while(curr){
    // set prev to curr. 
    prev = curr; 
    // set curr to next. 
    curr = curr.next; 
  }
  // set prev next to node.
  prev.next = node; 
  // return head;
  return head;
}

console.log('result', add(head, 2));
console.log('result', add(head, 3));
console.log('result', add(head, 4));