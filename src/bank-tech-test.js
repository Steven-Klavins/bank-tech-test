"use strict";

function Account() {
  this.balance = 0;
  this.date = new Date();
  this.transactionsList = [];
}

Account.prototype.deposit = function (val) {
  this.balance += val;
  this.addTransaction(val);
  console.log(
    "Deposit complete, your balance is now " + this.balance.toFixed(2)
  );
  return val;
};

Account.prototype.withdraw = function (val) {
  if (val <= this.balance) {
    this.balance -= val;
    this.addTransaction(val);
    console.log(
      "Withdrawal complete, your balance is now " + this.balance.toFixed(2)
    );
    return val;
  } else {
    console.log(
      "Unsuccessful, your balance is currently only " + this.balance.toFixed(2)
    );
    return this.balance;
  }
};

Account.prototype.showTransactions = function () {
  this.transactionsList
    .slice()
    .reverse()
    .forEach(function (value, index) {
      if (index === 0) {
        console.log("date || credit || debit || balance \n ");
      }
      console.log(value);
    });
};

Account.prototype.format = function () {
  var formattedDate =
    ("0" + this.date.getDate()).slice(-2) +
    "/" +
    ("0" + (this.date.getMonth() + 1)).slice(-2) +
    "/" +
    this.date.getFullYear();
  return formattedDate;
};

Account.prototype.addTransaction = function (amount) {
  let nDate = this.format();
  let str =
    nDate + " || " + amount.toFixed(2) + " || " + this.balance.toFixed(2);
  this.transactionsList.push(str);
};
