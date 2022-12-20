import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/interfaces/transaction.interface';

@Injectable()
export class TransactionService {
  getTransactionList(): Transaction[] {
    return [];
  }
}
