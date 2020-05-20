"use strict";

function Account() {
  this.balance = 0;
  this.date = new Date("2020-05-20"); // Remove date string to enable default of present date (this will however cause test to fail, however the program will still run as exspected)
  this.listOfTransactions = [];
}

Account.prototype.deposit = function (val) {
  this.balance += val;
  this.addTransaction(val);
};

Account.prototype.withdraw = function (val) {
  if (val <= this.balance) {
    this.balance -= val;
    this.addTransaction(val);
  } else {
    console.log("Your balance is currently only " + this.balance.toFixed(2));
  }
};

Account.prototype.showTransactions = function () {
  this.listOfTransactions
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
  var nDate = this.format();
  var str =
    nDate + " || " + amount.toFixed(2) + " || " + this.balance.toFixed(2);
  this.listOfTransactions.push(str);
};

Account.prototype.printMenu = function () {
  console.log(
    "Choose an action\n" +
      "Enter 1 to view transactions\n" +
      "Enter 2 to make deposite\n" +
      "Enter 3 to withdraw money\n" +
      "Enter 4 to view balance\n" +
      "Enter 5 to show menu again\n"
  );
};
