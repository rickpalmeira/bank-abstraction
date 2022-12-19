import { Module } from '@nestjs/common';
import { BankController } from './controllers/bank/bank.controller';
import { TransactionController } from './controllers/transaction/transaction.controller';
import { BankService } from './services/bank/bank.service';

@Module({
  imports: [],
  controllers: [BankController, TransactionController],
  providers: [BankService],
})
export class AppModule {}
