# Class: SmartRouter

**`Example`**

```ts
 const router = new SmartRouter('abc-123-987-beef')
 const {details, txn} = await router.getRouteBase(CELO, CUSD, '10000', { includeTxn: true, maxHops: 3 })
 const await provider.signTransaction(txn);
```

## Table of contents

### Constructors

- [constructor](SmartRouter.md#constructor)

### Properties

- [\_apiKey](SmartRouter.md#_apikey)
- [\_wallet](SmartRouter.md#_wallet)

### Methods

- [getRouteBase](SmartRouter.md#getroutebase)
- [performSwap](SmartRouter.md#performswap)
- [formatTransaction](SmartRouter.md#formattransaction)

## Constructors

### constructor

• **new SmartRouter**(`_apiKey?`, `_wallet?`)

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `_apiKey?` | `string`                         |
| `_wallet?` | [`Wallet`](Wallet.md)<`Signer`\> |

#### Defined in

[packages/sdk-core/src/Routing/SmartRouter.ts:88](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Routing/SmartRouter.ts#L88)

## Properties

### \_apiKey

• `Private` `Optional` **\_apiKey**: `string`

#### Defined in

[packages/sdk-core/src/Routing/SmartRouter.ts:88](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Routing/SmartRouter.ts#L88)

---

### \_wallet

• `Private` `Optional` **\_wallet**: [`Wallet`](Wallet.md)<`Signer`\>

#### Defined in

[packages/sdk-core/src/Routing/SmartRouter.ts:88](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Routing/SmartRouter.ts#L88)

## Methods

### getRouteBase

▸ **getRouteBase**(`input`, `output`, `amountIn`, `chainId`, `options?`): `Promise`<{ `details?`: [`NodeRoute`](../modules.md#noderoute) ; `error?`: `string` ; `expectedOut?`: `string` ; `priceImpact?`: `number` ; `routerAddress?`: `string` ; `txn?`: `TransactionRequest` \| { `error`: `string` } }\>

Pings the minima service to find the most efficient trade to go from input to output.

#### Parameters

| Name       | Type                                                       | Description                                                            |
| :--------- | :--------------------------------------------------------- | :--------------------------------------------------------------------- |
| `input`    | `string` \| `Token`                                        | Token to be traded in. Provide either the address or the Token object  |
| `output`   | `string`                                                   | Token to be traded for. Provide either the address or the Token object |
| `amountIn` | `BigintIsh`                                                | Total input amount for the trade                                       |
| `chainId`  | `ChainId`                                                  | -                                                                      |
| `options?` | `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\> | Additional options                                                     |

#### Returns

`Promise`<{ `details?`: [`NodeRoute`](../modules.md#noderoute) ; `error?`: `string` ; `expectedOut?`: `string` ; `priceImpact?`: `number` ; `routerAddress?`: `string` ; `txn?`: `TransactionRequest` \| { `error`: `string` } }\>

Trade information, including a pre-formatted txn to sign and send to execute a trade

#### Defined in

[packages/sdk-core/src/Routing/SmartRouter.ts:99](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Routing/SmartRouter.ts#L99)

▸ **getRouteBase**(`input`, `output`, `amountIn`, `chainId`, `options?`): `Promise`<{ `details?`: [`NodeRoute`](../modules.md#noderoute) ; `error?`: `string` ; `expectedOut?`: `TokenAmount` ; `priceImpact?`: `number` ; `routerAddress?`: `string` ; `txn?`: `TransactionRequest` \| { `error`: `string` } }\>

#### Parameters

| Name       | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| `input`    | `string` \| `Token`                                        |
| `output`   | `Token`                                                    |
| `amountIn` | `BigintIsh`                                                |
| `chainId`  | `ChainId`                                                  |
| `options?` | `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\> |

#### Returns

`Promise`<{ `details?`: [`NodeRoute`](../modules.md#noderoute) ; `error?`: `string` ; `expectedOut?`: `TokenAmount` ; `priceImpact?`: `number` ; `routerAddress?`: `string` ; `txn?`: `TransactionRequest` \| { `error`: `string` } }\>

#### Defined in

[packages/sdk-core/src/Routing/SmartRouter.ts:113](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Routing/SmartRouter.ts#L113)

---

### performSwap

▸ **performSwap**(`route`, `to`, `slippage`, `routerAddress`): `Promise`<`TransactionReceipt`\>

If a Wallet object is attached, will execute the given swal

#### Parameters

| Name            | Type                                   |
| :-------------- | :------------------------------------- |
| `route`         | [`NodeRoute`](../modules.md#noderoute) |
| `to`            | `string`                               |
| `slippage`      | `number`                               |
| `routerAddress` | `string`                               |

#### Returns

`Promise`<`TransactionReceipt`\>

transaction receipt

#### Defined in

[packages/sdk-core/src/Routing/SmartRouter.ts:238](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Routing/SmartRouter.ts#L238)

---

### formatTransaction

▸ `Static` **formatTransaction**(`route`, `to`, `slippage`, `routerAddress`): `TransactionRequest`

Formats the route as a transaction to sign and execute.

**`Example`**

```ts
const { details, routerAddress } = await router.getRouteBase(
  CELO,
  CUSD,
  "10000"
);
const transactionConfig = router.formatTransaction(
  details,
  wallet.address,
  10,
  routerAddress
);
```

#### Parameters

| Name            | Type                                   | Description                                   |
| :-------------- | :------------------------------------- | :-------------------------------------------- |
| `route`         | [`NodeRoute`](../modules.md#noderoute) | Route returned from `getRouteBase`            |
| `to`            | `string`                               | Recipient address of trade                    |
| `slippage`      | `number`                               | Allowed slippage for the trade, in bips       |
| `routerAddress` | `string`                               | Address of router that will execute the trade |

#### Returns

`TransactionRequest`

TransactionRequest corresponding to the given route

#### Defined in

[packages/sdk-core/src/Routing/SmartRouter.ts:201](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Routing/SmartRouter.ts#L201)
