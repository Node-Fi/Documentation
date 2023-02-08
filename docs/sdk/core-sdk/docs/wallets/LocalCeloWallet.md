[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / LocalCeloWallet

# Class: LocalCeloWallet

A CeloWallet which allows for custom gas settings

## Hierarchy

- `CeloWallet`

  ↳ **`LocalCeloWallet`**

## Implements

- [`CustomGasWallet`](../interfaces/CustomGasWallet.md)

## Table of contents

### Constructors

- [constructor](LocalCeloWallet.md#constructor)

### Properties

- [\_feeCurrency](LocalCeloWallet.md#_feecurrency)
- [\_isSigner](LocalCeloWallet.md#_issigner)
- [\_mnemonic](LocalCeloWallet.md#_mnemonic)
- [\_signingKey](LocalCeloWallet.md#_signingkey)
- [address](LocalCeloWallet.md#address)
- [isLocalCeloWallet](LocalCeloWallet.md#islocalcelowallet)
- [provider](LocalCeloWallet.md#provider)

### Accessors

- [mnemonic](LocalCeloWallet.md#mnemonic)
- [privateKey](LocalCeloWallet.md#privatekey)
- [publicKey](LocalCeloWallet.md#publickey)

### Methods

- [\_checkProvider](LocalCeloWallet.md#_checkprovider)
- [\_estimateGas](LocalCeloWallet.md#_estimategas)
- [\_signTypedData](LocalCeloWallet.md#_signtypeddata)
- [call](LocalCeloWallet.md#call)
- [checkTransaction](LocalCeloWallet.md#checktransaction)
- [connect](LocalCeloWallet.md#connect)
- [encrypt](LocalCeloWallet.md#encrypt)
- [estimateGas](LocalCeloWallet.md#estimategas)
- [getAddress](LocalCeloWallet.md#getaddress)
- [getBalance](LocalCeloWallet.md#getbalance)
- [getChainId](LocalCeloWallet.md#getchainid)
- [getFeeCurrency](LocalCeloWallet.md#getfeecurrency)
- [getFeeData](LocalCeloWallet.md#getfeedata)
- [getGasPrice](LocalCeloWallet.md#getgasprice)
- [getTransactionCount](LocalCeloWallet.md#gettransactioncount)
- [populateTransaction](LocalCeloWallet.md#populatetransaction)
- [resolveName](LocalCeloWallet.md#resolvename)
- [sendTransaction](LocalCeloWallet.md#sendtransaction)
- [setFeeCurrency](LocalCeloWallet.md#setfeecurrency)
- [signMessage](LocalCeloWallet.md#signmessage)
- [signTransaction](LocalCeloWallet.md#signtransaction)
- [createRandom](LocalCeloWallet.md#createrandom)
- [fromEncryptedJson](LocalCeloWallet.md#fromencryptedjson)
- [fromEncryptedJsonSync](LocalCeloWallet.md#fromencryptedjsonsync)
- [fromMnemonic](LocalCeloWallet.md#frommnemonic)
- [isLocalCeloWallet](LocalCeloWallet.md#islocalcelowallet-1)
- [isSigner](LocalCeloWallet.md#issigner)

## Constructors

### constructor

• **new LocalCeloWallet**(`privateKey`, `provider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `BytesLike` \| `ExternallyOwnedAccount` \| `SigningKey` |
| `provider?` | `Provider` |

#### Inherited from

CeloWallet.constructor

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:13

## Properties

### \_feeCurrency

• `Private` `Optional` **\_feeCurrency**: `string`

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:18](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L18)

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

CeloWallet.\_isSigner

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### \_mnemonic

• `Readonly` **\_mnemonic**: () => `Mnemonic`

#### Type declaration

▸ (): `Mnemonic`

##### Returns

`Mnemonic`

#### Inherited from

CeloWallet.\_mnemonic

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:12

___

### \_signingKey

• `Readonly` **\_signingKey**: () => `SigningKey`

#### Type declaration

▸ (): `SigningKey`

##### Returns

`SigningKey`

#### Inherited from

CeloWallet.\_signingKey

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:11

___

### address

• `Readonly` **address**: `string`

#### Inherited from

CeloWallet.address

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:9

___

### isLocalCeloWallet

• **isLocalCeloWallet**: `boolean` = `true`

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:19](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L19)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

CeloWallet.provider

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:10

## Accessors

### mnemonic

• `get` **mnemonic**(): `Mnemonic`

#### Returns

`Mnemonic`

#### Inherited from

CeloWallet.mnemonic

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:14

___

### privateKey

• `get` **privateKey**(): `string`

#### Returns

`string`

#### Inherited from

CeloWallet.privateKey

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:15

___

### publicKey

• `get` **publicKey**(): `string`

#### Returns

`string`

#### Inherited from

CeloWallet.publicKey

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:16

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation?` | `string` |

#### Returns

`void`

#### Inherited from

CeloWallet.\_checkProvider

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

___

### \_estimateGas

▸ `Private` **_estimateGas**(`tx`): `Promise`<{ `feeCurrency`: `undefined` \| `string` ; `gasLimit`: `BigNumberish` ; `gasPrice`: `BigNumberish`  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | `CeloTransactionRequest` | Transaction request to estimate gas for |

#### Returns

`Promise`<{ `feeCurrency`: `undefined` \| `string` ; `gasLimit`: `BigNumberish` ; `gasPrice`: `BigNumberish`  }\>

gas esimation

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:30](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L30)

___

### \_signTypedData

▸ **_signTypedData**(`domain`, `types`, `value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

CeloWallet.\_signTypedData

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:21

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`<`TransactionRequest`\> |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CeloWallet.call

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

___

### checkTransaction

▸ **checkTransaction**(`transaction`): `Deferrable`<`TransactionRequest`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`<`TransactionRequest`\> |

#### Returns

`Deferrable`<`TransactionRequest`\>

#### Inherited from

CeloWallet.checkTransaction

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

___

### connect

▸ **connect**(`provider`): [`LocalCeloWallet`](LocalCeloWallet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `CeloProvider` |

#### Returns

[`LocalCeloWallet`](LocalCeloWallet.md)

#### Overrides

CeloWallet.connect

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:53](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L53)

___

### encrypt

▸ **encrypt**(`password`, `options?`, `progressCallback?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` \| `Bytes` |
| `options?` | `any` |
| `progressCallback?` | `ProgressCallback` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CeloWallet.encrypt

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:22

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<`BigNumber`\>

Override to skip checkTransaction step which rejects Celo tx properties
https://github.com/ethers-io/ethers.js/blob/master/packages/abstract-signer/src.ts/index.ts

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`<`CeloTransactionRequest`\> |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

CeloWallet.estimateGas

#### Defined in

node_modules/@celo-tools/celo-ethers-wrapper/build/main/lib/CeloWallet.d.ts:24

___

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

CeloWallet.getAddress

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:17

___

### getBalance

▸ **getBalance**(`blockTag?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

CeloWallet.getBalance

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

CeloWallet.getChainId

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeCurrency

▸ **getFeeCurrency**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

CustomGasWallet.getFeeCurrency

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:21](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L21)

___

### getFeeData

▸ **getFeeData**(): `Promise`<`FeeData`\>

#### Returns

`Promise`<`FeeData`\>

#### Inherited from

CeloWallet.getFeeData

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(`feeCurrencyAddress?`): `Promise`<`BigNumber`\>

Override to support alternative gas currencies
https://github.com/celo-tools/ethers.js/blob/master/packages/abstract-signer/src.ts/index.ts

#### Parameters

| Name | Type |
| :------ | :------ |
| `feeCurrencyAddress?` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

CeloWallet.getGasPrice

#### Defined in

node_modules/@celo-tools/celo-ethers-wrapper/build/main/lib/CeloWallet.d.ts:29

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`number`\>

#### Inherited from

CeloWallet.getTransactionCount

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

___

### populateTransaction

▸ **populateTransaction**(`transaction`): `Promise`<`any`\>

Override to skip checkTransaction step which rejects Celo tx properties
https://github.com/ethers-io/ethers.js/blob/master/packages/abstract-signer/src.ts/index.ts

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`<`CeloTransactionRequest`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

CeloWallet.populateTransaction

#### Defined in

node_modules/@celo-tools/celo-ethers-wrapper/build/main/lib/CeloWallet.d.ts:9

___

### resolveName

▸ **resolveName**(`name`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CeloWallet.resolveName

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

___

### sendTransaction

▸ **sendTransaction**(`transaction`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `CeloTransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Overrides

CeloWallet.sendTransaction

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:43](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L43)

___

### setFeeCurrency

▸ **setFeeCurrency**(`token`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`string`

#### Implementation of

CustomGasWallet.setFeeCurrency

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:23](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L23)

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Bytes` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CeloWallet.signMessage

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:20

___

### signTransaction

▸ **signTransaction**(`transaction`): `Promise`<`string`\>

Override to serialize transaction using custom serialize method
https://github.com/ethers-io/ethers.js/blob/master/packages/wallet/src.ts/index.ts

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `CeloTransactionRequest` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CeloWallet.signTransaction

#### Defined in

node_modules/@celo-tools/celo-ethers-wrapper/build/main/lib/CeloWallet.d.ts:14

___

### createRandom

▸ `Static` **createRandom**(`options?`): `Wallet`

Static methods to create Wallet instances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Wallet`

#### Inherited from

CeloWallet.createRandom

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:26

___

### fromEncryptedJson

▸ `Static` **fromEncryptedJson**(`json`, `password`, `progressCallback?`): `Promise`<`Wallet`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |
| `password` | `string` \| `Bytes` |
| `progressCallback?` | `ProgressCallback` |

#### Returns

`Promise`<`Wallet`\>

#### Inherited from

CeloWallet.fromEncryptedJson

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:27

___

### fromEncryptedJsonSync

▸ `Static` **fromEncryptedJsonSync**(`json`, `password`): `Wallet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |
| `password` | `string` \| `Bytes` |

#### Returns

`Wallet`

#### Inherited from

CeloWallet.fromEncryptedJsonSync

#### Defined in

node_modules/@ethersproject/wallet/lib/index.d.ts:28

___

### fromMnemonic

▸ `Static` **fromMnemonic**(`mnemonic`, `path?`, `wordlist?`): `CeloWallet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |
| `path?` | `string` |
| `wordlist?` | `Wordlist` |

#### Returns

`CeloWallet`

#### Inherited from

CeloWallet.fromMnemonic

#### Defined in

node_modules/@celo-tools/celo-ethers-wrapper/build/main/lib/CeloWallet.d.ts:31

___

### isLocalCeloWallet

▸ `Static` **isLocalCeloWallet**(`other`): other is LocalCeloWallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `unknown` | Object to check for LocalCeloWallet type |

#### Returns

other is LocalCeloWallet

true if other is a LocalCeloWallet

#### Defined in

[packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts:62](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/wallet/chainSpecificSigners/LocalCeloWallet.ts#L62)

___

### isSigner

▸ `Static` **isSigner**(`value`): value is Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Signer

#### Inherited from

CeloWallet.isSigner

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
