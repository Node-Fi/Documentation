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

If the phone number is already mapped to an given address, then the status will be `'verified'` and no further action is necessary. `startVerification` has an optional third parameter `force?: boolean`, which if true will force an attestation to be initiated for the given phone number, even if the phone number is already attested by a given trusted attestor.

```ts
// If already verified, then try again but force the start of attestation

kit.startVerification("0xbeefbeefbeefbeef ...", "+1 (123) 456-7890").then((resp) => {
    if
})
```

---

### Complete the verification process

:::tip Code Autocomplete

Assign your text field a type of `textContentType="oneTimeCode"` to trigger auto-complete from the Node identity sms

:::

On a successful attestation initialization, the NodeIdentityKit object will record the phone number and address of the pending attestation. To complete the attestation, simply use

```ts
kit.submitVerification(otp);
```

to submit the one time password sent by Node.

If you end up using a different instance of the NodeIdentityKit, then you will also need to provide the address and phonenumber again, in the same format as previously provided.

This would look like:

```ts
kit.submitVerification(opt, address, phonenumber);
```

Here is a full example:

```tsx
import { NodeIdentityKit } from "@node-fi/identity";

const kit = new NodeIdentityKit("my-api-key");

enum ApprovalState {
  INITIAL,
  VERIFICATION_START_LOADING,
  VERIFICATION_START_ERROR,
  VERIFICATION_START_SUCCESS,
  VERIFICATION_SUBMIT_LOADING,
  VERIFICATION_SUBMIT_ERROR,
  VERIFICATION_SUBMIT_SUCCESS,
  ALREADY_VERIFIED,
}

function Verification() {
  const [state, setState] = useState<ApprovalState>(ApprovalState.INITIAL);
  const onSubmitPhonenumber = useCallback(async (phonnumber: string) => {
    setState(ApprovalState.VERIFICATION_START_LOADING);

    try {
        { verification: { status } } = await kit.startVerification(address, phonenumber);

        if (status === "verified") setState(ApprovalState.ALREADY_VERIFIED);
        else setState(ApprovalState.VERIFICATION_START_SUCCESS);

    } catch () {
        setState(ApprovalState.VERIFICATION_START_ERROR)
    }
  }, []);

  const onSubmitOtp = useCallback(async (otp: string | number) => {
    setState(ApprovalState.VERIFICATION_SUBMIT_LOADING)

    try {
        await kit.submitVerification(otp)
        setState(ApprovalState.VERIFICATION_SUBMIT_SUCCESS)
    } catch () {
        setState(ApprovalState.VERIFICATION_SUBMIT_ERROR)
    }
  })

  ...
}
```
