# Wallet

[@node-fi/sdk-core](../) / [Exports](../modules.md) / Wallet

## Class: Wallet

Representation of a wallet

Can sign and send transactions.

### Hierarchy

*   **`Wallet`**

    ↳ [`SmartWallet`](smartwallet.md)

    ↳ [`EOA`](eoa.md)

### Table of contents

#### Constructors

* [constructor](wallet.md#constructor)

#### Properties

* [address](wallet.md#address)
* [apiKey](wallet.md#apikey)
* [connection](wallet.md#connection)
* [feeCurrency](wallet.md#feecurrency)
* [getMnemonic](wallet.md#getmnemonic)
* [homeChain](wallet.md#homechain)
* [rpc](wallet.md#rpc)
* [web3](wallet.md#web3)
* [wid](wallet.md#wid)

#### Methods

* [\_loadWallet](wallet.md#\_loadwallet)
* [fetchBackendPortfolioValue](wallet.md#fetchbackendportfoliovalue)
* [fetchFromWalletService](wallet.md#fetchfromwalletservice)
* [fetchPaymentRequests](wallet.md#fetchpaymentrequests)
* [fetchPortfolioRaw](wallet.md#fetchportfolioraw)
* [fulfillPaymentRequest](wallet.md#fulfillpaymentrequest)
* [getHistoricalTransactions](wallet.md#gethistoricaltransactions)
* [register](wallet.md#register)
* [requestPayment](wallet.md#requestpayment)
* [setFeeCurrency](wallet.md#setfeecurrency)
* [signAndSendContractTransactions](wallet.md#signandsendcontracttransactions)
* [signAndSendNodeTransactions](wallet.md#signandsendnodetransactions)
* [signAndSendTransaction](wallet.md#signandsendtransaction)
* [signMessage](wallet.md#signmessage)
* [signTypedData](wallet.md#signtypeddata)
* [syncBackendPortfolioValue](wallet.md#syncbackendportfoliovalue)
* [transferToken](wallet.md#transfertoken)

### Constructors

#### constructor

• **new Wallet**(`apiKey?`, `homeChain?`, `address?`, `options?`)

**Parameters**

| Name        | Type                             | Default value  | Description                                       |
| ----------- | -------------------------------- | -------------- | ------------------------------------------------- |
| `apiKey?`   | `string`                         | `undefined`    | string, API key required to authenticate payloads |
| `homeChain` | [`ChainId`](../enums/chainid.md) | `ChainId.Celo` | homechain for the wallet. Default is Celo for now |
| `address?`  | `string`                         | `undefined`    | address of the wallet. EOA or smart wallet        |
| `options?`  | `WalletOptions`                  | `undefined`    | -                                                 |

**Defined in**

[wallet/Wallet.ts:88](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L88)

### Properties

#### address

• **address**: `undefined` | `string`

**Defined in**

[wallet/Wallet.ts:72](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L72)

***

#### apiKey

• `Private` **apiKey**: `undefined` | `string`

**Defined in**

[wallet/Wallet.ts:77](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L77)

***

#### connection

• `Protected` `Optional` **connection**: `Connection`

**Defined in**

[wallet/Wallet.ts:79](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L79)

***

#### feeCurrency

• `Optional` **feeCurrency**: `string`

**Defined in**

[wallet/Wallet.ts:78](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L78)

***

#### getMnemonic

• **getMnemonic**: `undefined` | () => `Promise`<`string`>

**Defined in**

[wallet/Wallet.ts:76](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L76)

***

#### homeChain

• **homeChain**: [`ChainId`](../enums/chainid.md)

**Defined in**

[wallet/Wallet.ts:73](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L73)

***

#### rpc

• `Optional` **rpc**: [`CustomRPC`](../interfaces/customrpc.md)

**Defined in**

[wallet/Wallet.ts:74](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L74)

***

#### web3

• **web3**: `default`

**Defined in**

[wallet/Wallet.ts:75](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L75)

***

#### wid

• `Optional` **wid**: `number`

**Defined in**

[wallet/Wallet.ts:80](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L80)

### Methods

#### \_loadWallet

▸ `Abstract` **\_loadWallet**(`config`): `Promise`<[`Wallet`](wallet.md)>

**Parameters**

| Name     | Type           | Description                                              |
| -------- | -------------- | -------------------------------------------------------- |
| `config` | `WalletConfig` | Configuration object specifying details about the wallet |

**Returns**

`Promise`<[`Wallet`](wallet.md)>

Boolean flag indicating successful wallet load

**Defined in**

[wallet/Wallet.ts:465](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L465)

***

#### fetchBackendPortfolioValue

▸ **fetchBackendPortfolioValue**(`interval`, `timeframe`, `currency?`): `Promise`<`undefined` | { `time`: `number` ; `total`: `number` }\[]>

Fetches the wallet's historical portfolio for a given time period of resolution. Portfolio value is given in the declared currency code.

**Parameters**

| Name        | Type                                   | Default value | Description                                           |
| ----------- | -------------------------------------- | ------------- | ----------------------------------------------------- |
| `interval`  | [`Interval`](../enums/interval.md)     | `undefined`   | time interval between ticks                           |
| `timeframe` | [`TimeFrame`](../modules.md#timeframe) | `undefined`   | timeframe on which to view historical portfolio value |
| `currency`  | `string`                               | `"usd"`       | base currency code for the query                      |

**Returns**

`Promise`<`undefined` | { `time`: `number` ; `total`: `number` }\[]>

an array of portfolio values at specific times, where the time in between ticks corresponds to interval

**Defined in**

[wallet/Wallet.ts:378](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L378)

***

#### fetchFromWalletService

▸ **fetchFromWalletService**(): `Promise`<[`Wallet`](wallet.md)>

Fetches details on the wallet from the Node Finace wallet service. Includes metadata set by developer.

**Returns**

`Promise`<[`Wallet`](wallet.md)>

Wallet object

**Defined in**

[wallet/Wallet.ts:170](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L170)

***

#### fetchPaymentRequests

▸ **fetchPaymentRequests**<`MetaDataShape`>(`getToken`, `opts?`): `Promise`<{ `pageInfo`: [`PageInfo`](../interfaces/pageinfo.md) ; `requests`: `PaymentRequest`<`MetaDataShape`>\[] }>

Fetches payment requests for a wallet. Can fetch pending, completed, or all. Default pagination is page 0, with 10 per page.

**Type parameters**

| Name            | Type                              |
| --------------- | --------------------------------- |
| `MetaDataShape` | extends `Record`<`string`, `any`> |

**Parameters**

| Name          | Type                                         | Description                                                             |
| ------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| `getToken`    | (`address`: `string`) => [`Token`](token.md) | Callback to fetch a token given its address                             |
| `opts?`       | `Object`                                     | Options for the query, including request type, page, and count per page |
| `opts.count?` | `number`                                     | -                                                                       |
| `opts.page?`  | `number`                                     | -                                                                       |
| `opts.type?`  | `"pending"` \| `"completed"` \| `"all"`      | -                                                                       |

**Returns**

`Promise`<{ `pageInfo`: [`PageInfo`](../interfaces/pageinfo.md) ; `requests`: `PaymentRequest`<`MetaDataShape`>\[] }>

List of payment requests for the wallet

**Defined in**

[wallet/Wallet.ts:318](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L318)

***

#### fetchPortfolioRaw

▸ **fetchPortfolioRaw**(`opts`): `Promise`<{ `time`: `number` ; `total`: `number` }\[]>

**Parameters**

| Name               | Type                               |
| ------------------ | ---------------------------------- |
| `opts`             | `Object`                           |
| `opts.chain?`      | `number`                           |
| `opts.currency?`   | `string`                           |
| `opts.endTime?`    | `number`                           |
| `opts.resolution?` | [`Interval`](../enums/interval.md) |
| `opts.startTime?`  | `number`                           |

**Returns**

`Promise`<{ `time`: `number` ; `total`: `number` }\[]>

**Defined in**

[wallet/Wallet.ts:393](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L393)

***

#### fulfillPaymentRequest

▸ **fulfillPaymentRequest**<`T`>(`request`, `amount`): `default`<{ `receipt`: { `amountCredited`: [`TokenAmount`](tokenamount.md) ; `hash`: `string` ; `isFullyRepaid`: `boolean` ; `rid`: `number` ; `time`: `number` } ; `request`: `PaymentRequest`<`T`> }>

Handles repaying a portion, or all of, a payment request.

**Type parameters**

| Name | Type                                                              |
| ---- | ----------------------------------------------------------------- |
| `T`  | extends `Record`<`string`, `unknown`> = `Record`<`string`, `any`> |

**Parameters**

| Name      | Type                            | Description                                                                                              |
| --------- | ------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request` | `PaymentRequest`<`T`>           | PaymentRequest object to fulfill                                                                         |
| `amount`  | [`TokenAmount`](tokenamount.md) | The total token amount to pay towards this payment request. Does not have to equal the remaining amount. |

**Returns**

`default`<{ `receipt`: { `amountCredited`: [`TokenAmount`](tokenamount.md) ; `hash`: `string` ; `isFullyRepaid`: `boolean` ; `rid`: `number` ; `time`: `number` } ; `request`: `PaymentRequest`<`T`> }>

Request after crediting payment, and receipt of payment

**Defined in**

[wallet/Wallet.ts:245](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L245)

***

#### getHistoricalTransactions

▸ **getHistoricalTransactions**(`getTokens`, `opts?`): `Promise`<[`TokenTransactionBase`](../interfaces/tokentransactionbase.md)\[]>

**Parameters**

| Name                      | Type                                         | Description                                 |
| ------------------------- | -------------------------------------------- | ------------------------------------------- |
| `getTokens`               | (`address`: `string`) => [`Token`](token.md) | Callback to fetch a token given its address |
| `opts?`                   | `Object`                                     | Page options and currency code options      |
| `opts.localCurrencyCode?` | `string`                                     | -                                           |
| `opts.page?`              | `number`                                     | -                                           |
| `opts.perPage?`           | `number`                                     | -                                           |

**Returns**

`Promise`<[`TokenTransactionBase`](../interfaces/tokentransactionbase.md)\[]>

List of transactions for the wallet, additionally with local value transacted

**Defined in**

[wallet/Wallet.ts:122](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L122)

***

#### register

▸ **register**(): `Promise`<`undefined` | [`Wallet`](wallet.md)>

Registers the wallet with the Node Finance Wallet Service.

Will return error if wallet is already registered

**Returns**

`Promise`<`undefined` | [`Wallet`](wallet.md)>

**Defined in**

[wallet/Wallet.ts:141](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L141)

***

#### requestPayment

▸ **requestPayment**<`T`>(`from`, `amount`, `deadline?`, `metadata?`): `Promise`<`PaymentRequest`<`T`>>

Authenticates and creates a new payment request

**Type parameters**

| Name | Type                              |
| ---- | --------------------------------- |
| `T`  | extends `Record`<`string`, `any`> |

**Parameters**

| Name        | Type                            | Description                                        |
| ----------- | ------------------------------- | -------------------------------------------------- |
| `from`      | `string`                        | Address to request payment from                    |
| `amount`    | [`TokenAmount`](tokenamount.md) | Token and amount to request                        |
| `deadline?` | `Date`                          | Optional date that payment must be fulfilled       |
| `metadata?` | `T`                             | Additional metadata to store regarding the request |

**Returns**

`Promise`<`PaymentRequest`<`T`>>

PaymentRequest object corresponding to the newly-created request

**Defined in**

[wallet/Wallet.ts:297](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L297)

***

#### setFeeCurrency

▸ **setFeeCurrency**(`tokenAddress`): `void`

Set the default gas currency. Only applicable on Celo and Alfajores, otherwise will fail

**Parameters**

| Name           | Type     | Description                           |
| -------------- | -------- | ------------------------------------- |
| `tokenAddress` | `string` | Token address to use to pay gas fees. |

**Returns**

`void`

**Defined in**

[wallet/Wallet.ts:216](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L216)

***

#### signAndSendContractTransactions

▸ **signAndSendContractTransactions**(`descriptions`, `opts?`): `Promise`<`TransactionReceipt`>

**Parameters**

| Name           | Type                                                        | Description                                      |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| `descriptions` | `ContractTransaction`\[]                                    | descriptions of transactions to sign and process |
| `opts?`        | [`TransactionOptions`](../interfaces/transactionoptions.md) | -                                                |

**Returns**

`Promise`<`TransactionReceipt`>

transaction receipt from executed txn

**Defined in**

[wallet/Wallet.ts:421](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L421)

***

#### signAndSendNodeTransactions

▸ **signAndSendNodeTransactions**(`transactions`, `opts?`): `Promise`<`TransactionReceipt`>

**Parameters**

| Name           | Type                                                        | Description                                        |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| `transactions` | `NodeWalletTransaction`\[]                                  | transaction descriptions in a more readable format |
| `opts?`        | [`TransactionOptions`](../interfaces/transactionoptions.md) | -                                                  |

**Returns**

`Promise`<`TransactionReceipt`>

transaction receipt

**Defined in**

[wallet/Wallet.ts:446](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L446)

***

#### signAndSendTransaction

▸ `Abstract` **signAndSendTransaction**(`transaction`, `opts?`): `Promise`<`TransactionReceipt`>

**Parameters**

| Name          | Type                                                        | Description                                    |
| ------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| `transaction` | `TransactionConfig`\[]                                      | web3js transaction objects to sign and process |
| `opts?`       | [`TransactionOptions`](../interfaces/transactionoptions.md) | -                                              |

**Returns**

`Promise`<`TransactionReceipt`>

transaction receipt

**Defined in**

[wallet/Wallet.ts:472](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L472)

***

#### signMessage

▸ `Abstract` **signMessage**(`data`): `Sign`

**Parameters**

| Name   | Type     | Description     |
| ------ | -------- | --------------- |
| `data` | `string` | Message to sign |

**Returns**

`Sign`

A Sign object, which contains all fields needed to recompute original signer, as well as the signed message

**Defined in**

[wallet/Wallet.ts:356](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L356)

***

#### signTypedData

▸ **signTypedData**(`data`): `Sign`

**Parameters**

| Name   | Type       | Description                       |
| ------ | ---------- | --------------------------------- |
| `data` | `Mixed`\[] | Data and type definitions to sign |

**Returns**

`Sign`

Signature payload

**Defined in**

[wallet/Wallet.ts:229](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L229)

***

#### syncBackendPortfolioValue

▸ **syncBackendPortfolioValue**(): `Promise`<`boolean`>

**Returns**

`Promise`<`boolean`>

true if success, false if unsuccessful

**Defined in**

[wallet/Wallet.ts:363](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L363)

***

#### transferToken

▸ **transferToken**(`token`, `amount`, `recipient`): `Promise`<`TransactionReceipt`>

Sends a token from this wallet to any other address.

**Parameters**

| Name        | Type                            | Description           |
| ----------- | ------------------------------- | --------------------- |
| `token`     | `string` \| [`Token`](token.md) | Token to send         |
| `amount`    | `BigNumber`                     | Amount to send        |
| `recipient` | `string`                        | Recipient of transfer |

**Returns**

`Promise`<`TransactionReceipt`>

Receipt of transaction of sending the token

**Defined in**

[wallet/Wallet.ts:191](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L191)
