[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / Wallet

# Class: Wallet<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Signer` = `Signer` |

## Hierarchy

- **`Wallet`**

  ↳ [`EOA`](EOA.md)

## Table of contents

### Constructors

- [constructor](Wallet.md#constructor)

### Properties

- [\_address](Wallet.md#_address)
- [\_apiKey](Wallet.md#_apikey)
- [\_chain](Wallet.md#_chain)
- [\_isNodeWallet](Wallet.md#_isnodewallet)
- [\_provider](Wallet.md#_provider)
- [\_signer](Wallet.md#_signer)
- [\_wid](Wallet.md#_wid)
- [network](Wallet.md#network)

### Accessors

- [address](Wallet.md#address)
- [apiKey](Wallet.md#apikey)
- [chain](Wallet.md#chain)
- [feeCurrency](Wallet.md#feecurrency)
- [provider](Wallet.md#provider)
- [signer](Wallet.md#signer)
- [wid](Wallet.md#wid)

### Methods

- [connect](Wallet.md#connect)
- [fetchBackendPortfolioValue](Wallet.md#fetchbackendportfoliovalue)
- [fetchFromWalletService](Wallet.md#fetchfromwalletservice)
- [fetchPaymentRequests](Wallet.md#fetchpaymentrequests)
- [fetchPortfolioRaw](Wallet.md#fetchportfolioraw)
- [fulfillPaymentRequest](Wallet.md#fulfillpaymentrequest)
- [getHistoricalTransactions](Wallet.md#gethistoricaltransactions)
- [register](Wallet.md#register)
- [requestPayment](Wallet.md#requestpayment)
- [setFeeCurrency](Wallet.md#setfeecurrency)
- [signAndSendContractTransactions](Wallet.md#signandsendcontracttransactions)
- [signAndSendNodeTransactions](Wallet.md#signandsendnodetransactions)
- [signAndSendTransaction](Wallet.md#signandsendtransaction)
- [signAndSendTransactions](Wallet.md#signandsendtransactions)
- [signMessage](Wallet.md#signmessage)
- [signMessageRaw](Wallet.md#signmessageraw)
- [transferToken](Wallet.md#transfertoken)
- [isWallet](Wallet.md#iswallet)
- [loadAsync](Wallet.md#loadasync)
- [loadFromConfig](Wallet.md#loadfromconfig)

## Constructors

### constructor

• **new Wallet**<`T`\>(`_signer`, `apiKey`, `homeChain?`, `address?`, `wid?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Signer`<`T`\> = `Signer` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_signer` | `undefined` \| `T` | `undefined` | Signer to use for signing transactions |
| `apiKey` | `string` | `undefined` | string, API key required to authenticate payloads |
| `homeChain` | `ChainId` | `ChainId.Celo` | homechain for the wallet. Default is Celo for now |
| `address?` | `string` | `undefined` | address of the wallet.  EOA or smart wallet |
| `wid?` | `number` | `undefined` | wid of the wallet.  Used for node wallet backend |

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:157](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L157)

## Properties

### \_address

• `Private` **\_address**: `undefined` \| `string`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:142](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L142)

___

### \_apiKey

• `Private` **\_apiKey**: `string`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:145](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L145)

___

### \_chain

• `Private` **\_chain**: `ChainId`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:143](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L143)

___

### \_isNodeWallet

• `Private` **\_isNodeWallet**: `boolean` = `true`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:141](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L141)

___

### \_provider

• `Private` **\_provider**: `Provider`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:147](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L147)

___

### \_signer

• `Private` **\_signer**: `undefined` \| `T`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:158](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L158)

___

### \_wid

• `Private` `Optional` **\_wid**: `number`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:146](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L146)

___

### network

• `Optional` **network**: `Network`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:144](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L144)

## Accessors

### address

• `get` **address**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

Address of the wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:192](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L192)

___

### apiKey

• `get` **apiKey**(): `string`

#### Returns

`string`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:227](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L227)

___

### chain

• `get` **chain**(): `ChainId`

#### Returns

`ChainId`

Home chain for the wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:209](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L209)

___

### feeCurrency

• `get` **feeCurrency**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

Fee currency for the wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:199](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L199)

___

### provider

• `get` **provider**(): `Provider`

#### Returns

`Provider`

Provider for the wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:223](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L223)

___

### signer

• `get` **signer**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

Signer for the wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:185](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L185)

___

### wid

• `get` **wid**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

Wid of the wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:216](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L216)

## Methods

### connect

▸ **connect**(`signerOrProviderOrAddress`): `Promise`<[`Wallet`](Wallet.md)<`T`\>\>

Connect a signer to the wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signerOrProviderOrAddress` | `T` | Signer, provider or address to connect |

#### Returns

`Promise`<[`Wallet`](Wallet.md)<`T`\>\>

Wallet instance

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:282](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L282)

▸ **connect**(`signerOrProviderOrAddress`): `Promise`<[`Wallet`](Wallet.md)<`JsonRpcSigner`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProviderOrAddress` | `JsonRpcProvider` |

#### Returns

`Promise`<[`Wallet`](Wallet.md)<`JsonRpcSigner`\>\>

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:283](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L283)

___

### fetchBackendPortfolioValue

▸ **fetchBackendPortfolioValue**(`interval`, `timeframe`, `currency?`): `Promise`<`undefined` \| { `time`: `number` ; `total`: `number`  }[]\>

Fetches the wallet's historical portfolio for a given time period of resolution.  Portfolio value is given in the declared
currency code.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `interval` | [`Interval`](../enums/Interval.md) | `undefined` | time interval between ticks |
| `timeframe` | [`TimeFrame`](../modules.md#timeframe) | `undefined` | timeframe on which to view historical portfolio value |
| `currency` | `string` | `"usd"` | base currency code for the query |

#### Returns

`Promise`<`undefined` \| { `time`: `number` ; `total`: `number`  }[]\>

an array of portfolio values at specific times, where the time in between ticks corresponds to interval

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:554](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L554)

___

### fetchFromWalletService

▸ **fetchFromWalletService**(): `Promise`<`boolean`\>

Fetches details on the wallet from the Node Finace wallet service.  Includes metadata set by developer.

#### Returns

`Promise`<`boolean`\>

Wallet object

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:368](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L368)

___

### fetchPaymentRequests

▸ **fetchPaymentRequests**<`MetaDataShape`\>(`getToken`, `opts?`): `Promise`<{ `pageInfo`: [`PageInfo`](../interfaces/PageInfo.md) ; `requests`: [`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>[]  }\>

Fetches payment requests for a wallet.  Can fetch pending, completed, or all.  Default pagination is page 0,
with 10 per page.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MetaDataShape` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getToken` | (`address`: `string`) => `Token` | Callback to fetch a token given its address |
| `opts?` | `Object` | Options for the query, including request type, page, and count per page |
| `opts.count?` | `number` | - |
| `opts.page?` | `number` | - |
| `opts.type?` | ``"all"`` \| ``"pending"`` \| ``"completed"`` | - |

#### Returns

`Promise`<{ `pageInfo`: [`PageInfo`](../interfaces/PageInfo.md) ; `requests`: [`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>[]  }\>

List of payment requests for the wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:485](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L485)

___

### fetchPortfolioRaw

▸ **fetchPortfolioRaw**(`opts`): `Promise`<{ `time`: `number` ; `total`: `number`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.chain?` | `number` |
| `opts.currency?` | `string` |
| `opts.endTime?` | `number` |
| `opts.resolution?` | [`Interval`](../enums/Interval.md) |
| `opts.startTime?` | `number` |

#### Returns

`Promise`<{ `time`: `number` ; `total`: `number`  }[]\>

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:569](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L569)

___

### fulfillPaymentRequest

▸ **fulfillPaymentRequest**<`T`\>(`request`, `amount`): `Promise`<{ `receipt`: `TransactionResponse`  }\>

Handles repaying a portion, or all of, a payment request.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`PaymentRequest`](PaymentRequest.md)<`T`\> | PaymentRequest object to fulfill |
| `amount` | `TokenAmount` | The total token amount to pay towards this payment request.  Does not have to equal the remaining amount. |

#### Returns

`Promise`<{ `receipt`: `TransactionResponse`  }\>

Request after crediting payment, and receipt of payment

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:437](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L437)

___

### getHistoricalTransactions

▸ **getHistoricalTransactions**(`getTokens`, `opts?`): `Promise`<[`TokenTransactionBase`](../interfaces/TokenTransactionBase.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getTokens` | (`address`: `string`) => `Token` | Callback to fetch a token given its address |
| `opts?` | `Object` | Page options and currency code options |
| `opts.localCurrencyCode?` | `string` | - |
| `opts.page?` | `number` | - |
| `opts.perPage?` | `number` | - |

#### Returns

`Promise`<[`TokenTransactionBase`](../interfaces/TokenTransactionBase.md)[]\>

List of transactions for the wallet, additionally with local value transacted

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:308](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L308)

___

### register

▸ **register**(`metadata?`, `optInTracking?`): `Promise`<[`Wallet`](Wallet.md)<`T`\>\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `metadata` | `Object` | `{}` | additional metadata to be stored with the wallet |
| `optInTracking` | `boolean` | `false` | opt in to tracking |

#### Returns

`Promise`<[`Wallet`](Wallet.md)<`T`\>\>

Wallet object

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:333](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L333)

___

### requestPayment

▸ **requestPayment**<`T`\>(`from`, `amount`, `deadline?`, `metadata?`): `Promise`<[`PaymentRequest`](PaymentRequest.md)<`T`\>\>

Authenticates and creates a new payment request

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | Address to request payment from |
| `amount` | `TokenAmount` | Token and amount to request |
| `deadline?` | `Date` | Optional date that payment must be fulfilled |
| `metadata?` | `T` | Additional metadata to store regarding the request |

#### Returns

`Promise`<[`PaymentRequest`](PaymentRequest.md)<`T`\>\>

PaymentRequest object corresponding to the newly-created request

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:464](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L464)

___

### setFeeCurrency

▸ **setFeeCurrency**(`tokenAddress`): `string`

Set the default gas currency.  Only applicable on Celo and Alfajores, otherwise will fail

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | Token address to use to pay gas fees. |

#### Returns

`string`

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:420](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L420)

___

### signAndSendContractTransactions

▸ **signAndSendContractTransactions**(`descriptions`, `opts?`): `Promise`<`TransactionReceipt`\>

**`Deprecated`**

use wallet.signer to sign transactions instead

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `descriptions` | [`ContractTransaction`](../interfaces/ContractTransaction.md)[] | descriptions of transactions to sign and process |
| `opts?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | - |

#### Returns

`Promise`<`TransactionReceipt`\>

transaction receipt from executed txn

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:599](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L599)

___

### signAndSendNodeTransactions

▸ **signAndSendNodeTransactions**(`transactions`, `opts?`): `Promise`<`TransactionReceipt`\>

**`Deprecated`**

use wallet.signer to sign transactions instead

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactions` | [`NodeWalletTransaction`](../interfaces/NodeWalletTransaction.md)[] | transaction descriptions in a more readable format |
| `opts?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | - |

#### Returns

`Promise`<`TransactionReceipt`\>

transaction receipt

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:625](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L625)

___

### signAndSendTransaction

▸ **signAndSendTransaction**(`transaction`, `opts?`): `Promise`<`TransactionReceipt`\>

**`Deprecated`**

use wallet.signer to sign transactions instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `TransactionRequest` \| `TransactionRequest`[] |
| `opts?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:642](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L642)

___

### signAndSendTransactions

▸ **signAndSendTransactions**(`transactions`, `opts?`): `Promise`<`TransactionReceipt`[]\>

**`Deprecated`**

use wallet.signer to sign transactions instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | `TransactionRequest`[] |
| `opts?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) |

#### Returns

`Promise`<`TransactionReceipt`[]\>

transaction receipt

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:674](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L674)

___

### signMessage

▸ **signMessage**(`data`): `Promise`<`Signature`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Message to sign |

#### Returns

`Promise`<`Signature`\>

A Sign object, which contains all fields needed to recompute original signer, as well as the signed message

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:539](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L539)

___

### signMessageRaw

▸ **signMessageRaw**(`data`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Message to sign |

#### Returns

`Promise`<`string`\>

A Sign object, which contains all fields needed to recompute original signer, as well as the signed message

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:529](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L529)

___

### transferToken

▸ **transferToken**(`token`, `amount`, `recipient`, `overrides?`): `Promise`<`TransactionResponse`\>

Sends a token from this wallet to any other address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` \| `Token` | Token to send |
| `amount` | `BigintIsh` | Amount to send |
| `recipient` | `string` | Recipient of transfer |
| `overrides` | `Omit`<`TransactionRequest`, ``"data"`` \| ``"to"`` \| ``"value"``\> | - |

#### Returns

`Promise`<`TransactionResponse`\>

Receipt of transaction of sending the token

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:396](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L396)

___

### isWallet

▸ `Static` **isWallet**(`o`): o is Wallet<Signer\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `unknown` | unknown object |

#### Returns

o is Wallet<Signer\>

true if the wallet is a node wallet

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:236](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L236)

___

### loadAsync

▸ `Static` **loadAsync**<`T`\>(`getSigner`, `apiKey`): `Promise`<`undefined` \| [`Wallet`](Wallet.md)<`Signer`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Signer`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getSigner` | () => `T` \| `Promise`<`T`\> | Callback to fetch the signer |
| `apiKey` | `string` | API key required to authenticate payloads |

#### Returns

`Promise`<`undefined` \| [`Wallet`](Wallet.md)<`Signer`\>\>

Wallet instance

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:245](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L245)

___

### loadFromConfig

▸ `Static` **loadFromConfig**(`config`, `chain`, `apiKey`): `Promise`<`undefined` \| [`Wallet`](Wallet.md)<`Signer`\>\>

Load a wallet from a config object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`WalletConfig`](../interfaces/WalletConfig.md) | WalletConfig object |
| `chain` | `ChainId` | ChainId of the wallet |
| `apiKey` | `string` | API key required to authenticate payloads |

#### Returns

`Promise`<`undefined` \| [`Wallet`](Wallet.md)<`Signer`\>\>

Wallet instance

#### Defined in

[packages/sdk-core/src/wallet/NodeWallet.ts:264](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/NodeWallet.ts#L264)
