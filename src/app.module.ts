import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { BankController } from './bank/bank.controller';
import { BankService } from './bank/bank.service';
import { Bank1AccountSource } from './bank1/bank1-account-source';
import { Bank2AccountSource } from './bank2/bank2-account-source';
import { Bank1Adapter } from './adapters/bank1.adapter';
import { Bank2Adapter } from './adapters/bank2.adapter';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
  ],
  controllers: [BankController],
  providers: [
    BankService,
    Bank1AccountSource,
    Bank2AccountSource,
    Bank1Adapter,
    Bank2Adapter,
  ],
})
export class AppModule {}
