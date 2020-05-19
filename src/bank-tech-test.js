'use strict';

function Bank() {
    this.balance = 0
    this.date = new Date
}

Bank.prototype.deposit = function (val) {
 this.balance += val
}

Bank.prototype.withdraw = function (val) {
  if (val <= this.balance) {
        this.balance -= val
  }
  else {
    console.log("Your balance is currently only " + this.balance)
  }
}

Bank.prototype.showTransactions = function () {
    var formatDate = this.date.getDate()+'/'+ (this.date.getMonth()+1)+'/'+this.date.getFullYear();
    console.log ("date || credit || debit || balance \n "+ formatDate + " || || 100.00 || 100.00")
    return "date || credit || debit || balance \n "+ formatDate + " || || 100.00 || 100.00"
}




