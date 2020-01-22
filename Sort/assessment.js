// sort by moving the larger values to the end of the arr. 
function bubbleSort(arr) {

}

console.log(
  'BUBBLE ', 
  bubbleSort([5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
);

//------Merge Sort-----//

// function merge(left, right) {
//   // create an empty arr. 
//   let result = [];
//   // create a leftIdx
//   let leftIdx = 0;
//   // Create a rightIdx. 
//   let rightIdx = 0; 
//   // iterate throught both arrs. 
//   while(leftIdx !== left.length && rightIdx !== right.length) {
//   // check for the smallesst value
//     if(left[leftIdx] < right[rightIdx]) {
//   // if left is smaller push onto result arr. 
//       result.push(left[leftIdx]);
//   // increment leftIdx 
//       leftIdx++;
//     }
//     else{
//   // if the right is smaller push onto the result  arr. 
//       result.push(right[rightIdx]);
//   // increment rightidx
//       rightIdx++;
//     }
//   }
//   // check if the leftIdx equal to the length of the left arr. 
//   if(leftIdx !== left.length) {
//   // slice the remaing values
//     let leftRemaining = left.slice(leftIdx);
//   // push those values to result arr. 
//     result.push(...leftRemaining);
//   }

//   // same for right. 
//   if(rightIdx !== right.length) {
//     let rightRemaining = right.slice(rightIdx);
//     result.push(...rightRemaining);
//   }
//   // return the reuslt arr. 
//   return result;
// }

// function mergeSort(arr){
//   // check if the arr.length is less than or equal to 1. 
//   if(arr.length <= 1) {
//     return arr;
//   }
//   // create mid point. 
//   let mid = Math.floor(arr.length / 2);
//   // create left arr and call the mergeSort function
//   let left = mergeSort(arr.slice(0, mid));
//   // create right arr and call the mergeSort function
//   let right = mergeSort(arr.slice(mid));
//   // return the call of merge
//   return merge(left, right);
// }

// console.log(
//   'MERGE ',
//   mergeSort([10, 24, 76, 73, 72, 1, 9]),
//   mergeSort([10, 24, 76, 73])
// );

//------Radix Sort-----//
// // helper function to determine what number is in certina place. 
// function getDigit(num, place) { 
//   // Need to round down 
//   // find the absolute value of the num
//   // Find the modulo 
//   // divide by the place to the power of 10. 
//   return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
// }

// // GETDIGIT _________
// console.log(
//     getDigit(12345, 0), //5 
//     getDigit(12345, 1), //4
//     getDigit(12345, 2), //3 
//     getDigit(12345, 3), //2 
//     getDigit(12345, 4), //1 
//     getDigit(12345, 5) //0
// );

// // helper function to determine the length of a digit. 
// function digitCount(num) { 
//   // Create a length set to zero.
//   let length = 0; 
//   // Create a counter set 1
//   let counter = 1;
//   // Create a while loop that check if num is less than or equal to absolute value of num. 
//   while(counter <= Math.abs(num)) {
//   // increment the length.
//     length++;
//   // multiply the counter by 10. 
//     counter *= 10;
//   }
//   // return length.
//   return length;
// }

// // DIGITCOUNT______________
// console.log(
//   digitCount(1), //1
//   digitCount(25), // 2
//   digitCount(314),// 3
//   digitCount(-314),// 3
//   digitCount(314000), // 6
//   digitCount(-314000) // 6
// );

// // helper function to determine the length of the longest digit in the arr.  
// function mostDigits(arr) { 
//   // Set mostDigit to zero. 
//   let mostDigit = 0;
//   // create a for each. 
//   arr.forEach(num => {
//   // call the digitcount function on each num
//     let curr = digitCount(num);
//     // check if curr is more than the mostDigit.
//     if(curr > mostDigit) {
//       mostDigit = curr;
//     }
//   });
//   // return mostDigit.
//   return mostDigit;
// }
// // MOSTDIGITS______________
// console.log(
//   mostDigits([1234, 56, 7]), //4
//   mostDigits([1, 1, 11111, 1]), //5
//   mostDigits([12, 34, 56, 78]), //2
//   mostDigits([23, 567, 89, 122312451, 90]) //9
// );

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
//   // Create a for loop that runs the length of the arr.
//   for(let i = 0; i < arr.length; i++) {
//   // Set smallest to the i.
//     let smallest = i; 
//   // Crete a for loop that runs the length of the arr and starts at i + 1. 
//     for(let j = i + 1; j < arr.length; j++) {
//       let curr = arr[j];
//   // check if the current element is smaller than the currnt smallest value. 
//       if(curr < arr[smallest]) {
//   // update smallest. 
//         smallest = j; 
//       }
//     }
//   // check if the smallest is not equal to the smallest. 
//     if(smallest !== i) {
//     // swap 
//       let temp = arr[i];
//       arr[i] = arr[smallest];
//       arr[smallest] = temp;
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