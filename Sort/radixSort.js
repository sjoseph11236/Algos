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

console.log(
  mostDigits([1234, 56, 7]), //4
  mostDigits([1, 1, 11111, 1]), //5
  mostDigits([12, 34, 56, 78]), //2
  mostDigits([23, 567, 89, 122312451, 90]) //9
);