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
    this.taill = null; 
    this.length = 0; 
  }

  // Adding a node to the end of the Doubly Linked List
  push(val) {
    // create the node
    let node  = new Node(val);
    if(!this.head){
      // set the head and tail to node. 
      this.head = node; 
      this.tail = node; 
    }
    else { 
      // set the next prop of tail to node. 
      this.tail.next = node; 
      // set the prev prop of node to tail. 
      node.prev = this.tail; 
      // set tail to node. 
      this.tail = node;
    }

    // increment the length 
    this.length++;

    return this;
  }

  // Remove the last item of the list
  pop() {
    // check if there is a head. 
    if(!this.head) return undefined;
    // set old tail to tail 
    let oldTail = this.tail;

    if(this.length === 1) { 
      this.head = null; 
      this.tail = null; 
    }
    else { 
      // set tail to prev 
      this.tail = oldTail.prev; 
      // set tail next to null; 
      this.tail.next = null; 
      // set the oldTails previous to be null. 
      oldTail.prev = null; 
    }
    // decrement the lengthh 
    this.length--;
    return oldTail;
  }

  // remove a node from the beginning of the list.
  shift() {

  }

  // add a node to the beginning of the list
  unshift(val) {

  }

  // Get a node a at specific index. 
  get(idx) {

  } 

  // Replacing the value of node  in the list.
  set(val, idx) {

  }

  // adding a node in the list at a certian position
  insert(val, idx) {

  }

  // removing a node at a cetain position
  remove(idx) { 

  }
}


const list = new DoublyLinkedList();

// PUSH_________________
// const callOne = list.push(1);
// console.log("TCL: callOne", callOne); 
// const callTwo = list.push(5);
// console.log("TCL: callTwo", callTwo);
// const callThree = list.push(8);
// console.log("TCL: callThree", callThree);
// console.log('This list head is ', list.head.val === 1);
// console.log('This list tail is ', list.tail.val === 8);

// // POP_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.pop(); 
// console.log("TCL: callOne", callOne, callOne.val === 8); // 8
// const callTwo =  list.pop();
// console.log("TCL: callTwo", callTwo, callTwo.val === 5); //5
// const callThree = list.pop();
// console.log("TCL: callThree", callThree, callThree.val === 1); // 1
// const callFour = list.pop(); 
// console.log("TCL: callFour", callFour, callFour  === undefined); // undefined

// // SHIFT_________________
// list.push(1);
// const callOne = list.shift(); // 1
// console.log("TCL: callOne", callOne, callOne.val === 1 ); //1 
// console.log('CallFour has a NEXT of ', callOne.next, callOne.next === null); //true
// console.log('CallFour has a PREV of ', callOne.prev, callOne.prev === null); //true 
// const callTwo =  list.shift();
// console.log("TCL: callTwo", callTwo, callTwo === undefined); // undefined
// list.push(5);
// list.push(8);
// const callThree = list.shift(); 
// console.log("TCL: callThree", callThree, callThree.val === 5);// 5
// list.push(1);
// list.push(5);
// list.push(8);
// const callFour = list.shift(); 
// console.log("TCL: callFour", callFour, callFour.val === 8);// 8
// console.log('CallFour has a NEXT of ', callFour.next, callFour.next === null); //null
// console.log('CallFour has a PREV of ', callFour.prev, callFour.prev === null); //null

// // UNSHIFT_________________
// const callOne = list.unshift(1);
// console.log("TCL: callOne", callOne); 
// const callTwo = list.unshift(5);
// console.log("TCL: callTwo", callTwo);
// const callThree = list.unshift(8);
// console.log("TCL: callThree", callThree);
// console.log('This list head is ', list.head.val === 8);
// console.log('This list tail is ', list.tail.val === 1);

// // GET_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.get(2); 
// console.log("TCL: callOne", callOne, callOne.val === 8); //8 
// const callTwo = list.get(-1);
// console.log("TCL: callTwo", callTwo, callTwo === null); //null
// const callThree = list.get(8);
// console.log("TCL: callThree", callThree, callThree === null); //null

// // SET_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.set(9, 2);
// console.log("TCL: callOne", callOne); //true 
// console.log('The val at INDEX 2 is: ', list.tail.val , list.tail.val === 9 );
// const callTwo = list.set(9, -1);
// console.log("TCL: callTwo", callTwo); //false
// const callThree = list.set(9, 8);
// console.log("TCL: callThree", callThree); //false

// // // INSERT_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.insert(9, 2);
// console.log("TCL: callOne", callOne); //true
// console.log('The val at INDEX 2 is: ', list.head.next.next.val , list.head.next.next.val === 9 );
// const callTwo = list.insert(9, -1);
// console.log("TCL: callTwo", callTwo); //false
// const callThree = list.insert(9, 8);
// console.log("TCL: callThree", callThree); //false
// const callFour = list.insert(10, 4);
// console.log("TCL: callFour", callFour); //true  
// console.log('The val at the TAIL is ', list.tail.val, list.tail.val === 10);

// // // REMOVE_________________
// list.push(1);
// list.push(5);
// list.push(8);
// const callOne = list.remove(1);
// console.log("TCL: callOne", callOne, callOne.val === 5); //true 
// console.log('CallOne has a NEXT of ', callOne.next, callOne.next === null); //null
// console.log('CallOne has a PREV of ', callOne.prev, callOne.prev === null); //null
// const callTwo = list.remove(-1);
// console.log("TCL: callTwo", callTwo, callTwo === undefined); //undefined
// const callThree = list.remove(8);
// console.log("TCL: callThree", callThree, callThree === undefined); //undfined
// const callFour = list.remove(1);
// console.log("TCL: callFour", callFour, callFour.val === 8); //true
// console.log('CallFour has a NEXT of ', callFour.next, callFour.next === null); //null
// console.log('CallFour has a PREV of ', callFour.prev, callFour.prev === null); //null

console.log('>>>> ', list);