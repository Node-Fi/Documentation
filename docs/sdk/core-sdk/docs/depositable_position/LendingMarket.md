[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / LendingMarket

# Class: LendingMarket

A class to represent a depositable position

## Hierarchy

- [`DepositablePosition`](DepositablePosition.md)

  ↳ **`LendingMarket`**

## Table of contents

### Constructors

- [constructor](LendingMarket.md#constructor)

### Properties

- [\_apy](LendingMarket.md#_apy)
- [\_chainId](LendingMarket.md#_chainid)
- [\_id](LendingMarket.md#_id)
- [\_lendingMarketType](LendingMarket.md#_lendingmarkettype)
- [\_protocol](LendingMarket.md#_protocol)
- [\_signer](LendingMarket.md#_signer)
- [\_totalDeposited](LendingMarket.md#_totaldeposited)
- [\_tvl](LendingMarket.md#_tvl)
- [\_valueOfDeposit](LendingMarket.md#_valueofdeposit)
- [\_walletAddress](LendingMarket.md#_walletaddress)
- [\_walletDeposited](LendingMarket.md#_walletdeposited)

### Accessors

- [apy](LendingMarket.md#apy)
- [chainId](LendingMarket.md#chainid)
- [depositToken](LendingMarket.md#deposittoken)
- [depositValueInLocalCurrency](LendingMarket.md#depositvalueinlocalcurrency)
- [id](LendingMarket.md#id)
- [protocol](LendingMarket.md#protocol)
- [receiptToken](LendingMarket.md#receipttoken)
- [signer](LendingMarket.md#signer)
- [totalDeposited](LendingMarket.md#totaldeposited)
- [tvl](LendingMarket.md#tvl)
- [type](LendingMarket.md#type)
- [walletAddress](LendingMarket.md#walletaddress)
- [walletDeposited](LendingMarket.md#walletdeposited)

### Methods

- [balanceOfMulticall](LendingMarket.md#balanceofmulticall)
- [canDirectlySwap](LendingMarket.md#candirectlyswap)
- [connect](LendingMarket.md#connect)
- [deposit](LendingMarket.md#deposit)
- [formatDepositUrl](LendingMarket.md#formatdepositurl)
- [formatExecuteDeposit](LendingMarket.md#formatexecutedeposit)
- [formatExecuteWithdrawal](LendingMarket.md#formatexecutewithdrawal)
- [formatWithdrawUrl](LendingMarket.md#formatwithdrawurl)
- [getDepositAddress](LendingMarket.md#getdepositaddress)
- [toJSON](LendingMarket.md#tojson)
- [withdraw](LendingMarket.md#withdraw)
- [parseJson](LendingMarket.md#parsejson)

## Constructors

### constructor

• **new LendingMarket**(`__namedParameters`, `signer?`, `walletAddress?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LendingMarketInstantionInfo`](../interfaces/LendingMarketInstantionInfo.md) |
| `signer?` | `Signer` |
| `walletAddress?` | `string` |

#### Overrides

[DepositablePosition](DepositablePosition.md).[constructor](DepositablePosition.md#constructor)

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:54](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L54)

## Properties

### \_apy

• `Private` `Optional` **\_apy**: `number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:48](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L48)

___

### \_chainId

• `Private` **\_chainId**: `ChainId`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:46](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L46)

___

### \_id

• `Private` **\_id**: `number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:45](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L45)

___

### \_lendingMarketType

• `Private` **\_lendingMarketType**: `LendingMarketType`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:44](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L44)

___

### \_protocol

• `Private` **\_protocol**: `string`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:47](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L47)

___

### \_signer

• `Protected` `Optional` **\_signer**: `Signer`

#### Inherited from

[DepositablePosition](DepositablePosition.md).[_signer](DepositablePosition.md#_signer)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:103](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L103)

___

### \_totalDeposited

• `Private` **\_totalDeposited**: `TokenAmount`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:51](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L51)

___

### \_tvl

• `Private` `Optional` **\_tvl**: `number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:49](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L49)

___

### \_valueOfDeposit

• `Private` `Optional` **\_valueOfDeposit**: `number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:50](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L50)

___

### \_walletAddress

• `Protected` `Optional` **\_walletAddress**: `string`

#### Inherited from

[DepositablePosition](DepositablePosition.md).[_walletAddress](DepositablePosition.md#_walletaddress)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:104](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L104)

___

### \_walletDeposited

• `Private` `Optional` **\_walletDeposited**: `TokenAmount`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:52](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L52)

## Accessors

### apy

• `get` **apy**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:82](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L82)

___

### chainId

• `get` **chainId**(): `ChainId`

#### Returns

`ChainId`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:94](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L94)

___

### depositToken

• `get` **depositToken**(): `Token`

#### Returns

`Token`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:98](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L98)

___

### depositValueInLocalCurrency

• `get` **depositValueInLocalCurrency**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:114](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L114)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:90](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L90)

___

### protocol

• `get` **protocol**(): `string`

#### Returns

`string`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:118](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L118)

___

### receiptToken

• `get` **receiptToken**(): `Token`

The token that is received when depositing into this position

#### Returns

`Token`

#### Inherited from

DepositablePosition.receiptToken

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:110](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L110)

___

### signer

• `get` **signer**(): `undefined` \| `Signer`

The signer used to sign transactions

#### Returns

`undefined` \| `Signer`

#### Inherited from

DepositablePosition.signer

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:117](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L117)

___

### totalDeposited

• `get` **totalDeposited**(): `TokenAmount`

#### Returns

`TokenAmount`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:110](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L110)

___

### tvl

• `get` **tvl**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:102](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L102)

___

### type

• `get` **type**(): `LendingMarketType`

#### Returns

`LendingMarketType`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:86](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L86)

___

### walletAddress

• `get` **walletAddress**(): `undefined` \| `string`

The address of the wallet that is connected to the signer

#### Returns

`undefined` \| `string`

#### Inherited from

DepositablePosition.walletAddress

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:124](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L124)

___

### walletDeposited

• `get` **walletDeposited**(): `undefined` \| `TokenAmount`

#### Returns

`undefined` \| `TokenAmount`

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:106](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L106)

## Methods

### balanceOfMulticall

▸ **balanceOfMulticall**(`owner`): `Readonly`<{ `call`: `Readonly`<`CallStruct`\> ; `parseReturn`: (`returnData`: `string`) => `JSBI`  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | The wallet address to check the balance of |

#### Returns

`Readonly`<{ `call`: `Readonly`<`CallStruct`\> ; `parseReturn`: (`returnData`: `string`) => `JSBI`  }\>

Multicall payload that can be executed to get the balance of the owner

#### Inherited from

[DepositablePosition](DepositablePosition.md).[balanceOfMulticall](DepositablePosition.md#balanceofmulticall)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:154](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L154)

___

### canDirectlySwap

▸ **canDirectlySwap**(): `boolean`

#### Returns

`boolean`

#### Overrides

[DepositablePosition](DepositablePosition.md).[canDirectlySwap](DepositablePosition.md#candirectlyswap)

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:187](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L187)

___

### connect

▸ **connect**(`signer?`, `walletAddress?`): `void`

**`Description`**

Connects the depositable position to a signer and wallet address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer?` | `Signer` | Ethersjs signer |
| `walletAddress?` | `string` | Wallet address |

#### Returns

`void`

#### Inherited from

[DepositablePosition](DepositablePosition.md).[connect](DepositablePosition.md#connect)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:144](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L144)

___

### deposit

▸ **deposit**(`inputToken`, `inputAmount`, `opts?`): `Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `TokenAmount` ; `minimumOutput`: `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputToken` | `string` | Token to trade to the depositable position |
| `inputAmount` | `BigintIsh` | Amount of input token to trade |
| `opts?` | `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\> | Optional parameters for minima |

#### Returns

`Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `TokenAmount` ; `minimumOutput`: `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

The expected output amount, minimum output amount, transaction to execute, approval target, and execute function

#### Inherited from

[DepositablePosition](DepositablePosition.md).[deposit](DepositablePosition.md#deposit)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:190](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L190)

___

### formatDepositUrl

▸ **formatDepositUrl**(): `string`

#### Returns

`string`

#### Overrides

DepositablePosition.formatDepositUrl

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:184](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L184)

___

### formatExecuteDeposit

▸ **formatExecuteDeposit**(`txn`, `_inputToken`, `_inputAmount`): [`TransactionStep`](../modules.md#transactionstep)

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `TransactionRequest` |
| `_inputToken` | `string` |
| `_inputAmount` | `JSBI` |

#### Returns

[`TransactionStep`](../modules.md#transactionstep)

#### Inherited from

[DepositablePosition](DepositablePosition.md).[formatExecuteDeposit](DepositablePosition.md#formatexecutedeposit)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:163](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L163)

___

### formatExecuteWithdrawal

▸ **formatExecuteWithdrawal**(`txn`, `_inputAmount`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `TransactionRequest` |
| `_inputAmount` | `JSBI` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `execute` | (`signer`: `undefined` \| `Signer`) => `Promise`<`TransactionResponse`\> |
| `transaction` | `TransactionRequest` |

#### Inherited from

[DepositablePosition](DepositablePosition.md).[formatExecuteWithdrawal](DepositablePosition.md#formatexecutewithdrawal)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:175](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L175)

___

### formatWithdrawUrl

▸ **formatWithdrawUrl**(): `string`

#### Returns

`string`

#### Overrides

DepositablePosition.formatWithdrawUrl

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:185](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L185)

___

### getDepositAddress

▸ `Protected` **getDepositAddress**(): `string`

#### Returns

`string`

#### Inherited from

[DepositablePosition](DepositablePosition.md).[getDepositAddress](DepositablePosition.md#getdepositaddress)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:161](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L161)

___

### toJSON

▸ **toJSON**(): [`LendingMarketApiFullResponse`](../interfaces/LendingMarketApiFullResponse.md)

#### Returns

[`LendingMarketApiFullResponse`](../interfaces/LendingMarketApiFullResponse.md)

A JSON representation of the depositable position

#### Overrides

[DepositablePosition](DepositablePosition.md).[toJSON](DepositablePosition.md#tojson)

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:164](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L164)

___

### withdraw

▸ **withdraw**(`amount`, `destinationToken`, `opts?`): `Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `JSBI` \| `TokenAmount` ; `minimumOutput`: `JSBI` \| `TokenAmount` ; `paths`: `string`[] ; `transaction?`: `TransactionRequest`  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` \| `TokenAmount` | Amount of depositable position to withdraw |
| `destinationToken` | `string` \| `Token` | Token to trade to |
| `opts?` | `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\> | Optional parameters for minima |

#### Returns

`Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `JSBI` \| `TokenAmount` ; `minimumOutput`: `JSBI` \| `TokenAmount` ; `paths`: `string`[] ; `transaction?`: `TransactionRequest`  }\>

The expected output amount, minimum output amount, transaction to execute, approval target, and execute function

#### Inherited from

[DepositablePosition](DepositablePosition.md).[withdraw](DepositablePosition.md#withdraw)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:237](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L237)

___

### parseJson

▸ `Static` **parseJson**(`__namedParameters`, `signer?`, `walletAddress?`): [`LendingMarket`](LendingMarket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LendingMarketApiFullResponse`](../interfaces/LendingMarketApiFullResponse.md) |
| `signer?` | `Signer` |
| `walletAddress?` | `string` |

#### Returns

[`LendingMarket`](LendingMarket.md)

#### Defined in

[packages/sdk-core/src/Earn/LendingMarket.ts:122](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/LendingMarket.ts#L122)
