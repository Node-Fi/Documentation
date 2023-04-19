---
sidebar_position: 0
---

# Get a Swap Quote

## GET `/v1/swap/quote` Route

### Description

The `/v1/swap/quote` route provides a detailed quote for swapping tokens using Minima. It returns everything needed to fulfill a swap across multiple DEXes on a network.

[`Click Here to Go to OpenAPI Spec`](../swagger/get-swap-quote.api.mdx)

### Input Parameters

| Parameter          | Type    | Description                                                                                   | Required |
| ------------------ | ------- | --------------------------------------------------------------------------------------------- | -------- |
| sellToken          | string  | The token you want to sell, in the format `0x[a-fA-F0-9]{40}`.                                | Yes      |
| buyToken           | string  | The token you want to buy, in the format `0x[a-fA-F0-9]{40}`.                                 | Yes      |
| sellAmount         | string  | The amount of tokens you want to sell, as a string of numbers.                                | Yes      |
| slippagePercentage | number  | The maximum acceptable slippage percentage. Default is 0.01. 1 = 100%. Default slippage is 1% | No       |
| excludedSources    | string  | Sources to exclude when calculating the swap quote.                                           | No       |
| includedSources    | string  | Sources to include when calculating the swap quote.                                           | No       |
| maxHops            | number  | The maximum number of hops allowed in the routing. Default is 3.                              | No       |
| takerAddress       | string  | The taker's address, in the format `0x[a-fA-F0-9]{40}`.                                       | No       |
| maxPaths           | number  | The maximum number of paths to be used in the routing. Default is 4.                          | No       |
| skipValidation     | boolean | Whether to skip validation for the swap quote.                                                | No       |
| includeRawParams   | boolean | Whether to include raw parameters in the response.                                            | No       |

### Output

| Parameter            | Type               | Description                                                                                              |
| -------------------- | ------------------ | -------------------------------------------------------------------------------------------------------- |
| price                | number             | The estimated price of the swap.                                                                         |
| guaranteedPrice      | number             | The minimum price guaranteed for the swap.                                                               |
| validationCheck      | object             | Contains status ("success", "reverted", "deferred") and a message describing the revert reason (if any). |
| transaction          | TransactionRequest | The transaction object .                                                                                 |
| expectedOutput       | string             | The expected output amount after the swap.                                                               |
| minimumOutput        | string             | The minimum output amount after the swap, accounting for slippage.                                       |
| allowanceTarget      | string             | The address to which the allowance should be set.                                                        |
| estimatedPriceImpact | number             | The estimated price impact of the swap.                                                                  |
| rawParams (optional) | object             | Contains additional parameters, such as path, pairs, extras, divisors, inputAmounts, etc.                |

### Errors

| HTTP Status Code | Error              | Description                                                                                                                                  |
| ---------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 400              | No routes found    | No suitable routes were found for the requested token swap.                                                                                  |
| 400              | Unsupported tokens | One or more tokens in the requested swap are not supported by the API. The `tokens` field will contain the address of the unsupported tokens |

## Transaction Validation

By default the Minima API will validate a transaction to ensure that it will succeed.

The field `validationCheck` contains information on the result of this validation.

Validatiion Check has the following shape:

```ts title="ValidationCheck"
enum ValidationResult {
  Success = "success",
  Reverted = "reverted",
  Deferred = "deferred",
}

type ValidationCheck = {
  status: ValidationResult;
  message?: string;
};
```

### Effect on Latency

Transaction validation has a significant effect on request latency. P99 without validation is sub 200 ms, while P99 with validation is 800ms.

We are actively working to close the gap here, but if your integration requires low latency then it is suggested to always pass `skipValidation=true` in your query.

### Transaction Reverted

If the transaction reverts during validation, minima will not respond with an error code, as the revert could be a matter of token approval, in which case the quote is still valid.

In the case of a reverted transaction, the status will indicate this with a value of `"reverted"`, and he `message` field will contain the revert reason.

Here is an example:

```ts title="Revert Example Message"
const revertedValidationCheck: ValidationCheck = {
  status: "reverted",
  message: "transfer exceeds allowance of sender",
};
```

## Requesting Raw Params

By default, the Minima API will format the transaction and include it in the response.

For the sake of transparency, callers are able to request the raw transaction parameters in order to build the transaction themselves.

This can be achieved by setting `includeRawParams=true` in your query.
