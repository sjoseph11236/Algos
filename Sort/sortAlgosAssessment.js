// ---------------JAN 3.20 --------------------------------------------------------\\\
// // sort by moving the larger values to the end of the arr. 
// function bubbleSort(arr) {

// }

// console.log('BUBBLE ', 
//   bubbleSort(
//   [5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
// );

//------Merge Sort-----//

function merge(left, right) {
  // Set an empty arr called result. 
  const result = [];
  // create a left idx pointer.
  let leftIdx = 0;
  // Create a right Idx pointer. 
  let rightIdx = 0;
  // Create a while loop comparing both lengths
  while(leftIdx !== left.length && rightIdx !== right.length) {
  // Check which arr has the smaller value 
    if(left[leftIdx] < right[rightIdx]){
  // push value to the result arr
      result.push(left[leftIdx]);
  // increase left 
      leftIdx++;
    }
    else { 
      result.push(right[rightIdx]);
  // increase right
      rightIdx++;
    }

  }

    // check from reamin values in left 
    if(leftIdx !== left.length) {
      let leftRemaining = left.slice(leftIdx);
  // spread and push values to result
      result.push(...leftRemaining);
    }

  // check for remaing values in right    
    if(rightIdx !== right.length) {
      const rightRemaining = right.slice(rightIdx);
  // spread and push values to result
      result.push(...rightRemaining);
    }
  // return result.
  return result; 
}

function mergeSort(arr){
  // The base is checking if the array length is less than or equal to 1. 
  if(arr.length <= 1) return arr; 
  // Find the midpoint 
  const midpoint = Math.floor( arr.length / 2 );
  // slice the lift side and pass it in megeSort again. 
  let left = mergeSort(arr.slice(0, midpoint));
  // slice the right side and pass it in mergeSort again. 
  let right = mergeSort(arr.slice(midpoint));
  // return the call of merge with both lift and right as arguments. 
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
// function selectionSort(arr) {
//   // create a for loop that iterates throgh the arr. 
//   for(let i = 0; i < arr.length; i++) {
//   // create a varaible smallestest positon intially set to first element.
//   let smallestPos = i; 
//   // Create a nest loop that iterates from the  i + 1. 
//     for(let j = i + 1; j < arr.length; j++) {
//       let current = arr[j];
//   // Check if current element is smalled than that smalles position element.
//       if(arr[smallestPos] > current) {
//         smallestPos = j; 
//       }
//     }
//   // check if i is not equal to the smallest position.
//     if(smallestPos !== i) {
//   // swap
//       let temp = arr[i];
//       arr[i] = arr[smallestPos];
//       arr[smallestPos] = temp;
//     }
//   }
//   // return the arr. 
//   return arr;
// }

// console.log(
//   "SELECTION ",
//   selectionSort([5, 3, 4, 1, 2]),//[1, 2, 3, 4, 5];
//   selectionSort([5, 5, 4, 1, 2]) //[1, 2, 4, 5, 5, 5];
// );

// ---------------JAN 2.20 --------------------------------------------------------\\\

//------Bubble Sort-----//
// Create an effiecnt function that moves the largest values to the end of the arr. 
// function bubbleSort(arr) {
//   // Create for decrementing loop for the amount times to check the arr.
//   for(let i = arr.length; i > 0; i--){ 
//     // create a variable to check if there was swap 
//     let noSwap = true; 
//     // iterate through the arr excluding the sorted element. 
//     for( let j = 0; j < i - 1; j++) {
//       let curr = arr[j];
//       let next = arr[j + 1];
//       // check fro swap
//       if(curr > next) {
//         let temp = curr;
//         arr[j] = next; 
//         arr[j + 1] = temp;
//         noSwap = false;  
//       }
//     }
//     // check if there was swap to break 
//     if(noSwap) break;
//   }
//   return arr;
// }

// console.log(
//   bubbleSort([5, 3, 4, 1, 2]),// [1, 2, 3, 4, 5]
//   bubbleSort([10, 5, 7, 4, 3, 2, 1, 8, 6]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   bubbleSort([10, 5, 7, 4, 3, 2, 1, 8, 6, 6]), // [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
//   bubbleSort([23, 345, 5467, 12, 2345, 9852]), // [12, 23, 345, 2345, 5467, 9852]
//   bubbleSort([215, 16, 31256]) // [16, 215, 31256]
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

// function radixSort() {

// }

// console.log(
//   radixSort([215, 16, 31256]), // [16, 215, 31256]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6, 6]), // [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
//   radixSort([23, 345, 5467, 12, 2345, 9852]) // [12, 23, 345, 2345, 5467, 9852]
// );
// //------Selection Sort-----//

// // Find the positon of the smallest value and move it to the front.  
// function selectionSort(arr) {
//   // set the amount of repeats to the arr  equal to the arr length. 
//   for(let i = 0; i < arr.length; i++) {
//     // Intialize the position of the smallest value to i. 
//     let smallest = i; 
//     for( let j = i + 1; j < arr.length; j++) {
//       // check if the value at the current positon is smaller than value at the smallest
//       if(arr[smallest] > arr[j]) { 
//         // updated smallest position
//         smallest = j;
//       }
//     }
//     // cheack if the smallest position is equal to current i
//     if(smallest !== i){
//       let temp = arr[i];
//       arr[i] = arr[smallest];
//       arr[smallest] = temp; 
//     }
//   }

//   return arr; 
// }

// console.log(
//   selectionSort([23, 345, 5467, 12, 2345, 9852]), // [12, 23, 345, 2345, 5467, 9852]
//   selectionSort([5, 5, 4, 1, 2]) //[1, 2, 4, 5, 5, 5];
// );

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