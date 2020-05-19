'use strict';

function Bank() {
    this.balance = 0
    this.date = Date().toString;
}

Bank.prototype.deposit = function (val) {
 this.balance += val
}




