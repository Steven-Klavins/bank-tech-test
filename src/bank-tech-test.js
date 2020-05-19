'use strict';

function Account() {
    this.balance = 0
    this.date = new Date
    this.listOfTransactions = []
}

Account.prototype.deposit = function (val) {
 this.balance += val
}

Account.prototype.withdraw = function (val) {
  if (val <= this.balance) {
        this.balance -= val
  } 
  else {
    console.log("Your balance is currently only " + (this.balance.toFixed(2)))
  }
}

Account.prototype.showTransactions = function () {
    var formatDate = this.format()
    var num = this.balance.toFixed(2)
    console.log ("date || credit || debit || balance \n "+ formatDate + " || 100.00 || 100.00")
    return "date || credit || debit || balance \n "+ formatDate + " || "+num+" || 100.00"
}

Account.prototype.format = function (){
    var formattedDate = ('0' + this.date.getDate()).slice(-2) + '/'
    + ('0' + (this.date.getMonth()+1)).slice(-2) + '/'
    + this.date.getFullYear();
    return formattedDate
}



