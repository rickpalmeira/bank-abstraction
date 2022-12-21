import { Injectable } from '@nestjs/common';
import { Bank2AccountSource } from '../bank2/bank2-account-source';
import { BankAdapter } from '../interfaces/bank-adapter.interface';
import { Money } from '../interfaces/money.interface';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable()
export class Bank2Adapter implements BankAdapter {
  constructor(private readonly Bank2AccountSource: Bank2AccountSource) {}

  private readonly accountNum = 1;
  private readonly fromDate = new Date();
  private readonly toDate = new Date();
  private readonly types = {
    0: 'debit',
    1: 'credit',
  };

  public getBankName(): string {
    return 'Bank2';
  }

  public getType(type: number): string {
    return this.types[type];
  }

  public getBankBalance(): Money {
    return {
      value: this.Bank2AccountSource.getBalance(this.accountNum).getBalance(),
      currency: this.Bank2AccountSource.getBalance(
        this.accountNum,
      ).getCurrency(),
    };
  }

  public getBankTransactions(): Transaction[] {
    return this.Bank2AccountSource.getTransactions(
      this.accountNum,
      this.fromDate,
      this.toDate,
    ).map(transaction => {
      return {
        origin: this.getBankName(),
        amount: {
          value: transaction.getAmount(),
          currency: this.Bank2AccountSource.getBalance(
            this.accountNum,
          ).getCurrency(),
        },
        type: this.getType(transaction.getType()),
        description: transaction.getText(),
      };
    });
  }
}
