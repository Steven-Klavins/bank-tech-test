'use strict';

var account;

beforeEach(function() {
  account = new Account()
});
 
describe('Check Jasmine is working', function() {
  it('It creates a new instance of the account function', function() {
      expect(account).toEqual(account);
  });
});

describe('User can make a deposite and withdraw money ', function() {
  it('User adds 100', function() {
    account.deposit(100)
    expect(account.balance).toEqual(100.00);
  });

  it('User adds 100', function() {
    account.deposit(100)
    account.withdraw(60)
    expect(account.balance).toEqual(40.00);
  }); 

  it('User adds 100', function() {
    account.deposit(100.00)
    account.withdraw(1000.00)
    expect(account.balance === 100.00);
  });

});


describe('User can see all their transactions', function() {

  it('Shows one transaction', function() {
    account.deposit(100.00)
    expect(account.showTransactions()).toEqual("date || credit || debit || balance \n "+ "19/05/2020" + " || 100.00 || 100.00")
  });

  it('adds a transaction in the correct format to the array', function(){
    account.deposit(100.00)
  });

  it('Shows multiple transactions', function() {
    account.deposit(100.00)
    account.withdraw(27.30)
    expect(account.showTransactions()).toEqual("date || credit || debit || balance \n"+ "19/05/2020" + " || 100.00 || 100.00\n" + "19/05/2020" + " || 27.30 || 72.70\n")
  });

});
