[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / YieldFarm

# Class: YieldFarm

A class to represent a depositable position

## Hierarchy

- [`DepositablePosition`](DepositablePosition.md)

  ↳ **`YieldFarm`**

  ↳↳ [`YieldFarmSynthetix`](YieldFarmSynthetix.md)

## Table of contents

### Constructors

- [constructor](YieldFarm.md#constructor)

### Properties

- [\_apr](YieldFarm.md#_apr)
- [\_chainId](YieldFarm.md#_chainid)
- [\_farmType](YieldFarm.md#_farmtype)
- [\_id](YieldFarm.md#_id)
- [\_name](YieldFarm.md#_name)
- [\_protocol](YieldFarm.md#_protocol)
- [\_signer](YieldFarm.md#_signer)
- [\_totalDeposited](YieldFarm.md#_totaldeposited)
- [\_tvl](YieldFarm.md#_tvl)
- [\_underlying](YieldFarm.md#_underlying)
- [\_valueOfDeposit](YieldFarm.md#_valueofdeposit)
- [\_walletAddress](YieldFarm.md#_walletaddress)
- [\_walletDeposited](YieldFarm.md#_walletdeposited)

### Accessors

- [apr](YieldFarm.md#apr)
- [chainId](YieldFarm.md#chainid)
- [depositToken](YieldFarm.md#deposittoken)
- [depositValueInLocalCurrency](YieldFarm.md#depositvalueinlocalcurrency)
- [id](YieldFarm.md#id)
- [name](YieldFarm.md#name)
- [protocol](YieldFarm.md#protocol)
- [receiptToken](YieldFarm.md#receipttoken)
- [signer](YieldFarm.md#signer)
- [totalDeposited](YieldFarm.md#totaldeposited)
- [tvl](YieldFarm.md#tvl)
- [type](YieldFarm.md#type)
- [underlyingTokens](YieldFarm.md#underlyingtokens)
- [walletAddress](YieldFarm.md#walletaddress)
- [walletDeposited](YieldFarm.md#walletdeposited)

### Methods

- [additionalTransactionsForDeposit](YieldFarm.md#additionaltransactionsfordeposit)
- [balanceOfMulticall](YieldFarm.md#balanceofmulticall)
- [canDirectlySwap](YieldFarm.md#candirectlyswap)
- [connect](YieldFarm.md#connect)
- [deposit](YieldFarm.md#deposit)
- [fetchClaimableTokens](YieldFarm.md#fetchclaimabletokens)
- [formatDepositUrl](YieldFarm.md#formatdepositurl)
- [formatExecuteDeposit](YieldFarm.md#formatexecutedeposit)
- [formatExecuteWithdrawal](YieldFarm.md#formatexecutewithdrawal)
- [formatWithdrawUrl](YieldFarm.md#formatwithdrawurl)
- [getDepositAddress](YieldFarm.md#getdepositaddress)
- [toJSON](YieldFarm.md#tojson)
- [withdraw](YieldFarm.md#withdraw)
- [parseJson](YieldFarm.md#parsejson)

## Constructors

### constructor

• **new YieldFarm**(`__namedParameters`, `signer?`, `walletAddress?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`YieldFarmInstantionInfo`](../interfaces/YieldFarmInstantionInfo.md) |
| `signer?` | `Signer` |
| `walletAddress?` | `string` |

#### Overrides

[DepositablePosition](DepositablePosition.md).[constructor](DepositablePosition.md#constructor)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:69](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L69)

## Properties

### \_apr

• `Private` `Optional` **\_apr**: `number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:62](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L62)

___

### \_chainId

• `Private` **\_chainId**: `ChainId`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:59](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L59)

___

### \_farmType

• `Private` **\_farmType**: `YieldFarmType`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:57](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L57)

___

### \_id

• `Private` **\_id**: `number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:58](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L58)

___

### \_name

• `Private` `Optional` **\_name**: `string`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:67](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L67)

___

### \_protocol

• `Private` **\_protocol**: `string`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:60](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L60)

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

[packages/sdk-core/src/Earn/YieldFarm.ts:65](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L65)

___

### \_tvl

• `Private` `Optional` **\_tvl**: `number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:63](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L63)

___

### \_underlying

• `Private` `Optional` **\_underlying**: `string`[] \| `Token`[]

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:61](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L61)

___

### \_valueOfDeposit

• `Private` `Optional` **\_valueOfDeposit**: `number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:64](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L64)

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

[packages/sdk-core/src/Earn/YieldFarm.ts:66](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L66)

## Accessors

### apr

• `get` **apr**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:104](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L104)

___

### chainId

• `get` **chainId**(): `ChainId`

#### Returns

`ChainId`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:116](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L116)

___

### depositToken

• `get` **depositToken**(): `Token`

#### Returns

`Token`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:120](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L120)

___

### depositValueInLocalCurrency

• `get` **depositValueInLocalCurrency**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:136](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L136)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:112](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L112)

___

### name

• `get` **name**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:100](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L100)

___

### protocol

• `get` **protocol**(): `string`

#### Returns

`string`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:140](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L140)

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

[packages/sdk-core/src/Earn/YieldFarm.ts:132](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L132)

___

### tvl

• `get` **tvl**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:124](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L124)

___

### type

• `get` **type**(): `YieldFarmType`

#### Returns

`YieldFarmType`

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:108](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L108)

___

### underlyingTokens

• `get` **underlyingTokens**(): `undefined` \| `string`[] \| `Token`[]

#### Returns

`undefined` \| `string`[] \| `Token`[]

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:144](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L144)

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

[packages/sdk-core/src/Earn/YieldFarm.ts:128](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L128)

## Methods

### additionalTransactionsForDeposit

▸ **additionalTransactionsForDeposit**(`_`): { `data`: `string` ; `gas`: `string` ; `to`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | [`DepositTransactionDetails`](../interfaces/DepositTransactionDetails.md) |

#### Returns

{ `data`: `string` ; `gas`: `string` ; `to`: `string`  }[]

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:196](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L196)

___

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

[packages/sdk-core/src/Earn/YieldFarm.ts:192](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L192)

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

### fetchClaimableTokens

▸ **fetchClaimableTokens**(`includeTransaction?`, `addressOverride?`): `Promise`<{ `amount`: `number`[] ; `token`: `string`[] ; `transaction?`: { `data`: `string` ; `to`: `string`  } ; `valueInLocalCurrency`: `number`  } \| { `amount`: `number`[] ; `execute`: [`TransactionStep`](../modules.md#transactionstep) ; `token`: `string`[] ; `transaction?`: { `data`: `string` ; `to`: `string`  } ; `valueInLocalCurrency`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `includeTransaction?` | `boolean` |
| `addressOverride?` | `string` |

#### Returns

`Promise`<{ `amount`: `number`[] ; `token`: `string`[] ; `transaction?`: { `data`: `string` ; `to`: `string`  } ; `valueInLocalCurrency`: `number`  } \| { `amount`: `number`[] ; `execute`: [`TransactionStep`](../modules.md#transactionstep) ; `token`: `string`[] ; `transaction?`: { `data`: `string` ; `to`: `string`  } ; `valueInLocalCurrency`: `number`  }\>

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:148](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L148)

___

### formatDepositUrl

▸ **formatDepositUrl**(): `string`

#### Returns

`string`

#### Overrides

DepositablePosition.formatDepositUrl

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:189](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L189)

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

[packages/sdk-core/src/Earn/YieldFarm.ts:190](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L190)

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

▸ **toJSON**(): [`YieldFarmApiFullResponse`](../interfaces/YieldFarmApiFullResponse.md)

#### Returns

[`YieldFarmApiFullResponse`](../interfaces/YieldFarmApiFullResponse.md)

A JSON representation of the depositable position

#### Overrides

[DepositablePosition](DepositablePosition.md).[toJSON](DepositablePosition.md#tojson)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:204](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L204)

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

▸ `Static` **parseJson**(`__namedParameters`, `signer?`, `walletAddress?`): [`YieldFarm`](YieldFarm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`YieldFarmApiFullResponse`](../interfaces/YieldFarmApiFullResponse.md) |
| `signer?` | `Signer` |
| `walletAddress?` | `string` |

#### Returns

[`YieldFarm`](YieldFarm.md)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:225](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L225)
