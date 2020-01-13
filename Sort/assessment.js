// // sort by moving the larger values to the end of the arr. 
// function bubbleSort(arr) {

// }

// console.log(
//   'BUBBLE ', 
//   bubbleSort([5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
// );

//------Merge Sort-----//

function merge(left, right) {
  // create an empty arr. 
  let result = [];
  // create a leftIdx
  let leftIdx = 0;
  // Create a rightIdx. 
  let rightIdx = 0; 
  // iterate throught both arrs. 
  while(leftIdx !== left.length && rightIdx !== right.length) {
  // check for the smallesst value
    if(left[leftIdx] < right[rightIdx]) {
  // if left is smaller push onto result arr. 
      result.push(left[leftIdx]);
  // increment leftIdx 
      leftIdx++;
    }
    else{
  // if the right is smaller push onto the result  arr. 
      result.push(right[rightIdx]);
  // increment rightidx
      rightIdx++;
    }
  }
  // check if the leftIdx equal to the length of the left arr. 
  if(leftIdx !== left.length) {
  // slice the remaing values
    let leftRemaining = left.slice(leftIdx);
  // push those values to result arr. 
    result.push(...leftRemaining);
  }

  // same for right. 
  if(rightIdx !== right.length) {
    let rightRemaining = right.slice(rightIdx);
    result.push(...rightRemaining);
  }
  // return the reuslt arr. 
  return result;
}

function mergeSort(arr){
  // check if the arr.length is less than or equal to 1. 
  if(arr.length <= 1) {
    return arr;
  }
  // create mid point. 
  let mid = Math.floor(arr.length / 2);
  // create left arr and call the mergeSort function
  let left = mergeSort(arr.slice(0, mid));
  // create right arr and call the mergeSort function
  let right = mergeSort(arr.slice(mid));
  // return the call of merge
  return merge(left, right);
}

console.log(
  'MERGE ',
  mergeSort([10, 24, 76, 73, 72, 1, 9]),
  mergeSort([10, 24, 76, 73])
);

//------Radix Sort-----//
// // helper function to determine what number is in certina place. 
// function getDigit(num, place) { 

// }

// // helper function to determine the length of a digit. 
// function digitCount(num) { 

// }

// // helper function to determine the length of the longest digit in the arr.  
// function mostDigits(arr) { 

// }

// // function to flatten the bucket 
// function bucketFlattener(arr) { 

// }

// // sorting nimbers by place values.
// function radixSort(arr) {

// }

// console.log(
//     "RADIX ",
//   radixSort([215, 16, 31256]), // [16, 215, 31256]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6, 6]), // [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
//   radixSort([23, 345, 5467, 12, 2345, 9852]) // [12, 23, 345, 2345, 5467, 9852]
// );

//------Selection Sort-----//
// // sort by moving the smallest value to front of on each pass.
function selectionSort(arr) {
  // Create a for loop that goes to the length of the arr. 
  for(let i = 0; i < arr.length; i++ ) {
  // Set a varaible to check for smallestPos.
  // Set smallestPost to i. 
    let smallestPos  = i; 
  // Create nest loop that goes the length of the arr. 
    for(let j = i + 1; j < arr.length; j++ ) {
      const current = arr[j];
  // check if the current element is smaller than element at the smallestPos. 
      if(current < arr[smallestPos]) {
  // if it is update the smallestPos. 
        smallestPos = j;
      }
    }
  // check if the smallestPos is not the same as i. 
    if(smallestPos !== i ) {
  // swap. 
      let temp = arr[i];
      arr[i] = arr[smallestPos];
      arr[smallestPos] = temp;
    }
  }
  // return arr. 
  return arr;
}

console.log(
  "SELECTION ",
  selectionSort([5, 3, 4, 1, 2]),//[1, 2, 3, 4, 5];
  selectionSort([5, 5, 4, 1, 2]) //[1, 2, 4, 5, 5, 5];
);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// -------------ASSESSMENT TEMPLATE FOR COPYING TO ABOVE ONLY ---------------------------\\\

// //------Bubble Sort-----//

// function bubbleSort() {

// }

// console.log(bubbleSort(
//   [5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
// );

// //------Insertion Sort-----//

// function insertionSort() {

// }

// console.log(
//   insertionSort([5, 3, 4, 1, 2])
// );
// //------Merge Sort-----//

// function mergeSort(){

// }

// console.log(
//   mergeSort([10, 24, 76, 73, 72, 1, 9]),
//   mergeSort([10, 24, 76, 73])
// );


// //------Quick Sort-----//

// function quickSort() {

// }

// console.log(
//   quickSort([4, 6, 9, 1, 2, 5, 3])
// );
// //------Radix Sort-----//

// // helper function to determine what number is in certina place. 
// function getDigit(num, place) { 

// }

// // helper function to determine the length of a digit. 
// function digitCount(num) { 

// }

// // helper function to determine the length of the longest digit in the arr.  
// function mostDigits(arr) { 

// }

// // function to flatten the bucket 
// function bucketFlattener(arr) { 

// }

// function radixSort() {

// }

// console.log(
//   radixSort([215, 16, 31256]), // [16, 215, 31256]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6, 6]), // [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
//   radixSort([23, 345, 5467, 12, 2345, 9852]) // [12, 23, 345, 2345, 5467, 9852]
// );
// //------Selection Sort-----//

// function selectionSort() {

// }

// console.log(
//   selectionSort([5, 3, 4, 1, 2]),//[1, 2, 3, 4, 5];
//   selectionSort([5, 5, 4, 1, 2]) //[1, 2, 4, 5, 5, 5];
// );