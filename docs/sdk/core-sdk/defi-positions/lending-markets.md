---
sidebar_position: 2
---

# Lending Market

:::info

Lending Markets are platforms that allow users to lend out their cryptocurrency assets to borrowers. These borrowers are typically institutions or other users who use the borrowed assets for various purposes, such as trading or margin lending. In return for lending out their assets, users receive interest on their loans in the form of the asset they lent or a different asset.

:::

## Class: LendingMarket

The `LendingMarket` class is a subclass of `DepositablePosition` and represents a single lending market. It includes information about the lending market such as the annual percentage yield (`apy`), the total value locked (`tvl`), the total amount deposited by the attached wallet (`walletDeposited`), and the value of the user's deposit in local currency (`depositValueInLocalCurrency`). It also includes methods for depositing (`deposit`) and withdrawing (`withdraw`) from the lending market.

### Properties

- `apy`: The annual percentage yield of the lending market.
- `type`: The type of lending market.
- `id`: The ID of the lending market.
- `chainId`: The chain ID of the lending market.
- `depositToken`: The token being deposited in the lending market.
- `tvl`: The total value locked in the lending market.
- `walletDeposited`: The total amount deposited by the user in the lending market.
- `totalDeposited`: The total amount of deposit token supplied to the lending market.
- `totalBorrowed`: The total amount of deposit token being borrowed from the lending market.
- `depositValueInLocalCurrency`: The value of the user's deposit in the lending market in local currency.
- `protocol`: The protocol of the lending market.

---

## Fetch Lending Markets

Lending Markets and their indexed data can be fetched from the Node wallet API, using the function `getManyLendingMarkets` or `getLendingMarketById`.

### `getManyLendingMarkets`

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
- `farms`: An array of `LendingMarket` objects representing the farms that match the specified filters.

#### Example

```typescript
const { pagination, farms } = await getManyLendingMarkets({
  chainId: ChainId.Polygon,
  depositTokenFilter: {
    symbol: "USDT",
  },
  orderBy: "apr",
  order: "desc",
  page: 2,
  perPage: 25,
});

console.log(
  "Page 2 of lending markets with a deposit token of USDT on polygon, sorted by APR in descending order:",
  farms
);
```

### `getLendingMarketById`

Fetches a yield farm by its ID.

Parameters:

| field  | type             | description                                                                |
| ------ | ---------------- | -------------------------------------------------------------------------- |
| id     | number or string | The ID of the yield farm to fetch.                                         |
| signer | Signer or Wallet | (optional) The signer object or wallet to use for signing the transaction. |

Returns:

A promise that resolves to a `LendingMarket` object.

### `getLendingMarketsWithPositions`

Retrieve a list of yield farms where you have a non-zero balance

#### Parameters:

| field  | type                | description                                                 |
| ------ | ------------------- | ----------------------------------------------------------- |
| wallet | Wallet              | The wallet to fetch deposits for.                           |
| filter | LendingMarketFilter | (optional) The object specifying how to filter yield farms. |

#### Return value

An object containing the following properties:

- `pagination`: An object containing information about the pagination of the returned results.
  - `currentPage`: The current page of results.
  - `totalPages`: The total number of pages of results.
  - `perPage`: The number of results per page.
  - `total`: The total number of results.
- `farms`: An array of `LendingMarket` objects attached to `wallet`, where each farm the wallet has a nonzero balance
