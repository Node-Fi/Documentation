[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / NodeWallet

# Interface: NodeWallet

## Hierarchy

- `BaseContract`

  ↳ **`NodeWallet`**

## Table of contents

### Properties

- [\_deployedPromise](NodeWallet.md#_deployedpromise)
- [\_runningEvents](NodeWallet.md#_runningevents)
- [\_wrappedEmits](NodeWallet.md#_wrappedemits)
- [address](NodeWallet.md#address)
- [callStatic](NodeWallet.md#callstatic)
- [deployTransaction](NodeWallet.md#deploytransaction)
- [estimateGas](NodeWallet.md#estimategas)
- [filters](NodeWallet.md#filters)
- [functions](NodeWallet.md#functions)
- [interface](NodeWallet.md#interface)
- [off](NodeWallet.md#off)
- [on](NodeWallet.md#on)
- [once](NodeWallet.md#once)
- [populateTransaction](NodeWallet.md#populatetransaction)
- [provider](NodeWallet.md#provider)
- [removeListener](NodeWallet.md#removelistener)
- [resolvedAddress](NodeWallet.md#resolvedaddress)
- [signer](NodeWallet.md#signer)

### Methods

- [ADMIN](NodeWallet.md#admin)
- [BENEFICIARY](NodeWallet.md#beneficiary)
- [CONNECTOR](NodeWallet.md#connector)
- [DEFAULT\_ADMIN\_ROLE](NodeWallet.md#default_admin_role)
- [GUARDIAN](NodeWallet.md#guardian)
- [OWNER](NodeWallet.md#owner)
- [\_checkRunningEvents](NodeWallet.md#_checkrunningevents)
- [\_deployed](NodeWallet.md#_deployed)
- [\_wrapEvent](NodeWallet.md#_wrapevent)
- [approve](NodeWallet.md#approve)
- [attach](NodeWallet.md#attach)
- [callContractWithSelector](NodeWallet.md#callcontractwithselector)
- [connect](NodeWallet.md#connect)
- [deployed](NodeWallet.md#deployed)
- [emit](NodeWallet.md#emit)
- [execute](NodeWallet.md#execute)
- [executeMany](NodeWallet.md#executemany)
- [fallback](NodeWallet.md#fallback)
- [getRoleAdmin](NodeWallet.md#getroleadmin)
- [grantRole](NodeWallet.md#grantrole)
- [hasRole](NodeWallet.md#hasrole)
- [listenerCount](NodeWallet.md#listenercount)
- [listeners](NodeWallet.md#listeners)
- [queryFilter](NodeWallet.md#queryfilter)
- [removeAllListeners](NodeWallet.md#removealllisteners)
- [renounceRole](NodeWallet.md#renouncerole)
- [revokeRole](NodeWallet.md#revokerole)
- [supportsInterface](NodeWallet.md#supportsinterface)

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
| `ADMIN` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `BENEFICIARY` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `CONNECTOR` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `DEFAULT_ADMIN_ROLE` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `GUARDIAN` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `OWNER` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `approve` | (`_token`: `PromiseOrValue`<`string`\>, `_target`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `callContractWithSelector` | (`_target`: `PromiseOrValue`<`string`\>, `_method`: `PromiseOrValue`<`BytesLike`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `execute` | (`_target`: `PromiseOrValue`<`string`\>, `_data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `executeMany` | (`_targets`: `PromiseOrValue`<`string`\>[], `_callData`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getRoleAdmin` | (`role`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `grantRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `hasRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `renounceRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `revokeRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:403](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L403)

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
| `ADMIN` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `BENEFICIARY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `CONNECTOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `DEFAULT_ADMIN_ROLE` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `GUARDIAN` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `OWNER` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`_token`: `PromiseOrValue`<`string`\>, `_target`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `callContractWithSelector` | (`_target`: `PromiseOrValue`<`string`\>, `_method`: `PromiseOrValue`<`BytesLike`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `execute` | (`_target`: `PromiseOrValue`<`string`\>, `_data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `executeMany` | (`_targets`: `PromiseOrValue`<`string`\>[], `_callData`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getRoleAdmin` | (`role`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `grantRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `hasRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `revokeRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:523](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L523)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ContractCalled` | (`target?`: ``null``, `data?`: ``null``, `caller?`: ``null``) => `ContractCalledEventFilter` |
| `ContractCalled(address,bytes,address)` | (`target?`: ``null``, `data?`: ``null``, `caller?`: ``null``) => `ContractCalledEventFilter` |
| `RoleAdminChanged` | (`role?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `previousAdminRole?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `newAdminRole?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>) => `RoleAdminChangedEventFilter` |
| `RoleAdminChanged(bytes32,bytes32,bytes32)` | (`role?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `previousAdminRole?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `newAdminRole?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>) => `RoleAdminChangedEventFilter` |
| `RoleGranted` | (`role?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `account?`: ``null`` \| `PromiseOrValue`<`string`\>, `sender?`: ``null`` \| `PromiseOrValue`<`string`\>) => `RoleGrantedEventFilter` |
| `RoleGranted(bytes32,address,address)` | (`role?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `account?`: ``null`` \| `PromiseOrValue`<`string`\>, `sender?`: ``null`` \| `PromiseOrValue`<`string`\>) => `RoleGrantedEventFilter` |
| `RoleRevoked` | (`role?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `account?`: ``null`` \| `PromiseOrValue`<`string`\>, `sender?`: ``null`` \| `PromiseOrValue`<`string`\>) => `RoleRevokedEventFilter` |
| `RoleRevoked(bytes32,address,address)` | (`role?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `account?`: ``null`` \| `PromiseOrValue`<`string`\>, `sender?`: ``null`` \| `PromiseOrValue`<`string`\>) => `RoleRevokedEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:477](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L477)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADMIN` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `BENEFICIARY` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `CONNECTOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `DEFAULT_ADMIN_ROLE` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `GUARDIAN` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `OWNER` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `approve` | (`_token`: `PromiseOrValue`<`string`\>, `_target`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `callContractWithSelector` | (`_target`: `PromiseOrValue`<`string`\>, `_method`: `PromiseOrValue`<`BytesLike`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `execute` | (`_target`: `PromiseOrValue`<`string`\>, `_data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMany` | (`_targets`: `PromiseOrValue`<`string`\>[], `_callData`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getRoleAdmin` | (`role`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `grantRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `hasRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `renounceRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `revokeRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:257](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L257)

___

### interface

• **interface**: `NodeWalletInterface`

#### Overrides

BaseContract.interface

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:236](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L236)

___

### off

• **off**: `OnEvent`<[`NodeWallet`](NodeWallet.md)\>

#### Overrides

BaseContract.off

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:252](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L252)

___

### on

• **on**: `OnEvent`<[`NodeWallet`](NodeWallet.md)\>

#### Overrides

BaseContract.on

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:253](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L253)

___

### once

• **once**: `OnEvent`<[`NodeWallet`](NodeWallet.md)\>

#### Overrides

BaseContract.once

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:254](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L254)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADMIN` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `BENEFICIARY` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `CONNECTOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `DEFAULT_ADMIN_ROLE` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `GUARDIAN` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `OWNER` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`_token`: `PromiseOrValue`<`string`\>, `_target`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `callContractWithSelector` | (`_target`: `PromiseOrValue`<`string`\>, `_method`: `PromiseOrValue`<`BytesLike`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `execute` | (`_target`: `PromiseOrValue`<`string`\>, `_data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMany` | (`_targets`: `PromiseOrValue`<`string`\>[], `_callData`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getRoleAdmin` | (`role`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `grantRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `hasRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `revokeRole` | (`role`: `PromiseOrValue`<`BytesLike`\>, `account`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:597](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L597)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`NodeWallet`](NodeWallet.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:255](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L255)

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

### ADMIN

▸ **ADMIN**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:331](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L331)

___

### BENEFICIARY

▸ **BENEFICIARY**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:333](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L333)

___

### CONNECTOR

▸ **CONNECTOR**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:335](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L335)

___

### DEFAULT\_ADMIN\_ROLE

▸ **DEFAULT_ADMIN_ROLE**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:337](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L337)

___

### GUARDIAN

▸ **GUARDIAN**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:339](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L339)

___

### OWNER

▸ **OWNER**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:341](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L341)

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

### approve

▸ **approve**(`_token`, `_target`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_target` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:343](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L343)

___

### attach

▸ **attach**(`addressOrName`): [`NodeWallet`](NodeWallet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`NodeWallet`](NodeWallet.md)

#### Overrides

BaseContract.attach

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:233](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L233)

___

### callContractWithSelector

▸ **callContractWithSelector**(`_target`, `_method`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `PromiseOrValue`<`string`\> |
| `_method` | `PromiseOrValue`<`BytesLike`\> |
| `data` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:350](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L350)

___

### connect

▸ **connect**(`signerOrProvider`): [`NodeWallet`](NodeWallet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`NodeWallet`](NodeWallet.md)

#### Overrides

BaseContract.connect

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:232](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L232)

___

### deployed

▸ **deployed**(): `Promise`<[`NodeWallet`](NodeWallet.md)\>

#### Returns

`Promise`<[`NodeWallet`](NodeWallet.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:234](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L234)

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

### execute

▸ **execute**(`_target`, `_data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `PromiseOrValue`<`string`\> |
| `_data` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:357](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L357)

___

### executeMany

▸ **executeMany**(`_targets`, `_callData`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_targets` | `PromiseOrValue`<`string`\>[] |
| `_callData` | `PromiseOrValue`<`BytesLike`\>[] |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:363](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L363)

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

### getRoleAdmin

▸ **getRoleAdmin**(`role`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:369](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L369)

___

### grantRole

▸ **grantRole**(`role`, `account`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `PromiseOrValue`<`BytesLike`\> |
| `account` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:374](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L374)

___

### hasRole

▸ **hasRole**(`role`, `account`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `PromiseOrValue`<`BytesLike`\> |
| `account` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:380](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L380)

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

[packages/sdk-core/src/generated/NodeWallet.ts:244](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L244)

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

[packages/sdk-core/src/generated/NodeWallet.ts:247](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L247)

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

[packages/sdk-core/src/generated/NodeWallet.ts:238](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L238)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`NodeWallet`](NodeWallet.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`NodeWallet`](NodeWallet.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:248](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L248)

▸ **removeAllListeners**(`eventName?`): [`NodeWallet`](NodeWallet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`NodeWallet`](NodeWallet.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:251](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L251)

___

### renounceRole

▸ **renounceRole**(`role`, `account`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `PromiseOrValue`<`BytesLike`\> |
| `account` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:386](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L386)

___

### revokeRole

▸ **revokeRole**(`role`, `account`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `PromiseOrValue`<`BytesLike`\> |
| `account` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:392](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L392)

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/sdk-core/src/generated/NodeWallet.ts:398](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/generated/NodeWallet.ts#L398)
