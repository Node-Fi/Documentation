# SmartRouter

[@node-fi/sdk-core](../) / [Exports](../modules.md) / SmartRouter

## Class: SmartRouter

**`Example`**

```ts
 const router = new SmartRouter('abc-123-987-beef')
 const {details, txn} = await router.getRouteBase(CELO, CUSD, '10000', { includeTxn: true, maxHops: 3 })
 const await provider.signTransaction(txn);
```

### Table of contents

#### Constructors

* [constructor](smartrouter.md#constructor)

#### Methods

* [getRouteBase](smartrouter.md#getroutebase)
* [performSwap](smartrouter.md#performswap)
* [formatTransaction](smartrouter.md#formattransaction)

### Constructors

#### constructor

• **new SmartRouter**(`apiKey?`, `wallet?`)

**Parameters**

| Name      | Type                  |
| --------- | --------------------- |
| `apiKey?` | `string`              |
| `wallet?` | [`Wallet`](wallet.md) |

**Defined in**

[Routing/SmartRouter.ts:102](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L102)

### Methods

#### getRouteBase

▸ **getRouteBase**(`input`, `output`, `amountIn`, `options?`): `Promise`<{ `details?`: [`NodeRoute`](../modules.md#noderoute) ; `error?`: `string` ; `expectedOut?`: `BigNumber` ; `priceImpact?`: `number` ; `routerAddress?`: `string` ; `txn?`: `TransactionConfig` | { `error`: `string` } }>

Pings the minima service to find the most efficient trade to go from input to output.

**Parameters**

| Name       | Type                                                                    | Description                                                                 |
| ---------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `input`    | `string` \| [`Token`](token.md)                                         | Token to be traded in. Provide either the address or the Token object       |
| `output`   | `string` \| [`Token`](token.md)                                         | Token to be traded for. Provide either the address or the Token object      |
| `amountIn` | `string` \| `BigNumber`                                                 | Total input amount for the trade, can be BigNumber or Stringified BigNumber |
| `options?` | `Partial`<[`RouterPayloadRequest`](../modules.md#routerpayloadrequest)> | Additional options                                                          |

**Returns**

`Promise`<{ `details?`: [`NodeRoute`](../modules.md#noderoute) ; `error?`: `string` ; `expectedOut?`: `BigNumber` ; `priceImpact?`: `number` ; `routerAddress?`: `string` ; `txn?`: `TransactionConfig` | { `error`: `string` } }>

Trade information, including a pre-formatted txn to sign and send to execute a trade

**Defined in**

[Routing/SmartRouter.ts:113](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L113)

***

#### performSwap

▸ **performSwap**(`route`, `to`, `slippage`, `routerAddress`): `Promise`<`TransactionReceipt`>

If a Wallet object is attached, will execute the given swal

**Parameters**

| Name            | Type                                   |
| --------------- | -------------------------------------- |
| `route`         | [`NodeRoute`](../modules.md#noderoute) |
| `to`            | `string`                               |
| `slippage`      | `number`                               |
| `routerAddress` | `string`                               |

**Returns**

`Promise`<`TransactionReceipt`>

transaction receipt

**Defined in**

[Routing/SmartRouter.ts:212](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L212)

***

#### formatTransaction

▸ `Static` **formatTransaction**(`route`, `to`, `slippage`, `routerAddress`): `Object`

Formats the route as a transaction to sign and execute.

**`Example`**

```ts
 const { details, routerAddress } = await router.getRouteBase(CELO, CUSD, '10000')
 const transactionConfig = router.formatTransaction(details, wallet.address, 10, routerAddress)
```

**Parameters**

| Name            | Type                                   | Description                                   |
| --------------- | -------------------------------------- | --------------------------------------------- |
| `route`         | [`NodeRoute`](../modules.md#noderoute) | Route returned from `getRouteBase`            |
| `to`            | `string`                               | Recipient address of trade                    |
| `slippage`      | `number`                               | Allowed slippage for the trade, in bips       |
| `routerAddress` | `string`                               | Address of router that will execute the trade |

**Returns**

`Object`

TransactionConfig corresponding to the given route

| Name   | Type     |
| ------ | -------- |
| `data` | `string` |
| `gas`  | `string` |
| `to`   | `string` |

**Defined in**

[Routing/SmartRouter.ts:182](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Routing/SmartRouter.ts#L182)
