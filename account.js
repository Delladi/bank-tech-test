class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }


  deposit(amount, date) {
    this.balance += amount;
    this.transactions.push({ date, credit: amount, balance: this.balance });
  }

  formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  }

  printStatement() {
    console.log('Date || Credit || Debit || Balance');
    // Print transactions in reverse chronological order
    for (let i = this.transactions.length - 1; i >= 0; i--) {
      const transaction = this.transactions[i];
      const { date, credit, balance } = transaction;
      const formattedDate = this.formatDate(date);
      console.log(`${formattedDate} || ${credit.toFixed(2)} || || ${balance.toFixed(2)}`);
    }
  }
}

const account = new Account();
account.deposit(1000, new Date(2023, 0, 10));
account.deposit(2000, new Date(2023, 0, 13));
account.printStatement();

module.exports = Account;