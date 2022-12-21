---
description: Remove specific tokens from being accessible to your users
---

# Blacklisting Tokens

Tokens can be blacklisted by address, simply provide a set of address to the `NodeKitProvider`

```typescript
export default function AppWrapper() {
  // code here
  return (
    <NodeKitProvider
      ...
      tokenBlacklist={new Set(["0xBadToken", "0xRugpull"])}
      ...
    >
      <App />
    </NodeKitProvider>
  );
}
```
