import { Injectable } from '@nestjs/common';
import { Bank1Adapter } from '../adapters/bank1.adapter';
import { Bank2Adapter } from '../adapters/bank2.adapter';
import { Bank } from '../interfaces/bank.interface';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable()
export class BankService {
  constructor(
    private readonly bank1Adapter: Bank1Adapter,
    private readonly bank2Adapter: Bank2Adapter,
  ) {}

  getBankNameList() {
    return JSON.parse(process.env.IMPLEMENTED_BANKS);
  }

  getBalanceList(): Bank[] {
    const banks = [];

    if (this.getBankNameList().includes('Bank1')) {
      banks.push({
        name: this.bank1Adapter.getBankName(),
        balance: this.bank1Adapter.getBankBalance(),
      });
    }

    if (this.getBankNameList().includes('Bank2')) {
      banks.push({
        name: this.bank2Adapter.getBankName(),
        balance: this.bank2Adapter.getBankBalance(),
      });
    }

    return banks;
  }

  getTransactionList(): Transaction[] {
    return [
      ...(this.getBankNameList().includes('Bank1')
        ? this.bank1Adapter.getBankTransactions()
        : []),
      ...(this.getBankNameList().includes('Bank2')
        ? this.bank2Adapter.getBankTransactions()
        : []),
    ];
  }
}
