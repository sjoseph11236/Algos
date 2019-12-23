// You're an industrious programmer that lives off the grid. The local well that you use to fetch water has gone dry, so you've decided to collect rain water to filter; however, your collection device isn't flat.

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water your collection device is able to trap after raining.

function waterArea(heights) {

}


console.log(
  waterArea([8, 0, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]), // 56
  waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]), // 48
  waterArea([0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1]), // 7
  waterArea([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), // 6
  waterArea([0, 3, 0, 1, 0, 0, 0, 1, 0, 2]), // 12
  waterArea([0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1]), // 8
  waterArea([0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2]) // 38
);

























// -----------ANSWER BELOW -----------//

// function waterArea(heights) {
//   // set the currentRightMax to zero because thats the lowest value.
//   let currentRightMax = 0; 
//   // Create an arr to store all the rightMaxes for one pass. 
//   let rightMaxes = [];

//   // iter right to left 
//   for(let j = heights.length - 1; j >= 0; j--) {
//     // set new heighestRightMax 
//     currentRightMax = Math.max(currentRightMax, heights[j]);
//     //store value in the arr 
//     rightMaxes[j] = currentRightMax;
//   }

//   let count = 0; 
//   let leftMax = 0; 

//   // iter left to right
//   for(let i = 0; i < heights.length; i++) {
//     // set leftMax or CurrHeight
//     leftMax = Math.max(leftMax, heights[i]);
//     // add lower of the leftMax or rightMax (two walls ) minus currHeight
//     count += Math.min(leftMax, rightMaxes[i]) - heights[i];
//   }

//   return count;
// }

// console.log(
//   waterArea([8, 0, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]), // 56
//   waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]), // 48
//   waterArea([0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1]), // 7
//   waterArea([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), // 6
//   waterArea([0, 3, 0, 1, 0, 0, 0, 1, 0, 2]), // 12
//   waterArea([0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1]), // 8
//   waterArea([0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2]) // 38
// );