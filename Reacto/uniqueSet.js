// const str = "This is the paragraph.";
const str = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.";
const target = 19;

function uniqueSet(str) {
  // Create hash as an empty object.   
  const hash = {};
  // Create array to store unique values. 
  const unique = [];
  // Create a counter counter
  let counter = 1;

  for(let i = 0; i < str.length; i++){
    let elem = str[i];
    if(hash[elem]) { 
      hash[elem]++;
    }
    else{ 
      hash[elem] = 1;
    }
  }

    
  while((str.length - unique.length) > target ) {
    counter++;
  }
  return unique;
}
// function uniqueSet(str) {
//   // Create hash as an empty object.   
//   const hash = {};
//   // Create array to store unique values. 
//   const unique = [];
//   // Create a counter counter
//   let counter = 1;

//   for(let i = 0; i < str.length; i++){
//     let elem = str[i];
//     if(hash[elem]) { 
//       hash[elem]++;
//     }
//     else{ 
//       hash[elem] = 1;
//     }
//   }
  
//   let keys = Object.keys(hash);
//   let j = 0; 
  
//   while((str.length - unique.length) > target ) {
//     let key = keys[j];
//     if(hash[key] === counter){
//       unique.push(keys[j]);
//     }

//     if(j === keys.length){
//       counter++;
//       j = 0; 
//     }

//     j++;
//   }
//   return unique;
// }
// function helper(hash,unique, counter) {
//   for(let key in hash) { 
//     if(hash[key] === counter ){
//       unique.push(key);
//     }
//   }
//   return unique;
// }
console.log(uniqueSet(str));