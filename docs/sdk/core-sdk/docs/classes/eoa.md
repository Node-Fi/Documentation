# EOA

[@node-fi/sdk-core](../) / [Exports](../modules.md) / EOA

## Class: EOA

Representation of an EOA (Externally Owned Account) as a wallet

### Hierarchy

*   [`Wallet`](wallet.md)

    ↳ **`EOA`**

### Table of contents

#### Constructors

* [constructor](eoa.md#constructor)

#### Properties

* [address](eoa.md#address)
* [connection](eoa.md#connection)
* [encrypt](eoa.md#encrypt)
* [feeCurrency](eoa.md#feecurrency)
* [getMnemonic](eoa.md#getmnemonic)
* [homeChain](eoa.md#homechain)
* [rpc](eoa.md#rpc)
* [sign](eoa.md#sign)
* [signTransaction](eoa.md#signtransaction)
* [web3](eoa.md#web3)
* [wid](eoa.md#wid)

#### Methods

* [\_loadMnemonic](eoa.md#\_loadmnemonic)
* [\_loadPK](eoa.md#\_loadpk)
* [\_loadWallet](eoa.md#\_loadwallet)
* [fetchBackendPortfolioValue](eoa.md#fetchbackendportfoliovalue)
* [fetchFromWalletService](eoa.md#fetchfromwalletservice)
* [fetchPaymentRequests](eoa.md#fetchpaymentrequests)
* [fetchPortfolioRaw](eoa.md#fetchportfolioraw)
* [fulfillPaymentRequest](eoa.md#fulfillpaymentrequest)
* [getHistoricalTransactions](eoa.md#gethistoricaltransactions)
* [register](eoa.md#register)
* [requestPayment](eoa.md#requestpayment)
* [setFeeCurrency](eoa.md#setfeecurrency)
* [signAndSendContractTransactions](eoa.md#signandsendcontracttransactions)
* [signAndSendNodeTransactions](eoa.md#signandsendnodetransactions)
* [signAndSendSingle](eoa.md#signandsendsingle)
* [signAndSendTransaction](eoa.md#signandsendtransaction)
* [signMessage](eoa.md#signmessage)
* [signTypedData](eoa.md#signtypeddata)
* [syncBackendPortfolioValue](eoa.md#syncbackendportfoliovalue)
* [transferToken](eoa.md#transfertoken)

### Constructors

#### constructor

• **new EOA**(`apiKey?`, `homeChain?`, `address?`, `options?`)

**Parameters**

| Name        | Type                             | Default value  | Description                                       |
| ----------- | -------------------------------- | -------------- | ------------------------------------------------- |
| `apiKey?`   | `string`                         | `undefined`    | string, API key required to authenticate payloads |
| `homeChain` | [`ChainId`](../enums/chainid.md) | `ChainId.Celo` | homechain for the wallet. Default is Celo for now |
| `address?`  | `string`                         | `undefined`    | address of the wallet. EOA or smart wallet        |
| `options?`  | `WalletOptions`                  | `undefined`    | -                                                 |

**Inherited from**

[Wallet](wallet.md).[constructor](wallet.md#constructor)

**Defined in**

[wallet/Wallet.ts:88](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L88)

### Properties

#### address

• **address**: `undefined` | `string`

**Inherited from**

[Wallet](wallet.md).[address](wallet.md#address)

**Defined in**

[wallet/Wallet.ts:72](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L72)

***

#### connection

• `Protected` `Optional` **connection**: `Connection`

**Inherited from**

[Wallet](wallet.md).[connection](wallet.md#connection)

**Defined in**

[wallet/Wallet.ts:79](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L79)

***

#### encrypt

• `Optional` **encrypt**: (`password`: `string`) => `EncryptedKeystoreV3Json`

**Type declaration**

▸ (`password`): `EncryptedKeystoreV3Json`

**Parameters**

| Name       | Type     |
| ---------- | -------- |
| `password` | `string` |

**Returns**

`EncryptedKeystoreV3Json`

**Defined in**

[wallet/EOA.ts:53](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L53)

***

#### feeCurrency

• `Optional` **feeCurrency**: `string`

**Inherited from**

[Wallet](wallet.md).[feeCurrency](wallet.md#feecurrency)

**Defined in**

[wallet/Wallet.ts:78](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L78)

***

#### getMnemonic

• **getMnemonic**: `undefined` | () => `Promise`<`string`>

**Inherited from**

[Wallet](wallet.md).[getMnemonic](wallet.md#getmnemonic)

**Defined in**

[wallet/Wallet.ts:76](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L76)

***

#### homeChain

• **homeChain**: [`ChainId`](../enums/chainid.md)

**Inherited from**

[Wallet](wallet.md).[homeChain](wallet.md#homechain)

**Defined in**

[wallet/Wallet.ts:73](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L73)

***

#### rpc

• `Optional` **rpc**: [`CustomRPC`](../interfaces/customrpc.md)

**Inherited from**

[Wallet](wallet.md).[rpc](wallet.md#rpc)

**Defined in**

[wallet/Wallet.ts:74](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L74)

***

#### sign

• `Private` `Optional` **sign**: (`data`: `string`) => `Sign`

**Type declaration**

▸ (`data`): `Sign`

**Parameters**

| Name   | Type     |
| ------ | -------- |
| `data` | `string` |

**Returns**

`Sign`

**Defined in**

[wallet/EOA.ts:54](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L54)

***

#### signTransaction

• **signTransaction**: `undefined` | `SignTransactionFunctionType`

**Defined in**

[wallet/EOA.ts:52](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L52)

***

#### web3

• **web3**: `default`

**Inherited from**

[Wallet](wallet.md).[web3](wallet.md#web3)

**Defined in**

[wallet/Wallet.ts:75](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L75)

***

#### wid

• `Optional` **wid**: `number`

**Inherited from**

[Wallet](wallet.md).[wid](wallet.md#wid)

**Defined in**

[wallet/Wallet.ts:80](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L80)

### Methods

#### \_loadMnemonic

▸ `Private` **\_loadMnemonic**(`__namedParameters`): `Promise`<`void`>

**Parameters**

| Name                             | Type                                     |
| -------------------------------- | ---------------------------------------- |
| `__namedParameters`              | `Object`                                 |
| `__namedParameters.getMnemonic?` | () => `Promise`<`undefined` \| `string`> |
| `__namedParameters.mnemonic?`    | `string`                                 |

**Returns**

`Promise`<`void`>

**Defined in**

[wallet/EOA.ts:66](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L66)

***

#### \_loadPK

▸ `Private` **\_loadPK**(`__namedParameters`): `Promise`<`void`>

**Parameters**

| Name                               | Type                                     |
| ---------------------------------- | ---------------------------------------- |
| `__namedParameters`                | `Object`                                 |
| `__namedParameters.getPrivateKey?` | () => `Promise`<`undefined` \| `string`> |
| `__namedParameters.privateKey?`    | `string`                                 |

**Returns**

`Promise`<`void`>

**Defined in**

[wallet/EOA.ts:91](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L91)

***

#### \_loadWallet

▸ **\_loadWallet**(`config`): `Promise`<[`EOA`](eoa.md)>

**Parameters**

| Name     | Type           | Description                                              |
| -------- | -------------- | -------------------------------------------------------- |
| `config` | `WalletConfig` | Configuration object specifying details about the wallet |

**Returns**

`Promise`<[`EOA`](eoa.md)>

Boolean flag indicating successful wallet load

**Overrides**

[Wallet](wallet.md).[\_loadWallet](wallet.md#\_loadwallet)

**Defined in**

[wallet/EOA.ts:56](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L56)

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

**Inherited from**

[Wallet](wallet.md).[fetchBackendPortfolioValue](wallet.md#fetchbackendportfoliovalue)

**Defined in**

[wallet/Wallet.ts:378](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L378)

***

#### fetchFromWalletService

▸ **fetchFromWalletService**(): `Promise`<[`EOA`](eoa.md)>

Fetches details on the wallet from the Node Finace wallet service. Includes metadata set by developer.

**Returns**

`Promise`<[`EOA`](eoa.md)>

Wallet object

**Inherited from**

[Wallet](wallet.md).[fetchFromWalletService](wallet.md#fetchfromwalletservice)

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

**Inherited from**

[Wallet](wallet.md).[fetchPaymentRequests](wallet.md#fetchpaymentrequests)

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

**Inherited from**

[Wallet](wallet.md).[fetchPortfolioRaw](wallet.md#fetchportfolioraw)

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

**Inherited from**

[Wallet](wallet.md).[fulfillPaymentRequest](wallet.md#fulfillpaymentrequest)

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

**Inherited from**

[Wallet](wallet.md).[getHistoricalTransactions](wallet.md#gethistoricaltransactions)

**Defined in**

[wallet/Wallet.ts:122](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L122)

***

#### register

▸ **register**(): `Promise`<`undefined` | [`EOA`](eoa.md)>

Registers the wallet with the Node Finance Wallet Service.

Will return error if wallet is already registered

**Returns**

`Promise`<`undefined` | [`EOA`](eoa.md)>

**Inherited from**

[Wallet](wallet.md).[register](wallet.md#register)

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

**Inherited from**

[Wallet](wallet.md).[requestPayment](wallet.md#requestpayment)

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

**Inherited from**

[Wallet](wallet.md).[setFeeCurrency](wallet.md#setfeecurrency)

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

**Inherited from**

[Wallet](wallet.md).[signAndSendContractTransactions](wallet.md#signandsendcontracttransactions)

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

**Inherited from**

[Wallet](wallet.md).[signAndSendNodeTransactions](wallet.md#signandsendnodetransactions)

**Defined in**

[wallet/Wallet.ts:446](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L446)

***

#### signAndSendSingle

▸ `Private` **signAndSendSingle**(`transaction`, `opts?`): `Promise`<`TransactionReceipt`>

**Parameters**

| Name          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| `transaction` | `TransactionConfig`                                         |
| `opts?`       | [`TransactionOptions`](../interfaces/transactionoptions.md) |

**Returns**

`Promise`<`TransactionReceipt`>

**Defined in**

[wallet/EOA.ts:125](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L125)

***

#### signAndSendTransaction

▸ **signAndSendTransaction**(`transactions`, `opts?`): `Promise`<`TransactionReceipt`>

**Parameters**

| Name           | Type                                                        | Description                                    |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| `transactions` | `TransactionConfig`\[]                                      | web3js transaction objects to sign and process |
| `opts?`        | [`TransactionOptions`](../interfaces/transactionoptions.md) | -                                              |

**Returns**

`Promise`<`TransactionReceipt`>

transaction receipt

**Overrides**

[Wallet](wallet.md).[signAndSendTransaction](wallet.md#signandsendtransaction)

**Defined in**

[wallet/EOA.ts:161](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L161)

***

#### signMessage

▸ **signMessage**(`data`): `Sign`

**Parameters**

| Name   | Type     | Description     |
| ------ | -------- | --------------- |
| `data` | `string` | Message to sign |

**Returns**

`Sign`

A Sign object, which contains all fields needed to recompute original signer, as well as the signed message

**Overrides**

[Wallet](wallet.md).[signMessage](wallet.md#signmessage)

**Defined in**

[wallet/EOA.ts:184](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/EOA.ts#L184)

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

**Inherited from**

[Wallet](wallet.md).[signTypedData](wallet.md#signtypeddata)

**Defined in**

[wallet/Wallet.ts:229](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L229)

***

#### syncBackendPortfolioValue

▸ **syncBackendPortfolioValue**(): `Promise`<`boolean`>

**Returns**

`Promise`<`boolean`>

true if success, false if unsuccessful

**Inherited from**

[Wallet](wallet.md).[syncBackendPortfolioValue](wallet.md#syncbackendportfoliovalue)

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

**Inherited from**

[Wallet](wallet.md).[transferToken](wallet.md#transfertoken)

**Defined in**

[wallet/Wallet.ts:191](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/wallet/Wallet.ts#L191)
