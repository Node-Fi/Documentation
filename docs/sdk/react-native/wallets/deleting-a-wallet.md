---
description: Remove wallet details from secure storage
---

# Deleting a Wallet

Similar to creating a wallet, deleting one can be used with one single function call as well. Access the method via hook, and invoke the callback to remove the currently-active wallet.

```typescript
import { useDeleteWallet } from '@node-fi/react-native-wrapper';

const deleteWallet = useDeleteWallet(); // Grab the function from the hook
deleteWallet().then(() => {
  // Do something!
});
```
