[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / TokenSentTransaction

# Interface: TokenSentTransaction<TokenAmountShape\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TokenAmountShape` | `SerlializedTokenAmount` |

## Hierarchy

- [`TokenTransferTransaction`](TokenTransferTransaction.md)<`TokenAmountShape`\>

  ↳ **`TokenSentTransaction`**

## Table of contents

### Properties

- [\_type](TokenSentTransaction.md#_type)
- [amount](TokenSentTransaction.md#amount)
- [blockNumber](TokenSentTransaction.md#blocknumber)
- [contract](TokenSentTransaction.md#contract)
- [fromAddress](TokenSentTransaction.md#fromaddress)
- [timestamp](TokenSentTransaction.md#timestamp)
- [toAddress](TokenSentTransaction.md#toaddress)
- [transactionHash](TokenSentTransaction.md#transactionhash)
- [valueInLocalCurrency](TokenSentTransaction.md#valueinlocalcurrency)

## Properties

### \_type

• **\_type**: [`SENT`](../enums/TokenTransactionType.md#sent)

#### Overrides

[TokenTransferTransaction](TokenTransferTransaction.md).[_type](TokenTransferTransaction.md#_type)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:70](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L70)

___

### amount

• **amount**: `TokenAmountShape`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[amount](TokenTransferTransaction.md#amount)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:64](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L64)

___

### blockNumber

• **blockNumber**: `number`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[blockNumber](TokenTransferTransaction.md#blocknumber)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:48](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L48)

___

### contract

• **contract**: `string`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[contract](TokenTransferTransaction.md#contract)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:46](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L46)

___

### fromAddress

• **fromAddress**: `string`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[fromAddress](TokenTransferTransaction.md#fromaddress)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:63](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L63)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[timestamp](TokenTransferTransaction.md#timestamp)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:47](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L47)

___

### toAddress

• **toAddress**: `string`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[toAddress](TokenTransferTransaction.md#toaddress)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:62](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L62)

___

### transactionHash

• **transactionHash**: `string`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[transactionHash](TokenTransferTransaction.md#transactionhash)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:49](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L49)

___

### valueInLocalCurrency

• `Optional` **valueInLocalCurrency**: `number`

#### Inherited from

[TokenTransferTransaction](TokenTransferTransaction.md).[valueInLocalCurrency](TokenTransferTransaction.md#valueinlocalcurrency)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:65](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L65)
