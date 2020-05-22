"use strict";

let account;

beforeEach(function () {
  var oldDate = new Date("2020-05-20");
  spyOn(window, "Date").and.callFake(function () {
    return oldDate;
  });
});

describe("User can make a deposit and withdraw money ", () => {
  it("User adds 100", function () {
    account = new Account();
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

  it("User adds 100", () => {
    account = new Account();
    account.deposit(100);
    account.withdraw(60);
    expect(account.balance).toEqual(40.0);
  });
  it("User adds 100", () => {
    account = new Account();
    account.deposit(100.0);
    account.withdraw(1000.0);
    expect(account.balance === 100.0);
  });
});

describe("The date is converted to the correct format", () => {
  it("Shows the date correctly formatted", () => {
    account = new Account();
    expect(account.format === "20/05/2020");
  });
});

describe("User can see all their transactions", () => {
  it("Shows one transaction", () => {
    account = new Account();
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

  it("Shows multiple transactions", () => {
    spyOn(console, "log");
    account = new Account();
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
