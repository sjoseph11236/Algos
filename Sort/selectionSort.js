// Selection sort 

//Sort the small values into sorted position


// Store the first element position as the smallest value intially.
// check smallest val with successive lements. 
// if new smallest cal update 
// check if the index is the same  as the intial if not swap the val. 
// repeat with next element until arrau is sorted. 


function selectionSort(arr) {
  for( let i = 0; i < arr.length; i++) {
    // store the position of the smallest variable.
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[lowest] > arr[j]) {
        lowest = j; 
      }
    }
    // check if lowest is not the same as current i 
    if(lowest !== i){
       //  swap
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr; 
}

console.log(
  selectionSort([5, 3, 4, 1, 2]),//[1, 2, 3, 4, 5];
  selectionSort([5, 5, 4, 1, 2]) //[1, 2, 4, 5, 5, 5];
);
















// --------FIRST ANSWER ----\\

// Create a variable for the smallest value intialized with the first value 
// Compare this item to the next item in the array untit you find a smaller number
// if smamller number is foun reassign the smallest value
// if the minimum is notthe value that swp the two values
// repeat the process with the next element until array is sorted


// Create a variable called minimuum to store the smallest value. Intialize with first value.
// Create a loop that goes from the beginning of the array. 
// Create a nested loop that goes from the beginning of the array. 

// time Complexity = On^2
// space Complexity = OnpJ
// const arr = [5, 3, 4, 1, 2];
// const arr2 = [5, 5, 4, 1, 2];

// function selectionSort(arr) {

//   for(let i = 0; i < arr.length; i++) {
//     let minIdx = i;
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[j] < arr[minIdx]){
//         minIdx = j;
//       }
//     }
//   if(minIdx !=== i){
//     let temp = arr[i];
//     arr[i] = arr[minIdx];
//     arr[minIdx] = temp; 
//    }

//   }
//   return arr;
// }

// console.log(
//   selectionSort(arr),//[1, 2, 3, 4, 5];
//   selectionSort(arr2) //[1, 2, 4, 5, 5];
// );