import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BankService } from 'src/services/bank/bank.service';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getBanks(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.bankService.getBankList());
  }

  @Get('balances')
  getBalances(@Res() res: Response) {
    res.status(HttpStatus.OK).json([2]);
  }

  @Get('transactions')
  getTransactions(@Res() res: Response) {
    res.status(HttpStatus.OK).json([3]);
  }
}
