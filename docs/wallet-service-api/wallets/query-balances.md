# Query Tokens Balances

Fetches the balances for a given wallet on a given chain.

### URL

`GET /wallets/:id/portfolio/balances`

### Headers

| Name        | Required | Description  |
| ----------- | -------- | ------------ |
| `x-api-key` | Yes      | Node API Key |

### Path Parameters

| Name | Type     | Description                                                            |
| ---- | -------- | ---------------------------------------------------------------------- |
| `id` | `string` | ID of the wallet. Can be either the Ethereum address or the wallet ID. |

### Query Parameters

| Name    | Type     | Required | Description        |
| ------- | -------- | -------- | ------------------ |
| `chain` | `string` | No       | Ethereum chain ID. |

### Response

A successful response will return an array of objects with the following properties:

| Name       | Type       | Description                        |
| ---------- | ---------- | ---------------------------------- |
| `balance`  | `number`   | Balance of the asset in the wallet |
| `_type`    | `string`   | Token type                         |
| `tid`      | `number`   | Tenant ID of the token             |
| `decimals` | `number`   | Decimals of the token              |
| `chain`    | `number`   | Ethereum chain ID of the token     |
| `address`  | `string`   | Token address                      |
| `symbol`   | `string`   | Symbol of the token                |
| `name`     | `string`   | Name of the token                  |
| `logoURI`  | `string`   | URI of the token's logo            |
| `tags`     | `string[]` | Array of tags for the token        |
