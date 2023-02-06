[@node-fi/sdk-core](../README.md) / [Exports](../modules.md) / PaymentRequest

# Class: PaymentRequest<MetaDataShape\>

Class representation of a Payment request.  Facilitates queries and fulfillment

## Type parameters

| Name | Type |
| :------ | :------ |
| `MetaDataShape` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

## Table of contents

### Constructors

- [constructor](PaymentRequest.md#constructor)

### Properties

- [\_amount](PaymentRequest.md#_amount)
- [\_deadline](PaymentRequest.md#_deadline)
- [\_fulfilledOn](PaymentRequest.md#_fulfilledon)
- [\_id](PaymentRequest.md#_id)
- [\_metadata](PaymentRequest.md#_metadata)
- [\_onFulfill](PaymentRequest.md#_onfulfill)
- [\_payee](PaymentRequest.md#_payee)
- [\_payer](PaymentRequest.md#_payer)
- [\_requestedOn](PaymentRequest.md#_requestedon)
- [\_totalAmount](PaymentRequest.md#_totalamount)

### Accessors

- [deadline](PaymentRequest.md#deadline)
- [fulfilledOn](PaymentRequest.md#fulfilledon)
- [info](PaymentRequest.md#info)
- [metadata](PaymentRequest.md#metadata)
- [requestedOn](PaymentRequest.md#requestedon)

### Methods

- [fulfill](PaymentRequest.md#fulfill)
- [get](PaymentRequest.md#get)
- [setOnFulfillCallback](PaymentRequest.md#setonfulfillcallback)
- [toJSON](PaymentRequest.md#tojson)
- [create](PaymentRequest.md#create)
- [deserialize](PaymentRequest.md#deserialize)
- [fetch](PaymentRequest.md#fetch)
- [isSerializedPaymentRequest](PaymentRequest.md#isserializedpaymentrequest)
- [parseJson](PaymentRequest.md#parsejson)

## Constructors

### constructor

• **new PaymentRequest**<`MetaDataShape`\>(`_id`, `_payer`, `_payee`, `_amount`, `_totalAmount`, `_metadata?`, `_requestedOn?`, `_fulfilledOn?`, `_deadline?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MetaDataShape` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `number` |
| `_payer` | `string` |
| `_payee` | `string` |
| `_amount` | `TokenAmount` |
| `_totalAmount` | `TokenAmount` |
| `_metadata?` | `MetaDataShape` |
| `_requestedOn?` | `Date` |
| `_fulfilledOn?` | `Date` |
| `_deadline?` | `Date` |

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:62](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L62)

## Properties

### \_amount

• `Private` **\_amount**: `TokenAmount`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:66](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L66)

___

### \_deadline

• `Private` `Optional` **\_deadline**: `Date`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:71](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L71)

___

### \_fulfilledOn

• `Private` `Optional` **\_fulfilledOn**: `Date`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:70](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L70)

___

### \_id

• `Private` **\_id**: `number`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:63](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L63)

___

### \_metadata

• `Private` `Optional` **\_metadata**: `MetaDataShape`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:68](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L68)

___

### \_onFulfill

• `Private` `Optional` **\_onFulfill**: (`req?`: [`PaymentRequest`](PaymentRequest.md)<`Record`<`string`, `unknown`\>\>) => `unknown`

#### Type declaration

▸ (`req?`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req?` | [`PaymentRequest`](PaymentRequest.md)<`Record`<`string`, `unknown`\>\> |

##### Returns

`unknown`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:60](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L60)

___

### \_payee

• `Private` **\_payee**: `string`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:65](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L65)

___

### \_payer

• `Private` **\_payer**: `string`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:64](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L64)

___

### \_requestedOn

• `Private` `Optional` **\_requestedOn**: `Date`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:69](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L69)

___

### \_totalAmount

• `Private` **\_totalAmount**: `TokenAmount`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:67](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L67)

## Accessors

### deadline

• `get` **deadline**(): `undefined` \| `Date`

Deadline of payment request

#### Returns

`undefined` \| `Date`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:97](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L97)

___

### fulfilledOn

• `get` **fulfilledOn**(): `undefined` \| `Date`

Date of request fulfillment

#### Returns

`undefined` \| `Date`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:111](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L111)

___

### info

• `get` **info**(): [`PaymentRequestData`](../interfaces/PaymentRequestData.md)

Basic info on the given payment request

#### Returns

[`PaymentRequestData`](../interfaces/PaymentRequestData.md)

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:77](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L77)

___

### metadata

• `get` **metadata**(): `undefined` \| `MetaDataShape`

Custom metadata as defined in the request origination.  Shape influences Payment request.

#### Returns

`undefined` \| `MetaDataShape`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:90](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L90)

___

### requestedOn

• `get` **requestedOn**(): `undefined` \| `Date`

Date of request origination

#### Returns

`undefined` \| `Date`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:104](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L104)

## Methods

### fulfill

▸ **fulfill**(`transactionHash`): `Promise`<{ `receipt`: { `amountCredited`: `TokenAmount` ; `hash`: `string` ; `isFullyRepaid`: `boolean` ; `rid`: `number` ; `time`: `number`  } ; `request`: [`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionHash` | `string` | Hash where payment was sen |

#### Returns

`Promise`<{ `receipt`: { `amountCredited`: `TokenAmount` ; `hash`: `string` ; `isFullyRepaid`: `boolean` ; `rid`: `number` ; `time`: `number`  } ; `request`: [`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>  }\>

Receipt of payment being counted in the wallet service

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:137](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L137)

___

### get

▸ **get**(`field`, `defaultValue?`): `unknown`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | keyof `MetaDataShape` | Field to access |
| `defaultValue?` | `unknown` | - |

#### Returns

`unknown`

corresponding value in the metadata

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:120](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L120)

___

### setOnFulfillCallback

▸ **setOnFulfillCallback**(`f`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | (`req?`: [`PaymentRequest`](PaymentRequest.md)<`Record`<`string`, `unknown`\>\>) => `unknown` | Function to call when payment is fulfilled |

#### Returns

`void`

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:128](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L128)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

JSON representation of the payment request

| Name | Type |
| :------ | :------ |
| `_type` | `string` |
| `amount` | `string` |
| `deadline` | `string` |
| `fulfilledOn` | `string` |
| `metadata` | `string` |
| `payee` | `string` |
| `payer` | `string` |
| `requestedOn` | `string` |
| `rid` | `number` |
| `totalAmount` | `string` |

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:222](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L222)

___

### create

▸ `Static` **create**<`MetaDataShape`\>(`payee`, `payer`, `amount`, `signer`, `opts?`, `apiKey?`): `Promise`<[`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MetaDataShape` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payee` | `string` | Address of wallet where payments should be sent |
| `payer` | `string` | Address of wallet where payments should originate |
| `amount` | `TokenAmount` | Token and amount to be request |
| `signer` | [`Wallet`](Wallet.md)<`Signer`\> | Wallet object to authorize the request |
| `opts?` | `Object` | optionally declare a deadline for the request, or set metadata for the request |
| `opts.deadline?` | `number` \| `Date` | - |
| `opts.metadata?` | `MetaDataShape` | - |
| `apiKey?` | `string` | Optional api key for Node Finance |

#### Returns

`Promise`<[`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>\>

PaymentRequest object of newly-created request

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:302](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L302)

___

### deserialize

▸ `Static` **deserialize**<`MetaDataShape`\>(`json`, `getToken`): [`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MetaDataShape` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`PaymentRequestPayload`](../interfaces/PaymentRequestPayload.md) | JSON-representation to serialize |
| `getToken` | (`address`: `string`) => `Token` | method to fetch a token given a token address |

#### Returns

[`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>

PaymenRequest object populated with fields from json

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:241](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L241)

___

### fetch

▸ `Static` **fetch**<`MetaDataShape`\>(`id`, `getToken`, `apiKey?`): `Promise`<[`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MetaDataShape` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of payment request to fetch |
| `getToken` | (`adress`: `string`) => `Token` | Helper method to fetch a token given its address |
| `apiKey?` | `string` | Optional api key |

#### Returns

`Promise`<[`PaymentRequest`](PaymentRequest.md)<`MetaDataShape`\>\>

PaymentRequest object of corresponding ID

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:277](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L277)

___

### isSerializedPaymentRequest

▸ `Static` **isSerializedPaymentRequest**(`obj?`): obj is SerializedPaymentRequest

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj?` | `unknown` | Object to check |

#### Returns

obj is SerializedPaymentRequest

True if object is a serialized payment request

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:188](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L188)

___

### parseJson

▸ `Static` **parseJson**(`__namedParameters`): [`PaymentRequest`](PaymentRequest.md)<`Record`<`string`, `unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SerializedPaymentRequest`](../interfaces/SerializedPaymentRequest.md) |

#### Returns

[`PaymentRequest`](PaymentRequest.md)<`Record`<`string`, `unknown`\>\>

#### Defined in

[packages/sdk-core/src/PaymentRequest/PaymentRequest.ts:195](https://github.com/Node-Fi/sdk/blob/eb73fa4/packages/sdk-core/src/PaymentRequest/PaymentRequest.ts#L195)
