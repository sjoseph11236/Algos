// Complete the function countInversions in the editor below. It must return an integer representing the number of inversions required to sort the array.

function countInversions(arr) {
  return mergeSort(arr);
}

function mergeSort(arr) {
  // Check if arr length is less than or eqaul to 1. 
  if(arr.length <= 1) return arr;
  // Set invCount to 0. 
  let invCount = 0;
  // Find the mid
  let mid = Math.floor(arr.length / 2);
  // Call the mergeSort again with arr on left side. 
  let left = mergeSort(arr.slice(0, mid));
  console.log("TCL: mergeSort -> left", left)
  // Cale the mergeSort adain with arr on right Side.
  let right = mergeSort(arr.slice(mid));
  console.log("TCL: mergeSort -> right", right)
  // Return merge of left and right.
  return merge(left, right);
}


// helper function to sort the two arrs into one new sorted arr. 
function merge(left, right) {
  // Set sorted to empty arr. 
  let sorted = [];
  // Create leftPoint set to 0.
  let leftPoint = 0;
  // Create rightPoint set to 0.
  let rightPoint  = 0;
  // Iterate with while loop chick if both pointers are less than length.
  while(leftPoint !== left.length && rightPoint !== right.length) {
  // check if left value is is less than right. 
    if(left[leftPoint] < right[rightPoint]) {
  // Push left value to sorted      
      sorted.push(left[leftPoint]);
  // Increment the leftPoint.       
      leftPoint++;
    }
    else{
  // Else push the right value.
      sorted.push(right[rightPoint]);
  // Increment the rightPoint.
      rightPoint++;
    }
  }

  // check if leftPoint is equal to left.length. 
  // Push and spread the remaing values.
  if(leftPoint !== left.length)  sorted.push(...left.slice(leftPoint));
  // check if the rightPioint is equal to right length. 
  // Push and spread the remaing valiues. 
  // slice adds to the time complexity. Refactor to while loops
  if(rightPoint !== right.length) sorted.push(...right.slice(rightPoint));
  // return sorted.
  return sorted;
}

  console.log(
    countInversions([2,1,3,1,2])
    // countInversions([2, 1, 3])
  );