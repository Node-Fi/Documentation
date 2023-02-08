---
description: Recover a wallet from a mnemonic or private key
sidebar_position: 0
---

# Recover a Wallet

Recovering a wallet is very similar to creating one. In fact, the same exact method is used.

Create wallet takes an argument of type `WalletCreationOpts`, which allows the mnemonic or privateKey to be provided for the wallet.

Learn about wallet registration options and its purpose in [Wallet Registration.](./registering-wallet.md)

```typescript
import { useCreateWallet } from "@node-fi/react-native-wrapper";

// Recovering a wallet from a seed phrase
const recoverWallet = useCreateWallet();
const mnemonic = "test test test ... test";

recoverWallet({ mnemonic }).then((wallet) => {
  // Do something!
});

// Recovering a wallet from a private key
const recoverWallet = useCreateWallet();
const privateKey = "0xbeefbeefbeefbeef ...";

recoverWallet({ privateKey }).then((wallet) => {
  // Do something!
});
```

### API Breakdown

#### useWallet: () => (opts: WalletCreationOpts) => Wallet

```typescript
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
  | "spanish";
```
