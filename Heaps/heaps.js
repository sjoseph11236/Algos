class MaxBinaryHeap { 
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1; 
    // Get the last element.
    const element = this.values[idx];

    while(idx > 0) {
      // Get the idx of the parent Node.
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // Check if element is less than or equal to the parent.
      if(element <= parent) break;
      
      // Swap
      this.values[parentIdx] = element; 
      this.values[idx] = parent; 
      idx = parentIdx;
    }
  }

  extractMax() {
    // Swap the first val in values with the last
    const max = this.values[0];
    const end = this.values.pop();

    if(this.values.length > 0) {
      this.values[0] = end; 
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    // Sink down
    let idx = 0; 
    const length = this.values.length; 
    const element = this.values[0];

    while(true) {
      let leftChildIdx =  2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild; 

      let swap =  null; 
      
      // Check if in bounds 
      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if(leftChild > element ) {
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if((swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)){
          swap = rightChildIdx;
        }
      }

      if(swap === null ) break; 
      
      // Swap
      this.values[idx] = this.values[swap];
      this.values[swap] = element; 
      idx = swap; 
    }
  } 
}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
console.log('Heap ', heap.values);
