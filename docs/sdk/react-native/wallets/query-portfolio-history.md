---
description: A convenient hook for portfolio historical value
---

# Query Portfolio History

A wallet's historical portfolio value can be found at specific date ranges and intervals.

Using the hook `usePortfolioHistory(range: TimeFrame)`, you can query history for a specifc range of dates.

This hook will return an array of objects relating to a wallet's balance at a specific point in time.&#x20;

#### Return Type

```typescript
{
    fetchDetails: FetchDetails,
    history: {
                total: number;
                time: number;
            }[]
}
```

| Field | Details                                                                                               |
| ----- | ----------------------------------------------------------------------------------------------------- |
| total | The total portfolio value at that timestamp. This is given in the currently-selected default currency |
| time  | Unix timestamp (seconds) of the portfolio snapshot                                                    |

#### Inputs

The range for which to fetch balances is a required parameter, and corresponds to the number of days to retrieve data for.  A period can be defined by the `TimeFrame` type from the Core SDK, which has the following construction:

```typescript
type Time = "hour" | "day" | "week" | "month" | "year";
type TimeFrame = Time | `${number} ${Time}s` | "all";
```

This means time periods can be specified in number of hours, number of days, number of weeks, number of months, or number of years. &#x20;

Additionally, the resolution can be supplied as an integer, where the following applies:

| Value | Resolution | Default For                     |
| ----- | ---------- | ------------------------------- |
| 0     | 5 minutes  | TimeFrame <= 2 Hours            |
| 1     | 15 minutes | 2 Hours < Time Frame <= 1 Day   |
| 2     | 30 minutes | 1 Day < Time Frame <= 2 weeks   |
| 3     | 1 Hour     | 2 Weeks < Time Frame <= 1 Month |
| 4     | 1 Day      | 1 Month < Time Frame            |

_Five-minute resolution is only available in entirety for up to 1 week in the past._

This hook exposes `QueryOptions` and `FetchDetails` as explained in [`Data Retrieval Hooks`](../data-retrieval-hooks/)``

The returned data will be priced according the wallet's default price currency.

#### `Example`

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
