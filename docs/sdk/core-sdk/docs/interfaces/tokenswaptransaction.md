# TokenSwapTransaction

[@node-fi/sdk-core](../) / [Exports](../modules.md) / TokenSwapTransaction

## Interface: TokenSwapTransaction

### Hierarchy

*   [`TokenTransactionBase`](tokentransactionbase.md)

    ↳ **`TokenSwapTransaction`**

### Table of contents

#### Properties

* [\_type](tokenswaptransaction.md#\_type)
* [blockNumber](tokenswaptransaction.md#blocknumber)
* [contract](tokenswaptransaction.md#contract)
* [fee](tokenswaptransaction.md#fee)
* [inAmount](tokenswaptransaction.md#inamount)
* [outAmount](tokenswaptransaction.md#outamount)
* [timestamp](tokenswaptransaction.md#timestamp)
* [transactionHash](tokenswaptransaction.md#transactionhash)

### Properties

#### \_type

• **\_type**: [`SWAP_TRANSACTION`](../enums/tokentransactiontype.md#swap\_transaction)

**Overrides**

[TokenTransactionBase](tokentransactionbase.md).[\_type](tokentransactionbase.md#\_type)

**Defined in**

[Transactions/types.ts:57](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L57)

***

#### blockNumber

• **blockNumber**: `number`

**Inherited from**

[TokenTransactionBase](tokentransactionbase.md).[blockNumber](tokentransactionbase.md#blocknumber)

**Defined in**

[Transactions/types.ts:35](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L35)

***

#### contract

• **contract**: `string`

**Inherited from**

[TokenTransactionBase](tokentransactionbase.md).[contract](tokentransactionbase.md#contract)

**Defined in**

[Transactions/types.ts:33](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L33)

***

#### fee

• `Optional` **fee**: [`FeeInfo`](feeinfo.md)

**Inherited from**

[TokenTransactionBase](tokentransactionbase.md).[fee](tokentransactionbase.md#fee)

**Defined in**

[Transactions/types.ts:37](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L37)

***

#### inAmount

• **inAmount**: `Object`

**Type declaration**

| Name                   | Type                                       |
| ---------------------- | ------------------------------------------ |
| `amount`               | [`TokenAmount`](../classes/tokenamount.md) |
| `valueInLocalCurrency` | `number`                                   |

**Defined in**

[Transactions/types.ts:58](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L58)

***

#### outAmount

• **outAmount**: `Object`

**Type declaration**

| Name                   | Type                                       |
| ---------------------- | ------------------------------------------ |
| `amount`               | [`TokenAmount`](../classes/tokenamount.md) |
| `valueInLocalCurrency` | `number`                                   |

**Defined in**

[Transactions/types.ts:62](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L62)

***

#### timestamp

• **timestamp**: `number`

**Inherited from**

[TokenTransactionBase](tokentransactionbase.md).[timestamp](tokentransactionbase.md#timestamp)

**Defined in**

[Transactions/types.ts:34](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L34)

***

#### transactionHash

• **transactionHash**: `string`

**Inherited from**

[TokenTransactionBase](tokentransactionbase.md).[transactionHash](tokentransactionbase.md#transactionhash)

**Defined in**

[Transactions/types.ts:36](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L36)
