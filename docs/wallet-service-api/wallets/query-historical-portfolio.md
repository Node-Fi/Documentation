# Query Historical Portfolio

Fetches the historical portfolio for a given wallet.

### URL

`GET wallets/:id/portfolio/historical`

### Headers

| Name        | Required | Description  |
| ----------- | -------- | ------------ |
| `x-api-key` | Yes      | Node API Key |

### Path Parameters

| Name | Type     | Description                                                            |
| ---- | -------- | ---------------------------------------------------------------------- |
| `id` | `string` | ID of the wallet. Can be either the Ethereum address or the wallet ID. |

### Query Parameters

| Name         | Type     | Required | Description                                           |
| ------------ | -------- | -------- | ----------------------------------------------------- |
| `resolution` | `number` | No       | Resolution of the data points in seconds.             |
| `startTime`  | `number` | No       | Unix timestamp of the start time for the data points. |
| `endTime`    | `number` | No       | Unix timestamp of the end time for the data points.   |
| `address`    | `string` | No       | Ethereum address of the wallet.                       |
| `chain`      | `number` | No       | Ethereum chain ID.                                    |
| `currency`   | `string` | No       | Currency to use for the portfolio value.              |

### Response

A successful response will return an array of objects with the following properties:

| Name    | Type     | Description                                    |
| ------- | -------- | ---------------------------------------------- |
| `time`  | `number` | Unix timestamp of the data point               |
| `total` | `number` | Total value of the portfolio at the given time |
