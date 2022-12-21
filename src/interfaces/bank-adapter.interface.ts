import { Money } from './money.interface';
import { Transaction } from './transaction.interface';

export interface BankAdapter {
  getType(...arg0: any): string;
  getBankName(): string;
  getBankBalance(): Money;
  getBankTransactions(): Transaction[];
}
