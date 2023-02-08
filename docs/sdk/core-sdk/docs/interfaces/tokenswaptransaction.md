[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / TokenSwapTransaction

# Interface: TokenSwapTransaction<TokenAmountShape\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TokenAmountShape` | `SerlializedTokenAmount` |

## Hierarchy

- [`TokenTransactionBase`](TokenTransactionBase.md)

  ↳ **`TokenSwapTransaction`**

## Table of contents

### Properties

- [\_type](TokenSwapTransaction.md#_type)
- [blockNumber](TokenSwapTransaction.md#blocknumber)
- [contract](TokenSwapTransaction.md#contract)
- [inAmount](TokenSwapTransaction.md#inamount)
- [outAmount](TokenSwapTransaction.md#outamount)
- [timestamp](TokenSwapTransaction.md#timestamp)
- [transactionHash](TokenSwapTransaction.md#transactionhash)

## Properties

### \_type

• **\_type**: [`SWAP_TRANSACTION`](../enums/TokenTransactionType.md#swap_transaction)

#### Overrides

[TokenTransactionBase](TokenTransactionBase.md).[_type](TokenTransactionBase.md#_type)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:81](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L81)

___

### blockNumber

• **blockNumber**: `number`

#### Inherited from

[TokenTransactionBase](TokenTransactionBase.md).[blockNumber](TokenTransactionBase.md#blocknumber)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:48](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L48)

___

### contract

• **contract**: `string`

#### Inherited from

[TokenTransactionBase](TokenTransactionBase.md).[contract](TokenTransactionBase.md#contract)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:46](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L46)

___

### inAmount

• **inAmount**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `TokenAmountShape` |
| `valueInLocalCurrency` | `number` |

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:82](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L82)

___

### outAmount

• **outAmount**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `TokenAmountShape` |
| `valueInLocalCurrency` | `number` |

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:86](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L86)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[TokenTransactionBase](TokenTransactionBase.md).[timestamp](TokenTransactionBase.md#timestamp)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:47](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L47)

___

### transactionHash

• **transactionHash**: `string`

#### Inherited from

[TokenTransactionBase](TokenTransactionBase.md).[transactionHash](TokenTransactionBase.md#transactionhash)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:49](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L49)
