import { Test, TestingModule } from '@nestjs/testing';
import { Bank1Adapter } from './bank1.adapter';
import { Bank1AccountSource } from '../bank1/bank1-account-source';

describe('Bank1Adapter', () => {
  let adapter: Bank1Adapter;
  let accSource: Bank1AccountSource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bank1Adapter, Bank1AccountSource],
    }).compile();

    adapter = module.get<Bank1Adapter>(Bank1Adapter);
    accSource = module.get<Bank1AccountSource>(Bank1AccountSource);
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
        accSource.getAccountBalance(1),
      );
      expect(adapter.getBankBalance()?.currency).toBe(
        accSource.getAccountCurrency(1),
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
