[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / YieldFarmSynthetix

# Class: YieldFarmSynthetix

A class to represent a depositable position

## Hierarchy

- [`YieldFarm`](YieldFarm.md)

  ↳ **`YieldFarmSynthetix`**

## Table of contents

### Constructors

- [constructor](YieldFarmSynthetix.md#constructor)

### Properties

- [\_signer](YieldFarmSynthetix.md#_signer)
- [\_walletAddress](YieldFarmSynthetix.md#_walletaddress)
- [getDepositAddress](YieldFarmSynthetix.md#getdepositaddress)

### Accessors

- [apr](YieldFarmSynthetix.md#apr)
- [chainId](YieldFarmSynthetix.md#chainid)
- [depositToken](YieldFarmSynthetix.md#deposittoken)
- [depositValueInLocalCurrency](YieldFarmSynthetix.md#depositvalueinlocalcurrency)
- [id](YieldFarmSynthetix.md#id)
- [name](YieldFarmSynthetix.md#name)
- [protocol](YieldFarmSynthetix.md#protocol)
- [receiptToken](YieldFarmSynthetix.md#receipttoken)
- [signer](YieldFarmSynthetix.md#signer)
- [totalDeposited](YieldFarmSynthetix.md#totaldeposited)
- [tvl](YieldFarmSynthetix.md#tvl)
- [type](YieldFarmSynthetix.md#type)
- [underlyingTokens](YieldFarmSynthetix.md#underlyingtokens)
- [walletAddress](YieldFarmSynthetix.md#walletaddress)
- [walletDeposited](YieldFarmSynthetix.md#walletdeposited)

### Methods

- [additionalTransactionsForDeposit](YieldFarmSynthetix.md#additionaltransactionsfordeposit)
- [balanceOfMulticall](YieldFarmSynthetix.md#balanceofmulticall)
- [canDirectlySwap](YieldFarmSynthetix.md#candirectlyswap)
- [connect](YieldFarmSynthetix.md#connect)
- [deposit](YieldFarmSynthetix.md#deposit)
- [fetchClaimableTokens](YieldFarmSynthetix.md#fetchclaimabletokens)
- [formatDepositUrl](YieldFarmSynthetix.md#formatdepositurl)
- [formatExecuteDeposit](YieldFarmSynthetix.md#formatexecutedeposit)
- [formatExecuteWithdrawal](YieldFarmSynthetix.md#formatexecutewithdrawal)
- [formatWithdrawUrl](YieldFarmSynthetix.md#formatwithdrawurl)
- [toJSON](YieldFarmSynthetix.md#tojson)
- [withdraw](YieldFarmSynthetix.md#withdraw)
- [parseJson](YieldFarmSynthetix.md#parsejson)

## Constructors

### constructor

• **new YieldFarmSynthetix**(`__namedParameters`, `signer?`, `walletAddress?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`YieldFarmInstantionInfo`](../interfaces/YieldFarmInstantionInfo.md) |
| `signer?` | `Signer` |
| `walletAddress?` | `string` |

#### Inherited from

[YieldFarm](YieldFarm.md).[constructor](YieldFarm.md#constructor)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:69](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L69)

## Properties

### \_signer

• `Protected` `Optional` **\_signer**: `Signer`

#### Inherited from

[YieldFarm](YieldFarm.md).[_signer](YieldFarm.md#_signer)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:103](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L103)

___

### \_walletAddress

• `Protected` `Optional` **\_walletAddress**: `string`

#### Inherited from

[YieldFarm](YieldFarm.md).[_walletAddress](YieldFarm.md#_walletaddress)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:104](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L104)

___

### getDepositAddress

• `Protected` **getDepositAddress**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Overrides

[YieldFarm](YieldFarm.md).[getDepositAddress](YieldFarm.md#getdepositaddress)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarmSynthetix.ts:10](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarmSynthetix.ts#L10)

## Accessors

### apr

• `get` **apr**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

YieldFarm.apr

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:104](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L104)

___

### chainId

• `get` **chainId**(): `ChainId`

#### Returns

`ChainId`

#### Inherited from

YieldFarm.chainId

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:116](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L116)

___

### depositToken

• `get` **depositToken**(): `Token`

#### Returns

`Token`

#### Inherited from

YieldFarm.depositToken

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:120](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L120)

___

### depositValueInLocalCurrency

• `get` **depositValueInLocalCurrency**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

YieldFarm.depositValueInLocalCurrency

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:136](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L136)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Inherited from

YieldFarm.id

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:112](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L112)

___

### name

• `get` **name**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

YieldFarm.name

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:100](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L100)

___

### protocol

• `get` **protocol**(): `string`

#### Returns

`string`

#### Inherited from

YieldFarm.protocol

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:140](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L140)

___

### receiptToken

• `get` **receiptToken**(): `Token`

The token that is received when depositing into this position

#### Returns

`Token`

#### Inherited from

YieldFarm.receiptToken

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:110](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L110)

___

### signer

• `get` **signer**(): `undefined` \| `Signer`

The signer used to sign transactions

#### Returns

`undefined` \| `Signer`

#### Inherited from

YieldFarm.signer

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:117](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L117)

___

### totalDeposited

• `get` **totalDeposited**(): `TokenAmount`

#### Returns

`TokenAmount`

#### Inherited from

YieldFarm.totalDeposited

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:132](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L132)

___

### tvl

• `get` **tvl**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

YieldFarm.tvl

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:124](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L124)

___

### type

• `get` **type**(): `YieldFarmType`

#### Returns

`YieldFarmType`

#### Inherited from

YieldFarm.type

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:108](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L108)

___

### underlyingTokens

• `get` **underlyingTokens**(): `undefined` \| `string`[] \| `Token`[]

#### Returns

`undefined` \| `string`[] \| `Token`[]

#### Inherited from

YieldFarm.underlyingTokens

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:144](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L144)

___

### walletAddress

• `get` **walletAddress**(): `undefined` \| `string`

The address of the wallet that is connected to the signer

#### Returns

`undefined` \| `string`

#### Inherited from

YieldFarm.walletAddress

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:124](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L124)

___

### walletDeposited

• `get` **walletDeposited**(): `undefined` \| `TokenAmount`

#### Returns

`undefined` \| `TokenAmount`

#### Inherited from

YieldFarm.walletDeposited

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

#### Inherited from

[YieldFarm](YieldFarm.md).[additionalTransactionsForDeposit](YieldFarm.md#additionaltransactionsfordeposit)

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

[YieldFarm](YieldFarm.md).[balanceOfMulticall](YieldFarm.md#balanceofmulticall)

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:154](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L154)

___

### canDirectlySwap

▸ **canDirectlySwap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[YieldFarm](YieldFarm.md).[canDirectlySwap](YieldFarm.md#candirectlyswap)

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

[YieldFarm](YieldFarm.md).[connect](YieldFarm.md#connect)

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

[YieldFarm](YieldFarm.md).[deposit](YieldFarm.md#deposit)

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

#### Inherited from

[YieldFarm](YieldFarm.md).[fetchClaimableTokens](YieldFarm.md#fetchclaimabletokens)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:148](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L148)

___

### formatDepositUrl

▸ **formatDepositUrl**(): `string`

#### Returns

`string`

#### Inherited from

[YieldFarm](YieldFarm.md).[formatDepositUrl](YieldFarm.md#formatdepositurl)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:189](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L189)

___

### formatExecuteDeposit

▸ **formatExecuteDeposit**(`txn`): [`TransactionStep`](../modules.md#transactionstep)

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `TransactionRequest` |

#### Returns

[`TransactionStep`](../modules.md#transactionstep)

#### Overrides

[YieldFarm](YieldFarm.md).[formatExecuteDeposit](YieldFarm.md#formatexecutedeposit)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarmSynthetix.ts:13](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarmSynthetix.ts#L13)

___

### formatExecuteWithdrawal

▸ **formatExecuteWithdrawal**(`txn`, `inputAmount`): [`TransactionStep`](../modules.md#transactionstep)

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `TransactionRequest` |
| `inputAmount` | `JSBI` |

#### Returns

[`TransactionStep`](../modules.md#transactionstep)

#### Overrides

[YieldFarm](YieldFarm.md).[formatExecuteWithdrawal](YieldFarm.md#formatexecutewithdrawal)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarmSynthetix.ts:54](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarmSynthetix.ts#L54)

___

### formatWithdrawUrl

▸ **formatWithdrawUrl**(): `string`

#### Returns

`string`

#### Inherited from

[YieldFarm](YieldFarm.md).[formatWithdrawUrl](YieldFarm.md#formatwithdrawurl)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:190](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L190)

___

### toJSON

▸ **toJSON**(): [`YieldFarmApiFullResponse`](../interfaces/YieldFarmApiFullResponse.md)

#### Returns

[`YieldFarmApiFullResponse`](../interfaces/YieldFarmApiFullResponse.md)

A JSON representation of the depositable position

#### Inherited from

[YieldFarm](YieldFarm.md).[toJSON](YieldFarm.md#tojson)

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

[YieldFarm](YieldFarm.md).[withdraw](YieldFarm.md#withdraw)

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

#### Inherited from

[YieldFarm](YieldFarm.md).[parseJson](YieldFarm.md#parsejson)

#### Defined in

[packages/sdk-core/src/Earn/YieldFarm.ts:225](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/YieldFarm.ts#L225)
