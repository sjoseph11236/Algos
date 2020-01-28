// sort by moving the larger values to the end of the arr. 
function bubbleSort(arr) {

}

// console.log(
//   'BUBBLE ', 
//   bubbleSort([5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
// );

//------Merge Sort-----//

// helper function to sort the two arrs into one new sorted arr. 
function merge(left, right) {

}

// a function to split the arr. 
function mergeSort(arr){

}

// console.log(
//   'MERGE ',
//   mergeSort([10, 24, 76, 73, 72, 1, 9]),
//   mergeSort([10, 24, 76, 73])
// );

//------Radix Sort-----//
// helper function to determine what number is in certina place. 
function getDigit(num, place) { 
  // Round Down
  // Divide the absolute of num. 
  // by Math.pow with base of 10.
  // Get the remainder when divided by 10.
  return Math.floor(Math.abs(num) /  Math.pow(10, place) %  10 );
}

// // GETDIGIT _________
// console.log(
//     getDigit(12345, 0), //5 
//     getDigit(12345, 1), //4
//     getDigit(12345, 2), //3 
//     getDigit(12345, 3), //2 
//     getDigit(12345, 4), //1 
//     getDigit(12345, 5) //0
// );

// helper function to determine the length of a digit. 
function digitCount(num) { 
  // Set length to zero
  let length = 0; 
  // Set counter to 1
  let count = 1;
  // Create a while loop
  // check if counter is less than the abs of num. 
  while(count < Math.abs(num)) { 
  // if so add one to the length.   
    length++;
  // multiply the counter by 10. 
    count*= 10;
  }
  // return length.
  return length;
}

// // DIGITCOUNT______________
// console.log(
//   digitCount(1), //1
//   digitCount(25), // 2
//   digitCount(314),// 3
//   digitCount(-314),// 3
//   digitCount(314000), // 6
//   digitCount(-314000) // 6
// );

// helper function to determine the length of the longest digit in the arr.  
function mostDigits(arr) { 
  // Set mostDigit to 0. 
  let mostDigit = 0; 
  // Execute forEach to pass each elementthe digitCount method. 
  arr.forEach(digit =>  {
    let currDigitCount = digitCount(digit);
  // Check if the current digitCount is larger mostDigit. 
  // If so, update mostDigit. 
    if(currDigitCount > mostDigit) mostDigit = currDigitCount;
  });
  // retunr mostDigit. 
  return mostDigit;
}
// MOSTDIGITS______________
console.log(
  mostDigits([1234, 56, 7]), //4
  mostDigits([1, 1, 11111, 1]), //5
  mostDigits([12, 34, 56, 78]), //2
  mostDigits([23, 567, 89, 122312451, 90]) //9
);

// function to flatten the bucket 
function bucketFlattener(arr) { 
  // 
}

// sorting nimbers by place values.
function radixSort(arr) {

}

// console.log(
//     "RADIX ",
//   radixSort([215, 16, 31256]), // [16, 215, 31256]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6]), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   radixSort([10, 5, 7, 4, 3, 2, 1, 8, 6, 6]), // [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
//   radixSort([23, 345, 5467, 12, 2345, 9852]) // [12, 23, 345, 2345, 5467, 9852]
// );

//------Selection Sort-----//
// sort by moving the smallest value to front of on each pass.
function selectionSort(arr) {
  // 
}

// console.log(
//   "SELECTION ",
//   selectionSort([5, 3, 4, 1, 2]),//[1, 2, 3, 4, 5];
//   selectionSort([5, 5, 4, 1, 2]) //[1, 2, 4, 5, 5, 5];
// );