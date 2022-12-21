---
description: The Token context covers token balances, details, and prices.
---

# Hooks

### **useTokens**

This hook returns a mapping from address to a token object for each supported token. Within the NodeProvider, a whitelist for tokens can be supplied as well as a blacklist. Additionally, custom tokens can be declared.

The Token object contains fields for address, decimals, name, symbol, and url of image.

Addresses in the mapping are all lowercase, to avoid capit

```typescript
import { useTokens } from '@node-fi/react-native-sdk';

function Component() {
  const tokens = useTokens();
  const tokenAddress = '0xAddress';

  const tokenObject = tokens[tokenAddress.toLowerCase()];

  // ...rest
}
```

### **useAddToken**

This hook allows for a user to dynamically add new tokens to be recognized by their wallet. In most cases, it is unlikely that an added token will have a correlated price.

The hook returns a callback that takes in a Token object, and adds it to the internal token mapping. This token object only needs to be populated with the address and the ChainId, and the rest of the details will be loaded.

```typescript
import { useAddToken, useChainId } from "@node-fi/react-native-sdk"
import { Token } from "@node-fi/sdk-core

function AddTokenComponent() {
  const [address, setAddress] = React.useState<string>()
  const addToken = useAddToken()
  const chainId = useChainId()

  const addNewToken = React.useCallback(async () => {
    const newToken = new Token(chainId, address)
    await addToken(newToken)
  }, [address])

  return (
    <>
      <TextInput onChange={setAddress}>
      <Button text="Add Token!" onPress={addNewToken} >
    </>
  )
}
```

### **useRemoveToken**

This hook allows the user to dynamically remove tokens from being recognized by their wallet.

It takes as input the address of the token to remove.

```typescript
import { useRemoveToken } from '@node-fi/react-native-sdk';

function Component() {
  const removeToken = useRemoveToken();
  const tokenToRemove = '0xAddress';

  const handleRemove = React.useCallback(
    () => removeToken(tokenToRemove),
    [removeToken]
  );

  // ...rest
}
```

### useTransactionHistory

This hook allows a component to receive transaction history.  When new token transfers are detected, the query is invalidated and new transactions can be fetched.  Transactions will be of the type `TokenTransactionBase`, and the type can be narrowed down by the following functions, which are exported from the core SDK:

```typescript
function isTokenSent(txn: TokenTransactionBase): txn is TokenSentTransaction

function isTokenReceive(txn: TokenTransactionBase): txn is TokenReceiveTransaction

function isTokenTransfer(txn: TokenTransactionBase): txn is TokenTransferTransaction

function isTokenSwap(txn: TokenTransactionBase): txn is TokenSwapTransaction
```

The hook returns:

```typescript
{
    fetchDetails: FetchDetails<TokenTransactionBase[]>,
    historyL TokenTransationBase[]
}
```

Inputs for the hook are as follows:

| Param            | Type         | Required? | Purpose                                                                           | Default Value |
| ---------------- | ------------ | --------- | --------------------------------------------------------------------------------- | ------------- |
| page             | number       | N         | Specifies the page                                                                | `0`           |
| countPerPage     | number       | N         | Specifies the number of transaction per page to fetch                             | `10`          |
| currencyOverride | string       | N         | Overrides the base fiat currency used to provide local value for each transaction | `"USD"`       |
| queryOpts        | QueryOptions | N         | See [Query Options](../data-retrieval-hooks/query-options.md)                     | `undefined`   |

### **useBalances**

This hook returns a mapping from addresses to the wallet's current balance, as a `TokenAmount` object. Addresses are all lowercase within the mapping, so to access the balance of a given token you will need to use a lowercase address.

If a supported token is not contained in the mapping, then the wallet's balance is 0 for that token.

```typescript
import { useBalances } from '@node-fi/react-native-sk';

type TokenBalances = {
  [lowerCaseAddress: string]: TokenAmount;
};

function Component() {
  const { balances, fetchDetails } = useBalances();

  const cusdBalance = balances[addressOf('CUSD')];

  if (fetchDetails.isFetching) return <Loader />
  // ...rest
}
```

### **useBalance**

This hook returns the balance for a single token, as a TokenAmount object. TokenAmount object contain both the underlying token, the raw amount (not accounting for decimals), and the amoun accounting for decimals.

This hook accepts either a token object, or the address of a token.

```typescript
import { useBalance } from '@node-fi/react-native-sdk';

function Component() {
  const CUSD = '0xAddress';
  const CELO = new Token(ChainId.Celo, CELO_ADDRESS, 18);

  const { balance: cusdBalance } = useBalance(CUSD);
  const { balance: celoBalance } = useBalance(CELO);

  // ...rest
}
```

### **usePricedBalances**

This hook will return a mapping of token addresses to the dollar value of the wallet's current balance. If a token does not have a subsequent balance in the mapping, then the user either has 0 balance or there is no price recorded for that token.

Additionally, returns an object containing details on the fetching status of prices

```typescript
import { usePricedBalances } from '@node-fi/react-native-wrapper';

function Component() {
  const { pricedBalances, fetchDetails } = usePricedBalances();
  const MY_TOKEN = '0xAddress';

  const dollarValueOfMyHoldings = pricedBalances[MY_TOKEN.toLowerCase()];
}
```

### **useTokenPrices**

This hook returns a mapping from token addresses to their respective price in the default currency.

Additionally, returns an object containing details on the fetching status of prices

For query opts, see [Query Options](../data-retrieval-hooks/query-options.md)

For fetch details, see [Fetch Details](../data-retrieval-hooks/fetch-details.md)

Example use:

```typescript
import { useTokenPrices } from "@node-fi/react-native-sdk"

function Component() {
  const { prices, fetchDetails } = useTokenPrices();
  const MAIN_TOKEN = "0xAddress"

  return (
    <Text>{`Price of main token: ${prices[MAIN_TOKEN.toLowerCase()]}`}</Text>
    {Object.entries(prices).map(([address, {current}]) =>
      <Text key={`price-${address}`}> {`Current price of token ${address}: ${current}`} </Text>)}
  )
}
```

### **useTokenPrice**

This hook returns the price object for a specific token. It takes as argument the address of the token.

```typescript
import { useTokenPrice } from '@node-fi/react-native-sdk';

function Component() {
  const MY_TOKEN = '0xAddress';

  const { price, fetchDetails } = useTokenPrice(MY_TOKEN);;

  // ...rest
}
```

### **useHistoricalTokenPrices**

This hook returns the historical prices for any supported token.

While data is loading, the return value will be undefined. Otherwise, it will be of the shape:

```typescript
type UseHistoricalPricesShape = {
  time: number; // unix time
  priceusd: number; // price in usd -- future versions of the sdk will simply use a 'price' field that adjusts based off of preferred currency
};
```

The inputs for the hook are as follows:

| Param   | Type                                | Required? | Purpose                                                              | Default Value    |
| ------- | ----------------------------------- | --------- | -------------------------------------------------------------------- | ---------------- |
| address | string                              | Yes       | Specifies the address of the token to retrieve historical prices for | N / A - REQUIRED |
| range   | DateRange (1h, 1d, 1w, 1m, 1y, all) | Y         | Specifies the time range to fetch token prices for                   | N / A - REQUIRED |

Example Use Case:

```typescript
import { useHistoricalTokenPrices } from "@node-fi/react-native-sdk"
import { DateRange } from "@node-fi/sdk-core"

function Component() {
  const MY_TOKEN = "0xAddress"
  const DATE_RANGE = DateRange['1W']

  const { history: historicalPrices, fetchDetails } = useHistoricalTokenPrices(MY_TOKEN, DATE_RANGE)

  if (fetchDetails.isFetching === undefined) return <LoadingComponent />

  return <ChartComponent data={historicalPrices} x="time" y="priceusd">
}
```
