class extends Account TransactionsList {
  constructor(transactionsList) {
    this.transactionsList = transactionsList;
  }

  show() {
    this.transactionsList
      .slice()
      .reverse()
      .forEach(function (value, index) {
        if (index === 0) {
          console.log("date || credit || debit || balance \n ");
        }
        console.log(value);
      });
  }
}
