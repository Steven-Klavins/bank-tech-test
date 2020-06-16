var Format = require('./Format')

class Account extends Format {
  constructor() {
    super()
  }
  deposit = function (val) {
    this.balance += val
    this.addTransaction(val)
    console.log(
      'Deposit complete, your balance is now ' + this.balance.toFixed(2),
    )
    return val
  }

  withdraw = function (val) {
    if (val <= this.balance) {
      this.balance -= val
      this.addTransaction(val)
      console.log(
        'Withdrawal complete, your balance is now ' + this.balance.toFixed(2),
      )
      return val
    } else {
      console.log(
        'Unsuccessful, your balance is currently only ' +
          this.balance.toFixed(2),
      )
      return this.balance
    }
  }
}
