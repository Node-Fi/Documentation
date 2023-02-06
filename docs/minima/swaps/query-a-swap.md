---
description: Query a swap from the API
---

# Query a Swap

{% swagger src="https://raw.githubusercontent.com/Node-Fi/Specs/main/NodeRouter.yaml" path="/routes" method="get" %}
[https://raw.githubusercontent.com/Node-Fi/Specs/main/NodeRouter.yaml](https://raw.githubusercontent.com/Node-Fi/Specs/main/NodeRouter.yaml)
{% endswagger %}

Follow the above OpenAPI spec to query the routes endpoint, and receive a swap quote.

The return data will have the shape:

```typescript
interface ReturnData {
    expectedOut: string,
    routerAddress: Address,
    details: {
        path: Address[],
        pairs: Address[],
        extras: string[],
        inputAmount: BigNumberString,
        expectedOutputAmount: BigNumberString,
        deadline: number,
        partner: number,
        sig: string
    }
}

type Address = string
type BigNumberString = string
```

| Field           | Description                                                                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expectedOut`   | Non decimal-adjusted output amount for the given trade.  When displayed on a UI, you will have to account for decimals.                                                                                                      |
| `routerAddress` | Address at the correct router implementation to perform the swap                                                                                                                                                             |
| `details`       | Information necessary to perform the swap on chain.  Some details, such as path, may be interesting to the end user.  See [execute-a-swap.md](execute-a-swap.md "mention") for a deeper breakdown of the `details`\` object. |
