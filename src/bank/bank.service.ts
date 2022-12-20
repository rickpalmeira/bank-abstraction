import { Injectable } from '@nestjs/common';
import { Bank } from 'src/interfaces/bank.interface';

@Injectable()
export class BankService {
  getBankList(): Bank[] {
    return [];
  }
}
