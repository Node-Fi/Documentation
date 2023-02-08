[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / WalletFactory

# Interface: WalletFactory

## Hierarchy

- `BaseContract`

  ↳ **`WalletFactory`**

## Table of contents

### Properties

- [\_deployedPromise](WalletFactory.md#_deployedpromise)
- [\_runningEvents](WalletFactory.md#_runningevents)
- [\_wrappedEmits](WalletFactory.md#_wrappedemits)
- [address](WalletFactory.md#address)
- [callStatic](WalletFactory.md#callstatic)
- [deployTransaction](WalletFactory.md#deploytransaction)
- [estimateGas](WalletFactory.md#estimategas)
- [filters](WalletFactory.md#filters)
- [functions](WalletFactory.md#functions)
- [interface](WalletFactory.md#interface)
- [off](WalletFactory.md#off)
- [on](WalletFactory.md#on)
- [once](WalletFactory.md#once)
- [populateTransaction](WalletFactory.md#populatetransaction)
- [provider](WalletFactory.md#provider)
- [removeListener](WalletFactory.md#removelistener)
- [resolvedAddress](WalletFactory.md#resolvedaddress)
- [signer](WalletFactory.md#signer)

### Methods

- [\_checkRunningEvents](WalletFactory.md#_checkrunningevents)
- [\_deployed](WalletFactory.md#_deployed)
- [\_wrapEvent](WalletFactory.md#_wrapevent)
- [attach](WalletFactory.md#attach)
- [connect](WalletFactory.md#connect)
- [createWallet](WalletFactory.md#createwallet)
- [deployed](WalletFactory.md#deployed)
- [emit](WalletFactory.md#emit)
- [fallback](WalletFactory.md#fallback)
- [getWallets](WalletFactory.md#getwallets)
- [isNodeWallet](WalletFactory.md#isnodewallet)
- [listenerCount](WalletFactory.md#listenercount)
- [listeners](WalletFactory.md#listeners)
- [owner](WalletFactory.md#owner)
- [queryFilter](WalletFactory.md#queryfilter)
- [removeAllListeners](WalletFactory.md#removealllisteners)
- [renounceOwnership](WalletFactory.md#renounceownership)
- [transferOwnership](WalletFactory.md#transferownership)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createWallet` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getWallets` | (`eoa`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `isNodeWallet` | (`addr`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:187](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L187)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createWallet` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getWallets` | (`eoa`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isNodeWallet` | (`addr`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:221](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L221)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `PromiseOrValue`<`string`\>, `newOwner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `OwnershipTransferredEventFilter` |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `PromiseOrValue`<`string`\>, `newOwner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `OwnershipTransferredEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:210](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L210)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createWallet` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getWallets` | (`eoa`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `isNodeWallet` | (`addr`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:135](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L135)

___

### interface

• **interface**: `WalletFactoryInterface`

#### Overrides

BaseContract.interface

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:114](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L114)

___

### off

• **off**: `OnEvent`<[`WalletFactory`](WalletFactory.md)\>

#### Overrides

BaseContract.off

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:130](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L130)

___

### on

• **on**: `OnEvent`<[`WalletFactory`](WalletFactory.md)\>

#### Overrides

BaseContract.on

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:131](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L131)

___

### once

• **once**: `OnEvent`<[`WalletFactory`](WalletFactory.md)\>

#### Overrides

BaseContract.once

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:132](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L132)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createWallet` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getWallets` | (`eoa`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isNodeWallet` | (`addr`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:248](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L248)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`WalletFactory`](WalletFactory.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:133](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L133)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### attach

▸ **attach**(`addressOrName`): [`WalletFactory`](WalletFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`WalletFactory`](WalletFactory.md)

#### Overrides

BaseContract.attach

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:111](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L111)

___

### connect

▸ **connect**(`signerOrProvider`): [`WalletFactory`](WalletFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`WalletFactory`](WalletFactory.md)

#### Overrides

BaseContract.connect

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:110](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L110)

___

### createWallet

▸ **createWallet**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:162](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L162)

___

### deployed

▸ **deployed**(): `Promise`<[`WalletFactory`](WalletFactory.md)\>

#### Returns

`Promise`<[`WalletFactory`](WalletFactory.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:112](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L112)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

___

### getWallets

▸ **getWallets**(`eoa`, `overrides?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eoa` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:166](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L166)

___

### isNodeWallet

▸ **isNodeWallet**(`addr`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:171](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L171)

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:122](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L122)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:125](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L125)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:176](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L176)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:116](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L116)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`WalletFactory`](WalletFactory.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`WalletFactory`](WalletFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:126](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L126)

▸ **removeAllListeners**(`eventName?`): [`WalletFactory`](WalletFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`WalletFactory`](WalletFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:129](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L129)

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:178](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L178)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/WalletFactory.ts:182](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/WalletFactory.ts#L182)
