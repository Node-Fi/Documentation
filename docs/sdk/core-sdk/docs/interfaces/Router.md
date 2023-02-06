[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / Router

# Interface: Router

## Hierarchy

- `BaseContract`

  ↳ **`Router`**

## Table of contents

### Properties

- [\_deployedPromise](Router.md#_deployedpromise)
- [\_runningEvents](Router.md#_runningevents)
- [\_wrappedEmits](Router.md#_wrappedemits)
- [address](Router.md#address)
- [callStatic](Router.md#callstatic)
- [deployTransaction](Router.md#deploytransaction)
- [estimateGas](Router.md#estimategas)
- [filters](Router.md#filters)
- [functions](Router.md#functions)
- [interface](Router.md#interface)
- [off](Router.md#off)
- [on](Router.md#on)
- [once](Router.md#once)
- [populateTransaction](Router.md#populatetransaction)
- [provider](Router.md#provider)
- [removeListener](Router.md#removelistener)
- [resolvedAddress](Router.md#resolvedaddress)
- [signer](Router.md#signer)

### Methods

- [FEE\_DENOMINATOR](Router.md#fee_denominator)
- [\_checkRunningEvents](Router.md#_checkrunningevents)
- [\_deployed](Router.md#_deployed)
- [\_wrapEvent](Router.md#_wrapevent)
- [attach](Router.md#attach)
- [connect](Router.md#connect)
- [defaultAdminFee](Router.md#defaultadminfee)
- [deployed](Router.md#deployed)
- [emit](Router.md#emit)
- [fallback](Router.md#fallback)
- [getOutputAmount](Router.md#getoutputamount)
- [listenerCount](Router.md#listenercount)
- [listeners](Router.md#listeners)
- [owner](Router.md#owner)
- [queryFilter](Router.md#queryfilter)
- [removeAllListeners](Router.md#removealllisteners)
- [renounceOwnership](Router.md#renounceownership)
- [setAdmin](Router.md#setadmin)
- [setAdminFee](Router.md#setadminfee)
- [setPartnerAdmin](Router.md#setpartneradmin)
- [setPartnerFee](Router.md#setpartnerfee)
- [swapExactInputForOutput](Router.md#swapexactinputforoutput)
- [transferOwnership](Router.md#transferownership)

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
| `FEE_DENOMINATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `defaultAdminFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getOutputAmount` | (`path`: `PromiseOrValue`<`string`\>[], `pairs`: `PromiseOrValue`<`string`\>[], `extras`: `PromiseOrValue`<`BytesLike`\>[], `inputAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAdmin` | (`addr`: `PromiseOrValue`<`string`\>, `isAdmin`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAdminFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPartnerAdmin` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `admin`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPartnerFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `swapExactInputForOutput` | (`details`: `SwapPayloadStruct`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[packages/sdk-core/src/generated/Router.ts:369](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L369)

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
| `FEE_DENOMINATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `defaultAdminFee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getOutputAmount` | (`path`: `PromiseOrValue`<`string`\>[], `pairs`: `PromiseOrValue`<`string`\>[], `extras`: `PromiseOrValue`<`BytesLike`\>[], `inputAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setAdmin` | (`addr`: `PromiseOrValue`<`string`\>, `isAdmin`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setAdminFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setPartnerAdmin` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `admin`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setPartnerFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swapExactInputForOutput` | (`details`: `SwapPayloadStruct`, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[packages/sdk-core/src/generated/Router.ts:464](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L464)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FeeChanged` | (`partnerId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `initiator?`: ``null`` \| `PromiseOrValue`<`string`\>, `isAdminFee?`: ``null`` \| `PromiseOrValue`<`boolean`\>, `oldFee?`: ``null``, `newFee?`: ``null``) => `FeeChangedEventFilter` |
| `FeeChanged(uint256,address,bool,uint256,uint256)` | (`partnerId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `initiator?`: ``null`` \| `PromiseOrValue`<`string`\>, `isAdminFee?`: ``null`` \| `PromiseOrValue`<`boolean`\>, `oldFee?`: ``null``, `newFee?`: ``null``) => `FeeChangedEventFilter` |
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `PromiseOrValue`<`string`\>, `newOwner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `OwnershipTransferredEventFilter` |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `PromiseOrValue`<`string`\>, `newOwner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `OwnershipTransferredEventFilter` |
| `Swap` | (`sender?`: ``null`` \| `PromiseOrValue`<`string`\>, `to?`: ``null``, `input?`: ``null`` \| `PromiseOrValue`<`string`\>, `output?`: ``null`` \| `PromiseOrValue`<`string`\>, `inputAmount?`: ``null``, `outputAmount?`: ``null``) => `SwapEventFilter` |
| `Swap(address,address,address,address,uint256,uint256)` | (`sender?`: ``null`` \| `PromiseOrValue`<`string`\>, `to?`: ``null``, `input?`: ``null`` \| `PromiseOrValue`<`string`\>, `output?`: ``null`` \| `PromiseOrValue`<`string`\>, `inputAmount?`: ``null``, `outputAmount?`: ``null``) => `SwapEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[packages/sdk-core/src/generated/Router.ts:421](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L421)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FEE_DENOMINATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `defaultAdminFee` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getOutputAmount` | (`path`: `PromiseOrValue`<`string`\>[], `pairs`: `PromiseOrValue`<`string`\>[], `extras`: `PromiseOrValue`<`BytesLike`\>[], `inputAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `outputAmount`: `BigNumber`  }\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAdmin` | (`addr`: `PromiseOrValue`<`string`\>, `isAdmin`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAdminFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPartnerAdmin` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `admin`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPartnerFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swapExactInputForOutput` | (`details`: `SwapPayloadStruct`, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[packages/sdk-core/src/generated/Router.ts:263](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L263)

___

### interface

• **interface**: `RouterInterface`

#### Overrides

BaseContract.interface

#### Defined in

[packages/sdk-core/src/generated/Router.ts:242](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L242)

___

### off

• **off**: `OnEvent`<[`Router`](Router.md)\>

#### Overrides

BaseContract.off

#### Defined in

[packages/sdk-core/src/generated/Router.ts:258](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L258)

___

### on

• **on**: `OnEvent`<[`Router`](Router.md)\>

#### Overrides

BaseContract.on

#### Defined in

[packages/sdk-core/src/generated/Router.ts:259](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L259)

___

### once

• **once**: `OnEvent`<[`Router`](Router.md)\>

#### Overrides

BaseContract.once

#### Defined in

[packages/sdk-core/src/generated/Router.ts:260](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L260)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FEE_DENOMINATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `defaultAdminFee` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getOutputAmount` | (`path`: `PromiseOrValue`<`string`\>[], `pairs`: `PromiseOrValue`<`string`\>[], `extras`: `PromiseOrValue`<`BytesLike`\>[], `inputAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAdmin` | (`addr`: `PromiseOrValue`<`string`\>, `isAdmin`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAdminFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPartnerAdmin` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `admin`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPartnerFee` | (`partnerId`: `PromiseOrValue`<`BigNumberish`\>, `feeNumerator`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swapExactInputForOutput` | (`details`: `SwapPayloadStruct`, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[packages/sdk-core/src/generated/Router.ts:518](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L518)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`Router`](Router.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[packages/sdk-core/src/generated/Router.ts:261](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L261)

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

### FEE\_DENOMINATOR

▸ **FEE_DENOMINATOR**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:317](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L317)

___

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

▸ **attach**(`addressOrName`): [`Router`](Router.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Router`](Router.md)

#### Overrides

BaseContract.attach

#### Defined in

[packages/sdk-core/src/generated/Router.ts:239](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L239)

___

### connect

▸ **connect**(`signerOrProvider`): [`Router`](Router.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Router`](Router.md)

#### Overrides

BaseContract.connect

#### Defined in

[packages/sdk-core/src/generated/Router.ts:238](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L238)

___

### defaultAdminFee

▸ **defaultAdminFee**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:319](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L319)

___

### deployed

▸ **deployed**(): `Promise`<[`Router`](Router.md)\>

#### Returns

`Promise`<[`Router`](Router.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[packages/sdk-core/src/generated/Router.ts:240](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L240)

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

### getOutputAmount

▸ **getOutputAmount**(`path`, `pairs`, `extras`, `inputAmount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PromiseOrValue`<`string`\>[] |
| `pairs` | `PromiseOrValue`<`string`\>[] |
| `extras` | `PromiseOrValue`<`BytesLike`\>[] |
| `inputAmount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:356](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L356)

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

[packages/sdk-core/src/generated/Router.ts:250](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L250)

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

[packages/sdk-core/src/generated/Router.ts:253](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L253)

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

[packages/sdk-core/src/generated/Router.ts:321](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L321)

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

[packages/sdk-core/src/generated/Router.ts:244](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L244)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`Router`](Router.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`Router`](Router.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/Router.ts:254](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L254)

▸ **removeAllListeners**(`eventName?`): [`Router`](Router.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Router`](Router.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/Router.ts:257](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L257)

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

[packages/sdk-core/src/generated/Router.ts:323](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L323)

___

### setAdmin

▸ **setAdmin**(`addr`, `isAdmin`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `PromiseOrValue`<`string`\> |
| `isAdmin` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:332](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L332)

___

### setAdminFee

▸ **setAdminFee**(`partnerId`, `feeNumerator`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `partnerId` | `PromiseOrValue`<`BigNumberish`\> |
| `feeNumerator` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:350](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L350)

___

### setPartnerAdmin

▸ **setPartnerAdmin**(`partnerId`, `admin`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `partnerId` | `PromiseOrValue`<`BigNumberish`\> |
| `admin` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:338](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L338)

___

### setPartnerFee

▸ **setPartnerFee**(`partnerId`, `feeNumerator`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `partnerId` | `PromiseOrValue`<`BigNumberish`\> |
| `feeNumerator` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:344](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L344)

___

### swapExactInputForOutput

▸ **swapExactInputForOutput**(`details`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `SwapPayloadStruct` |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/Router.ts:364](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L364)

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

[packages/sdk-core/src/generated/Router.ts:327](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/Router.ts#L327)
