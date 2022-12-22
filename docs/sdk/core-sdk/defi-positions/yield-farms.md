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

## Claiming Tokens

Yield farms usually pay out interest in the form of reward tokens. Claiming reward tokens can look different depending on the underling contract. Luckily, the `YieldFarm` class standardizes querying for and claiming pending reward tokens.

### `YieldFarm.fetchClaimableTokens`

Fetch claimable tokens for a given farm. Optionally request the required transactions to claim tokens, and/or lookup for a different wallet.

#### Parameters:

| field              | type    | description                                                                         |
| ------------------ | ------- | ----------------------------------------------------------------------------------- |
| includeTransaction | boolean | (Optional) If true, will include a `TransactionStep` to claim tokens from the farm. |
| addressOverride    | Address | (optional) Override the address of the attached signer.                             |

#### Response

The response is a Promise that resolves to information on the claimable tokens, including

- amount
- token
- total claimable value in local currency

If `includeTransaction` is true, then the response will also include a `TransactionStep` object that has a description, transaction, and execution function.

The actual shape looks like:

```typescript
{
    execute?: TransactionStep;
    token: string[];
    amount: number[];
    valueInLocalCurrency: number;
}
```

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

### `getFarmsWithPositions`

Retrieve a list of yield farms where you have a non-zero balance

#### Parameters:

| field  | type            | description                                                 |
| ------ | --------------- | ----------------------------------------------------------- |
| wallet | Wallet          | The wallet to fetch deposits for.                           |
| filter | YieldFarmFilter | (optional) The object specifying how to filter yield farms. |

#### Return value

An object containing the following properties:

- `pagination`: An object containing information about the pagination of the returned results.
  - `currentPage`: The current page of results.
  - `totalPages`: The total number of pages of results.
  - `perPage`: The number of results per page.
  - `total`: The total number of results.
- `farms`: An array of `YieldFarm` objects attached to `wallet`, where each farm the wallet has a nonzero balance

### `fetchClaimableTokensFromOwnedFarms`

Retrieve the total claimable tokens for a wallet, and (optionally) the transactions required to claim the tokens.

#### Parameters:

| field              | type            | description                                                                       |
| ------------------ | --------------- | --------------------------------------------------------------------------------- |
| addressOrId        | string, number  | Address or numerical id of wallet.                                                |
| includeTransaction | boolean         | (optional) If true, response will include formatted transactions to claim tokens. |
| filter             | YieldFarmFilter | (optional) The object specifying how to filter yield farms.                       |

#### Response

The response is a JSON object with the following shape:

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
- `transactions` (optional): An array of transaction configurations, which will only be included if the `includeTransaction` query parameter is provided. Each transaction configuration includes information about the transaction needed to be executed to claim tokens. Each entry in the array just has to be signed and submitted to claim the tokens.
