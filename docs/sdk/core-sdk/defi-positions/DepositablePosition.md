[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / DepositablePosition

# Class: DepositablePosition

A class to represent a depositable position

## Hierarchy

- **`DepositablePosition`**

  ↳ [`LendingMarket`](LendingMarket.md)

  ↳ [`YieldFarm`](YieldFarm.md)

## Implements

- [`IDepositablePosition`](../interfaces/IDepositablePosition.md)

## Table of contents

### Constructors

- [constructor](DepositablePosition.md#constructor)

### Properties

- [\_receiptToken](DepositablePosition.md#_receipttoken)
- [\_signer](DepositablePosition.md#_signer)
- [\_walletAddress](DepositablePosition.md#_walletaddress)
- [formatDepositUrl](DepositablePosition.md#formatdepositurl)
- [formatWithdrawUrl](DepositablePosition.md#formatwithdrawurl)

### Accessors

- [receiptToken](DepositablePosition.md#receipttoken)
- [signer](DepositablePosition.md#signer)
- [walletAddress](DepositablePosition.md#walletaddress)

### Methods

- [balanceOfMulticall](DepositablePosition.md#balanceofmulticall)
- [canDirectlySwap](DepositablePosition.md#candirectlyswap)
- [connect](DepositablePosition.md#connect)
- [deposit](DepositablePosition.md#deposit)
- [formatExecuteDeposit](DepositablePosition.md#formatexecutedeposit)
- [formatExecuteWithdrawal](DepositablePosition.md#formatexecutewithdrawal)
- [getDepositAddress](DepositablePosition.md#getdepositaddress)
- [toJSON](DepositablePosition.md#tojson)
- [withdraw](DepositablePosition.md#withdraw)

## Constructors

### constructor

• **new DepositablePosition**(`_receiptToken`, `_signer?`, `_walletAddress?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_receiptToken` | `Token` |
| `_signer?` | `Signer` |
| `_walletAddress?` | `string` |

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:101](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L101)

## Properties

### \_receiptToken

• `Private` **\_receiptToken**: `Token`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:102](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L102)

___

### \_signer

• `Protected` `Optional` **\_signer**: `Signer`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:103](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L103)

___

### \_walletAddress

• `Protected` `Optional` **\_walletAddress**: `string`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:104](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L104)

___

### formatDepositUrl

• `Abstract` **formatDepositUrl**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:158](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L158)

___

### formatWithdrawUrl

• `Abstract` **formatWithdrawUrl**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:159](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L159)

## Accessors

### receiptToken

• `get` **receiptToken**(): `Token`

The token that is received when depositing into this position

#### Returns

`Token`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:110](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L110)

___

### signer

• `get` **signer**(): `undefined` \| `Signer`

The signer used to sign transactions

#### Returns

`undefined` \| `Signer`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:117](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L117)

___

### walletAddress

• `get` **walletAddress**(): `undefined` \| `string`

The address of the wallet that is connected to the signer

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:124](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L124)

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

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:154](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L154)

___

### canDirectlySwap

▸ `Abstract` **canDirectlySwap**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:310](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L310)

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

#### Implementation of

IDepositablePosition.deposit

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:190](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L190)

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

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:175](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L175)

___

### getDepositAddress

▸ `Protected` **getDepositAddress**(): `string`

#### Returns

`string`

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:161](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L161)

___

### toJSON

▸ **toJSON**(): `Omit`<[`SerializedDepositablePostion`](../interfaces/SerializedDepositablePostion.md), ``"_type"``\>

#### Returns

`Omit`<[`SerializedDepositablePostion`](../interfaces/SerializedDepositablePostion.md), ``"_type"``\>

A JSON representation of the depositable position

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:132](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L132)

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

#### Implementation of

IDepositablePosition.withdraw

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:237](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L237)
