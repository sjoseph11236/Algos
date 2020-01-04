// ---------------JAN 3.20 --------------------------------------------------------\\\
// // sort by moving the larger values to the end of the arr. 
// function bubbleSort(arr) {
//   // Create a variavle to update if there was a swap. 
//   let noSwap = true; 
//   // Create a for decrementing loop  for the number of times loop through the arr. 
//   for(let i = arr.length; i > 0 ; i--) { 
//   // Create a for loop that iterates through the arr
//     for (let j = 0; j < i - 1; j++) {
//       let current = arr[j];
//       let next = arr[j + 1];
//   // check if current element is larger than than next element
//       if(current > next) { 
//         // Swap 
//         let temp =  arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwap = false;
//       }
//     }
//     if(noSwap) break;
//   }

//   // retunr arr. 
//   return arr;
// }

// console.log('BUBBLE ', 
//   bubbleSort(
//   [5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
// );

//------Merge Sort-----//

// function merge(left, right) {
//   // create an empty arr. 
//   const sorted = [];
//   // create a left arr pointer  intially set to zero.
//   let leftIdx = 0; 
//   // create a right arr pointer intially set to zero.
//   let rightIdx = 0; 
//   // create a while loop that checks if bother pointer is not equal to theire respective arr.lengths. 
//   while(leftIdx !== left.length && rightIdx !== right.length){
//   // compare which element form each arr is less than and push to result arr. 
//     if(left[leftIdx] < right[rightIdx]) {
//       sorted.push(left[leftIdx]);
//       // Increment the left pointer 
//       leftIdx++;
//     }
//     else { 
//       sorted.push(right[rightIdx]);
//       rightIdx++;
//     }
//   }
//   // check if pointer is not equal to arr.length; 
//   if(leftIdx !== left.length) { 
//     let remainingLeft = left.slice(leftIdx);
//       // spread and push remaining values onto result arr
//     sorted.push(...remainingLeft);
//   }

//   if(rightIdx !== right.length) { 
//     let remainingRight = right.slice(rightIdx);
//       // spread and push remaining values onto result arr
//     sorted.push(...remainingRight);
//   }

//   // return result arr. 
//   return sorted; 
// }

// function mergeSort(arr){
//   // set the base case to check if  the length of the arr is less than or equal to 1; 
//   if(arr.length <= 1) return arr; 
//   // Find the midpoint of the by flooring half the arr.lenght; 
//   const midpoint = Math.floor(arr.length/ 2);
//   // create left arr with slice from the beginning of the arr  to the mid point.
//   // call the mergerSort functinon on left and right arr to create recursion. 
//   const left = mergeSort(arr.slice(0, midpoint));
//   // create a right arr with slice from midpoint to the end. 
//   // call the mergerSort functinon on left and right arr to create recursion. 
//   const right = mergeSort(arr.slice(midpoint));
//   // return merge envoked with the left and right as srgument. 
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
  // floor the Dived the absolute value of the num by 10 raised to the place number and find the mud when divided by 10.
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
}

// helper function to determine the length of a digit. 
function digitCount(num) { 
  // Set a length variable to zero. 
  let length = 0; 
  // set a count vairavle to 1; 
  let count = 1; 
  // Create a while loop that  check if num is greater than count. 
  while(count <= Math.abs(num)) { 
  // increase lenght by 1. 
    length++;
  // multiple count by 10. 
    count *= 10; 
  }
  // return length.
  return length;
}



// helper function to determine the length of the longest digit in the arr.  
function mostDigits(arr) { 
  // Set teh mostDigit to zero. 
  let mostDigit = 0; 
  // compare each element length to mostDigit 
  arr.forEach(elem => { 
    const current = digitCount(elem);
  // if currentCount of element if geater update modstDigit. 
    if(current > mostDigit) { 
      mostDigit = current; 
    }
  });
  // return mostDigit. 
  return mostDigit;
}

// function to flatten the bucket 
function bucketFlattener(arr) { 
  // create an empty arr called result. 
  const result = [];
  // loop thorugh the arr.
  arr.forEach(elem => { 
  // spread and push each elem to the result; 
    result.push(...elem);
  });
  // return result. 
  return result; 
}

// sorting nimbers by place values.
function radixSort(arr) {
  // Store the largest Digit in the arr. 
  const largest = mostDigits(arr);
  // create a bucket with 10 empty arrs inside an arr. 
  // Create a for loop that repats to the largest. 
  // create a nested for loop that iterates therought hte arr.
  // 
}

console.log(
    "RADIX ",
  radixSort([215, 16, 31256]), // [16, 215, 31256]
  radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6, 6]), // [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
  radixSort([23, 345, 5467, 12, 2345, 9852]) // [12, 23, 345, 2345, 5467, 9852]
);

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