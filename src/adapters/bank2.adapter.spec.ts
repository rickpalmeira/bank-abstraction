import { Test, TestingModule } from '@nestjs/testing';
import { Bank2AccountSource } from '../bank2/bank2-account-source';
import { Bank2Adapter } from './bank2.adapter';

describe('Bank2', () => {
  let provider: Bank2Adapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bank2Adapter, Bank2AccountSource],
    }).compile();

    provider = module.get<Bank2Adapter>(Bank2Adapter);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
