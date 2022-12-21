# API Reference

[@node-fi/sdk-core](https://github.com/Node-Fi/Docs/blob/main/docs/README.md) / Exports

## @node-fi/sdk-core

### Table of contents

#### Enumerations

* [ChainId](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md)
* [DateRange](https://github.com/Node-Fi/Docs/blob/main/docs/enums/DateRange.md)
* [EventTypes](https://github.com/Node-Fi/Docs/blob/main/docs/enums/EventTypes.md)
* [Interval](https://github.com/Node-Fi/Docs/blob/main/docs/enums/Interval.md)
* [Rounding](https://github.com/Node-Fi/Docs/blob/main/docs/enums/Rounding.md)
* [TokenTransactionType](https://github.com/Node-Fi/Docs/blob/main/docs/enums/TokenTransactionType.md)

#### Classes

* [EOA](https://github.com/Node-Fi/Docs/blob/main/docs/classes/EOA.md)
* [PricedToken](https://github.com/Node-Fi/Docs/blob/main/docs/classes/PricedToken.md)
* [SmartRouter](https://github.com/Node-Fi/Docs/blob/main/docs/classes/SmartRouter.md)
* [SmartWallet](https://github.com/Node-Fi/Docs/blob/main/docs/classes/SmartWallet.md)
* [Token](https://github.com/Node-Fi/Docs/blob/main/docs/classes/Token.md)
* [TokenAmount](https://github.com/Node-Fi/Docs/blob/main/docs/classes/TokenAmount.md)
* [Wallet](https://github.com/Node-Fi/Docs/blob/main/docs/classes/Wallet.md)

#### Interfaces

* [CustomRPC](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/CustomRPC.md)
* [FeeInfo](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/FeeInfo.md)
* [MultiCallPayload](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/MultiCallPayload.md)
* [PageInfo](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/PageInfo.md)
* [TokenReceiveTransaction](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenReceiveTransaction.md)
* [TokenSentTransaction](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenSentTransaction.md)
* [TokenSwapTransaction](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenSwapTransaction.md)
* [TokenTransactionBase](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransactionBase.md)
* [TokenTransferTransaction](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransferTransaction.md)
* [TransactionOptions](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TransactionOptions.md)

#### Type Aliases

* [Address](modules.md#address)
* [BigNumberString](modules.md#bignumberstring)
* [NodeRoute](modules.md#noderoute)
* [RouterPayloadRequest](modules.md#routerpayloadrequest)
* [RouterResponse](modules.md#routerresponse)
* [TimeFrame](modules.md#timeframe)

#### Variables

* [API\_BASE](modules.md#api\_base)
* [CHAINS\_TO\_RPC](modules.md#chains\_to\_rpc)
* [DEFAULT\_CHAIN](modules.md#default\_chain)
* [DEFAULT\_RPC](modules.md#default\_rpc)
* [MULTICALL\_NETWORKS](modules.md#multicall\_networks)
* [WALLET\_FACTORY\_ADDRESS](modules.md#wallet\_factory\_address)
* [WALLET\_SERVICE\_URL](modules.md#wallet\_service\_url)
* [chainsSupportingAlternateGas](modules.md#chainssupportingalternategas)
* [dateRangeToDefaultInterval](modules.md#daterangetodefaultinterval)
* [dateRangeToReadable](modules.md#daterangetoreadable)

#### Functions

* [OverrideRPC](modules.md#overriderpc)
* [applySlippage](modules.md#applyslippage)
* [convertNodeRouteToContractPayload](modules.md#convertnoderoutetocontractpayload)
* [convertResultToAddress](modules.md#convertresulttoaddress)
* [convertResultToBigNumber](modules.md#convertresulttobignumber)
* [convertResultToNumber](modules.md#convertresulttonumber)
* [convertResultToString](modules.md#convertresulttostring)
* [convertTimeframeToUnixSeconds](modules.md#converttimeframetounixseconds)
* [fetchPrices](modules.md#fetchprices)
* [fetchTransactions](modules.md#fetchtransactions)
* [formatAllPricesQuery](modules.md#formatallpricesquery)
* [formatDepositRequest](modules.md#formatdepositrequest)
* [formatHeader](modules.md#formatheader)
* [formatHistoricalPricesQuery](modules.md#formathistoricalpricesquery)
* [formatRouteRequest](modules.md#formatrouterequest)
* [formatWithdrawRequest](modules.md#formatwithdrawrequest)
* [getBalances](modules.md#getbalances)
* [isTokenReceive](modules.md#istokenreceive)
* [isTokenSent](modules.md#istokensent)
* [isTokenSwap](modules.md#istokenswap)
* [isTokenTransfer](modules.md#istokentransfer)
* [mergeArrays](modules.md#mergearrays)
* [multicallMultipleContractMultipleData](modules.md#multicallmultiplecontractmultipledata)
* [multicallMultipleContractSingleData](modules.md#multicallmultiplecontractsingledata)
* [multicallSingleContractMultipleData](modules.md#multicallsinglecontractmultipledata)
* [subscribeToTokenTransfers](modules.md#subscribetotokentransfers)
* [tryParseTokenAmount](modules.md#tryparsetokenamount)
* [validateAndParseAddress](modules.md#validateandparseaddress)
* [waitForMinedTransaction](modules.md#waitforminedtransaction)

### Type Aliases

#### Address

Ƭ **Address**: `string`

Represents an Etherem 20B address

**Defined in**

[constants/index.ts:16](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L16)

***

#### BigNumberString

Ƭ **BigNumberString**: `string`

**Defined in**

[constants/index.ts:18](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L18)

***

#### NodeRoute

Ƭ **NodeRoute**: `Object`

**Type declaration**

| Name                   | Type                         |
| ---------------------- | ---------------------------- |
| `deadline`             | `string` \| `number`         |
| `expectedOutputAmount` | `string` \| `number`         |
| `extras`               | (`string` \| `number`\[])\[] |
| `inputAmount`          | `string` \| `number`         |
| `pairs`                | `string`\[]                  |
| `partner`              | `string` \| `number`         |
| `path`                 | `string`\[]                  |
| `sig`                  | `string` \| `number`\[]      |

**Defined in**

[Routing/SmartRouter.ts:18](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L18)

***

#### RouterPayloadRequest

Ƭ **RouterPayloadRequest**: `Object`

**Type declaration**

| Name           | Type                                                                         |
| -------------- | ---------------------------------------------------------------------------- |
| `amountIn`     | [`BigNumberString`](modules.md#bignumberstring)                              |
| `chainId?`     | [`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md) |
| `deadlineMs?`  | `number`                                                                     |
| `from?`        | [`Address`](modules.md#address)                                              |
| `includeTxn?`  | `boolean`                                                                    |
| `maxHops?`     | `number`                                                                     |
| `priceImpact?` | `boolean`                                                                    |
| `slippage?`    | `number`                                                                     |
| `to?`          | [`Address`](modules.md#address)                                              |
| `tokenIn`      | [`Address`](modules.md#address)                                              |
| `tokenOut`     | [`Address`](modules.md#address)                                              |

**Defined in**

[Routing/SmartRouter.ts:41](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L41)

***

#### RouterResponse

Ƭ **RouterResponse**: `Object`

**Type declaration**

| Name                      | Type                                                |
| ------------------------- | --------------------------------------------------- |
| `details`                 | [`NodeRoute`](modules.md#noderoute)                 |
| `expectedOut`             | [`BigNumberString`](modules.md#bignumberstring)     |
| `minimumExpectedOut`      | [`BigNumberString`](modules.md#bignumberstring)     |
| `priceImpact`             | { `denominator`: `number` ; `numerator`: `number` } |
| `priceImpact.denominator` | `number`                                            |
| `priceImpact.numerator`   | `number`                                            |
| `routerAddress`           | [`Address`](modules.md#address)                     |
| `txn`                     | `TransactionConfig` \| { `error`: `string` }        |

**Defined in**

[Routing/SmartRouter.ts:29](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L29)

***

#### TimeFrame

Ƭ **TimeFrame**: `Time` | \`${number} ${Time}s\` | `"all"`

Timeframe type used for historical queries

**Defined in**

[constants/index.ts:45](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L45)

### Variables

#### API\_BASE

• `Const` **API\_BASE**: `"https://us-central1-node-wallet.cloudfunctions.net"`

API Endpoints

**Defined in**

[constants/index.ts:73](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L73)

***

#### CHAINS\_TO\_RPC

• `Const` **CHAINS\_TO\_RPC**: { \[id in ChainId]: Object }

RPC Links for a given chain

**Defined in**

[constants/index.ts:131](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L131)

***

#### DEFAULT\_CHAIN

• `Const` **DEFAULT\_CHAIN**: [`Celo`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md#celo) = `ChainId.Celo`

**Defined in**

[constants/index.ts:126](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L126)

***

#### DEFAULT\_RPC

• `Const` **DEFAULT\_RPC**: `"https://necessary-muddy-research.celo-mainnet.discover.quiknode.pro/3577f3bb994031ee8c5dfa75313b24bfa4cffd1e/"`

Chain-Specific Values

**Defined in**

[constants/index.ts:123](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L123)

***

#### MULTICALL\_NETWORKS

• `Const` **MULTICALL\_NETWORKS**: `Record`<[`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md), `string`>

**Defined in**

[constants/index.ts:157](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L157)

***

#### WALLET\_FACTORY\_ADDRESS

• `Const` **WALLET\_FACTORY\_ADDRESS**: { \[chain in ChainId]: Address }

**Defined in**

[constants/index.ts:162](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L162)

***

#### WALLET\_SERVICE\_URL

• `Const` **WALLET\_SERVICE\_URL**: `"http://localhost:8080/"` | `"https://wallets.nodefinance.org/"`

**Defined in**

[constants/index.ts:75](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L75)

***

#### chainsSupportingAlternateGas

• `Const` **chainsSupportingAlternateGas**: `Set`<[`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md)>

**Defined in**

[constants/index.ts:114](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L114)

***

#### dateRangeToDefaultInterval

• `Const` **dateRangeToDefaultInterval**: { \[range in DateRange]: number }

**Defined in**

[constants/index.ts:180](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L180)

***

#### dateRangeToReadable

• `Const` **dateRangeToReadable**: { \[range in DateRange]: string }

Type Translations

**Defined in**

[constants/index.ts:171](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L171)

### Functions

#### OverrideRPC

▸ **OverrideRPC**(`chain`, `rpc`): `Object`

Overrides the RPC for a given chain

**Parameters**

| Name    | Type                                                                                             | Description                             |
| ------- | ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| `chain` | [`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md)                     | ChainId to override the RPC for         |
| `rpc`   | `Partial`<[`CustomRPC`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/CustomRPC.md)> | https and wss rpc endpoints to override |

**Returns**

`Object`

| Name   | Type     |
| ------ | -------- |
| `http` | `string` |
| `wss?` | `string` |

**Defined in**

[constants/index.ts:154](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L154)

***

#### applySlippage

▸ **applySlippage**(`amount`, `slippage`): `BigNumber`

**Parameters**

| Name       | Type        |
| ---------- | ----------- |
| `amount`   | `BigNumber` |
| `slippage` | `number`    |

**Returns**

`BigNumber`

**Defined in**

[utils/index.ts:109](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L109)

***

#### convertNodeRouteToContractPayload

▸ **convertNodeRouteToContractPayload**(`route`, `slippage`, `to`): \[`string`\[], `string`\[], (`string` | `number`\[])\[], `string` | `number`, `string` | `number`, `string` | `number`, `string`, `string` | `number`, `string` | `number`, `string` | `number`\[]]

**Parameters**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `route`    | [`NodeRoute`](modules.md#noderoute) |
| `slippage` | `number`                            |
| `to`       | `string`                            |

**Returns**

\[`string`\[], `string`\[], (`string` | `number`\[])\[], `string` | `number`, `string` | `number`, `string` | `number`, `string`, `string` | `number`, `string` | `number`, `string` | `number`\[]]

**Defined in**

[Routing/SmartRouter.ts:55](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L55)

***

#### convertResultToAddress

▸ **convertResultToAddress**(`result?`, `i?`): `string`

**Parameters**

| Name      | Type     | Default value | Description                             |
| --------- | -------- | ------------- | --------------------------------------- |
| `result?` | `Result` | `undefined`   | Result object from multicall            |
| `i`       | `number` | `0`           | index of value within Result, default 0 |

**Returns**

`string`

address of ith value in Result

**Defined in**

[utils/index.ts:42](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L42)

***

#### convertResultToBigNumber

▸ **convertResultToBigNumber**(`result?`, `i?`): `BigNumber`

**Parameters**

| Name      | Type     | Default value | Description                             |
| --------- | -------- | ------------- | --------------------------------------- |
| `result?` | `Result` | `undefined`   | Result object from multicall            |
| `i`       | `number` | `0`           | index of value within Result, default 0 |

**Returns**

`BigNumber`

BigNumber of ith value in Result

**Defined in**

[utils/index.ts:51](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L51)

***

#### convertResultToNumber

▸ **convertResultToNumber**(`result?`, `i?`): `number`

**Parameters**

| Name      | Type     | Default value | Description                             |
| --------- | -------- | ------------- | --------------------------------------- |
| `result?` | `Result` | `undefined`   | Result object from multicall            |
| `i`       | `number` | `0`           | index of value within Result, default 0 |

**Returns**

`number`

Number of ith value in Result

**Defined in**

[utils/index.ts:60](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L60)

***

#### convertResultToString

▸ **convertResultToString**(`result?`, `i?`): `any`

**Parameters**

| Name      | Type     | Default value | Description                             |
| --------- | -------- | ------------- | --------------------------------------- |
| `result?` | `Result` | `undefined`   | Result object from multicall            |
| `i`       | `number` | `0`           | index of value within Result, default 0 |

**Returns**

`any`

string representation of ith value in Result

**Defined in**

[utils/index.ts:33](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L33)

***

#### convertTimeframeToUnixSeconds

▸ **convertTimeframeToUnixSeconds**(`timeframe`): `number`

**Parameters**

| Name        | Type                                |
| ----------- | ----------------------------------- |
| `timeframe` | [`TimeFrame`](modules.md#timeframe) |

**Returns**

`number`

Unix seconds of given timeframe. If parsing error, will return current timestamp in Unix seconds.

**Defined in**

[utils/index.ts:149](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L149)

***

#### fetchPrices

▸ **fetchPrices**(`apiKey`, `chainId?`, `currency?`): `Promise`<{}>

Fetches current token prices for a chain. Prices can be up to 5 minutes stale currently, and will be denominated in the supplied base currency.

**Parameters**

| Name        | Type                                                                         | Description                                                                          |
| ----------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `apiKey`    | `string`                                                                     | API Key used for authentication                                                      |
| `chainId?`  | [`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md) | ChainId to get prices from. If no ID is provided, will provide prices for all chains |
| `currency?` | `string`                                                                     | Base currency. If none is provided, price quotes will be in USD                      |

**Returns**

`Promise`<{}>

A mapping from token address to current price

**Defined in**

[Tokens/fetchers.ts:32](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/fetchers.ts#L32)

***

#### fetchTransactions

▸ **fetchTransactions**(`walletAddress`, `chain`, `getToken`, `opts?`): `Promise`<([`TokenTransferTransaction`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransferTransaction.md) | [`TokenSwapTransaction`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenSwapTransaction.md))\[]>

Fetches transactions for a given wallet, and classifies them based by their type. When applicable, includes the equivalent value of a transaction in local currency at the time of transaction.

**Parameters**

| Name                      | Type                                                                                                | Description                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `walletAddress`           | `string`                                                                                            | Wallet to fetch transactions for                                               |
| `chain`                   | [`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md)                        | Chain Id to get transactions for                                               |
| `getToken`                | (`address`: `string`) => [`Token`](https://github.com/Node-Fi/Docs/blob/main/docs/classes/Token.md) | Helper to turn an address into a Token                                         |
| `opts?`                   | `Object`                                                                                            | Optional paramter to set page, number of txns per page, and the local currency |
| `opts.localCurrencyCode?` | `string`                                                                                            | -                                                                              |
| `opts.page?`              | `number`                                                                                            | -                                                                              |
| `opts.perPage?`           | `number`                                                                                            | -                                                                              |

**Returns**

`Promise`<([`TokenTransferTransaction`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransferTransaction.md) | [`TokenSwapTransaction`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenSwapTransaction.md))\[]>

A list of transactions parsed into a useable format, alongside the equivalent value in the given local currency

**Defined in**

[Transactions/fetchTransactions.ts:26](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/fetchTransactions.ts#L26)

***

#### formatAllPricesQuery

▸ **formatAllPricesQuery**(): `string`

**Returns**

`string`

**Defined in**

[constants/index.ts:82](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L82)

***

#### formatDepositRequest

▸ **formatDepositRequest**(`tokenIn`, `amountIn`, `tokenOut`): `string`

**Parameters**

| Name       | Type     |
| ---------- | -------- |
| `tokenIn`  | `string` |
| `amountIn` | `string` |
| `tokenOut` | `string` |

**Returns**

`string`

**Defined in**

[constants/index.ts:98](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L98)

***

#### formatHeader

▸ **formatHeader**(`apiKey`): `Object`

**Parameters**

| Name     | Type     |
| -------- | -------- |
| `apiKey` | `string` |

**Returns**

`Object`

| Name        | Type     |
| ----------- | -------- |
| `x-api-key` | `string` |

**Defined in**

[constants/index.ts:92](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L92)

***

#### formatHistoricalPricesQuery

▸ **formatHistoricalPricesQuery**(`address`, `interval`, `timeframe`, `currency`): `string`

**Parameters**

| Name        | Type     |
| ----------- | -------- |
| `address`   | `string` |
| `interval`  | `number` |
| `timeframe` | `string` |
| `currency`  | `string` |

**Returns**

`string`

**Defined in**

[constants/index.ts:84](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L84)

***

#### formatRouteRequest

▸ **formatRouteRequest**(): `string`

**Returns**

`string`

**Defined in**

[constants/index.ts:96](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L96)

***

#### formatWithdrawRequest

▸ **formatWithdrawRequest**(`tokenIn`, `amountIn`, `tokenOut?`): `string`

**Parameters**

| Name        | Type     |
| ----------- | -------- |
| `tokenIn`   | `string` |
| `amountIn`  | `string` |
| `tokenOut?` | `string` |

**Returns**

`string`

**Defined in**

[constants/index.ts:105](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/constants/index.ts#L105)

***

#### getBalances

▸ **getBalances**(`chainId`, `wallet`, `tokens`): `Promise`<{}>

Uses multicall to fetch token balances for a given wallet and list of token addresses.

**Parameters**

| Name      | Type                                                                         | Description                                    |
| --------- | ---------------------------------------------------------------------------- | ---------------------------------------------- |
| `chainId` | [`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md) | ChainId to fetch balances from                 |
| `wallet`  | `string`                                                                     | Address of wallet to find balances for         |
| `tokens`  | `string`\[]                                                                  | Array of token addresses to fetch balances for |

**Returns**

`Promise`<{}>

A map of token address to balance, in TokenAmount. If a wallet has 0 balance for a token, the entry will be undefined.

**Defined in**

[Tokens/fetchers.ts:70](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/fetchers.ts#L70)

***

#### isTokenReceive

▸ **isTokenReceive**(`txn`): txn is TokenReceiveTransaction

**Parameters**

| Name  | Type                                                                                                        |
| ----- | ----------------------------------------------------------------------------------------------------------- |
| `txn` | [`TokenTransactionBase`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransactionBase.md) |

**Returns**

txn is TokenReceiveTransaction

**Defined in**

[Transactions/types.ts:72](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L72)

***

#### isTokenSent

▸ **isTokenSent**(`txn`): txn is TokenSentTransaction

**Parameters**

| Name  | Type                                                                                                        |
| ----- | ----------------------------------------------------------------------------------------------------------- |
| `txn` | [`TokenTransactionBase`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransactionBase.md) |

**Returns**

txn is TokenSentTransaction

**Defined in**

[Transactions/types.ts:68](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L68)

***

#### isTokenSwap

▸ **isTokenSwap**(`txn`): txn is TokenSwapTransaction

**Parameters**

| Name  | Type                                                                                                        |
| ----- | ----------------------------------------------------------------------------------------------------------- |
| `txn` | [`TokenTransactionBase`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransactionBase.md) |

**Returns**

txn is TokenSwapTransaction

**Defined in**

[Transactions/types.ts:83](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L83)

***

#### isTokenTransfer

▸ **isTokenTransfer**(`txn`): txn is TokenTransferTransaction

**Parameters**

| Name  | Type                                                                                                        |
| ----- | ----------------------------------------------------------------------------------------------------------- |
| `txn` | [`TokenTransactionBase`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/TokenTransactionBase.md) |

**Returns**

txn is TokenTransferTransaction

**Defined in**

[Transactions/types.ts:77](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L77)

***

#### mergeArrays

▸ **mergeArrays**<`t`>(`arr1`, `arr2`, `comparator`): `t`\[]

Merges two sorted arrays.

**Type parameters**

| Name |
| ---- |
| `t`  |

**Parameters**

| Name         | Type                               | Description                          |
| ------------ | ---------------------------------- | ------------------------------------ |
| `arr1`       | `t`\[]                             | sorted array                         |
| `arr2`       | `t`\[]                             | sorted array                         |
| `comparator` | (`t1`: `t`, `t2`: `t`) => `number` | how to compare entries in the arrays |

**Returns**

`t`\[]

One array in sorted order

**Defined in**

[utils/index.ts:87](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L87)

***

#### multicallMultipleContractMultipleData

▸ **multicallMultipleContractMultipleData**(`web3`, `payload`): `Promise`<`any`\[]>

**Parameters**

| Name      | Type                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `web3`    | `default`                                                                                              |
| `payload` | [`MultiCallPayload`](https://github.com/Node-Fi/Docs/blob/main/docs/interfaces/MultiCallPayload.md)\[] |

**Returns**

`Promise`<`any`\[]>

**Defined in**

[utils/multicall.ts:58](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L58)

***

#### multicallMultipleContractSingleData

▸ **multicallMultipleContractSingleData**(`web3`, `targetInterface`, `targets`, `method`, `data?`, `block?`): `Promise`<`Result`\[]>

**Parameters**

| Name              | Type        |
| ----------------- | ----------- |
| `web3`            | `default`   |
| `targetInterface` | `Interface` |
| `targets`         | `string`\[] |
| `method`          | `string`    |
| `data?`           | `any`\[]    |
| `block?`          | `number`    |

**Returns**

`Promise`<`Result`\[]>

**Defined in**

[utils/multicall.ts:14](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L14)

***

#### multicallSingleContractMultipleData

▸ **multicallSingleContractMultipleData**(`web3`, `targetInterface`, `target`, `method`, `data`): `Promise`<`Result`\[]>

**Parameters**

| Name              | Type        |
| ----------------- | ----------- |
| `web3`            | `default`   |
| `targetInterface` | `Interface` |
| `target`          | `string`    |
| `method`          | `string`    |
| `data`            | `any`\[]\[] |

**Returns**

`Promise`<`Result`\[]>

**Defined in**

[utils/multicall.ts:38](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L38)

***

#### subscribeToTokenTransfers

▸ **subscribeToTokenTransfers**(`wallet`, `chain`, `tokens`, `callback`): () => `void`

Listen for an react to any transfer involving a given wallet. When no longer interested in listending, call the returned callback to terminate the listeners.

**`Exmample`**

```ts
 const wallet = getMyWallet()
 const tokens = getMyTokensToWatchOver

 const onTransfer = (token: Address, _, pureEvent) => console.log(`Transfer detected for token ${token} in transaction ${pureEvent.transactionHash}`)

 const terminate = subscribeToTokenTransfers(wallet, wallet.homeChain, tokens, onTransfer)

 \* // Do something

 terminate() \* // Close subscriptions
```

**`Exmample`**

```ts
 const MyComponent() {
   const wallet = useWallet;
   const tokens = useTokens();

   const onTransfer = useCallback((token) => console.log(token))

   useEffect(() => {
     const terminate = subscribeToTokenTransfers(wallet, wallet.homeChain, tokens, onTransfer)

     \* // Close event listeners on lifecycle end
     return terminate
   }, [])
}
```

**Parameters**

| Name       | Type                                                                                     | Description                                     |
| ---------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `wallet`   | `string` \| [`Wallet`](https://github.com/Node-Fi/Docs/blob/main/docs/classes/Wallet.md) | Wallet to watch transfers for                   |
| `chain`    | [`ChainId`](https://github.com/Node-Fi/Docs/blob/main/docs/enums/ChainId.md)             | Chain to watch transfers on                     |
| `tokens`   | `string`\[]                                                                              | Tokens to explicitly watch for transfers        |
| `callback` | (`token`: `string`, `newBalance`: `BigNumber`, `e?`: `Log`) => `void`                    | Callback to execute when a transfer is detected |

**Returns**

`fn`

A method to unsubcribe from all event listeners requried to watch transfers

▸ (): `void`

**Returns**

`void`

**Defined in**

[Tokens/fetchers.ts:162](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/fetchers.ts#L162)

***

#### tryParseTokenAmount

▸ **tryParseTokenAmount**(`value?`, `currency?`): [`TokenAmount`](https://github.com/Node-Fi/Docs/blob/main/docs/classes/TokenAmount.md) | `undefined`

**Parameters**

| Name        | Type                                                                       | Description                                                                                         |
| ----------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `value?`    | `string`                                                                   | string value to parse into a token value, this is the decimal adjusted value (i.e. in eth, not wei) |
| `currency?` | [`Token`](https://github.com/Node-Fi/Docs/blob/main/docs/classes/Token.md) | the corresponding token for the token amount                                                        |

**Returns**

[`TokenAmount`](https://github.com/Node-Fi/Docs/blob/main/docs/classes/TokenAmount.md) | `undefined`

TokenAmount object with the value parsed, or undefined if unable to parse

**Defined in**

[utils/index.ts:118](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L118)

***

#### validateAndParseAddress

▸ **validateAndParseAddress**(`address`): `string`

**Parameters**

| Name      | Type     | Description                                            |
| --------- | -------- | ------------------------------------------------------ |
| `address` | `string` | string to check if an address is valid and checksummed |

**Returns**

`string`

checksummed address, or undefined if address is invalid

**Defined in**

[utils/index.ts:17](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L17)

***

#### waitForMinedTransaction

▸ **waitForMinedTransaction**(`txnHash`, `web3`): `Promise`<`boolean`>

**Parameters**

| Name      | Type      | Description                             |
| --------- | --------- | --------------------------------------- |
| `txnHash` | `string`  | Hash of transaction waiting to be mined |
| `web3`    | `default` | web3 object                             |

**Returns**

`Promise`<`boolean`>

status of the transaction (true = success, false = revert)

**Defined in**

[utils/index.ts:69](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/index.ts#L69)
