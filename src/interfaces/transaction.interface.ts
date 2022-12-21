import { Money } from './money.interface';

export interface Transaction {
  origin: string;
  amount: Money;
  type: string;
  description: string;
}
