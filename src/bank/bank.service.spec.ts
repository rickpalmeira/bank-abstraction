import { Test, TestingModule } from '@nestjs/testing';
import { Bank1Adapter } from '../adapters/bank1.adapter';
import { Bank2Adapter } from '../adapters/bank2.adapter';
import { Bank1AccountSource } from '../bank1/bank1-account-source';
import { Bank2AccountSource } from '../bank2/bank2-account-source';
import { BankService } from './bank.service';

describe('BankService', () => {
  let service: BankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BankService,
        Bank1Adapter,
        Bank2Adapter,
        Bank1AccountSource,
        Bank2AccountSource,
      ],
    }).compile();

    service = module.get<BankService>(BankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
