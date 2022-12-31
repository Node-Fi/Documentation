---
sidebar_position: 1
---

# Setup

This page covers how to get quickly up-and-running with the Node Identity SDK

### Installation

#### via yarn

```bash
yarn add @node-fi/identity
```

#### via npm

```bash
npm install @node-fi/identity
```

### Get started

To use the identity sdk, simply import and create a new instance of `NodeIdentityKit`

#### Parameters

| Name               | Type                           | Default    | Description                                                                                                                                         |
| ------------------ | ------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_apiKey`          | `string`                       |            | Node API Key                                                                                                                                        |
| `trustedAttestors` | `string[]`                     | `[]`       | Array of trusted attestor addresses                                                                                                                 |
| `mergeStrategy`    | `"latest"` &#124; `"earliest"` | `"latest"` | Strategy to use when merging multiple attestations. Use "latest" to use the most recent attestation, or "earliest" to use the earliest attestation. |

The only required paramter is `apiKey`, which will be the same api key used elsewhere in the Node stack.

As outlined in [about](./about.md#trusting-other-attestors), you can specify additional attestors to trust. By default Node is the trusted attestors. Attestors will be assigned a trust score in the order given, such that Attestor i has a greater trust score than Attestor i + 1. Node attestor, unless explicityly listed, will be assigned the lowest trust score, such that all other listed attestors are prioritized first.

In some cases, an identifier may link to multiple addresses. To handle this case, there is an optional `mergeStrategy` parameter. A strategy of `"latest"` will put greater trust in the most recent attestation from the most trusted attestor. `"earliest"` will put greater trust in the first attestation from the most trusted attestor.

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
