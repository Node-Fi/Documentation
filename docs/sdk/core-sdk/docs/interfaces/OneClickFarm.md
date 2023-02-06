[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / OneClickFarm

# Interface: OneClickFarm

## Hierarchy

- `BaseContract`

  ↳ **`OneClickFarm`**

## Table of contents

### Properties

- [\_deployedPromise](OneClickFarm.md#_deployedpromise)
- [\_runningEvents](OneClickFarm.md#_runningevents)
- [\_wrappedEmits](OneClickFarm.md#_wrappedemits)
- [address](OneClickFarm.md#address)
- [callStatic](OneClickFarm.md#callstatic)
- [deployTransaction](OneClickFarm.md#deploytransaction)
- [estimateGas](OneClickFarm.md#estimategas)
- [filters](OneClickFarm.md#filters)
- [functions](OneClickFarm.md#functions)
- [interface](OneClickFarm.md#interface)
- [off](OneClickFarm.md#off)
- [on](OneClickFarm.md#on)
- [once](OneClickFarm.md#once)
- [populateTransaction](OneClickFarm.md#populatetransaction)
- [provider](OneClickFarm.md#provider)
- [removeListener](OneClickFarm.md#removelistener)
- [resolvedAddress](OneClickFarm.md#resolvedaddress)
- [signer](OneClickFarm.md#signer)

### Methods

- [\_checkRunningEvents](OneClickFarm.md#_checkrunningevents)
- [\_deployed](OneClickFarm.md#_deployed)
- [\_wrapEvent](OneClickFarm.md#_wrapevent)
- [attach](OneClickFarm.md#attach)
- [connect](OneClickFarm.md#connect)
- [deployed](OneClickFarm.md#deployed)
- [emit](OneClickFarm.md#emit)
- [fallback](OneClickFarm.md#fallback)
- [listenerCount](OneClickFarm.md#listenercount)
- [listeners](OneClickFarm.md#listeners)
- [oneClickDeposit](OneClickFarm.md#oneclickdeposit)
- [queryFilter](OneClickFarm.md#queryfilter)
- [removeAllListeners](OneClickFarm.md#removealllisteners)

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
| `oneClickDeposit` | (`details`: `SwapPayloadStruct`[], `router`: `PromiseOrValue`<`string`\>, `depositPairAddr`: `PromiseOrValue`<`string`\>, `minExpected`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:140](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L140)

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
| `oneClickDeposit` | (`details`: `SwapPayloadStruct`[], `router`: `PromiseOrValue`<`string`\>, `depositPairAddr`: `PromiseOrValue`<`string`\>, `minExpected`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:154](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L154)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:152](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L152)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `oneClickDeposit` | (`details`: `SwapPayloadStruct`[], `router`: `PromiseOrValue`<`string`\>, `depositPairAddr`: `PromiseOrValue`<`string`\>, `minExpected`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:118](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L118)

___

### interface

• **interface**: `OneClickFarmInterface`

#### Overrides

BaseContract.interface

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:97](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L97)

___

### off

• **off**: `OnEvent`<[`OneClickFarm`](OneClickFarm.md)\>

#### Overrides

BaseContract.off

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:113](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L113)

___

### on

• **on**: `OnEvent`<[`OneClickFarm`](OneClickFarm.md)\>

#### Overrides

BaseContract.on

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:114](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L114)

___

### once

• **once**: `OnEvent`<[`OneClickFarm`](OneClickFarm.md)\>

#### Overrides

BaseContract.once

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:115](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L115)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `oneClickDeposit` | (`details`: `SwapPayloadStruct`[], `router`: `PromiseOrValue`<`string`\>, `depositPairAddr`: `PromiseOrValue`<`string`\>, `minExpected`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:166](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L166)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`OneClickFarm`](OneClickFarm.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:116](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L116)

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

▸ **attach**(`addressOrName`): [`OneClickFarm`](OneClickFarm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`OneClickFarm`](OneClickFarm.md)

#### Overrides

BaseContract.attach

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:94](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L94)

___

### connect

▸ **connect**(`signerOrProvider`): [`OneClickFarm`](OneClickFarm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`OneClickFarm`](OneClickFarm.md)

#### Overrides

BaseContract.connect

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:93](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L93)

___

### deployed

▸ **deployed**(): `Promise`<[`OneClickFarm`](OneClickFarm.md)\>

#### Returns

`Promise`<[`OneClickFarm`](OneClickFarm.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:95](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L95)

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

[packages/sdk-core/src/generated/OneClickFarm.ts:105](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L105)

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

[packages/sdk-core/src/generated/OneClickFarm.ts:108](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L108)

___

### oneClickDeposit

▸ **oneClickDeposit**(`details`, `router`, `depositPairAddr`, `minExpected`, `to`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `SwapPayloadStruct`[] |
| `router` | `PromiseOrValue`<`string`\> |
| `depositPairAddr` | `PromiseOrValue`<`string`\> |
| `minExpected` | `PromiseOrValue`<`BigNumberish`\> |
| `to` | `PromiseOrValue`<`string`\> |
| `data` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:130](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L130)

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

[packages/sdk-core/src/generated/OneClickFarm.ts:99](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L99)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`OneClickFarm`](OneClickFarm.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`OneClickFarm`](OneClickFarm.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:109](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L109)

▸ **removeAllListeners**(`eventName?`): [`OneClickFarm`](OneClickFarm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`OneClickFarm`](OneClickFarm.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/OneClickFarm.ts:112](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/OneClickFarm.ts#L112)
