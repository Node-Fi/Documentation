---
description: Include your own custom tokens in the application
---

# Adding Custom Tokens

Default supported tokens can be configured at the `NodeProvider` level.

To add new tokens that are not supported by the Node SDK natively, supply an array of `Token` objects to the `NodeKitProvi`d`er`

Token object should be created as shown:

`new Token(chain: ChainId, address: string, decimals: number, symbol?: string, name?: string, logoUri?: string)`\
\
The only required fields are chain, address, and decimals. The rest of the fields are optional, but will drastically improve UX if present.

Example:

```typescript
export default function AppWrapper() {
  // code here
  return (
    <NodeKitProvider
      ...
      customTokens={[
        new Token(ChainId.Mainnet, "0xCb5A82C5EBD977E88799D6ef9F9ea08160F03217", 18, "TST", "Test Token", "bit.do/YeetYeet"),
      ]}
      ...
    >
      <App />
    </NodeKitProvider>
  );
}
```
