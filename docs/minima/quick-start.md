---
description: Get up and running with the Minima API
sidebar_position: 1
---

# Quick Start

## API keys (optional)

API Keys are entirely optional, so why even use one for your integration?

1. 🔍 Tracking volume! API Keys are how we can track volume per integration, and provide you with details on volume that moves through your specific integration.
2. 💸 Set your own custom trade fee. This fee will be directed to your configured fee collector address

To get your API keys, head over to [nodefinance.org](https://nodefinance.org) and click "Start for free." Once you create your account, log-in, go to the "Mission Control" section and click "API Keys" to generate your keys.

## Defining Chain ID

Chain ID is defined in the base path, like so:

`https://minima.nodefinance.org/{chain}`

Here, `chain` can be either the base 10 chain id or the name of the chain.

| Chain | Name      | Status      |
| ----- | --------- | ----------- |
| 4220  | Celo      | LIVE        |
| 137   | Polygon   | LIVE        |
| 4337  | Avalanche | Coming Soon |
| 1     | Ethereum  | Coming Soon |
| 10    | Optimism  | Coming Soon |
| 42161 | Arbitrum  | Coming Soon |
| 56    | BSC       | Coming Soon |

## Include API Keys

Include your API key in the header such as the following:

```
X-API-KEY = <API Key>
```

:::info Good to know

API Keys are entirely optional, your integration will still work without them!

:::

## Make your first request

To make your first request, send an authenticated request to the `/v1/swap/quote` endpoint. This will calculate a route.

:::info Good to know

If a route cannot be found between two tokens, you will receive an error message which designates that.

:::

Take a look at how you might call this method:

```sh title="Curl"
curl -X GET -G \
    "https://minima.nodefinance.org/celo/v1/swap/quote" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -H "X-Api-Key": <API Key> \
    -d sellToken=0x471EcE3750Da237f93B8E339c536989b8978a438 \
    -d buyToken=0x73a210637f6F6B7005512677Ba6B3C96bb4AA44B \
    -d sellAmount=10000000000000000000000 \
    -d skipValidation=true
```
