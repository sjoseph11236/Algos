const assert = require('chai').assert;
const { getDigit } = require('../assessments/sort_assessment');



describe('Sort', function() {
  describe('getDigit()', function() {
    it('it should return a digit ', function() {
     let callOne = getDigit(12345, 0); //5 
      assert.equal(callOne, 5);
    });
  });
});
// // GETDIGIT _________
// console.log(
//     getDigit(12345, 0), //5 
//     getDigit(12345, 1), //4
//     getDigit(12345, 2), //3 
//     getDigit(12345, 3), //2 
//     getDigit(12345, 4), //1 
//     getDigit(12345, 5) //0
// );