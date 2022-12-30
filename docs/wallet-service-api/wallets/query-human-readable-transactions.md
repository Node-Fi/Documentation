# Query Transactions for a Wallet

Fetches the transactions for a given wallet.

### URL

`GET /transactions/`

### Query Parameters

| Name                | Type     | Required | Description                                        |
| ------------------- | -------- | -------- | -------------------------------------------------- |
| `account`           | `string` | Yes      | Ethereum address of the wallet.                    |
| `localCurrencyCode` | `string` | No       | Local currency code to use for converting amounts. |
| `page`              | `number` | No       | Page number for paginated results.                 |
| `perPage`           | `number` | No       | Number of results per page.                        |
| `chain`             | `string` | Yes      | Ethereum chain ID.                                 |

### Response

A successful response will return an array of objects with the following properties:

| Name              | Type      | Description                                                                                                                                     |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `_type`           | `string`  | Type of the transaction. One of `EXCHANGE`, `RECEIVED`, `SENT`, `FAUCET`, `VERIFICATION_FEE`, `ESCROW_SENT`, `ESCROW_RECEIVED`, `CONTRACT_CALL` |
| `contract`        | `string`  | Ethereum contract address of the token                                                                                                          |
| `timestamp`       | `number`  | Unix timestamp of the transaction                                                                                                               |
| `blockNumber`     | `number`  | Ethereum block number of the transaction                                                                                                        |
| `transactionHash` | `string`  | Ethereum transaction hash                                                                                                                       |
| `fee`             | `FeeInfo` | Fee information for the transaction. Only present for certain types of transactions.                                                            |

The `FeeInfo` object has the following properties:

| Name                   | Type          | Description                 |
| ---------------------- | ------------- | --------------------------- |
| `valueInLocalCurrency` | `number`      | Fee value in local currency |
| `amount`               | `TokenAmount` | Fee amount in token         |

The `TokenAmount` object has the following properties:

| Name                    | Type     | Description                                          |
| ----------------------- | -------- | ---------------------------------------------------- |
| `token`                 | `string` | Token address                                        |
| `amount`                | `string` | Token amount                                         |
| `decimalAdjustedAmount` | `number` | Token amount adjusted for the token's decimal places |
