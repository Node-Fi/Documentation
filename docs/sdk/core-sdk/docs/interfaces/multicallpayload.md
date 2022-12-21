# MultiCallPayload

[@node-fi/sdk-core](../) / [Exports](../modules.md) / MultiCallPayload

## Interface: MultiCallPayload

### Table of contents

#### Properties

* [data](multicallpayload.md#data)
* [method](multicallpayload.md#method)
* [target](multicallpayload.md#target)
* [targetInterface](multicallpayload.md#targetinterface)
* [transformResult](multicallpayload.md#transformresult)

### Properties

#### data

• `Optional` **data**: `any`\[]

**Defined in**

[utils/multicall.ts:11](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L11)

***

#### method

• **method**: `string`

**Defined in**

[utils/multicall.ts:9](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L9)

***

#### target

• **target**: `string`

**Defined in**

[utils/multicall.ts:8](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L8)

***

#### targetInterface

• **targetInterface**: `Interface`

**Defined in**

[utils/multicall.ts:7](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L7)

***

#### transformResult

• `Optional` **transformResult**: (`res`: `Result`) => `any`

**Type declaration**

▸ (`res`): `any`

**Parameters**

| Name  | Type     |
| ----- | -------- |
| `res` | `Result` |

**Returns**

`any`

**Defined in**

[utils/multicall.ts:10](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/utils/multicall.ts#L10)
