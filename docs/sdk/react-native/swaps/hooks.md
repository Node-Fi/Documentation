---
description: Explore other hooks for Swap
---

# Hooks

### **useSwapTypedAmount**

This hook is intended to be directly integrated into frontends, and uses debouncing to limit how often new prices are fetched.

It returns the following:

| Param   | Type                                | Required? | Purpose                                                              | Default Value    |
| ------- | ----------------------------------- | --------- | -------------------------------------------------------------------- | ---------------- |
| address | string                              | Yes       | Specifies the address of the token to retrieve historical prices for | N / A - REQUIRED |
| range   | DateRange (1h, 1d, 1w, 1m, 1y, all) | Y         | Specifies the time range to fetch token prices for                   | N / A - REQUIRED |

For parameters, it takes the following:

| Param           | Type             | Required? | Description                                                                                                        |
| --------------- | ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| inputAddress    | string           | Y         | Address of input token. If undefined, returned object will be null.                                                |
| outputAddress   | string           | Y         | Address of output token. If undefined, returned object will be null.                                               |
| typedAmount     | string \| number | Y         | Decimal-adjusted amount of input token to trade. This would be a value that is entered into a text field by a user |
| recipient       | string           | N         | Address of recipient of the trade - if undefined will default to current wallet.                                   |
| debounceDelayMs | number           | N         | Millisecond delay for the internally used debounce hook. Defaults to 500ms                                         |

Example:

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
              <Button text={`Execute Swap`} onPress={tradeDetails.execute}>
            </View>
        : null
      }
    </View>
  )
}
```

**useSwapQuote**

For direct frontend integrations, it is recommended to use `useSwapTypedAmount` instead. This hook does not debounce the input, so unless another hook is built on top of it, it will make many unnecessary calls to the backend service when a user types in a new trade amount.

This hook can be used to get a live-updated price quote for a given input and output.

It returns the following:

| Param   | Type                                | Required? | Purpose                                                              | Default Value    |
| ------- | ----------------------------------- | --------- | -------------------------------------------------------------------- | ---------------- |
| address | string                              | Yes       | Specifies the address of the token to retrieve historical prices for | N / A - REQUIRED |
| range   | DateRange (1h, 1d, 1w, 1m, 1y, all) | Y         | Specifies the time range to fetch token prices for                   | N / A - REQUIRED |

It accepts the following as parameters:

| Param       | Type        | Required? | Description                                                                                               |
| ----------- | ----------- | --------- | --------------------------------------------------------------------------------------------------------- |
| input       | TokenAmount | N         | Input token and input amount for the trade. If this is not supplied, the hook will return an empty object |
| outputToken | Token       | N         | Token to be swapped to. If not supplied, returned object will be empty.                                   |
| recipient   | string      | N         | Address of recipient of trade result. If not supplied, will default to current active wallet              |

**useSlippage**

This hook exposes both the current slippage, and a function to change the current slippage.

Slippage is expressed in Bps (1 / 10000)

Example:

```tsx
import { useSetSlippage } from "@node-fi/react-native-sdk"

const convertBipsToFloat = (bips: number) => bips / 100000


function Component() {
  const [slippage, setSlippage] = useSetSlippage()


  return (
    <>
      <Text> {`Current Slippage is: %${(convertBipsToFloat(slippage) * 100).toFixed(2)}`}
      <Button text={`Set slippage to 1%`} onPress={() => setSlippage(100)}>
    </>
  )
}
```
