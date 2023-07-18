// Define the Account class
class Account {
  constructor() {
    // Initialize an empty array to store transactions
    this.transactions = [];
    // Initialize the account balance to 0
    this.balance = 0;
  }

  // Method to deposit funds into the account
  deposit(amount, date) {
    // Increase the account balance by the deposited amount
    this.balance += amount;
    // Add a new transaction to the transactions array
    // The transaction includes the deposit date, credited amount, and updated balance
    this.transactions.push({ date, credit: amount, balance: this.balance });
  }

  debit(amount, date) {
    // decrease the account balance by the debited (withdraw) amount
    this.balance -= amount;
    this.transactions.push({ date, credit: '', debit: amount, balance: this.balance });
  }

  // Method to format a given date into "dd/mm/yyyy" format
  formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  }

  // Method to print the account statement
  printStatement() {
    console.log('Date || Credit || Debit || Balance');

    // Print transactions in reverse chronological order
    // Start from the latest transaction and move backwards
    for (let i = this.transactions.length - 1; i >= 0; i--) {
      // Get the transaction details from the transactions array
      const transaction = this.transactions[i];
      const { date, credit, debit, balance } = transaction;
      // Format the date into "dd/mm/yyyy" format
      const formattedDate = this.formatDate(date);
      // Print the transaction details in a formatted statement

       // Format the output to show empty string for undefined credit/debit values
       const formattedCredit = credit ? credit.toFixed(2) : '';
       const formattedDebit = debit ? debit.toFixed(2) : '';

      console.log(`${formattedDate} || ${formattedCredit} || ${formattedDebit} || ${balance.toFixed(2)}`);
    }
  }
}

// Create a new instance of the Account class
const account = new Account();

// Deposit funds into the account with specific dates
account.deposit(1000, new Date(2023, 0, 10));
account.deposit(2000, new Date(2023, 0, 13));
account.deposit(500, new Date(2023, 0, 14));
// Print the account statement
account.printStatement();

// Export the Account class to make it available for other files
module.exports = Account;
