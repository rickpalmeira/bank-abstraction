import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  /**
   * Implement me to pull transactions from all available bank integrations and display them, one after the other.
   */
  @Get()
  getTransactions(@Res() res: Response) {
    res
      .status(HttpStatus.OK)
      .json(this.transactionService.getTransactionList());
  }
}
