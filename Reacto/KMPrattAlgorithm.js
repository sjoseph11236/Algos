// Knuth-Morris-Prat Algorithm

// Write a function that takes in two strings and checks if the first string contains the second one using the Knuth-Morris-Pratt algorithm should return a boolean
function knuthMorrisPrattAlgorithm(txt, str) {
  // Set bouncer to 0.
  let bouncer = 0; 
  // Sert pointer to 0.
  let pointer = 1;
  // create pattern arr intialized with zeros.
  let pattern = Array(str.length).fill(0);
  
  // iterate through str
  while(pointer < str.length) {
    if(bouncer > 0 && str[bouncer] !== str[pointer]) {
      bouncer = pattern[pointer - 1];
    }
    else if(str[bouncer] === str[pointer]){
      pattern[pointer] = bouncer + 1;
      bouncer++;
      pointer++;
    }
  }

  console.log('PATTERN ', pattern);

  // iterate through str and txt.

  // while()
  
}

console.log(knuthMorrisPrattAlgorithm('abxabcabcabye', 'abcaby'));


// // // -----My Solution-------//
// function knuthMorrisPrattAlgorithm(txt, str) {
// 	if(str.length > txt.length) return false; 
//   // This slice is On 
//   let check = txt.slice(0, str.length);
//   // The check is a loop since under the hood the string is an  arr that has to check eeach idx.
//   if(check === str) return true;
//   // this slice is On 
//   txt = txt.slice(1);

//   return knuthMorrisPrattAlgorithm(txt, str);
// }

// console.log(knuthMorrisPrattAlgorithm('abxabcabcabye', 'abcaby'));






