---
sidebar_position: 7
---

# Defer Wallet Load

By default, the React Native SDK will attempt to load the currently active wallet from secure storage if the wallet type is of `local`. Wallet credentials are stored in local storage by their address.

If your user has opted to use biometrics or a passcode, this means that app load will always trigger an authentication request. If you want to avoid this, or load wallet credentials only at the time of signing transaction, you can opt to _defer_ wallet load. Deferring wallet load gives the developer control of when wallet credentials are loaded into the application from secure storage. Keep in mind that transactions cannot be signed unless wallet credentials have been loaded.

### Defer wallet load

To defer the auto-load of wallet credentials, include the `deferLoadWallet` prop to the `NodeKitProvider`.

```typescript
const App = () => {
  return (
    <NodeKitProvider deferLoadWallet>
      <RestOfMyApplication />
    </NodeKitProvider>
  );
};
```

Then, at any point in the tree following, you can trigger the loading of wallet credentials with the callback provided from `useLoadWallet`. The callback will also return the signer that is loaded for the wallet. If the wallet is not a local wallet, but the signer has already been provided to the SDK via `useSessionOnlyWallet`, then this callback will provide that signer.

The callback provided by `useLoadWallet` takes as argument an object that can contain `password`, `keyChainOptions`, or `walletAddress`. None of these fields are required, but meet the following:

| Field           | Type                                | Description                                                                                                                                                           |
| --------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| password        | string                              | (optional) If your user additionally used a password to encrypt their credentials when they created the wallet, that password will need to be provided to decrypt it. |
| keychainOptions | ReactNativeKeychain.KeyChainOptions | (optional) Modify the prompt for the possible biometrics prompt                                                                                                       |
| walletAddress   | string                              | (optional) Specify the wallet address to load credentials for. Defaults to the currently active wallet.                                                               |

Here is a a button that will trigger wallet load with a custom biometrics prompt, and then use the returned signer to sign and submit the provided transaction.

```typescript
const SignTransactionButton = ({
  transaction,
}: {
  transaction: TransactionRequest;
}) => {
  const loadWallet = useLoadWallet();

  const mutation = useMutation(
    async () => {
      const signer = await loadWallet({
        keychainOptions: {
          authenticationPrompt: {
            title: "Unlock wallet to confirm transaction",
          },
        },
      });

      return signer.signTransaction(transaction);
    },
    {
      onSuccess: async (response) => {
        Alert.alert("Transaction Submitted");

        await response.wait();
        Alert.alert("Transaction Confirmed");
      },
    }
  );

  return <Button onPress={mutation.mutate} text="Sign Transaction" />;
};
```
