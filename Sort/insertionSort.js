// Notes: 
// Builds up the sort by graudually creating a larger left portion which is always sorted


// pick the second the element in the array 
// Compare the one before it 
// Continue to the next and ig 


const arr = [5, 3, 4, 1, 2];
function insertionSort(arr) {
  for(let  i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // This works because of the var keyword allows access to j out of the scope of the for loop for j; 
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1]  = currentVal;
  }
  return arr;
}

console.log(
  insertionSort(arr)
);