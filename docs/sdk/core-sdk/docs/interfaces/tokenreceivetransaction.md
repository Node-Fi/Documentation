[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / TokenReceiveTransaction

# Interface: TokenReceiveTransaction<TokenAmountShape\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TokenAmountShape` | `SerlializedTokenAmount` |

## Hierarchy

- [`TokenTransferTransaction`](TokenTransferTransaction.md)<`TokenAmountShape`\>

  ↳ **`TokenReceiveTransaction`**

## Table of contents

### Properties

- [\_type](TokenReceiveTransaction.md#_type)
- [amount](TokenReceiveTransaction.md#amount)
- [blockNumber](TokenReceiveTransaction.md#blocknumber)
- [contract](TokenReceiveTransaction.md#contract)
- [fromAddress](TokenReceiveTransaction.md#fromaddress)
- [timestamp](TokenReceiveTransaction.md#timestamp)
- [toAddress](TokenReceiveTransaction.md#toaddress)
- [transactionHash](TokenReceiveTransaction.md#transactionhash)
- [valueInLocalCurrency](TokenReceiveTransaction.md#valueinlocalcurrency)

## Properties

### \_type

• **\_type**: [`RECEIVED`](../enums/TokenTransactionType.md#received)

#### Overrides

[TokenTransferTransaction](TokenTransferTransaction.md).[_type](TokenTransferTransaction.md#_type)

#### Defined in

[packages/sdk-core/src/Transactions/types.ts:76](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Transactions/types.ts#L76)

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
