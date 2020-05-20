"use strict";

var account;

beforeEach(function () {
  account = new Account();
});

describe("Checks to see Jasmine is working", function () {
  it("It creates a new instance of the account", function () {
    expect(account).toEqual(account);
  });
});

describe("User can make a deposite and withdraw money ", function () {
  it("User adds 100", function () {
    account.deposit(100);
    expect(account.balance).toEqual(100.0);
  });

  it("User adds 100", function () {
    account.deposit(100);
    account.withdraw(60);
    expect(account.balance).toEqual(40.0);
  });
  it("User adds 100", function () {
    account.deposit(100.0);
    account.withdraw(1000.0);
    expect(account.balance === 100.0);
  });
});

describe("The date is converted to the correct format", function () {
  it("Shows the date correctly formatted", function () {
    expect(account.format === "20/05/2020");
  });
});

describe("User can see all their transactions", function () {
  it("Shows one transaction", function () {
    spyOn(console, "log");
    account.deposit(100.0);
    account.showTransactions();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance \n "
    );
    expect(console.log).toHaveBeenCalledWith(
      "20/05/2020" + " || 100.00 || 100.00"
    );
  });

  it("Shows multiple transactions", function () {
    spyOn(console, "log");
    account.deposit(100.0);
    account.withdraw(27.3);
    account.showTransactions();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance \n "
    );
    expect(console.log).toHaveBeenCalledWith(
      "20/05/2020" + " || 100.00 || 100.00"
    );
    expect(console.log).toHaveBeenCalledWith(
      "20/05/2020" + " || 27.30 || 72.70"
    );
  });
});
