---
sidebar_position: 0
---

# Depositable Positions List

:::tip

For information on the DepositablePosition class, see the docs in ['Core SDK'](../../core-sdk/defi-positions/depositable-position-base.md "mention")

:::

## Supported Depositable Positions

Currently the following depositable position types are supported:

- Yield Farm
  - Action type id: `farms`
- Lending Market
  - Action type id: `lending_markets `
- Liquid Staking
  - Action type id: `liquid_staking`
- Liquidity Pools
  - Action type id: `liquidity_pools`

When interacting with the depositable position hooks, the action type id should be used to specify which type to fetch and interact with.

## Support protocols

The following protocols are supported:

- Lending Markets
  - (Polygon) Aave V3
  - (Polygon) Aave V2
  - (Celo) Moola market
- Liquidity Pools
  - (Polygon) QuickSwap
  - (Polygon) Curve
  - (Celo) Ubeswap
- Liquid Staking
  - (Polygon) Stader

As the SDK progresses through beta, this list will grow dramatically.

## Fetching Depositable Positions

Fetching positions with the React Native SDK is very simple using the hook `useDepositablePositionsList`

### `useDepositablePositionsList`

A react hook that returns the requested DepositablePosition objects according to the supplied filter.

#### Parameters

| Name            | Type           | Required | Description                                                                                |
| --------------- | -------------- | -------- | ------------------------------------------------------------------------------------------ |
| actionType      | EarnActionType | Yes      | Specific type of depositable position to fetch                                             |
| includeBalances | boolean        | No       | Optional flag to include the balances for each lending market for the given wallet address |
| filter          | EarnFilter     | No       | Optional filter object to specify which positions to retrieve from the API                 |
| opts            | object         | No       | Optional options object for React Query                                                    |

If `chainId` is not specified in the filter, then the default chainId for the SDK is used. To fetch data for all chains, use `chainId: undefined`

#### Returns

An object with the following properties:

| Name         | Type                 | Description                                                                                               |
| ------------ | -------------------- | --------------------------------------------------------------------------------------------------------- |
| positions    | DepositablPosition[] | An array of positions objects                                                                             |
| pagination   | object               | An object with pagination details for the returned positions                                              |
| fetchDetails | object               | An object with details about the query, including the loading state and any errors that may have occurred |

#### Example

```ts
import { useDepositablePositionsList } from '@node-fi/react-native-sdk';

function MyComponent() {
    const [page, setPage] = useState(0)
    const { positions: markets, pagination, fetchDetails } = useDepositablePositionsList('lending_markets', true, { page });

    if (fetchDetails.isLoading) {
        return <Text>Loading markets...</Text>;
    }

    if (fetchDetails.isError) {
        return <Text>Error loading markets: {fetchDetails.error.message}</Text>;
    }

    return (
        <View>
        {markets.map((market) => (
            <Text key={market.id}>{market.name}</Text>
        ))}
        {pagination.totalPages > 1 && (
        <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onChange={setPage}
        />
        </View>
    );
}
```
