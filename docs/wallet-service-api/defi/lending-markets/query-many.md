# Query Multiple Lending Markets

Lending markets can be bulk queried, and filtered according to protocol, underlying token, apy, and much more.

### Endpoint

`GET https://wallets.nodefinance.org/lending markets`

### Query Parameters

The following query parameters are available for filtering and sorting the results:

| Parameter         | Required | Type   | Description                                                                      |
| ----------------- | -------- | ------ | -------------------------------------------------------------------------------- |
| `chainId`         | Yes      | string | The ID of the chain to filter the results by.                                    |
| `depositToken`    | No       | object | A filter object for the deposit token.                                           |
| `underlyingToken` | No       | object | A filter object for the underlying token.                                        |
| `protocolFilter`  | No       | object | A filter object for the protocol.                                                |
| `orderBy`         | No       | string | The field to sort the results by, either "apr" or "total_deposited".             |
| `order`           | No       | string | The order to sort the results by, either "asc" or "desc".                        |
| `wallet`          | No       | string | If included, result will include wallet's deposits.                              |
| `page`            | No       | string | The page number to retrieve.                                                     |
| `perPage`         | No       | string | The number of results per page.                                                  |
| `category`        | No       | string | The category to filter the results by, either "stable", "volatile", or "basket". |

### Response

The response will be a JSON object with the following shape:

```ts
{
    pagination: {
        currentPage: number;
        totalPages: number;
        perPage: number;
        total: number;
    },
    data: {
            _type: "SNX" | "LG3";
            category: "stable" | "volatile" | "basket";
            name: string;
            id: number;
            depositToken: Token;
            receiptToken: Token;
            chainId: number;
            protocol: number;
            apr: number;
            walletDeposit?: {
                amount: number
                valueInLocalCurrency: number;
            },
            totalDeposited: {
                amount: number;
                valueInLocalCurrency: number;
            };
        }[]
}
```

The pagination object contains information about the pagination of the results, including the current page number, the total number of pages, the number of results per page, and the total number of results.

The data field is an array of objects representing lending markets. Each object includes the following properties:

- `_type`: The type of the farm, which can be either "SNX" or "LG3".
- `category`: The category of the farm, which can be "stable", "volatile", or "basket".
- `name`: The name of the farm.
- `id`: The ID of the farm.
- `depositToken`: Information about the token used for deposits, including its symbol, name, decimals, and address.
- `receiptToken`: Information about the token used for receipts, including its symbol, name, decimals, and address.
- `chainId`: The ID of the chain the farm is on.
- `protocol`: The protocol the farm uses.
- `apr`: The annual percentage rate of the farm.
- `walletDeposit` (optional): If the `wallet` query parameter is provided, this field will contain information about the user's deposit in the farm, including the amount and its value in local currency.
- `totalDeposited`: Information about the total amount deposited in the farm, including the amount and its value in

Example
Here is an example of how you can query this endpoint using curl:

```
curl "https://wallets.nodefinance.org/lending markets?chainId=1&depositToken={%22symbol%22:%22SNX%22}&orderBy=apr&order=desc&page=2&perPage=20"
```

This will send a GET request to the endpoint with the following query parameters:

- `chainId`: 1
- `depositToken`: `{"symbol":"SNX"}`
- `orderBy`: "apr"
- `order`: "desc"
- `page`: 2
- `perPage`: 20

This will retrieve the second page of results, with 20 results per page, sorted by APR in descending order, filtered by a chain ID of 1 and a deposit token symbol of "SNX". If the request is successful, the response will be a JSON object with the paginated farm information as described above.
