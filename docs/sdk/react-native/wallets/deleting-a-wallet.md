---
description: Remove wallet details from secure storage
---

# Delete Local Wallet

Similar to creating a wallet, deleting one can be used with one single function call as well. Access the method via hook, and invoke the callback to remove the currently-active wallet.

This will delete the address from local storage, and remove the wallet credentials from secure storage. In the case of an external signer, this will just remove the address and signer from the SDK.

This method does not remove wallets from Node systems.

```typescript
import { useDeleteWallet } from "@node-fi/react-native-wrapper";

const deleteWallet = useDeleteWallet(); // Grab the function from the hook
deleteWallet().then(() => {
  // Do something!
});
```
