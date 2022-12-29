---
description: Connecting an external signer makes NodeKit composable with the Ethers.js ecosystem
sidebar_position: 1
---

# Connect an Ethers.js Signer

Ethers.js is at the heart of the Node core SDK, and is the package used to handle transaction signing. This makes the Node `Wallet` class very composable with Ethers.js, and allows for easy plug-and-play with your favorite packages, such as `wagmi`, `rainbowkit`, and `walletconnect`

Using an external signer is as simple as supplying any object extending the `Signer` interface to the Node SDK. The hook `useLoadSessionOnlyWallet` returns a callback that allows for this.

### `useLoadSessionOnlyWallet`

This hook returns a callback of the shape

```ts
(
  payload: {
    registrationOptions?:
      | {
          optInMetatdata: boolean;
          doNotRegister: boolean;
        }
      | undefined;
  } & (
    | {
        config: WalletConfig;
      }
    | {
        signer: Signer;
      }
  )
) => Promise<void>;
```

This callback can be invoked with _either_ a `Signer` or `WalletConfig` object. Once invoked with either, the `Wallet` class will be generated and usable within the rest of the Node SDK. On failure, the callback will throw an error.

#### Example

Here is an example of combining wallet connect with the Node SDK:

```ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useWalletConnect,
  withWalletConnect,
} from "@walletconnect/react-native-dapp";
import { useLoadSessionOnlyWallet } from "@node-fi/react-native-sdk";
import * as React from "react";

function App(): JSX.Element {
  const connector = useWalletConnect();
  const loadSessionOnlyWallet = useLoadSessionOnlyWallet();
  if (!connector.connected) {
    /**
     *  Connect! 🎉
     */
    return (
      <Button
        title="Connect"
        onPress={async () => {
          const signer = connector.connect();
          await loadSessionOnlyWallet({ signer });
        }}
      />
    );
  }
  return (
    <Button title="Kill Session" onPress={() => connector.killSession()} />
  );
}

export default withWalletConnect(App, {
  redirectUrl:
    Platform.OS === "web" ? window.location.origin : "yourappscheme://",
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});
```
