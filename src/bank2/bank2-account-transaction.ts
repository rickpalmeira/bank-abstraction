enum TRANSACTION_TYPES {
  DEBIT,
  CREDIT,
}

export class Bank2AccountTransaction {
  private amount: number;
  private type: TRANSACTION_TYPES;
  private text: string;
  public static readonly TRANSACTION_TYPES = TRANSACTION_TYPES;

  public constructor(amount: number, type: TRANSACTION_TYPES, text: string) {
    this.amount = amount;
    this.type = type;
    this.text = text;
  }

  public getAmount(): number {
    return this.amount;
  }
  public getType(): TRANSACTION_TYPES {
    return this.type;
  }
  public getText(): string {
    return this.text;
  }
}
