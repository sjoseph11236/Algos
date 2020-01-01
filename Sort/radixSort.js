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
function digitCount(num) {
  let place  = 0; 
  let count  = 1; 

  while( count <= num ) {
    place++;
    count *=10; 
  }
  return place; 
}

console.log(
  digitCount(1), //1
  digitCount(25), // 2
  digitCount(314),// 3
  digitCount(314000) // 6
);