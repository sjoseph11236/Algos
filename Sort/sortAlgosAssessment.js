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

// Find the positon of the smallest value and move it to the front.  
function selectionSort(arr) {
  // set the amount of repeats to the arr  equal to the arr length. 
  for(let i = 0; i < arr.length; i++) {
    // Intialize the position of the smallest value to i. 
    let smallest = i; 
    for( let j = i + 1; j < arr.length; j++) {
      // check if the value at the current positon is smaller than value at the smallest
      if(arr[smallest] > arr[j]) { 
        // updated smallest position
        smallest = j;
      }
    }
    // cheack if the smallest position is equal to current i
    if(smallest !== i){
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp; 
    }
  }

  return arr; 
}

console.log(
  selectionSort([23, 345, 5467, 12, 2345, 9852]), // [12, 23, 345, 2345, 5467, 9852]
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