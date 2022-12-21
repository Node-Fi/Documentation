# Query a Swap

In most cases, the best hook to use for querying swap quotes is `useSwapTypedAmount`

This hook takes in an input, output, inputAmount, and will return an object containing details on the specific trade. The input amount should be in human-readable format, not accounting for decimals. `useSwapTypedAmount` will account for decimals on its own. The intent is for `inputAmount` to be the exact string typed by the user into a text box.

By default, swap quotes will refresh with every new block (approximately every 5 seconds if you are on Celo). However, this constant is configurable within the `NodeKitProvider` under `ConstantOverride`

```tsx
import { useSwapTypedAmount } from "@node-fi/react-native-sdk"

function SwapComponent() {
  const [inputToken, setInputToken] = useState<string>();
  const [outputToken setOutputToken] = useState<string>()
  const [inputAmount, setInputAmount] = useState<string>()

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
            </View>
        : null
      }
    </View>
  )
}
```
