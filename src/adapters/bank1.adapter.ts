import { Injectable } from '@nestjs/common';
import { Bank1AccountSource } from '../bank1/bank1-account-source';
import { BankAdapter } from '../interfaces/bank-adapter.interface';
import { Money } from '../interfaces/money.interface';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable()
export class Bank1Adapter implements BankAdapter {
  constructor(private readonly Bank1AccountSource: Bank1AccountSource) {}

  private readonly accountId = 1;
  private readonly fromDate = new Date();
  private readonly toDate = new Date();
  private readonly types = {
    1: 'credit',
    2: 'debit',
  };

  public getBankName(): string {
    return 'Bank1';
  }

  public getType(type: number): string {
    return this.types[type];
  }

  public getBankBalance(): Money {
    return {
      value: this.Bank1AccountSource.getAccountBalance(this.accountId),
      currency: this.Bank1AccountSource.getAccountCurrency(this.accountId),
    };
  }

  public getBankTransactions(): Transaction[] {
    return this.Bank1AccountSource.getTransactions(
      this.accountId,
      this.fromDate,
      this.toDate,
    ).map(transaction => {
      return {
        origin: this.getBankName(),
        amount: {
          value: transaction.getAmount(),
          currency: this.Bank1AccountSource.getAccountCurrency(this.accountId),
        },
        type: this.getType(transaction.getType()),
        description: transaction.getText(),
      };
    });
  }
}
