import { Controller, Get } from '@nestjs/common';
import { Bank } from '../interfaces/bank.interface';
import { Transaction } from '../interfaces/transaction.interface';
import { BankService } from './bank.service';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  /**
   * Pulls a list naming all available banks
   */
  @Get()
  getBanks(): string[] {
    return this.bankService.getBankNameList();
  }

  /**
   * Pulls balance information from all available bank integrations and display them, one after the other.
   */
  @Get('balances')
  getBalances(): Bank[] {
    return this.bankService.getBalanceList();
  }

  /**
   * Pulls transactions from all available bank integrations and display them, one after the other.
   */
  @Get('transactions')
  getTransactions(): Transaction[] {
    return this.bankService.getTransactionList();
  }
}
