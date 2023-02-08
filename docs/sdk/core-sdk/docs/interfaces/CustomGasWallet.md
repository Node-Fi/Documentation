[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / CustomGasWallet

# Interface: CustomGasWallet

## Implemented by

- [`LocalCeloWallet`](../classes/LocalCeloWallet.md)

## Table of contents

### Properties

- [getFeeCurrency](CustomGasWallet.md#getfeecurrency)
- [setFeeCurrency](CustomGasWallet.md#setfeecurrency)

## Properties

### getFeeCurrency

• **getFeeCurrency**: () => `undefined` \| `string`

#### Type declaration

▸ (): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:9](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L9)

___

### setFeeCurrency

• **setFeeCurrency**: (`token`: `string`) => `void`

#### Type declaration

▸ (`token`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

`void`

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:10](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L10)
