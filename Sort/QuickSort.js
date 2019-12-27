// The pivot is the median value in the data set


// Create a function that takes three arguments: an array, a start index, and an end index
// Store the current pivot index in a variabel  
// loop through the array from the start until the end
// if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at mthe pivot index
// Swap the starting element witht he pivot index

function quickSort(array, left = 0, right = array.length - 1) {
  if(left< right) {
    let pivotIdx = pivot(array, left, right);
    // console.log("TCL: quickSort -> pivotIdx", pivotIdx);
    // left
    quickSort(array, left, pivotIdx - 1);
    //right 
    quickSort(array, pivotIdx + 1 , right);
  }
  return array;
}

console.log(
  quickSort([4, 6, 9, 1, 2, 5, 3])
);

function pivot(array, startIdx = 0, endIdx = array.length  - 1 ) {

  // const swap = (array1, idx1, idx2) => {
  //   [array[idx1], array[idx2]] = [[array[idx2]], array[idx1]];
  // };

  let pivot = array[startIdx];
  let swapIdx = startIdx;

  for(let i = startIdx + 1; i <= endIdx; i++) {
    if(pivot > array[i]) {
      swapIdx++;
      // swap(array, swapIdx, i);
      // console.log("TCL: pivot -> IF STATEMENT", array);
    }
  }
  // swap(array, startIdx, swapIdx);
  // console.log("TCL: pivot -> BEFORE RETURN", array);
  
  return swapIdx;
}