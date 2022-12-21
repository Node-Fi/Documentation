---
description: Execute on a quote provided by the Swap Provider
---

# Execute a Swap

The final step of a swap is ultimately executing it. In this step, the user will sign the transaction with their private key, the signed transaction will be sent off to the chain, and the trade will commence. It is important that a user does not approve a stale trade, as the outcome of any trade is ever-changing. For this reason, swaps through minima have a set deadline by when they must be either refreshed or executed. This window is 5 minutes.

Within the same payload explored in [query-a-swap.md](query-a-swap.md "mention"), a callback is provided called `execute`. This callback handles transactions signing and sending, and will return the transaction hash if the trade is successful. Depending on configuration, the end user will have to use biometrics to approve the transaction.

```tsx
import { useSwapTypedAmount } from "@node-fi/react-native-sdk"

function SwapComponent() {
  const [inputToken, setInputToken] = useState<string>();
  const [outputToken setOutputToken] = useState<string>()
  const [inputAmount, setInputAmount] = useState<string>()
  const [txnHash, setTxnHash] = useState<string>();

  const tradeDetails = useSwapTypedAmount(inputToken, outputToken, inputAmount)

  return (
    <View>
      <TokenSelector onSelectToken={setInputToken}>
      <TokeSelector onSelectToken={setOutputToken}>

      <TextField label="Input Amount" onChangeText={setInputAmount}>

      {
        tradeDetails ? tradeDetails.error
          ? <Text>{`Error: ${tradeDetails.error}`}</Text>
          : <View>
              <Text>{`Expected output: ${tradeDetails.output.toFixed(2)} ${tradeDetails.output.token.symbol}`}</Text>
              <Button text={`Execute Swap`} onPress={tradeDetails.execute}>
            </View>
        : null
      }
    </View>
  )
}
```
