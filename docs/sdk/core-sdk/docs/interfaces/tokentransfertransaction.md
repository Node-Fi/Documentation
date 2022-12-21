# TokenTransferTransaction

[@node-fi/sdk-core](../) / [Exports](../modules.md) / TokenTransferTransaction

## Interface: TokenTransferTransaction

### Hierarchy

*   [`TokenTransactionBase`](tokentransactionbase.md)

    ↳ **`TokenTransferTransaction`**

    ↳↳ [`TokenSentTransaction`](tokensenttransaction.md)

    ↳↳ [`TokenReceiveTransaction`](tokenreceivetransaction.md)

### Table of contents

#### Properties

* [\_type](tokentransfertransaction.md#\_type)
* [amount](tokentransfertransaction.md#amount)
* [blockNumber](tokentransfertransaction.md#blocknumber)
* [contract](tokentransfertransaction.md#contract)
* [fee](tokentransfertransaction.md#fee)
* [fromAddress](tokentransfertransaction.md#fromaddress)
* [timestamp](tokentransfertransaction.md#timestamp)
* [toAddress](tokentransfertransaction.md#toaddress)
* [transactionHash](tokentransfertransaction.md#transactionhash)
* [valueInLocalCurrency](tokentransfertransaction.md#valueinlocalcurrency)

### Properties

#### \_type

• **\_type**: [`RECEIVED`](../enums/tokentransactiontype.md#received) | [`SENT`](../enums/tokentransactiontype.md#sent)

**Overrides**

[TokenTransactionBase](tokentransactionbase.md).[\_type](tokentransactionbase.md#\_type)

**Defined in**

[Transactions/types.ts:41](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L41)

***

#### amount

• **amount**: [`TokenAmount`](../classes/tokenamount.md)

**Defined in**

[Transactions/types.ts:44](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L44)

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

#### fromAddress

• **fromAddress**: `string`

**Defined in**

[Transactions/types.ts:43](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L43)

***

#### timestamp

• **timestamp**: `number`

**Inherited from**

[TokenTransactionBase](tokentransactionbase.md).[timestamp](tokentransactionbase.md#timestamp)

**Defined in**

[Transactions/types.ts:34](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L34)

***

#### toAddress

• **toAddress**: `string`

**Defined in**

[Transactions/types.ts:42](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L42)

***

#### transactionHash

• **transactionHash**: `string`

**Inherited from**

[TokenTransactionBase](tokentransactionbase.md).[transactionHash](tokentransactionbase.md#transactionhash)

**Defined in**

[Transactions/types.ts:36](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L36)

***

#### valueInLocalCurrency

• `Optional` **valueInLocalCurrency**: `number`

**Defined in**

[Transactions/types.ts:45](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L45)
