import { Money } from './money.interface';
import { Transaction } from './transaction.interface';

export interface Bank {
  account: number;
  name: string;
  balance: Money;
  transactions: Transaction[];
}
