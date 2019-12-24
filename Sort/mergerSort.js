// Notes

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

console.log(
  merge([1, 3, 5], [2, 4, 7])
);

