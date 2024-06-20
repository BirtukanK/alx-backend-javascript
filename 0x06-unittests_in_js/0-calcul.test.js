var assert = require('assert');
var calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when adding 1 and 3', function(){
    assert.strictEqual(calculateNumber(1,3), 4);
  });
  
  it('should return 5 when adding 1 and 3.7', function(){
    assert.strictEqual(calculateNumber(1,3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', function(){
    assert.strictEqual(calculateNumber(1.2,3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', function(){
    assert.strictEqual(calculateNumber(1.5,3.7), 6);
  });
});
