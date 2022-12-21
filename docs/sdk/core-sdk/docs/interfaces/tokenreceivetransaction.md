# TokenReceiveTransaction

[@node-fi/sdk-core](../) / [Exports](../modules.md) / TokenReceiveTransaction

## Interface: TokenReceiveTransaction

### Hierarchy

*   [`TokenTransferTransaction`](tokentransfertransaction.md)

    ↳ **`TokenReceiveTransaction`**

### Table of contents

#### Properties

* [\_type](tokenreceivetransaction.md#\_type)
* [amount](tokenreceivetransaction.md#amount)
* [blockNumber](tokenreceivetransaction.md#blocknumber)
* [contract](tokenreceivetransaction.md#contract)
* [fee](tokenreceivetransaction.md#fee)
* [fromAddress](tokenreceivetransaction.md#fromaddress)
* [timestamp](tokenreceivetransaction.md#timestamp)
* [toAddress](tokenreceivetransaction.md#toaddress)
* [transactionHash](tokenreceivetransaction.md#transactionhash)
* [valueInLocalCurrency](tokenreceivetransaction.md#valueinlocalcurrency)

### Properties

#### \_type

• **\_type**: [`RECEIVED`](../enums/tokentransactiontype.md#received)

**Overrides**

[TokenTransferTransaction](tokentransfertransaction.md).[\_type](tokentransfertransaction.md#\_type)

**Defined in**

[Transactions/types.ts:53](https://github.com/Node-Fi/SDK-Core/blob/1f4f819/src/Transactions/types.ts#L53)

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
