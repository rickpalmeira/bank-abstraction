import { Money } from './money.interface';
import { TransactionType } from './transaction-type.interface';

export interface Transaction {
  amount: Money;
  type: TransactionType;
  description: string;
}
