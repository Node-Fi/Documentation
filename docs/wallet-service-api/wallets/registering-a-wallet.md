---
sidebar_position: 0
description: Register a wallet within the Node ecosystem
---

# Register a Wallet

In order to serve historical data for a wallet, the wallet must first be registered within the Node Finance system. Upon registration, the wallet is assigned a unique numeric identifier. Future queries can reference the wallet via its numeric ID or address, the ID is mainly used for optimization in the Node stack.

There are two different models are wallet registration available to tenants:

1. Privacy Preserving
2. Metadata Enriched

### Privacy-Preserving vs Metadata-Enriched

Privacy preserving, as the name implies, does not record any data on a wallet besides what is absolutely necessary. This means info is only stored that is publicly accessible via on-chain activity. No off-chain information is collected.

Metadata enriched stores offchain metadata for each wallet under a tenant. Per wallet, this includes:

- Device type
- Operating system
- Operating system version
- Manufacturer
- Carrier (if on mobile)
- Device brand
- IP address of initial login

Additionally, per session per wallet the following info is recorded:

- IP address

From the IP address, we derive geolocation.

We expose these two very different models because in some cases the additional metadata is essential for an application-specific wallet, but in other cases developers/companies will not want to track any personal information for their users. We fully commit to only recording metadata on wallets when authorized by the tenant. The option to enable/disable this tracking is accessible via SDK, so it is also functionality that can default to the user to opt-in to.

When registering directly via API, info on device type must be supplied if the metadata-enriched model is prefered. Traditionally this call is done through the React Native SDK, where device info can easily be included.

### Endpoint

`POST /wallets`

### Headers

| Name        | Required | Description  |
| ----------- | -------- | ------------ |
| `x-api-key` | Yes      | Node API Key |

### Body

| Name       | Type          | Required | Description                    |
| ---------- | ------------- | -------- | ------------------------------ |
| `address`  | `string`      | Yes      | Ethereum address of the wallet |
| `metadata` | `MetaDataDto` | No       | Metadata for the wallet        |

#### MetaDataDto

| Name           | Type                       | Required | Description             |
| -------------- | -------------------------- | -------- | ----------------------- |
| `device_type`  | `"iOS"` &#124; `"android"` | No       | Type of device          |
| `device_brand` | `string`                   | No       | Brand of device         |
| `country`      | `string`                   | No       | Two-letter country code |
| `other`        | `object`                   | No       | Other metadata fields   |

### Response

A successful response will return a `201 Created` status code and the newly created wallet object.
