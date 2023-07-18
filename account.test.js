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
