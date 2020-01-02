//  Notes: 

// Radix sort is a special sorting algorith that works on lists of numbers.

// It looks at the number of digits by there place values to determine the order from smalledst to largest 

//-----MY SOLUTION --------------//
// function getDigit(num, place) {
//   // convert the num into string
//   const numString = num.toString();
//   // subtract the place from  string lenth  - 1; 
//   const targetPlace  = numString[numString.length - 1 - place];
//   // convert the target string into a num
//   if(!targetPlace){
//     return 0;
//   }

//   return targetPlace;
// }


function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
}
// console.log(
//     getDigit(12345, 0), //5 
//     getDigit(12345, 1), //4
//     getDigit(12345, 2), //3 
//     getDigit(12345, 3), //2 
//     getDigit(12345, 4), //1 
//     getDigit(12345, 5) //0
// );

// turn the number into a string and find length; 

// --- MY digit count solution ------//
// function digitCount(num) {
//   let place  = 0; 
//   let count  = 1; 

//   while( count <= Math.abs(num)) {
//     place++;
//     count *=10; 
//   }
//   return place; 
// }

//---COLT STEELE SOLUTION -----///

function digitCount(num) {
  if(num === 0) return 1; 
  return Math.floor(Math.log10(Math.abs(num))) + 1; 
}

// console.log(
//   digitCount(1), //1
//   digitCount(25), // 2
//   digitCount(314),// 3
//   digitCount(-314),// 3
//   digitCount(314000), // 6
//   digitCount(-314000) // 6
// );


function mostDigits(arr) {
  // Create a variable called mostDigit set to zero; 
  let mostDigit = 0; 
  // Use forEach to check to compare each element digit length to mostDigit. 
  arr.forEach(element => { 
    // Create a varaible called current Count  
    let currentCount = digitCount(element);
    if(mostDigit < currentCount){
      mostDigit = currentCount;
    }
  });

  return mostDigit;
}

// console.log(
//   mostDigits([1234, 56, 7]), //4
//   mostDigits([1, 1, 11111, 1]), //5
//   mostDigits([12, 34, 56, 78]), //2
//   mostDigits([23, 567, 89, 122312451, 90]) //9
// );

function bucketFlattener(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    let inner = arr[i];
    result.push(...inner);
  }

  return result;
}

// Define a functon that accepts list of numbers 
function radixSort(arr) {
  // Create a varaible to store the largest Digit to determine how many times to loop through the arr. 
  const largest = mostDigits(arr);
  // Create a bucket of 9 empty arrays; 
  let bucket =  [[],[],[],[],[],[],[],[],[]];
  // create for loop for the total amount of times to sort the arr. 
  for(let i = 0; i < largest; i++) {
    // iterate through the array
    for(let j = 0; j < arr.length; j++){
      let elem = arr[j];
      console.log("TCL: radixSort -> elem ", elem );
      // store the value at each place for each element;
      let placeValue = getDigit(elem, i);
      console.log("TCL: radixSort -> placeValue", placeValue)
      let place = placeValue - 1;
      if(place < 0) {
        place = 0; 
      }
      bucket[place].push(elem); 
    }
    // flatten bucket and reassign array
    arr = bucketFlattener(bucket);
    // Empty bucket
    bucket = [[],[],[],[],[],[],[],[],[]];
  }

  return arr; 
}
// figure out how many digits the largeest number has
// loop the to the total of the largest number of digits 
// for each iteration of the loop creat buckets fof each 0 to 9 digit


console.log(
  radixSort([215, 16, 31256]) // [16, 215, 31256]
);