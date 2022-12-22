---
sidebar_position: 0
---

# Lending Markets

:::tip

For information on the LendingMarket class, see the docs in ['Core SDK'](../../core-sdk/defi-positions/lending-markets.md "mention")

:::

## Fetching Lending Markets

Fetching lending markets with the React Native SDK is very simple using the hook `useLendingMarkets`

### `useLendingMarkets`

A react hook that returns LendingMarket objects according to the supplied filter.

#### Parameters

| Name            | Type                | Required | Description                                                                                |
| --------------- | ------------------- | -------- | ------------------------------------------------------------------------------------------ |
| includeBalances | boolean             | No       | Optional flag to include the balances for each lending market for the given wallet address |
| filter          | LendingMarketFilter | No       | Optional filter object to specify which markets to retrieve from the API                   |
| opts            | object              | No       | Optional options object for React Query                                                    |

If `chainId` is not specified in the filter, then the default chainId for the SDK is used. To fetch data for all chains, use `chainId: undefined`

#### Returns

An object with the following properties:

| Name         | Type            | Description                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------- |
| markets      | LendingMarket[] | An array of lending market objects                                                                        |
| pagination   | object          | An object with pagination details for the returned markets                                                |
| fetchDetails | object          | An object with details about the query, including the loading state and any errors that may have occurred |

#### Example

```ts
import { useLendingMarkets } from '@node-fi/react-native-sdk';

function MyComponent() {
    const [page, setPage] = useState(0)
    const { markets, pagination, fetchDetails } = useLendingMarkets(true, { page });

    if (fetchDetails.isLoading) {
        return <Text>Loading markets...</Text>;
    }

    if (fetchDetails.isError) {
        return <Text>Error loading markets: {fetchDetails.error.message}</Text>;
    }

    return (
        <View>
        {markets.map((farm) => (
            <Text key={farm.id}>{farm.name}</Text>
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
