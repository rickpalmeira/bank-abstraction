import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BankService } from './bank.service';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  /**
   * Pulls a list of available banks
   */
  @Get()
  getBanks(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.bankService.getBankList());
  }

  /**
   * Pulls balance information from all available bank integrations and display them, one after the other.
   */
  @Get('balances')
  getBalances(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.bankService.getBalanceList());
  }

  /**
   * Pulls transactions from all available bank integrations and display them, one after the other.
   */
  @Get('transactions')
  getTransactions(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.bankService.getTransactionList());
  }
}
