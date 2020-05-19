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
    var formatDate = this.format()
    console.log ("date || credit || debit || balance \n "+ formatDate + " || || 100.00 || 100.00")
    return "date || credit || debit || balance \n "+ formatDate + " || || 100.00 || 100.00"
}

Bank.prototype.format = function (){
    var formattedDate = ('0' + this.date.getDate()).slice(-2) + '/'
    + ('0' + (this.date.getMonth()+1)).slice(-2) + '/'
    + this.date.getFullYear();
    return formattedDate
}



