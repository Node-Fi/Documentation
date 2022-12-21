# PricedToken

[@node-fi/sdk-core](../) / [Exports](../modules.md) / PricedToken

## Class: PricedToken

A wrapper around the base token, gives access to the current price of the token

### Hierarchy

*   [`Token`](token.md)

    ↳ **`PricedToken`**

### Table of contents

#### Constructors

* [constructor](pricedtoken.md#constructor)

#### Properties

* [address](pricedtoken.md#address)
* [chainId](pricedtoken.md#chainid)
* [decimals](pricedtoken.md#decimals)
* [imageUri](pricedtoken.md#imageuri)
* [name](pricedtoken.md#name)
* [price](pricedtoken.md#price)
* [symbol](pricedtoken.md#symbol)

#### Methods

* [equals](pricedtoken.md#equals)
* [loadDetails](pricedtoken.md#loaddetails)
* [send](pricedtoken.md#send)
* [sortsBefore](pricedtoken.md#sortsbefore)
* [toJSON](pricedtoken.md#tojson)
* [isSerializedToken](pricedtoken.md#isserializedtoken)
* [parseJson](pricedtoken.md#parsejson)

### Constructors

#### constructor

• **new PricedToken**(`chainId`, `address`, `decimals`, `price`, `symbol?`, `name?`)

**Parameters**

| Name       | Type                             |
| ---------- | -------------------------------- |
| `chainId`  | [`ChainId`](../enums/chainid.md) |
| `address`  | `string`                         |
| `decimals` | `number`                         |
| `price`    | `number`                         |
| `symbol?`  | `string`                         |
| `name?`    | `string`                         |

**Overrides**

[Token](token.md).[constructor](token.md#constructor)

**Defined in**

[Tokens/PricedToken.ts:11](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/PricedToken.ts#L11)

### Properties

#### address

• `Readonly` **address**: `string`

**Inherited from**

[Token](token.md).[address](token.md#address)

**Defined in**

[Tokens/Token.ts:38](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L38)

***

#### chainId

• `Readonly` **chainId**: [`ChainId`](../enums/chainid.md)

**Inherited from**

[Token](token.md).[chainId](token.md#chainid)

**Defined in**

[Tokens/Token.ts:37](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L37)

***

#### decimals

• **decimals**: `number`

**Inherited from**

[Token](token.md).[decimals](token.md#decimals)

**Defined in**

[Tokens/Token.ts:30](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L30)

***

#### imageUri

• `Optional` **imageUri**: `string`

**Inherited from**

[Token](token.md).[imageUri](token.md#imageuri)

**Defined in**

[Tokens/Token.ts:33](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L33)

***

#### name

• `Optional` **name**: `string`

**Inherited from**

[Token](token.md).[name](token.md#name)

**Defined in**

[Tokens/Token.ts:32](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L32)

***

#### price

• **price**: `number`

**Defined in**

[Tokens/PricedToken.ts:9](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/PricedToken.ts#L9)

***

#### symbol

• `Optional` **symbol**: `string`

**Inherited from**

[Token](token.md).[symbol](token.md#symbol)

**Defined in**

[Tokens/Token.ts:31](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L31)

### Methods

#### equals

▸ **equals**(`other`): `boolean`

Returns true if the two tokens are equivalent, i.e. have the same chainId and address.

**Parameters**

| Name    | Type                | Description            |
| ------- | ------------------- | ---------------------- |
| `other` | [`Token`](token.md) | other token to compare |

**Returns**

`boolean`

**Inherited from**

[Token](token.md).[equals](token.md#equals)

**Defined in**

[Tokens/Token.ts:140](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L140)

***

#### loadDetails

▸ **loadDetails**(): `Promise`<`void`>

**Returns**

`Promise`<`void`>

**Inherited from**

[Token](token.md).[loadDetails](token.md#loaddetails)

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

**Inherited from**

[Token](token.md).[send](token.md#send)

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

**Inherited from**

[Token](token.md).[sortsBefore](token.md#sortsbefore)

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

**Inherited from**

[Token](token.md).[toJSON](token.md#tojson)

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

**Inherited from**

[Token](token.md).[isSerializedToken](token.md#isserializedtoken)

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

**Inherited from**

[Token](token.md).[parseJson](token.md#parsejson)

**Defined in**

[Tokens/Token.ts:77](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/Token.ts#L77)
