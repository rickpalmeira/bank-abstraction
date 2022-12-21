import { Injectable } from '@nestjs/common';
import { Bank2AccountBalance } from './bank2-account-balance';
import { Bank2AccountTransaction } from './bank2-account-transaction';

@Injectable()
export class Bank2AccountSource {
  public getBalance(accountNum: number): Bank2AccountBalance {
    return new Bank2AccountBalance(512.5, 'USD');
  }

  public getTransactions(
    accountNum: number,
    fromDate: Date,
    toDate: Date,
  ): Bank2AccountTransaction[] {
    return [
      new Bank2AccountTransaction(
        125,
        Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT,
        'Amazon.com',
      ),
      new Bank2AccountTransaction(
        500,
        Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT,
        'Car insurance',
      ),
      new Bank2AccountTransaction(
        800,
        Bank2AccountTransaction.TRANSACTION_TYPES.CREDIT,
        'Salary',
      ),
    ];
  }
}
