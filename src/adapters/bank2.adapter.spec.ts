import { Test, TestingModule } from '@nestjs/testing';
import { Bank2Adapter } from './bank2.adapter';
import { Bank2AccountSource } from '../bank2/bank2-account-source';

describe('Bank2Adapter', () => {
  let adapter: Bank2Adapter;
  let accSource: Bank2AccountSource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bank2Adapter, Bank2AccountSource],
    }).compile();

    adapter = module.get<Bank2Adapter>(Bank2Adapter);
    accSource = module.get<Bank2AccountSource>(Bank2AccountSource);
  });

  it('should be defined', () => {
    expect(adapter).toBeDefined();
  });

  it('should be named properly', () => {
    expect(adapter.getBankName()).toMatch(/Bank[0-9]+/);
  });

  describe('Balance', () => {
    it('should return the same as the proprietary call', () => {
      expect(adapter.getBankBalance()?.value).toBe(
        accSource.getBalance(1).getBalance(),
      );
      expect(adapter.getBankBalance()?.currency).toBe(
        accSource.getBalance(1).getCurrency(),
      );
    });
  });

  describe('Transactions', () => {
    it('should return the same as the proprietary call', () => {
      const adapterTransactions = adapter.getBankTransactions();
      const originTransactions = accSource.getTransactions(
        1,
        new Date(),
        new Date(),
      );

      adapterTransactions.forEach((transaction, index) => {
        expect(transaction.amount.value).toBe(
          originTransactions?.[index]?.getAmount(),
        );
        expect(transaction.type).toBe(
          adapter.getType(originTransactions?.[index]?.getType()),
        );
        expect(transaction.description).toBe(
          originTransactions?.[index]?.getText(),
        );
      });
    });
  });
});
