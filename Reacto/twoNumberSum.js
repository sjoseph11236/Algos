function twoNumberSum(arrayOfIntergers, targetSum) {
  // Create an empty to store pairs
  let pairs = [];
  // Create a nested loop 
  for(let i = 0; i < arrayOfIntergers.length; i++) {
    let firstInterger = arrayOfIntergers[i]
    for( let j = i + 1; j < arrayOfIntergers.length; j++) {
      let secondInterger = arrayOfIntergers[j]
    // check if the two integers equal targetSum
      if(firstInterger + secondInterger === targetSum) {
        pairs.push(firstInterger, secondInterger);
      }
    }
  }
  // return pairs
  return pairs;
}

console.log(
  twoNumberSum([3,5,-4,8,11,1, -1, 6], 10)
);