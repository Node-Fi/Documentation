[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / TokenTransferTransaction

# Interface: TokenTransferTransaction<TokenAmountShape\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TokenAmountShape` | `SerlializedTokenAmount` |

## Hierarchy

- [`TokenTransactionBase`](TokenTransactionBase.md)

  ↳ **`TokenTransferTransaction`**

  ↳↳ [`TokenSentTransaction`](TokenSentTransaction.md)

  ↳↳ [`TokenReceiveTransaction`](TokenReceiveTransaction.md)

## Table of contents

### Properties

- [\_type](TokenTransferTransaction.md#_type)
- [amount](TokenTransferTransaction.md#amount)
- [blockNumber](TokenTransferTransaction.md#blocknumber)
- [contract](TokenTransferTransaction.md#contract)
- [fromAddress](TokenTransferTransaction.md#fromaddress)
- [timestamp](TokenTransferTransaction.md#timestamp)
- [toAddress](TokenTransferTransaction.md#toaddress)
- [transactionHash](TokenTransferTransaction.md#transactionhash)
- [valueInLocalCurrency](TokenTransferTransaction.md#valueinlocalcurrency)

## Properties

### \_type

• **\_type**: [`RECEIVED`](../enums/TokenTransactionType.md#received) \| [`SENT`](../enums/TokenTransactionType.md#sent)

#### Overrides

[TokenTransactionBase](TokenTransactionBase.md).[_type](TokenTransactionBase.md#_type)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:61](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L61)

___

### amount

• **amount**: `TokenAmountShape`

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:64](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L64)

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

### fromAddress

• **fromAddress**: `string`

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:63](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L63)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[TokenTransactionBase](TokenTransactionBase.md).[timestamp](TokenTransactionBase.md#timestamp)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:47](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L47)

___

### toAddress

• **toAddress**: `string`

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:62](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L62)

___

### transactionHash

• **transactionHash**: `string`

#### Inherited from

[TokenTransactionBase](TokenTransactionBase.md).[transactionHash](TokenTransactionBase.md#transactionhash)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:49](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L49)

___

### valueInLocalCurrency

• `Optional` **valueInLocalCurrency**: `number`

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:65](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L65)
