'use strict';

var bank;

beforeEach(function() {
  bank = new Bank()
});
 
describe('Check Jasmine is working', function() {
  it('It creates a new instance of the bank function', function() {
      expect(bank).toEqual(bank);
  });
});

describe('User can make a deposite', function() {
  it('User adds 100', function() {
    bank.deposit(100)
    expect(bank.balance).toEqual(100);
  });
});


describe('User can withdraw money', function() {
  it('User adds 100', function() {
    bank.deposit(100)
    bank.withdraw(60)
    expect(bank.balance).toEqual(40);
  });
});

describe('User can withdraw money providing they dont request more than their balence', function() {
  it('User adds 100', function() {
    bank.deposit(100)
    bank.withdraw(101)
    expect(bank.balance === 100);
  });
});

