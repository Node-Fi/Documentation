# Query Claimable Tokens

The node API exposes an easy way to find what farms a wallet can claim tokens from. Additionally, the API can give the transaction payload to actually claim the tokens.

As a developer, you will no longer have to worry about the different intricacies of claiming mechanics for a specific variant of yield farm.

### Endpoint

`GET https://wallets.nodefinance.org/wallets/{wallet_id}/farms/claimable`

- `wallet_id` can be a wallet address or the numeric identifier of the wallet in the Node ecosystem.

### Query Parameters

This endpoint accepts the same query parameters as the previous endpoint, as well as an additional parameter:

| Parameter            | Required | Type    | Description                                                                      |
| -------------------- | -------- | ------- | -------------------------------------------------------------------------------- |
| `includeTransaction` | No       | boolean | If included, the response will include the transactions needed to claim tokens.  |
| `chainId`            | Yes      | string  | The ID of the chain to filter the results by.                                    |
| `depositToken`       | No       | object  | A filter object for the deposit token.                                           |
| `underlyingToken`    | No       | object  | A filter object for the underlying token.                                        |
| `protocolFilter`     | No       | object  | A filter object for the protocol.                                                |
| `orderBy`            | No       | string  | The field to sort the results by, either "apr" or "total_deposited".             |
| `order`              | No       | string  | The order to sort the results by, either "asc" or "desc".                        |
| `wallet`             | No       | string  | If included, result will include wallet's deposits.                              |
| `category`           | No       | string  | The category to filter the results by, either "stable", "volatile", or "basket". |

### Response

The response from this API is a JSON object with the following shape:

```
{
    totals: {
        totalValueInLocalCurrency: number;
        perToken: {
            [address: string]: {
                amount: number;
                valueInLocalCurrency: number;
            };
        };
    },
    transactions: TransactionConfig[]
}
```

- `totals`: An object containing information about the total value of the claimable tokens.
  - `totalValueInLocalCurrency`: The total value of the claimable tokens in local currency.
  - `perToken`: An object containing information about the claimable amount and value for each token.
    - `[address]`: An object for each token, where `address` is the address of the token.
      - `amount`: The claimable amount of the token.
      - `valueInLocalCurrency`: The value of the claimable amount in local currency.
- `transactions` (optional): An array of transaction configurations, which will only be included if the `includeTransaction` query parameter is provided. Each transaction configuration includes information about the transaction needed to be executed to claim tokens.
