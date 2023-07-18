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
