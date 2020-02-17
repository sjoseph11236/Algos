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

  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.right  = new Node(15);
tree.left = new Node(7);

// console.log('INSERT ', tree.insert(3));



console.log(tree);