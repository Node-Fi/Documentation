---
sidebar_positon: 3
---

# Get Available Sources

## GET `/v1/sources` Route

The `/v1/sources` route provides a list of available sources that can be used for token swap operations.

[View the OpenApi Spec Here](../swagger/get-swap-sources.api.mdx)

### Output

| Parameter | Type  | Description                                                     |
| --------- | ----- | --------------------------------------------------------------- |
| sources   | array | An array of sources that can be used for token swap operations. |

### Example Request

```sh
curl -X GET "https://minima.nodefinance.org/42220/v1/sources"
```

```json title="Example Response"
{
  "sources": ["ubeswap", "ubeswap-v3", "curve"]
}
```
