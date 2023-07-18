# Bank Account Class Design Recipe

## 1. Describe the Problem

The problem is to design a Bank class that allows clients to make deposits and withdrawals and prints their bank statement in the specified format.

As a user
So that I can record my experiences
I want to keep a regular diary
As a user
So that I can reflect on my experiences
I want to read my past diary entries
As a user
So that I can reflect on my experiences in my busy day
I want to select diary entries to read based on how much time I have and my reading speed
As a user
So that I can keep track of my tasks
I want to keep a to list along with my diary
As a user
So that I can keep track of my contacts
I want to see a list of all of the mobile phone numbers in all my diary entries

## 2. Design the Class System

```javascript
class Bank {
    constructor() {
        this.transactions = [];
        this.balance = 0;
    }

    deposit(amount, date) {
        // Records a deposit transaction and updates the balance
    }

    withdraw(amount, date) {
        // Records a withdrawal transaction and updates the balance
    }

    printStatement() {
        // Generates and returns the bank statement
    }
}
```

## 3. Create Examples as Integration Tests

```javascript
// EXAMPLE
const bank = new Bank();
bank.deposit(1000, '10/01/2023');
bank.deposit(2000, '13/01/2023');
bank.withdraw(500, '14/01/2023');
console.log(bank.printStatement());
```

## 4. Create Examples as Unit Tests

```javascript
// EXAMPLE
const bank = new Bank();
bank.deposit(1000, '10/01/2023');
bank.deposit(2000, '13/01/2023');
bank.withdraw(500, '14/01/2023');

console.log(bank.balance); // Output: 2500
```

## 5. Implement the Behaviour

Now, let's implement the methods inside the Bank class to make the tests pass.

```javascript
class Bank {
    constructor() {
        this.transactions = [];
        this.balance = 0;
    }

    deposit(amount, date) {
        this.balance += amount;
        this.transactions.push({ date, credit: amount, balance: this.balance });
    }

    withdraw(amount, date) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push({ date, debit: amount, balance: this.balance });
        } else {
            throw new Error('Insufficient funds');
        }
    }

    printStatement() {
        let statement = 'date || credit || debit || balance';

        for (const transaction of this.transactions.reverse()) {
            const { date, credit, debit, balance } = transaction;
            statement += `\n${date} || ${credit ? credit.toFixed(2) : ''} || ${debit ? debit.toFixed(2) : ''} || ${balance.toFixed(2)}`;
        }

        return statement;
    }
}

module.exports = Bank;
```

With the updated design recipe and implementation, the Bank class should now work as expected and pass the provided test scenario. It will handle deposits, withdrawals, and print the bank statement in the desired format.