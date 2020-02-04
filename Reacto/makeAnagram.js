// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  // set a pointer to 0.
  let pointer = 0; 
  // set a counter to 0.
  let counter =  0; 

  // Find larger str.
  let larger; 
  if(a.length > b.length) { 
      larger = a.length;
  }
  else { 
      larger = b.length; 
  }
  // while pointer is less than larger str.
  while(pointer < larger) { 
  // Check if element in string a is not included in string  b.
      if(!b.includes(a[pointer]) && a[pointer] !== undefined) { 
      console.log("TCL: makeAnagram -> a[pointer]", a[pointer]);
  // counter ++
          counter++;
      }
  // Check if element in string b is not included in string a.
      if(!a.includes(b[pointer]) && b[pointer] !== undefined) {
      console.log("TCL: makeAnagram -> b[pointer]", b[pointer])
  // counter ++.
          counter++;
      }

      pointer++;
  }
  // return counter.
  return counter;
}


console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));