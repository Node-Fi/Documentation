[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / IDepositablePosition

# Interface: IDepositablePosition

## Implemented by

- [`DepositablePosition`](../classes/DepositablePosition.md)

## Table of contents

### Properties

- [deposit](IDepositablePosition.md#deposit)
- [withdraw](IDepositablePosition.md#withdraw)

## Properties

### deposit

• **deposit**: (`inputToken`: `string`, `inputAmount`: `BigintIsh`, `opts?`: `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\>) => `Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `TokenAmount` ; `minimumOutput`: `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

#### Type declaration

▸ (`inputToken`, `inputAmount`, `opts?`): `Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `TokenAmount` ; `minimumOutput`: `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `inputToken` | `string` |
| `inputAmount` | `BigintIsh` |
| `opts?` | `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\> |

##### Returns

`Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `TokenAmount` ; `minimumOutput`: `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:23](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L23)

___

### withdraw

• **withdraw**: (`amount`: `BigNumberish` \| `TokenAmount`, `destinationToken`: `string` \| `Token`, `opts?`: `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\>) => `Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `JSBI` \| `TokenAmount` ; `minimumOutput`: `JSBI` \| `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

#### Type declaration

▸ (`amount`, `destinationToken`, `opts?`): `Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `JSBI` \| `TokenAmount` ; `minimumOutput`: `JSBI` \| `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` \| `TokenAmount` |
| `destinationToken` | `string` \| `Token` |
| `opts?` | `Partial`<[`MinimaOptions`](../modules.md#minimaoptions)\> |

##### Returns

`Promise`<{ `approvalTarget?`: `string` ; `execute?`: [`TransactionStep`](../modules.md#transactionstep) ; `expectedOutput`: `JSBI` \| `TokenAmount` ; `minimumOutput`: `JSBI` \| `TokenAmount` ; `transaction?`: `TransactionRequest`  }\>

#### Defined in

[packages/sdk-core/src/Earn/DepositablePosition.ts:35](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/Earn/DepositablePosition.ts#L35)
