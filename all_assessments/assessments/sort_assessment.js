// sort by moving the larger values to the end of the arr. 
function bubbleSort(arr) {
// Create a decrementing for loop that goes the length of the arr. 
for(let i = arr.length - 1 ; i > 0; i--) {
  // Set noSwap to true
      let noSwap = true;
  // Create another for loop that goes the length of the arr. 
      for(let j = 0; j < i; j++) {
  // Set curr
        let curr = arr[j];
  // Set next
        let next = arr[j + 1];
  // check if curr is greater than next
        if(curr > next) {
          // swap
          let temp  = curr; 
          arr[j] = arr[ j  + 1];
          arr[j + 1] = temp; 
          // update noSwap
          noSwap = false; 
        }
      }
  // check for noswap to break
    if(noSwap) break;
    }
    return arr;
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
// // MOSTDIGITS______________
// console.log(
//   mostDigits([1234, 56, 7]), //4
//   mostDigits([1, 1, 11111, 1]), //5
//   mostDigits([12, 34, 56, 78]), //2
//   mostDigits([23, 567, 89, 122312451, 90]) //9
// );

// function to flatten the bucket 
function bucketFlattener(arr) { 
  // set flattenedArr to empty arr. 
  let flattenedArr = [];
  // itetarate through the arr.
  for(let i = 0; i < arr.length; i++) {
    let inner = arr[i];
    flattenedArr.push(...inner);
  }
  
  return flattenedArr;
}

// sorting nimbers by place values.
function radixSort(arr) {

  // Set larget to value returned from mostDigits
  let largest = mostDigits(arr);
  // Create a bucket with 10 empty arrays. 
  let bucket = [[],[], [], [], [], [],[], [], [],[]];
  // Set a for loop to run up to largest value
  for(let i = 0; i < largest; i++) {
  // Set another for loop iterate through the arr. 
    for(let j = 0; j < arr.length; j++) {
  // Get the value placeValue of the current i. 
      let elem = arr[j];

      let placeValue = getDigit(elem, i );
  // push the currentElem to the arr at the placeValue
      bucket[placeValue].push(elem);
      // console.log("BUCKET ", bucket);
    }

    console.log(`the bukect at ${i} `, bucket);
    // flatten the bucket  and update the arr. 
    arr = bucketFlattener(bucket);
    // empty the bucket 
    bucket =[[],[], [], [], [], [],[], [], [],[]];
  }

  // return arr.
  return arr; 
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
    if(arr.length == 1) return arr;
  // 	Create an incrementing for loop
  for(let i = 0; i < arr.length; i++) {
  // 	set smallestIdx to i.
  let smallestIdx = i;
 

  // 	Creat an incremnting for loop.
    for(let j = i + 1; j < arr.length; j++) { 
    // 	Set curr
      let curr = arr[j];

    //  check if the curr value is smaller than value at smallestId
      if(curr < arr[smallestIdx]) {
        smallestIdx = j; 

      }

    }
  // 	Check if the smallest idx is not i.
  if(smallestIdx !== i) {
  // 	swap
    let temp = arr[smallestIdx];
    arr[smallestIdx] = arr[i];
    arr[i] = temp;
  }
  }
  // return arr. 
  return arr;
}

// console.log(
//   "SELECTION ",
//   selectionSort([5, 3, 4, 1, 2]),//[1, 2, 3, 4, 5];
//   selectionSort([5, 5, 4, 1, 2]) //[1, 2, 4, 5, 5, 5];
// );

module.exports = { 
  getDigit,
  mergeSort
};
