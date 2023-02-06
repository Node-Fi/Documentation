---
description: Wallets are the key to crypto
sidebar_position: 0
---

# Create a Wallet

Creating a wallet can be done with one single function! The SDK currently supports creating a new wallet from scratch, as well as importing a wallet using a seed phrase. When a new wallet is created, the mnemonic is saved to the device's secure storage, protected by biometrics. On subsequent app loads, when a user correctly authenticates themselves with biometrics their wallet information will be fetched.

Create wallet takes an argument of type `WalletCreationOpts`, allowing to create a wallet from a mnemonic, set the default gas currency on wallet creation, or create declare the language for the mnemonic to be created in. Note that alternate gas currencies are only supported on Celo and Alfajores.

Learn about wallet registration options and its purpose in [Wallet Registration.](./registering-wallet.md)

```typescript
import { useCreateWallet } from "@node-fi/react-native-wrapper";

// Creating a wallet from scratch:
const createWallet = useCreateWallet();

createWallet().then((wallet) => {
  // Do something!
});

// Importing a wallet using a seed phrase
const createWallet = useCreateWallet();
const mnemonic = "test test test ... test";

createWallet({ mnemonic }).then((wallet) => {
  // Do something!
});

// Setting default currency on wallet creation
const createWallet = useCreateWallet();
const defaultGasCurrency = addressOf("CUSD");

createWallet({ defaultGasCurrency }).then((wallet) => {
  // Do something!
});

// Creating a wallet with a spanish mnemonic
const createWallet = useCreateWallet();
const bip39Language = "spanish";

createWallet({ bip39Language }).then((wallet) => {
  // Do something!
});
```

### API Breakdown

#### useWallet: () => (opts: WalletCreationOpts) => Wallet

````typescript
interface WalletCreationOpts {
  defaultGasCurrency?: Address;
  mnemonic?: string;
  privateKey?: string;
  bip39Language?: MnemonicLanguageOption;
  registrationOptions: {
    optInMetatdata: boolean;
    doNotRegister: boolean;
  };
}

type MnemonicLanguageOption =
  | "chinese_simplified"
  | "chinese_traditional"
  | "czech"
  | "english"
  | "french"
  | "italian"
  | "japanese"
  | "korean"
  | "portuguese"
  | "spanish";```
````
