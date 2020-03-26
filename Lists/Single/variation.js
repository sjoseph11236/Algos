class singlyLinkedList { 
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new singlyLinkedList("ONE");

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
};

add(head, "TWO");
add(head, "THREE");

const reverse = (head) => {
  // Set current to head. 
  let current = head; 
  // Set prev to null. 
  let prev = null; 
   //   iterate current
  while(current) {
    // set next to current.next.
    let next = current.next
    // set current.next to prev
    current.next = prev;
    //  prev to current.
    prev = current; 
    // set current to next
    current = next; 
  }
  return prev;
}

console.log('result', reverse(head));
