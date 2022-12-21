---
description: Slippage protects users from being front-run
---

# Setting Slippage

Default slippage is 0.1%, and can easily be changed through the hook `useSetSlippage`

`useSetSlippage` returns `[currentSlippage, setSlippage]`

Slippage is represented in bips, so to allow for 100% slippage (DO NOT DO THIS HIGH OF SLIPPAGE), slippage should be set to 10000.

### **useSlippage**

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
