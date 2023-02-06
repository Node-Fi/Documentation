---
description: Use the response from the previous step to perform a swap
---

# Execute a Swap

As outlined in the previous page, the `/routes` endpoint will return data with the shape of:

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

For executing a swap, every field that is needed is contained within the `details` object.

Here is a breakdown of the `details` object:

| Field                  | Type             | Description                                                                                                                                                                                                                  |
| ---------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                 | Array of strings | An array containing token addresses in order of the swap route.  The final item in the `path` should be the `outputToken` that was supplied in the previous query.                                                           |
| `pairs`                | Array of strings | An array containing addresses of trade pairs, in order of the swap route.                                                                                                                                                    |
| `extras`               | Array of strings | Extra data needed for each pair.                                                                                                                                                                                             |
| `inputAmount`          | string           | Non decimal-adjusted input amount.  Same value as supplied to the endpoint.                                                                                                                                                  |
| `expectedOutputAmount` | string           | Non decimal-adjusted expected output amount.  This value should be used, along with some slippage value, to determine the minimum expected output.                                                                           |
| `deadline`             | integer          | Unix timestamp (seconds) of when the trade must be executed by.                                                                                                                                                              |
| `partner`              | integer          | The tenant id for the corresponding api key supplied in the request from [query-a-swap.md](query-a-swap.md "mention")                                                                                                        |
| `sig`                  | string           | Signed message verifying the tenant id along with various other aspects of the trade.  If this is modified at all then the user will incur a 1% fee due to the contract not being able to verify the authorizer of the swap. |

The `details` purposefully details the struct recognized by the Swap router as `SwapPayload`.  This struct looks like:

```solidity
struct SwapPayload {
		address[] path;
		address[] pairs;
		bytes[] extras;
		uint256 inputAmount;
		uint256 minOutputAmount;
		uint256 expectedOutputAmount;
		address to;
		uint deadline;
		uint256 partner;
		bytes sig;
	}
```

Using the above details, the transaction can be created for the Swap router.  The address for the swap router is supplied in the response from [#routes](query-a-swap.md#routes "mention").  The function to call has the following declaration:

```solidity
function swapExactInputForOutput(
		SwapPayload calldata details
	) external returns (uint256 outputAmount);
```

Once the transaction has been created, use the user's preferred wallet provider to sign the transaction and send it to be committed on chain.
