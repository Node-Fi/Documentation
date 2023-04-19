---
sidebar_position: 1
---

# Get Supported Tokens

## Get `/v1/tokens` Route

The `/v1/tokens` route provides a list of available tokens and their metadata. It also returns a list of sources that provide information about these tokens.

[`Click Here to Go to OpenAPI Spec`](../swagger/get-tokens.api.mdx)

### Input Parameters

| Parameter       | Type   | Description                                                     | Required |
| --------------- | ------ | --------------------------------------------------------------- | -------- |
| excludedSources | string | Sources to exclude when retrieving the token list and metadata. | No       |
| includedSources | string | Sources to include when retrieving the token list and metadata. | No       |

### Output

| Parameter | Type  | Description                                                |
| --------- | ----- | ---------------------------------------------------------- |
| sources   | array | An array of sources that provide information about tokens. |
| tokens    | array | An array of token objects containing token metadata.       |

Each token object in the `tokens` array contains the following properties:

| Property | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| address  | string | The token contract address.                      |
| name     | string | The full name of the token.                      |
| symbol   | string | The token's symbol (ticker).                     |
| decimals | number | The number of decimal places for the token.      |
| chainId  | number | The chain ID where the token is available.       |
| logoURI  | string | The URL to the token's logo image, if available. |

### Example Request

```sh title="Fetch Supported Tokens"

curl -X GET "https://minima.nodefinance.org/42220/v1/tokens"

```

```json title="Example Response"
{
  "sources": ["ubeswap", "curve", "ubeswap-v3"],
  "tokens": [
    {
      "address": "0x1234567890abcdef0123456789abcdef01234567",
      "name": "Celo Native Token",
      "symbol": "CELO",
      "decimals": 18,
      "chainId": 42220,
      "logoURI": "https://example.com/images/tka-logo.png"
    },
    {
      "address": "0xabcdef0123456789abcdef0123456789abcdef0123",
      "name": "USDC",
      "symbol": "USDC",
      "decimals": 6,
      "chainId": 42220,
      "logoURI": "https://example.com/images/tkb-logo.png"
    }
  ]
}
```
