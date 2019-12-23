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
    // Create a new nodew with value from the parameter 
    const newNode = new Node(value);

    //Check if there is a root 
    if(!this.root){
      // set root to newNode
      this.root = newNode;
    }


    // if(value > this.root.value) {
    //   if(!this.right){
    //     this.right = newNode;
    //   }
    //   else{ 

    //   }
    // }
  }
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.right  = new Node(15);
// tree.left = new Node(7);

// console.log('INSERT ', tree.insert(3));



// console.log(tree);