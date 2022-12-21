import { Test, TestingModule } from '@nestjs/testing';
import { Bank1AccountSource } from '../bank1/bank1-account-source';
import { Bank2AccountSource } from '../bank2/bank2-account-source';
import { Bank1Adapter } from '../adapters/bank1.adapter';
import { Bank2Adapter } from '../adapters/bank2.adapter';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';

describe('BankController', () => {
  let controller: BankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankController],
      providers: [
        BankService,
        Bank1Adapter,
        Bank2Adapter,
        Bank1AccountSource,
        Bank2AccountSource,
      ],
    }).compile();

    controller = module.get<BankController>(BankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
