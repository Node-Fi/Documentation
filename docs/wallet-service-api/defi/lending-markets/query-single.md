# Query a Single Lending Market

Within the wallet API, lending markets are identified by a unique numeric ID or the address of the receipt token. Providing the numeric ID will result in _generally_ better performance.

### Endpoint

`GET https://wallets.nodefinance.org/lending_markets/{id}`

#### Query Parameters

- wallet (optional): A string representing the wallet address to filter the results by.

### Response

The response will be a JSON object with the following shape:

```ts
{
  _type: "Aave-V2" | "Aave-V3";
  category: "stable" | "volatile" | "basket";
  name: string;
  id: number;
  depositToken: Token;
  receiptToken: Token;
  chainId: number;
  protocol: number;
  apy: number;
  totalDeposited: {
    amount: number;
    valueInLocalCurrency: number;
  }
}
```

### Example

Here is an example of how you can query this endpoint using curl:

```bash
curl "https://wallets.nodefinance.org/lending_markets/12345?wallet=0x1234567890abcdef"
```

This will send a GET request to the endpoint with the wallet query parameter set to 0x1234567890abcdef. If the request is successful, the response will be a JSON object with information about the lending market with ID 12345 and the specified wallet address.

### Error Handling

If the request is unsuccessful, the endpoint will return a JSON object with an error field containing a description of the error. Some possible error messages are:

- Market not found: The lending market with the specified ID does not exist.
- Invalid wallet address: The wallet address provided is not a valid Ethereum address.
- Internal server error: An internal server error occurred while processing the request.

### Notes

- The wallet query parameter is optional and can be omitted if you do not want to filter the results by wallet address.
- The depositToken and receiptToken fields contain information about the tokens used for deposits and receipts, respectively. These fields are objects with the following shape:

```ts
{
  symbol: string;
  name: string;
  decimals: number;
  address: string;
}
```
