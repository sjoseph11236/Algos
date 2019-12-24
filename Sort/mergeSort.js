// Notes
// Break up the array into halve until you have arrays that are empty or have one element
// 

// --------MY ANSWER-----//
// 

function merge(arr1, arr2) {
  let result = [];
  let arr1marker = 0; 
  let arr2marker = 0; 

  while(arr1marker !== arr1.length && arr2marker !== arr2.length){
    if(arr1[arr1marker] < arr2[arr2marker]){
      result.push(arr1[arr1marker]);
      arr1marker++;
    }
    else{
      result.push(arr2[arr2marker]);
      arr2marker++;
    }
  }

  if(arr1marker !== arr1.length){
    result.push(...arr1.slice(arr1marker));
  }

  if(arr2marker !== arr2.length){
    result.push(...arr2.slice(arr2marker));
  }

  return result; 
}

// console.log(
//   merge([1, 3, 5], [2, 4, 7]),
//   merge([1, 10, 50], [2, 14, 99, 100])
// );

// ------COLT SOlUTION ------///

// function merge(arr1, arr2 ) {
//   let result = [];
//   let i = 0; 
//   let j = 0; 
  
//   while(i < arr1.length && j < arr2.length) {
//     if(arr1[i] < arr2[j]){
//       result.push(arr1[i]);
//       i++;
//     }
//     else{ 
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while( i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while(j < arr2.length){
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

// console.log(
//   merge([1, 3, 5], [2, 4, 7]),
//   merge([1, 10, 50], [2, 14, 99, 100])
// );

//_________-

function mergeSort(arr) {
  // base case:
  if(arr.length <= 1) return arr; 

  // Findt he midpoing of the array
  let midPoint = Math.floor(arr.length/ 2);
  // Split arr into left and right
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  
  return merge(left, right);
}

console.log(
  mergeSort([10, 24, 76, 73, 72, 1, 9]),
  mergeSort([10, 24, 76, 73,])
);