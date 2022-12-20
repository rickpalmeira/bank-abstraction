import { Module } from '@nestjs/common';
import { BalanceController } from './balance/balance.controller';
import { BalanceService } from './balance/balance.service';
import { BankController } from './bank/bank.controller';
import { BankService } from './bank/bank.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';

@Module({
  imports: [],
  controllers: [BalanceController, BankController, TransactionController],
  providers: [BalanceService, BankService, TransactionService],
})
export class AppModule {}
