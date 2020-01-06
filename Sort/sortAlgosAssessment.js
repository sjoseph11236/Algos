// ---------------JAN 3.20 --------------------------------------------------------\\\
// // sort by moving the larger values to the end of the arr. 
// function bubbleSort(arr) {
//   // Create decrement  for loop. 
//   for ( let i = arr.length; i > 0; i--) {
//   // create a varaible noSwap set to true. 
//     let noSwap = true; 
//   // iterate through the array.
//     for(let j = 0; j < i - 1 ; j++) {
//   // create current variable.
//       let current = arr[j];
//   // create next varaible.
//       let next = arr[j + 1];
//   // check is the current element is greater than the next. 
//       if(current > next) { 
//   // swap.
//         let temp = current; 
//         arr[j] = next; 
//         arr[j + 1] = temp; 
//   // update noswap to false. 
//         noSwap = false;
//       }
//     }
//   // check if was nosap and break.
//     if(noSwap) break;
//   }
//   // return arr. 
//   return arr;
// }

// console.log(
//   'BUBBLE ', 
//   bubbleSort([5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
// );

//------Merge Sort-----//

// function merge(left, right) {
//   // Set an empty arr called result. 
//   const result = [];
//   // create a left idx pointer.
//   let leftIdx = 0;
//   // Create a right Idx pointer. 
//   let rightIdx = 0;
//   // Create a while loop comparing both lengths
//   while(leftIdx !== left.length && rightIdx !== right.length) {
//   // Check which arr has the smaller value 
//     if(left[leftIdx] < right[rightIdx]){
//   // push value to the result arr
//       result.push(left[leftIdx]);
//   // increase left 
//       leftIdx++;
//     }
//     else { 
//       result.push(right[rightIdx]);
//   // increase right
//       rightIdx++;
//     }

//   }

//     // check from reamin values in left 
//     if(leftIdx !== left.length) {
//       let leftRemaining = left.slice(leftIdx);
//   // spread and push values to result
//       result.push(...leftRemaining);
//     }

//   // check for remaing values in right    
//     if(rightIdx !== right.length) {
//       const rightRemaining = right.slice(rightIdx);
//   // spread and push values to result
//       result.push(...rightRemaining);
//     }
//   // return result.
//   return result; 
// }

// function mergeSort(arr){
//   // The base is checking if the array length is less than or equal to 1. 
//   if(arr.length <= 1) return arr; 
//   // Find the midpoint 
//   const midpoint = Math.floor( arr.length / 2 );
//   // slice the lift side and pass it in megeSort again. 
//   let left = mergeSort(arr.slice(0, midpoint));
//   // slice the right side and pass it in mergeSort again. 
//   let right = mergeSort(arr.slice(midpoint));
//   // return the call of merge with both lift and right as arguments. 
//   return merge(left, right);
// }

// console.log(
//   'MERGE ',
//   mergeSort([10, 24, 76, 73, 72, 1, 9]),
//   mergeSort([10, 24, 76, 73])
// );

//------Radix Sort-----//
// helper function to determine what number is in certina place. 
function getDigit(num, place) { 
// find the mud of the abs value of the number divided by 10. 
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10); 
}

// helper function to determine the length of a digit. 
function digitCount(num) { 
  // set length to 0. 
  let length = 0; 
  // set count to 1
  let count = 1; 
  // Create a while loop that checks if count 0s less than or eqaul to absolute value of num. 
  while( count <= Math.abs(num)) {
  // add to length.    
    length++;
  // mulitply count by 10. 
    count *= 10; 
  }
  // return length. 
  return length;
}

// helper function to determine the length of the longest digit in the arr.  
function mostDigits(arr) { 
  // set longest to zero 
  let longest = 0; 
  // loop through arr
  arr.forEach(num => { 
  // check for element length with digitCount. 
    let currentLen = digitCount(num);
  // compsre length with longest. 
    if(currentLen > longest) {
  // if longer update longest. 
      longest = currentLen;
    }
  });
  // retun longest. 
  return longest; 
}

// function to flatten the bucket 
function bucketFlattener(arr) { 
  // create an empty arr called result; 
  // Run forEach
  // spread each innereArr to empty arr. 
  // return result. 
}

// sorting nimbers by place values.
function radixSort(arr) {

}

console.log(
    "RADIX ",
  radixSort([215, 16, 31256]), // [16, 215, 31256]
  radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6, 6]), // [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
  radixSort([23, 345, 5467, 12, 2345, 9852]) // [12, 23, 345, 2345, 5467, 9852]
);

//------Selection Sort-----//
// // // sort by moving the smallest value to front of on each pass.
// function selectionSort(arr) {
//   // iterate through the arr from the beginning. 
//   for(let i = 0; i < arr.length; i++) {
//   // Set smallestPos to i 
//     let smallestPos = i; 
//   // Create a for loop stating + 1 from i. 
//     for(let j = i + 1; j < arr.length; j++) {
//       let current = arr[j];
//   // check if the current element is smaller than smallestpos position. 
//       if(current < arr[smallestPos]){
//   // update smallestPos.
//         smallestPos = j; 
//       }
//     }
//   // check if smallestPos is not the same as i
//     if(smallestPos !== i) {
//   // Swap. 
//       let temp = arr[i];
//       arr[i] = arr[smallestPos];
//       arr[smallestPos] = temp; 
//     }
//   }
//   // return arr.
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