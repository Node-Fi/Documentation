---
sidebar_position: 3
---

# Yield Farms

The YieldFarm class represents a yield farming position, where users can earn rewards for providing liquidity to a liquidity pool. This class extends the `DepositablePosition` class, which provides methods for depositing and withdrawing from the farming opportunity.

## Properties

| Property          | Type                    | Description                                        |
| ----------------- | ----------------------- | -------------------------------------------------- |
| \_apr             | number                  | The annual percentage yield of the farm.           |
| \_farmType        | "LG3" &#124; "SNX"      | The type of yield farm.                            |
| \_id              | number                  | The identifier of the farm.                        |
| \_chainId         | ChainId                 | The chain identifier of the farm.                  |
| \_protocol        | string                  | The protocol of the farm.                          |
| \_underlying      | Token[] &#124; string[] | The underlying tokens of the farm.                 |
| \_tvl             | number                  | The total value locked in the farm.                |
| \_valueOfDeposit  | number                  | The value of the user's deposit in local currency. |
| \_totalDeposited  | TokenAmount             | The total amount deposited in the farm.            |
| \_walletDeposited | TokenAmount             | The amount of the user's deposit in the farm.      |
| \_name            | string                  | The name of the farm.                              |

## Fetch Yield Farms

Yield farms and their indexed data can be fetched from the Node wallet API, using the function `getManyFarms` or `getFarmById`.

### `getManyFarms`

Retrieve a list of yield farms that match the specified filters.

#### Parameters

- `filters` (optional): An object containing filter criteria for the farms to retrieve.
- `signer` (optional): An `ethers.Signer` instance that will be used to sign the request to the API if a `wallet` is not provided.

#### Return value

An object containing the following properties:

- `pagination`: An object containing information about the pagination of the returned results.
  - `currentPage`: The current page of results.
  - `totalPages`: The total number of pages of results.
  - `perPage`: The number of results per page.
  - `total`: The total number of results.
- `farms`: An array of `YieldFarm` objects representing the farms that match the specified filters.

#### Example

```typescript
const { pagination, farms } = await getManyFarms({
  chainId: "mainnet",
  depositTokenFilter: {
    symbol: "USDT",
  },
  underlyingTokenFilter: {
    symbol: "ETH",
  },
  orderBy: "apr",
  order: "desc",
  page: 2,
  perPage: 25,
});

console.log(
  "Page 2 of farms with a deposit token of USDT and an underlying token of ETH, sorted by APR in descending order:",
  farms
);
```

### `getFarmById`

Fetches a yield farm by its ID.

Parameters:

| field  | type             | description                                                                |
| ------ | ---------------- | -------------------------------------------------------------------------- |
| id     | number or string | The ID of the yield farm to fetch.                                         |
| signer | Signer or Wallet | (optional) The signer object or wallet to use for signing the transaction. |

Returns:

A promise that resolves to a `YieldFarm` object.
