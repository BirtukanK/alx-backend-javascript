var chai = require('chai');
var expect = chai.expect;
var calculateNumber = require('./2-calcul');

describe('calculateNumber', function() {
  it('should return sum of two numbers', function(){
    expect(calculateNumber('SUM',1.4,4.5)).to.equal(6);
  });

  it('should return difference of two numbers', function(){
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return result of dividing two numbers', function(){
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return Error for divide by 0', function(){
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
