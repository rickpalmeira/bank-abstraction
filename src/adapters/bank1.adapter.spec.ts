import { Test, TestingModule } from '@nestjs/testing';
import { Bank1AccountSource } from '../bank1/bank1-account-source';
import { Bank1Adapter } from './bank1.adapter';

describe('Bank1Adapter', () => {
  let provider: Bank1Adapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bank1Adapter, Bank1AccountSource],
    }).compile();

    provider = module.get<Bank1Adapter>(Bank1Adapter);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
