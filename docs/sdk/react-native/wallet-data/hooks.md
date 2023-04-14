---
description: Various hooks for accessing wallet info
sidebar_position: 1
---

# Hooks

### useWallet

A user's wallet lives within the global NodeProvider context, and can be accessed from any child. There are several ways to access a user's wallet, the main way being the hook `useWallet`

```typescript
import { useWallet } from '@node-fi/react-native-sdk';

function Component() {
  const wallet = useWallet();

  // Use the wallet
}

function useHook() {
  const wallet = useWallet();

  // Use the wallet
}
```

### useWalletAddress

`useWalletAddress()` will return the address of the currently-active wallet

```typescript
import { useWalletAddress } from '@node-fi/react-native-wrapper';

function Component() {
  const walletAddress = useWalletAddress();
  // Use the wallet
}

function useHook() {
  const walletAddress = useWalletAddress();
  // Use the wallet
}
```

### **useSetGasToken**

useSetGasToken returns a state variable and a setter for the current default gas currency. Gas currency is persisted across sessions.

The state variable is the address of the current gas token. The updater method takes as argument the address of a gas token. Note that the only check performed is that the provided string is a valid address. If the address of a non-accepted currency is provided, transactions will fail. Future iterations of the SDK will check for valid gas currencies.

```typescript
import { useSetGasToken } from '@node-fi/react-native-wrapper';

function Component() {
  const [currentGasToken, setGasToken]: [string, (s: String) => void] =
    useSetGasToken();

  return (
    <View>
      <Text>{`Your current gas token is: ${currentGasToken}`}</Text>
      <Pressable onPress={() => setGasToken(OTHER_TOKEN)}>
        <Text> {`Set gas token to ${OTHER_TOKEN}`} </Text>
      </Pressable>
    </View>
  );
}
```

### **usePortfolioHistory**

This hook will return an array of objects relating to a wallet's balance at a specific point in time. The range for which to fetch balances is a required parameter, and corresponds to the number of days to retrieve data for.  A period can be defined by the `TimeFrame` type from the Core SDK, which has the following construction:

```typescript
type Time = "hour" | "day" | "week" | "month" | "year";
type TimeFrame = Time | `${number} ${Time}s` | "all";
```

This means time periods can be specified in number of hours, number of days, number of weeks, number of months, or number of years. &#x20;

Additionally, the resolution can be supplied as an integer, where the following applies:

| Value | Resolution |
| ----- | ---------- |
| 0     | 5 minutes  |
| 1     | 15 minutes |
| 2     | 30 minutes |
| 3     | 1 Hour     |
| 4     | 1 Day      |

_Five-minute resolution is only available in entirety for up to 1 week in the past._

This hook exposes `QueryOptions` and `FetchDetails` as explained in [`Data Retrieval Hooks`](../data-retrieval-hooks/)``

The returned data will be priced according the wallet's default price currency.

`usePortfolioHistory(range: DateRange)`

```typescript
import { usePortfolioHistory } from '@node-fi/react-native-sdk';
import { DateRange } from '@node-fi/sdk-core';


function GraphComponent() {
  const [dayRange, setDayRange] = useState<DateRange>(1);
  const { history: portfolioHistory, fetchDetails } = usePortfolioHistory(`${dayRange} days`);

  if (fetchDetails.isFetching) {
    // If portfolioHistory === undefined, content is loading
    return <LoadingComponent />;
  }

  return <Chart data={portolioHistory} x="time" y="total" />;
}
```
