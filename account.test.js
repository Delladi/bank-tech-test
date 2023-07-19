const Account = require('./account');

describe('Account', () => {
  it('should deposit the specified amount and update the balance', () => {
    const account = new Account();
    const depositDate1 = new Date(2023, 0, 10);
    account.deposit(1000, depositDate1);
    const expectedDate1 = depositDate1.toLocaleDateString('en-GB');
    expect(account.transactions[0].date.toLocaleDateString('en-GB')).toEqual(expectedDate1);
    expect(account.transactions[0]).toEqual({ date: depositDate1, credit: 1000, balance: 1000 });

    const depositDate2 = new Date(2023, 0, 13);
    account.deposit(2000, depositDate2);
    const expectedDate2 = depositDate2.toLocaleDateString('en-GB');
    expect(account.transactions[1].date.toLocaleDateString('en-GB')).toEqual(expectedDate2);
    expect(account.transactions[1]).toEqual({ date: depositDate2, credit: 2000, balance: 3000 });
  });
});

describe('debit', () => {
    it('should decrease the balance when funds are debited', () => {
      const account = new Account();

      // Deposit funds to initialize the balance
      account.deposit(1000, new Date(2023, 0, 10));
      account.deposit(2000, new Date(2023, 0, 13));

      // Store the current balance before the debit
      const initialBalance = account.balance;

      // Perform the debit operation
      account.debit(500, new Date(2023, 0, 14));

      // Calculate the expected balance after the debit
      const expectedBalance = initialBalance - 500;

      // Verify the balance is updated correctly
      expect(account.balance).toBe(expectedBalance);

      // Verify the debit transaction is recorded correctly
      expect(account.transactions.length).toBe(3);
      expect(account.transactions[2]).toEqual({
        date: new Date(2023, 0, 14),
        debit: 500,
        balance: expectedBalance,
      });
    });

    it('should not allow debit when the balance is insufficient', () => {
      const account = new Account();
  
      // Deposit funds to initialize the balance
      account.deposit(1000, new Date(2023, 0, 10));
  
      // Store the current balance before the debit
      const initialBalance = account.balance;
  
      // Attempt to perform a debit operation with an amount greater than the current balance
      account.debit(1500, new Date(2023, 0, 14));
  
      // Verify the balance remains the same
      expect(account.balance).toBe(initialBalance);
  
      // Verify that the transaction was not recorded
      expect(account.transactions.length).toBe(1);
    });
  });

describe('formatDate', ()=> {
  it('should format the date given to dd/mm/yyyy', () => {
    const account = new Account();
    const date = new Date(2023, 2, 12);
    const formattedDate = account.formatDate(date);
    expect(formattedDate).toBe('12/03/2023');
  });
});