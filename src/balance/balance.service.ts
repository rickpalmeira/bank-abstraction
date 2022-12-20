import { Injectable } from '@nestjs/common';
import { Money } from 'src/interfaces/money.interface';

@Injectable()
export class BalanceService {
  getBalanceList(): Money[] {
    return [];
  }
}
