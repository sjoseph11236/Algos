// // sort by moving the larger values to the end of the arr. 
// function bubbleSort(arr) {

// }

// console.log(
//   'BUBBLE ', 
//   bubbleSort([5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
// );

//------Merge Sort-----//

function merge(left, right) {

}

function mergeSort(arr){

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