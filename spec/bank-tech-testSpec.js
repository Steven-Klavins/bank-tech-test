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

describe('User can make a deposite and withdraw money ', function() {
  it('User adds 100', function() {
    bank.deposit(100)
    expect(bank.balance).toEqual(100);
  });

  it('User adds 100', function() {
    bank.deposit(100)
    bank.withdraw(60)
    expect(bank.balance).toEqual(40);
  }); 

  it('User adds 100', function() {
    bank.deposit(100)
    bank.withdraw(1000)
    expect(bank.balance === 100);
  });

  it('It creates a new instance of the bank function', function() {
    bank.deposit(100)
    expect(bank.showTransactions()).toEqual("date || credit || debit || balance \n "+ "19/5/2020" + " || || 100.00 || 100.00")
});
});


