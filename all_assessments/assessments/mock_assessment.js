// Balance Parens 

// Write a function that takes in a string of parentheses and counts how many times you would have to change unbalanced pairs. 

// takes in a string of parenthesis, your function has to determine how many operations are needed to make it balanced. Ex: '( ) ( ) (' // 1 operation (adding ')' )

function countUnbalancedPairs(str) {

  let openFirst = [];
  let holdClosed = [];

  for(let i = 0; i < str.length; i++) {
    let pren = str[i];
    
    if(pren === "(") {
      openFirst.push(pren);
    }
    else {
      if(openFirst.length > 0){
        openFirst.pop();
      }
      else{
        holdClosed.push(pren);
      }
    }
  }

  if(openFirst.length === holdClosed.length) {
    return openFirst.length + holdClosed.length;
  }

  const count = openFirst.length + holdClosed.length;

  if(count % 2 !== 0) {
    let result = (count + 1) / 2;
    return result;
  }

  let result = count  / 2;
  // console.log("RESULT ", result);

  return result;
}




// takes in an array and a number k, your function needs to find all the unique pairs where a + k = b
function findUniquePairs(arr, k) {
  let hash = {};
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
  }
}

// construct a "super" stack. Your function takes in an array of operations like ['push 4', 'pop', 'push 3',  etc] and you have to console log the top value every time an operation is executed. This one is the hardest one

function superStack(operations) {

}
module.exports = { 
  countUnbalancedPairs,
  findUniquePairs,
  superStack
};