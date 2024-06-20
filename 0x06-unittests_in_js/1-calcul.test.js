var assert = require('assert');
var calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should return sum of two numbers', function(){
    assert.strictEqual(calculateNumber('SUM',1.4,4.5), 6);
  });

  it('should return difference of two numbers', function(){
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return result of dividing two numbers', function(){
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return Error for divide by 0', function(){
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
