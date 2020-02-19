class Node {
  constructor(value) { 
    this.value = value;
    this.left = null; 
    this.right = null; 
  }
}

class BinarySearchTree { 
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    // Create a newNode with value. 
    const newNode = new Node(value);
    // Check if there is a root. 
    if(!this.root) { 
      this.root = newNode;
      return this;
    }
    // Set current to the root .
    let current = this.root;
    // Set  a while loop. 
    while(true){
    // check if value is less than current.value.      
      if(value < current.value) { 
    // check if current.left is null.
        if(!current.left) { 
    // Set newNode to current.left
          current.left = newNode;
    // return this
          return this;
        }
    // Re-assign current to current.left.
        current = current.left;
      }
    // check if values is greater than current.value. 
      else if(value > current.value){
        // check if if current.right is null      
          if(!current.right) { 
      // Set newNode to current.right.
            current.right = newNode;
      // return this
            return this;
          }
      // Update current to current.right.
          current = current.right;
      }
    }
  }

  // Find a node 
  find(value) {
    // check if there is not a root return false
    if(!this.root) return false;
    // set current to the root.
    let current = this.root; 
    // Set found to false.
    let found = false;
    while(current && !found) {
      if( value < current.value){
        current = current.left;
      }
      else if(value > current.right) {
        current = current.right;
      }
      else {
        found = true;
      }
    }

    if(!found) return undefined;
    // return current
    return current;
  }
  // Find a node 
  contains(value) {
    // check if there is not a root return false
    if(!this.root) return false;
    // set current to the root.
    let current = this.root; 
    // Set found to false.
    let found = false;
    // iterate and check if current is truthy and found is truthy.
    while(current && !found) {
      // check if the value is less than current.
      if( value < current.value){
        // update current to go left.
        current = current.left;
      }
      // check if the value is greater than current
      else if(value > current.right) {
        // update current to go right.
        current = current.right;
      }
      else {
        // Else return true.
        return true;
      }
    }
    // return current.
    return false;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(3);
tree.insert(15);
tree.insert(7);
// console.log('INSERT ', tree.insert(3));
console.log('FOUND', tree.find(3));
console.log('CONTAINS', tree.contains(3));



console.log(tree);