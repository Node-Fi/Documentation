---
sidebar_position: 2
description: Lookup an address from a given identifier
---

# Lookup Address

:::warning Coming Soon - Email, Twitter, etc

Currently the Node identity service only handles phone numbers. Node is actively working on supporting email and social media handles

:::

An address can be looked up through the `lookup` method exposed from the [`NodeIdentityKit.`](./setup.md#example)

### Lookup

Looks up the address associated with the given phone number.

#### Parameters

| Name             | Type           | Default   | Description                                                          |
| ---------------- | -------------- | --------- | -------------------------------------------------------------------- |
| `identifier`     | `string`       |           | Phone number to look up                                              |
| `identifierType` | `IdentityType` | `"phone"` | Type of identifier to look up. Currently, only "phone" is supported. |

#### Returns

| Name       | Type     | Description                                                                                |
| ---------- | -------- | ------------------------------------------------------------------------------------------ |
| `address`  | `string` | Address associated with the phone number                                                   |
| `attestor` | `string` | Address of the attestor that attested the association between the phone number and address |
| `issuedOn` | `number` | Unix timestamp of when the attestation was issued                                          |

### Handling Multiple Attestations

If there are multiple attestations for the given phone number, they are sorted based on the `mergeStrategy` specified in the constructor. If `mergeStrategy` is set to "latest", the most recent attestation will be used. If `mergeStrategy` is set to "earliest", the earliest attestation will be used.

If there are multiple attestations from different attestors, the `_trustFactor` object is used to determine which attestation to use. Attestations from trusted attestors (as specified in the `trustedAttestors` array passed to the constructor) are given a higher priority, with the priority being determined by the index of the attestor in the `trustedAttestors` array. If an attestation is from Node, it is given a priority equal to the length of the `trustedAttestors` array (i.e. the lowest priority).

### Example

```ts
import { NodeIdentityKit, Attestor } from "@node-fi/identity";
import { getApiKey, TokenAmount, Wallet } from "@node-fi/sdk-core";

const kit = new NodeIdentityKit(
  getApiKey(),
  Attestor.fetchByNames(["node", "valora", "kaala"])
);

const sendToPhoneNumber = async (
  from: Wallet,
  amount: TokenAmount,
  recipientPhoneNumber: string
) => {
  const { address } = await kit.lookup(recipientPhoneNumber);
  return from.send(amount, address);
};
```
