# Node SDK Provider

In order to access the functionality of the React Native SDK, the app will need to wrapped with a `NodeKitProvider`

The only required prop is `apiKey`, which should be the corresponding api key for your tenant account.

```tsx
export default function AppWrapper() {
  // code here
  return (
    <NodeKitProvider
      loadingComponent={loadingComponent}
      apiKey={API_KEY}
      tokenWhitelist={new Set(SUPPORTED_TOKENS)}
      tokenDetailsOverride={TOKEN_OVERRIDES}
      customTokens={[
        new Token(CHAIN, ADDRESS, DECIMALS, SYMBOL, NAME, LOGO_URL),
      ]}
      chainId={CHAIN_ID}
    >
      <App />
    </NodeKitProvider>
  );
}
```

#### Props

| Prop                    | Type                 | Required (Y/N) | Description                                                                                             |
| ----------------------- | -------------------- | -------------- | ------------------------------------------------------------------------------------------------------- |
| `customTokens`          | `Token[]`            | N              | Any additional custom tokens to add that might not already be in the Node Token list                    |
| `tokenWhitelist`        | `Set<string>`        | N              | Set of addresses, where only tokens pertaining to the given addresses will be accessible within the SDK |
| `tokenBlacklist`        | `Set<string>`        | N              | Set of addresses, where only tokens matching the addresses will be removed from the SDK                 |
| `tokenDetailsOverride`  | `TokenConfig[]`      | N              | Allows to override specific details about a given token, such as name, symbol, imageUrl, etc            |
| `smartContractWallet`   | `boolean`            | N              | If true, will default to creating new smart contract wallets                                            |
| `loadingComponent`      | `React.ReactElement` | N              | UI Element to render when persisted data is being loaded.  Defaults to null.                            |
| `apiKey`                | `string`             | Y              | API Key associated with your tenant account                                                             |
| `chainId`               | `ChainId`            | N              | The home chainid for all wallets in your app                                                            |
| `constantsOverride`     | `ConstantsOverride`  | N              | Override certain constants used across the SDK                                                          |
| defaultCurrencyOverride | `CurrencyType`       | N              | Sets the default currency for a wallet from SDK instantiation.                                          |
|                         |                      |                |                                                                                                         |
