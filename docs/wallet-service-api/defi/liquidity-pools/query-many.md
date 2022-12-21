# Query Multiple Pools

Query information about multiple liquidity pools using this endpoint. Filter by protocol, tokens, and more.

### Endpoint

`GET https://wallets.nodefinance.org/pools`

### Query Parameters

The following query parameters are available for filtering and sorting the results:

| Parameter         | Required | Type   | Description                                                                      |
| ----------------- | -------- | ------ | -------------------------------------------------------------------------------- |
| `chainId`         | Yes      | string | The ID of the chain to filter the results by.                                    |
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
            _type: string;
            category: "stable" | "volatile" | "basket";
            name: string;
            id: number;
            underlying: Token[];
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

The data field is an array of objects representing pools. Each object includes the following properties:

- `_type`: The type of the pool, which can be either "SNX" or "LG3".
- `category`: The category of the pool, which can be "stable", "volatile", or "basket".
- `name`: The name of the pool.
- `id`: The ID of the pool.
- `depositToken`: Information about the token used for deposits, including its symbol, name, decimals, and address.
- `receiptToken`: Information about the token used for receipts, including its symbol, name, decimals, and address.
- `chainId`: The ID of the chain the pool is on.
- `protocol`: The protocol the pool belongs to.
- `apr`: The annual percentage return from swap fees of the pool.
- `walletDeposit` (optional): If the `wallet` query parameter is provided, this field will contain information about the user's deposit in the pool, including the amount and its value in local currency.
- `totalDeposited`: Information about the total amount deposited in the pool, including the amount and its value in local currency

Example
Here is an example of how you can query this endpoint using curl:

```
curl "https://wallets.nodefinance.org/pools?chainId=1&depositToken={%22symbol%22:%22SNX%22}&orderBy=apr&order=desc&page=2&perPage=20"
```

This will send a GET request to the endpoint with the following query parameters:

- `chainId`: 1
- `depositToken`: `{"symbol":"SNX"}`
- `orderBy`: "apr"
- `order`: "desc"
- `page`: 2
- `perPage`: 20

This will retrieve the second page of results, with 20 results per page, sorted by APR in descending order, filtered by a chain ID of 1 and a deposit token symbol of "SNX". If the request is successful, the response will be a JSON object with the paginated pool information as described above.
