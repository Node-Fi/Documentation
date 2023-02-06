---
sidebar_position: 0
---

# Token List

Tokens and token lists can be queried via `https://wallets.nodefinance.org/tokens`

The endpoint includes regular tokens, as well as receipt tokens for lending markets, yield farms, vaults, and liquidity pools.

Other resources, such as `Lending Markets` have relations to tokens both for underlying tokens as well as receipt tokens.

:::info Coming Soon

In the next version of the Node Suite, tenants will be able to customize their token list via their tenant console at mission control.

:::

## Filter query parameters

The API endpoint supports the following filter query parameters:

### Field filters

The following fields can be filtered using the exact match (`field`) or inclusion (`field__in`) and exclusion (`field__not_in`) criteria.

| Field           | Type   | Description                                      |
| --------------- | ------ | ------------------------------------------------ |
| `address`       | string | Filter by the Ethereum address of the token      |
| `chain`         | string | Filter by the blockchain network the token is on |
| `name`          | string | Filter by the token's name                       |
| `symbol`        | string | Filter by the token's symbol                     |
| `tags:tags`     | string | Filter by the token's tag                        |
| `tags:category` | string | Filter by the token's category                   |
| `_type`         | string | Filter by the token's type                       |

### Example

```
GET /tokens?chain=137
```

## Response format

The API returns an array of token objects, with the following properties:

| Property     | Type   | Description                                                                                                                                     |
| ------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `_type`      | string | The token's type                                                                                                                                |
| `tid`        | number | The token's unique identifier                                                                                                                   |
| `chain`      | number | The blockchain network the token is on                                                                                                          |
| `address`    | string | The Ethereum address of the token                                                                                                               |
| `symbol`     | string | The token's symbol                                                                                                                              |
| `decimals`   | number | The number of decimal places the token supports                                                                                                 |
| `name`       | string | The token's name                                                                                                                                |
| `logoURI`    | string | The URL to the token's logo                                                                                                                     |
| `tags`       | array  | An array of strings representing the token's tags                                                                                               |
| `extensions` | object | Additional information about the token, including `website` and `isNative`, which is true if the token represents a native token on the network |
