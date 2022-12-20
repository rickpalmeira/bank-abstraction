import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Bank } from 'src/interfaces/bank.interface';
import { Money } from 'src/interfaces/money.interface';
import { Transaction } from 'src/interfaces/transaction.interface';

@Injectable()
export class BankService {
  constructor(private readonly httpService: HttpService) {}

  getBankList(): Bank[] {
    return [];
  }

  getBalanceList(): Money[] {
    return [];
  }

  getTransactionList(): Transaction[] {
    return [];
  }
}
