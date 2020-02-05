const assert = require('chai').assert;
const { getDigit } = require('../assessments/sort_assessment');



describe('Sort', function() {
  describe('getDigit()', function() {
    it('it should return a type number ', function() {
      let result =  getDigit(12345, 5); //0      
      assert.typeOf(result, 'number');
    })

    it('it should return a zero ', function() {
      let result =  getDigit(12345, 5); //0
      assert.equal(result, 0);
    });

    it('it should return a one ', function() {
      let result = getDigit(12345, 4); //1 
      assert.equal(result, 1);
    });

    it('it should return a two ', function() {
      let result =  getDigit(12345, 3); //2 
      assert.equal(result, 2);
    });

    it('it should return a three ', function() {
      let result =  getDigit(12345, 2); //3 
      assert.equal(result, 3);
    });
    

    it('it should return a four ', function() {
     let result = getDigit(12345, 1); //4
      assert.equal(result, 4);
    });

    it('it should return a five ', function() {
      let result = getDigit(12345, 0); //5 
      assert.equal(result, 5);
    });
  });
});
