// ______
// Notes: 

// Elementary Sorting Algorithms:

// sorting methods have advantages and disadvantages in certian situatiions.
// The built in sort method default uses the unicode to compare.


// -----BUBBLE  SORT ----

// Bubbule is a sorting algorithm where the largest values bubble up to the top on each iteration. 

// Pseudocode

// Create a for loop with i intialized going from the end to the beginning. 
// Create a varaible to check for swaps. 
// Create an inner for loop with j initialized at the beginning going to the end.
// Check if the current element is larger than the next element
// Swap the element 
// update the swap variable
// check if there was swap after a complete pass and break.
// return arr. 

function bubbleSort(arr) {

  //repeat the sort as much the lenght of the array decrementing. 
  for(let i = arr.length; i >  0; i--) {
    // loop through all elements in the arr not including the sorted element on each pass. 
    // create variavle to update if there was a swap
    let noSwaps = true;
    for(let j = 0; j < i - 1;  j++){
      // SWAP for the larger element
      if(arr[j] > arr[j + 1]) { 
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp; 
        // update noSwaps
        noSwaps = false;
      }
    }
    // check if the pass made swap
    if(noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort(
  [5, 3, 4, 1, 2])// [1, 2, 3, 4, 5]
);