# TokenAmount

[@node-fi/sdk-core](../) / [Exports](../modules.md) / TokenAmount

## Class: TokenAmount

### Hierarchy

*   `CurrencyAmount`

    ↳ **`TokenAmount`**

### Table of contents

#### Constructors

* [constructor](tokenamount.md#constructor)

#### Properties

* [amount](tokenamount.md#amount)
* [scaledAmount](tokenamount.md#scaledamount)
* [token](tokenamount.md#token)

#### Accessors

* [raw](tokenamount.md#raw)

#### Methods

* [add](tokenamount.md#add)
* [subtract](tokenamount.md#subtract)
* [toExact](tokenamount.md#toexact)
* [toFixed](tokenamount.md#tofixed)
* [toJSON](tokenamount.md#tojson)
* [toSignificant](tokenamount.md#tosignificant)
* [isSerializedTokenAmount](tokenamount.md#isserializedtokenamount)
* [parseJson](tokenamount.md#parsejson)

### Constructors

#### constructor

• **new TokenAmount**(`token`, `amount`)

**Parameters**

| Name     | Type                    |
| -------- | ----------------------- |
| `token`  | [`Token`](token.md)     |
| `amount` | `string` \| `BigNumber` |

**Overrides**

CurrencyAmount.constructor

**Defined in**

[Tokens/TokenAmount.ts:66](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L66)

### Properties

#### amount

• `Readonly` **amount**: `BigNumber`

**Inherited from**

CurrencyAmount.amount

**Defined in**

[Tokens/TokenAmount.ts:17](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L17)

***

#### scaledAmount

• `Readonly` **scaledAmount**: `number`

**Inherited from**

CurrencyAmount.scaledAmount

**Defined in**

[Tokens/TokenAmount.ts:18](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L18)

***

#### token

• `Readonly` **token**: [`Token`](token.md)

**Overrides**

CurrencyAmount.token

**Defined in**

[Tokens/TokenAmount.ts:63](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L63)

### Accessors

#### raw

• `get` **raw**(): `BigNumber`

**Returns**

`BigNumber`

**Inherited from**

CurrencyAmount.raw

**Defined in**

[Tokens/TokenAmount.ts:29](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L29)

### Methods

#### add

▸ **add**(`other`): [`TokenAmount`](tokenamount.md)

**Parameters**

| Name    | Type                            |
| ------- | ------------------------------- |
| `other` | [`TokenAmount`](tokenamount.md) |

**Returns**

[`TokenAmount`](tokenamount.md)

**Defined in**

[Tokens/TokenAmount.ts:71](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L71)

***

#### subtract

▸ **subtract**(`other`): [`TokenAmount`](tokenamount.md)

**Parameters**

| Name    | Type                            |
| ------- | ------------------------------- |
| `other` | [`TokenAmount`](tokenamount.md) |

**Returns**

[`TokenAmount`](tokenamount.md)

**Defined in**

[Tokens/TokenAmount.ts:76](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L76)

***

#### toExact

▸ **toExact**(`format?`): `string`

**Parameters**

| Name      | Type                   |
| --------- | ---------------------- |
| `format?` | `IFormatNumberOptions` |

**Returns**

`string`

**Inherited from**

CurrencyAmount.toExact

**Defined in**

[Tokens/TokenAmount.ts:56](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L56)

***

#### toFixed

▸ **toFixed**(`decimalPlaces?`, `format?`): `string`

**Parameters**

| Name            | Type                   |
| --------------- | ---------------------- |
| `decimalPlaces` | `number`               |
| `format?`       | `IFormatNumberOptions` |

**Returns**

`string`

**Inherited from**

CurrencyAmount.toFixed

**Defined in**

[Tokens/TokenAmount.ts:43](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L43)

***

#### toJSON

▸ **toJSON**(): `Object`

**Returns**

`Object`

| Name             | Type                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `_type`          | `string`                                                                                                                                                                                                                                   |
| `amount`         | `string`                                                                                                                                                                                                                                   |
| `token`          | { `_type`: `string` = "Erc20Token"; `address`: `string` ; `chainId`: [`ChainId`](../enums/chainid.md) ; `decimals`: `number` ; `imageUri`: `undefined` \| `string` ; `name`: `undefined` \| `string` ; `symbol`: `undefined` \| `string` } |
| `token._type`    | `string`                                                                                                                                                                                                                                   |
| `token.address`  | `string`                                                                                                                                                                                                                                   |
| `token.chainId`  | [`ChainId`](../enums/chainid.md)                                                                                                                                                                                                           |
| `token.decimals` | `number`                                                                                                                                                                                                                                   |
| `token.imageUri` | `undefined` \| `string`                                                                                                                                                                                                                    |
| `token.name`     | `undefined` \| `string`                                                                                                                                                                                                                    |
| `token.symbol`   | `undefined` \| `string`                                                                                                                                                                                                                    |

**Defined in**

[Tokens/TokenAmount.ts:81](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L81)

***

#### toSignificant

▸ **toSignificant**(`significantDigits?`, `format?`): `string`

**Parameters**

| Name                | Type                   | Default value |
| ------------------- | ---------------------- | ------------- |
| `significantDigits` | `number`               | `6`           |
| `format?`           | `IFormatNumberOptions` | `undefined`   |

**Returns**

`string`

**Inherited from**

CurrencyAmount.toSignificant

**Defined in**

[Tokens/TokenAmount.ts:33](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L33)

***

#### isSerializedTokenAmount

▸ `Static` **isSerializedTokenAmount**(`obj`): obj is SerializedTokenAmount

**Parameters**

| Name  | Type                      |
| ----- | ------------------------- |
| `obj` | `Record`<`string`, `any`> |

**Returns**

obj is SerializedTokenAmount

**Defined in**

[Tokens/TokenAmount.ts:87](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L87)

***

#### parseJson

▸ `Static` **parseJson**(`ta`): [`TokenAmount`](tokenamount.md)

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| `ta` | `SerializedTokenAmount` |

**Returns**

[`TokenAmount`](tokenamount.md)

**Defined in**

[Tokens/TokenAmount.ts:91](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Tokens/TokenAmount.ts#L91)
