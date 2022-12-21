# TokenSentTransaction

[@node-fi/sdk-core](../) / [Exports](../modules.md) / TokenSentTransaction

## Interface: TokenSentTransaction

### Hierarchy

*   [`TokenTransferTransaction`](tokentransfertransaction.md)

    ↳ **`TokenSentTransaction`**

### Table of contents

#### Properties

* [\_type](tokensenttransaction.md#\_type)
* [amount](tokensenttransaction.md#amount)
* [blockNumber](tokensenttransaction.md#blocknumber)
* [contract](tokensenttransaction.md#contract)
* [fee](tokensenttransaction.md#fee)
* [fromAddress](tokensenttransaction.md#fromaddress)
* [timestamp](tokensenttransaction.md#timestamp)
* [toAddress](tokensenttransaction.md#toaddress)
* [transactionHash](tokensenttransaction.md#transactionhash)
* [valueInLocalCurrency](tokensenttransaction.md#valueinlocalcurrency)

### Properties

#### \_type

• **\_type**: [`SENT`](../enums/tokentransactiontype.md#sent)

**Overrides**

[TokenTransferTransaction](tokentransfertransaction.md).[\_type](tokentransfertransaction.md#\_type)

**Defined in**

[Transactions/types.ts:49](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L49)

***

#### amount

• **amount**: [`TokenAmount`](../classes/tokenamount.md)

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[amount](tokentransfertransaction.md#amount)

**Defined in**

[Transactions/types.ts:44](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L44)

***

#### blockNumber

• **blockNumber**: `number`

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[blockNumber](tokentransfertransaction.md#blocknumber)

**Defined in**

[Transactions/types.ts:35](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L35)

***

#### contract

• **contract**: `string`

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[contract](tokentransfertransaction.md#contract)

**Defined in**

[Transactions/types.ts:33](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L33)

***

#### fee

• `Optional` **fee**: [`FeeInfo`](feeinfo.md)

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[fee](tokentransfertransaction.md#fee)

**Defined in**

[Transactions/types.ts:37](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L37)

***

#### fromAddress

• **fromAddress**: `string`

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[fromAddress](tokentransfertransaction.md#fromaddress)

**Defined in**

[Transactions/types.ts:43](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L43)

***

#### timestamp

• **timestamp**: `number`

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[timestamp](tokentransfertransaction.md#timestamp)

**Defined in**

[Transactions/types.ts:34](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L34)

***

#### toAddress

• **toAddress**: `string`

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[toAddress](tokentransfertransaction.md#toaddress)

**Defined in**

[Transactions/types.ts:42](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L42)

***

#### transactionHash

• **transactionHash**: `string`

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[transactionHash](tokentransfertransaction.md#transactionhash)

**Defined in**

[Transactions/types.ts:36](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L36)

***

#### valueInLocalCurrency

• `Optional` **valueInLocalCurrency**: `number`

**Inherited from**

[TokenTransferTransaction](tokentransfertransaction.md).[valueInLocalCurrency](tokentransfertransaction.md#valueinlocalcurrency)

**Defined in**

[Transactions/types.ts:45](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L45)
