---
sidebar_position: 3
description: Use the identity SDK to handle identity verification
---

# Verify an Identity

:::warning Coming Soon - Email, Twitter, etc

Currently the Node identity service only handles phone numbers. Node is actively working on supporting email and social media handles

:::

An identity is verifed in two steps.

1. Initialize verification with Node's identity service. The identity service will send a six-digit code via sms to the provided phone number.

2. The six-digit code is sent back to the Node identity service, and the identity is verified through [ASv2](./about.md#celo-as-an-appchain)

### Start Verification

Identity verification is started with a call to `startVerification`, with the wallet address and phonenumber.

The phone number MUST include country code and area code. Many different phone number formats are accepted.

```ts
kit.startVerification("0xbeefbeefbeefbeef ...", "+1 (123) 456-7890");
```

The return payload will include a `verification` field with the following properties:

```ts
{
    status: 'pending' | 'verified',
    unixTimestamp: number
}
```

### Handling Already Verified Phonenumbers

If the phone number is already mapped to the given address, then the status will be `'verified'` and no further action is necessary.

### Complete the verification process

:::tip Code Autocomplete

Assign your text field a type of `textContentType="oneTimeCode"` to trigger auto-complete from the Node identity sms

:::

If the status is `"pending"`, then the return payload also includes a callback `submit(code: string)`, which will accept the six-digit code sent to the provided phone number. Once `submit` is called with the correct six-digit code, the verification process will complete and the returned `verification` field will have a status of `"verified"`.
