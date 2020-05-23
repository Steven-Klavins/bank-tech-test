"use strict";

class Data {
  constructor() {
    this.balance = 0;
    this.date = new Date();
    this.transactions = [];
  }
}

class Format extends Data {
  constructor() {
    super();
  }

  showTransactions() {
    this.transactions
      .slice()
      .reverse()
      .forEach(function (value, index) {
        if (index === 0) {
          console.log("date || credit || debit || balance \n ");
        }
        console.log(value);
      });
  }

  formatDate = function () {
    var formattedDate =
      ("0" + this.date.getDate()).slice(-2) +
      "/" +
      ("0" + (this.date.getMonth() + 1)).slice(-2) +
      "/" +
      this.date.getFullYear();
    return formattedDate;
  };

  addTransaction = function (amount) {
    let nDate = this.formatDate(this.date);
    let str =
      nDate + " || " + amount.toFixed(2) + " || " + this.balance.toFixed(2);
    this.transactions.push(str);
  };
}

class MakeTransactions extends Format {
  constructor() {
    super();
  }
  deposit = function (val) {
    this.balance += val;
    this.addTransaction(val);
    console.log(
      "Deposit complete, your balance is now " + this.balance.toFixed(2)
    );
    return val;
  };

  withdraw = function (val) {
    if (val <= this.balance) {
      this.balance -= val;
      this.addTransaction(val);
      console.log(
        "Withdrawal complete, your balance is now " + this.balance.toFixed(2)
      );
      return val;
    } else {
      console.log(
        "Unsuccessful, your balance is currently only " +
          this.balance.toFixed(2)
      );
      return this.balance;
    }
  };
}

class Account extends MakeTransactions {
  constructor() {
    super();
  }
}
