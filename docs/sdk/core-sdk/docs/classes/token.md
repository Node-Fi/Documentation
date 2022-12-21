# Token

[@node-fi/sdk-core](../) / [Exports](../modules.md) / Token

## Class: Token

Represents an ERC20 token with a unique address and some metadata.

### Hierarchy

*   **`Token`**

    ↳ [`PricedToken`](pricedtoken.md)

### Table of contents

#### Constructors

* [constructor](token.md#constructor)

#### Properties

* [address](token.md#address)
* [attemptedLoadContract](token.md#attemptedloadcontract)
* [chainId](token.md#chainid)
* [contract](token.md#contract)
* [decimals](token.md#decimals)
* [imageUri](token.md#imageuri)
* [name](token.md#name)
* [symbol](token.md#symbol)

#### Methods

* [\_loadContract](token.md#\_loadcontract)
* [equals](token.md#equals)
* [loadDetails](token.md#loaddetails)
* [send](token.md#send)
* [sortsBefore](token.md#sortsbefore)
* [toJSON](token.md#tojson)
* [isSerializedToken](token.md#isserializedtoken)
* [parseJson](token.md#parsejson)

### Constructors

#### constructor

• **new Token**(`chainId`, `address`, `decimals?`, `symbol?`, `name?`, `imageUri?`)

Constructs an instance of the base class `Currency`.

**Parameters**

| Name        | Type                             | Description              |
| ----------- | -------------------------------- | ------------------------ |
| `chainId`   | [`ChainId`](../enums/chainid.md) | -                        |
| `address`   | `string`                         | -                        |
| `decimals?` | `number`                         | decimals of the currency |
| `symbol?`   | `string`                         | symbol of the currency   |
| `name?`     | `string`                         | of the currency          |
| `imageUri?` | `string`                         | -                        |

**Defined in**

[Tokens/Token.ts:46](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L46)

### Properties

#### address

• `Readonly` **address**: `string`

**Defined in**

[Tokens/Token.ts:38](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L38)

***

#### attemptedLoadContract

• `Private` `Optional` **attemptedLoadContract**: `boolean`

**Defined in**

[Tokens/Token.ts:35](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L35)

***

#### chainId

• `Readonly` **chainId**: [`ChainId`](../enums/chainid.md)

**Defined in**

[Tokens/Token.ts:37](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L37)

***

#### contract

• `Private` `Optional` **contract**: `ERC20`

**Defined in**

[Tokens/Token.ts:34](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L34)

***

#### decimals

• **decimals**: `number`

**Defined in**

[Tokens/Token.ts:30](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L30)

***

#### imageUri

• `Optional` **imageUri**: `string`

**Defined in**

[Tokens/Token.ts:33](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L33)

***

#### name

• `Optional` **name**: `string`

**Defined in**

[Tokens/Token.ts:32](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L32)

***

#### symbol

• `Optional` **symbol**: `string`

**Defined in**

[Tokens/Token.ts:31](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L31)

### Methods

#### \_loadContract

▸ `Private` **\_loadContract**(): `Promise`<`void`>

Loads the ERC20 contract

**Returns**

`Promise`<`void`>

**Defined in**

[Tokens/Token.ts:102](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L102)

***

#### equals

▸ **equals**(`other`): `boolean`

Returns true if the two tokens are equivalent, i.e. have the same chainId and address.

**Parameters**

| Name    | Type                | Description            |
| ------- | ------------------- | ---------------------- |
| `other` | [`Token`](token.md) | other token to compare |

**Returns**

`boolean`

**Defined in**

[Tokens/Token.ts:140](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L140)

***

#### loadDetails

▸ **loadDetails**(): `Promise`<`void`>

**Returns**

`Promise`<`void`>

**Defined in**

[Tokens/Token.ts:62](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L62)

***

#### send

▸ **send**(`amount`, `from`, `to`, `opt?`): `Promise`<`TransactionReceipt`>

**Parameters**

| Name     | Type                                                        | Description                                   |
| -------- | ----------------------------------------------------------- | --------------------------------------------- |
| `amount` | `BigNumber`                                                 | amount, in wei, of the token to send          |
| `from`   | [`Wallet`](wallet.md)                                       | the wallet where the tokens will be sent from |
| `to`     | `string`                                                    | the address of the recipient of the tokens    |
| `opt?`   | [`TransactionOptions`](../interfaces/transactionoptions.md) | -                                             |

**Returns**

`Promise`<`TransactionReceipt`>

transaction receipt of the transfer

**Defined in**

[Tokens/Token.ts:117](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L117)

***

#### sortsBefore

▸ **sortsBefore**(`other`): `boolean`

Returns true if the address of this token sorts before the address of the other token

**`Throws`**

if the tokens have the same address

**`Throws`**

if the tokens are on different chains

**Parameters**

| Name    | Type                | Description            |
| ------- | ------------------- | ---------------------- |
| `other` | [`Token`](token.md) | other token to compare |

**Returns**

`boolean`

**Defined in**

[Tokens/Token.ts:154](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L154)

***

#### toJSON

▸ **toJSON**(): `Object`

**Returns**

`Object`

| Name       | Type                             |
| ---------- | -------------------------------- |
| `_type`    | `string`                         |
| `address`  | `string`                         |
| `chainId`  | [`ChainId`](../enums/chainid.md) |
| `decimals` | `number`                         |
| `imageUri` | `undefined` \| `string`          |
| `name`     | `undefined` \| `string`          |
| `symbol`   | `undefined` \| `string`          |

**Defined in**

[Tokens/Token.ts:87](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L87)

***

#### isSerializedToken

▸ `Static` **isSerializedToken**(`obj?`): obj is SerializedToken

**Parameters**

| Name   | Type                      |
| ------ | ------------------------- |
| `obj?` | `Record`<`string`, `any`> |

**Returns**

obj is SerializedToken

**Defined in**

[Tokens/Token.ts:73](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L73)

***

#### parseJson

▸ `Static` **parseJson**(`__namedParameters`): [`Token`](token.md)

**Parameters**

| Name                | Type              |
| ------------------- | ----------------- |
| `__namedParameters` | `SerializedToken` |

**Returns**

[`Token`](token.md)

**Defined in**

[Tokens/Token.ts:77](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L77)
