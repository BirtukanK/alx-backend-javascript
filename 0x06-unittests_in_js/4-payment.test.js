const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(Utils);

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(spy.calculateNumber.calledWith('The total is: 10')).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    stub.restore()
    spy.log.restore();
  });
});
