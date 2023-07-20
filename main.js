// main.js

const { AccountManager, StatementFormatter } = require('./account');

// Create a new instance of the AccountManager class
const accountManager = new AccountManager();

// Deposit funds into the account with specific dates
accountManager.deposit(1000, new Date(2023, 0, 10));
accountManager.deposit(2000, new Date(2023, 0, 13));
accountManager.debit(500, new Date(2023, 0, 14));

// Create a new instance of the StatementFormatter class
const statementFormatter = new StatementFormatter();

// Print the account statement using the formatted statement from StatementFormatter
const formattedStatement = statementFormatter.formatStatement(accountManager.transactions);
console.log(formattedStatement);
