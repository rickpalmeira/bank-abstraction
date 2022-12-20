import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BankService } from './bank.service';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getBanks(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.bankService.getBankList());
  }
}
