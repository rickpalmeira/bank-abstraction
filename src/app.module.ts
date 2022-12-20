import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { BankController } from './bank/bank.controller';
import { BankService } from './bank/bank.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [BankController],
  providers: [BankService],
})
export class AppModule {}
