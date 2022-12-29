---
description: Wallet data can only be served if a wallet is registered within Node's system
sidebar_position: 0.5
---

# Wallet Registration

Regardless of whether a wallet is a local signer, external signer, or MPC wallet, historical data for a wallet can only be served if it is registered within Node's system. There are two different models are wallet registration available to tenants:

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

The default option is privacy preserving, and tenants will have to opt-in to metadata-enriched via sdk.

### Opt Out of Registration Entirely

In some cases a developer may want to entirely opt-out of registering a wallet with Node. This could be for keeping costs down, or for extreme privacy preservation (although privacy-preservation model only works off of on-chain data).

By default, a wallet will try to register itself in two areas:

1. callback from `useCreateWallet`
2. callback from `useLoadWallet`

In both cases, the payload to the callback can include an object of the shape:

```ts
interface RegistrationOptions {
  registrationOptions: {
    optInMetatdata: boolean;
    doNotRegister: boolean;
  };
}
```

Here, setting `doNotRegister: true` will result in the wallet not being registered at all within Node's systems.

### Enable Metadata-Enriched Model

By default, a wallet will try to register itself in two areas:

1. callback from `useCreateWallet`
2. callback from `useLoadWallet`

In both cases, the payload to the callback can include an object of the shape:

```ts
interface RegistrationOptions {
  registrationOptions: {
    optInMetatdata: boolean;
    doNotRegister: boolean;
  };
}
```

Here, setting `optInMetatdata: true` will result in metadata-enriched model being used for the given wallet.
