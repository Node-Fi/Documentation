---
sidebar_position: 0
---

# Depositable Position

:::note Deposit and Withdraw

The two key methods exposed from `DepositablePosition` are `deposit` and `withdraw`

:::

The `DepositablePosition` abstract class is a class that allows users to deposit and withdraw tokens from an arbitrary DeFi position. The exact intricacy of each integration is deferred to _Minima_, Node's novel DeFi router. It is meant to be extended by classes that implement the specifics of interacting with a particular product.

## `Deposit`

This method queries a deposit plan for the given position, and returns the expected output as well as a series of transactions to get that output. Node's deposit is unique because any token can be used, meaning a user can deposit into any position from any token (provided there is liquidity somewhere on the network for the input token).

```typescript
deposit(
  inputToken: string,
  inputAmount: BigintIsh,
  opts?: Partial<MinimaOptions>
): Promise<{
  expectedOutput: TokenAmount;
  minimumOutput: TokenAmount;
  transaction?: TransactionRequest;
  approvalTarget?: string;
  execute?: TransactionStep;
}>
```

It returns an object with the following properties:

- expectedOutput: The expected amount of the receipt token that will be received after the deposit.
- minimumOutput: The minimum amount of the receipt token that will be received after the deposit. This may be lower than the expected output if there are slippage or other fees involved in the deposit.
- transaction (optional): The transaction object that can be used to execute the deposit.
- approvalTarget (optional): The address that the input token needs to be approved for. If this property is present, the caller should first call approve on the input token contract before executing the deposit transaction.
- execute (optional): A linked series of transactions to deposit into the position. Defaults to using the attached signer.

### Example

Here is an example of depositing into a YieldFarm, which extends the DepositablePosition class:

```typescript
const farm = new YieldFarm(YEARN_USDC_VAULT, signer);

const quote = await farm.deposit(BTC, "100000");

const receipt = await resolveTransactionStep(quote.execute);
```

## `Withdraw`

The `withdraw` method allows you to withdraw your receipt tokens from the farm. It takes in the following arguments:

- `amount`: The amount of receipt tokens you want to withdraw. This can be a string, BigNumber, or JSBI object.
- `destinationToken`: The token you want to receive in exchange for your receipt tokens. This can be a `Token` object or a string of the token's address.
- `opts` (optional): An object of options for the transaction. This can include a `gasPrice` in gwei, a `gasLimit`, and a `nonce`.

```typescript
withdraw(
  inputAmount: BigintIsh,
  outputToken: Address,
  opts?: Partial<MinimaOptions>
): Promise<{
  expectedOutput: TokenAmount;
  minimumOutput: TokenAmount;
  transaction?: TransactionRequest;
  approvalTarget?: string;
  execute?: TransactionStep;
}>
```

It returns a promise that resolves to an object with the following properties:

- `expectedOutput`: The expected amount of tokens you will receive in exchange for your receipt tokens. This will be a `TokenAmount` object if `destinationToken` is a `Token` object, or a `JSBI` object if `destinationToken` is a string.
- `minimumOutput`: The minimum amount of tokens you will receive in exchange for your receipt tokens. This will be a `TokenAmount` object if `destinationToken` is a `Token` object, or a `JSBI` object if `destinationToken` is a string.
- `transaction`: The raw transaction object to be sent to the Ethereum network.
- `approvalTarget` (optional): The address of the token that needs to be approved before the transaction can be executed.
- `execute`: A function that will execute the transaction.

Here is an example of how you can use the `withdraw` method:

```typescript
const result = await myDepositablePosition.withdraw("100000000000000", QUICK);

console.log(result.expectedOutput);
console.log(result.minimumOutput);
console.log(result.transaction);
console.log(result.approvalTarget);
console.log(result.execute.description);

await result.execute.execute();
```
