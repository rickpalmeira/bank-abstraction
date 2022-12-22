import { Test, TestingModule } from '@nestjs/testing';
import { Bank1AccountSource } from '../bank1/bank1-account-source';
import { Bank2AccountSource } from '../bank2/bank2-account-source';
import { Bank1Adapter } from '../adapters/bank1.adapter';
import { Bank2Adapter } from '../adapters/bank2.adapter';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';

describe('BankController', () => {
  let controller: BankController;
  const mockBanks = jest.fn().mockResolvedValue(['Bank1', 'Bank2']);
  const mockBalances = jest.fn().mockResolvedValue([
    { name: 'Bank1', balance: { value: 215.5, currency: 'USD' } },
    { name: 'Bank2', balance: { value: 512.5, currency: 'USD' } },
  ]);
  const mockTransactions = jest.fn().mockResolvedValue([
    {
      origin: 'Bank1',
      amount: { value: 100, currency: 'USD' },
      type: 'credit',
      description: 'Check deposit',
    },
    {
      origin: 'Bank1',
      amount: { value: 25.5, currency: 'USD' },
      type: 'debit',
      description: 'Debit card purchase',
    },
    {
      origin: 'Bank1',
      amount: { value: 225, currency: 'USD' },
      type: 'debit',
      description: 'Rent payment',
    },
    {
      origin: 'Bank2',
      amount: { value: 125, currency: 'USD' },
      type: 'debit',
      description: 'Amazon.com',
    },
    {
      origin: 'Bank2',
      amount: { value: 500, currency: 'USD' },
      type: 'debit',
      description: 'Car insurance',
    },
    {
      origin: 'Bank2',
      amount: { value: 800, currency: 'USD' },
      type: 'credit',
      description: 'Salary',
    },
  ]);

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

  describe('api/bank/', () => {
    it('should fetch a list of banks', async () => {
      expect(await controller.getBanks()).toStrictEqual(await mockBanks());
    });
  });

  describe('api/bank/balances/', () => {
    it('should fetch a list of balances', async () => {
      expect(await controller.getBalances()).toStrictEqual(
        await mockBalances(),
      );
    });
  });

  describe('api/bank/transactions', () => {
    it('should fetch a list of transactions', async () => {
      expect(await controller.getTransactions()).toStrictEqual(
        await mockTransactions(),
      );
    });
  });
});
