'use strict';

function Bank() {
    this.balance = 0
    this.date = Date().toString;
}

Bank.prototype.deposit = function (val) {
 this.balance += val
}

Bank.prototype.withdraw = function (val) {
  if (val <= this.balance) {
        this.balance -= val
  }
  else {
    return ("Your balance is currently only ${this.balence}")
  }
}




