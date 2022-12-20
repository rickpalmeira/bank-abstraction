import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BalanceService } from './balance.service';

@Controller('balances')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  /**
   * Implement me to pull balance information from all available bank integrations and display them, one after the other.
   */
  @Get()
  getBalances(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.balanceService.getBalanceList());
  }
}
