---
sidebar_position: 1
---

# Yield Farms

:::tip

For information on the YieldFarm class, see the docs in ['Core SDK'](../../core-sdk/defi-positions/yield-farms.md "mention")

:::

## Fetching Farms

Fetching farms with the React Native SDK is very simple using the hook `useFarms`

### `useFarms`

A react hook that returns yield farm classes according to the supplied filter.

#### Parameters

| Name            | Type    | Required | Description                                                                            |
| --------------- | ------- | -------- | -------------------------------------------------------------------------------------- |
| includeBalances | boolean | No       | Optional flag to include the balances for each yield farm for the given wallet address |
| filter          | object  | No       | Optional filter object to specify which farms to retrieve from the API                 |
| opts            | object  | No       | Optional options object for React Query                                                |

If `chainId` is not specified in the filter, then the default chainId for the SDK is used. To fetch data for all chains, use `chainId: undefined`

#### Returns

An object with the following properties:

| Name         | Type        | Description                                                                                               |
| ------------ | ----------- | --------------------------------------------------------------------------------------------------------- |
| farms        | YieldFarm[] | An array of yield farm objects                                                                            |
| pagination   | object      | An object with pagination details for the returned farms                                                  |
| fetchDetails | object      | An object with details about the query, including the loading state and any errors that may have occurred |

#### Example

```ts
import { useFarms } from '@node-fi/react-native-sdk';

function MyComponent() {
    const [page, setPage] = useState(0)
    const { farms, pagination, fetchDetails } = useFarms(true, { page });

    if (fetchDetails.isLoading) {
        return <Text>Loading farms...</Text>;
    }

    if (fetchDetails.isError) {
        return <Text>Error loading farms: {fetchDetails.error.message}</Text>;
    }

    return (
        <View>
        {farms.map((farm) => (
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
