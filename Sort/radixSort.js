//  Notes: 

// Radix sort is a special sorting algorith that works on lists of numbers.

// It looks at the number of digits by there place values to determine the order from smalledst to largest 

function getDigit(num, place) {
  // convert the num into string
  const numString = num.toString();
  // subtract the place from  string lenth  - 1; 
  const targetPlace  = numString[numString.length - 1 - place];
  // convert the target string into a num
  if(!targetPlace){
    return 0;
  }

  return targetPlace;
}

console.log(
  getDigit(12345, 0), //5 
  getDigit(12345, 1), //4
  getDigit(12345, 2), //3 
  getDigit(12345, 3), //2 
  getDigit(12345, 4), //1 
  getDigit(12345, 5) //0
);