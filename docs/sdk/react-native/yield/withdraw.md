---
sidebar_position: 2
---

# Withdraw from a Position

:::info

All DeFi positions that can be deposited into extend the `DepositablePosition` class, allowing developers to use one single hook to query deposit withdrawals to any given token. ['Core SDK'](../../core-sdk/defi-positions/lending-markets.md "mention")

:::

### useWithdrawTypedAmount

A react hook that returns a swap quote for a specified token swap, using human-readable input amounts.

#### Parameters

| Name          | Type                | Required | Description                                                         |
| ------------- | ------------------- | -------- | ------------------------------------------------------------------- |
| depositable   | DepositablePosition | Yes      | Position being withdrawn from                                       |
| typedAmount   | string/number       | No       | Input amount in human-readable format (not accounting for decimals) |
| outputAddress | DepositablePosition | No       | Token address to withdraw to                                        |
| opts          | object              | No       | Optional object to override debounce time or minima request         |
| queryOpts     | object              | No       | Optional object to override react query config                      |

#### Returns

An object with details about the swap quote, including the input and output amounts, the expected rate, and any errors that may have occurred.

#### Example

```ts
function MyComponent() {
  const [inputAddress, setInputAddress] = useState<Address | undefined>();
  const [typedAmount, setTypedAmount] = useState<string | undefined>();
  const { position: farm, fetchDetails } = useDepositablePosition(POSITION_ID);
  const { inputAmount, outputAmount, rate, error } = useWithdrawTypedAmount(
    farm,
    typedAmount,
    inputAddress,
    undefined,
    {
      debounceDelay: 10,
      cacheTime: 1000 * 60,
      refetchInterval: BLOCK_TIME * 1000,
    }
  );

  return (
    <div>
      <AddressInput onChange={setInputAddress} />
      <Input type="text" onChange={(e) => setTypedAmount(e.target.value)} />
      {error ? (
        <div>{error.message}</div>
      ) : (
        <div>
          Swap {inputAmount} for {outputAmount} at a rate of {rate}
        </div>
      )}
    </div>
  );
}
```
