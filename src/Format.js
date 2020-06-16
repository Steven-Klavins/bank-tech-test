var Data = require('./Data')

class Format extends Data {
  constructor() {
    super()
  }

  showTransactions() {
    this.transactions
      .slice()
      .reverse()
      .forEach(function (value, index) {
        if (index === 0) {
          console.log('date || credit || debit || balance \n ')
        }
        console.log(value)
      })
  }

  formatDate = function () {
    var formattedDate =
      ('0' + this.date.getDate()).slice(-2) +
      '/' +
      ('0' + (this.date.getMonth() + 1)).slice(-2) +
      '/' +
      this.date.getFullYear()
    return formattedDate
  }

  addTransaction = function (amount) {
    let nDate = this.formatDate(this.date)
    let str =
      nDate + ' || ' + amount.toFixed(2) + ' || ' + this.balance.toFixed(2)
    this.transactions.push(str)
  }
}
module.exports = Format
