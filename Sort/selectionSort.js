// Selection sort 

//Sort the small values into sorted position

let arr = [5, 3, 4, 1, 2];


// Create a variable for the smallest value intialized with the first value 
// Compare this item to the next item in the array untit you find a smaller number
// if smamller number is foun reassign the smallest value
// if the minimum is notthe value that swp the two values
// repeat the process with the next element until array is sorted


// Create a variable called minimuum to store the smallest value. Intialize with first value.
// Create a loop that goes from the beginning of the array. 
// Create a nested loop that goes from the beginning of the array. 

fucntion selctionSort(arr) {
  let minIdx; 

  for(let i = 0; i < arr.length; i++) {
    minIdx = i;
    for(let j = i + 1; j < arr.lenth; j++){
      if(arr[j] < arr[minidx]){
        minIdx = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp; 
  }

  return arr;
}

selctionSort(arr);