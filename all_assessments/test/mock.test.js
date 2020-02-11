const assert = require('chai').assert;
const { countUnbalancedPairs, findUniquePairs } = require('../assessments/mock_assessment');

describe('Unbalanced Parens', ()=> {
  it('Should return a number ', ()=> {
    const result = countUnbalancedPairs('');
    assert.typeOf(result, 'number');
  });

  it('Should return 1 ', () => {
    const result = countUnbalancedPairs('(');
    assert.equal(result, 1);
  });

  it('Should return 0 ', ()=> {
    const result = countUnbalancedPairs('()');
    assert.equal(result, 0);
  });

  it('Should return 1', ()=> {
    const result = countUnbalancedPairs(")(()))");
    assert.equal(result, 1);
  });

  it('Should return 2', ()=> {
    const result = countUnbalancedPairs("))()))");
    assert.equal(result, 2);
  });

  it('Should return 2', ()=> {
    const result = countUnbalancedPairs("))())");
    assert.equal(result, 2);
  });
  
  it('Should return 2', ()=> {
    const result = countUnbalancedPairs(")()(");
    assert.equal(result, 2);
  });
});

describe('Find Unique Pairs ', ()=> {
  
  it('Should be a number', () => {
    let result = findUniquePairs([], 0);
    assert.typeOf(result, 'number');
  });

  it('Should be return 1', ()=> {
    let result = findUniquePairs([1,2, 3], 1);
    assert.equal(result, 1);
  });
});