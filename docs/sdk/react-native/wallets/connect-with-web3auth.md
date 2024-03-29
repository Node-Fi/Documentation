---
sidebar_position: 4
---

# Connect with Web3Auth

[Web3Auth](https://web3auth.io/) is a well-known MPC wallet provider. This tutorial shows how, in a couple lines of code, you can easily use Web3Auth with Node Kit.

## Intro

Before diving in to the tutorial, lets cover some important information. Namely, what an MPC wallet is, why you may want to use it, and how it lives in the Node ecosystem.

### What is an MPC Wallet?

_MPC_ stands for "Multi Party Computation." It is a method by which a secret can be split into different shares that can then be used to derive the secret at a later point in time. In the context of a wallet, the private key can be split into an arbitrary number of _shares_, with a specific threshold required to reconstruct the private key from key shares.

#### Example

Consider a wallet W, which is generated by private key `P`.

`P` is then split into five key shares: `p^0`, `p^1`, ..., `p^4`.

Of these key shares, only three are required to reconstruct `P`. No single key share `p^i` can take control of the wallet, meaning three key shares have to compromised in order to lose control of the wallet rather than one single private key or one single mnemonic.

### Why Integrate with an MPC Wallet?

As outlined above, MPC wallets significantly protect users from account takeover. With a traditional hot wallet, all control is lost the instant the mnemonic or private key is leaked. With an MPC wallet, however, a bad actor would have to assume control of enough key shares to meet threshold.

Additionally, MPC wallet providers such as Web3Auth significantly decrease barrier of entry for a wallet or application. By relying on traditional web2 login methods, end-users no longer have to remember their mnemonic or private key in order to recover at a later date. In many cases, the weakest point of security for a wallet application is the user itself. By never revealing the mnemonic to the user, the risk of the user leaking their own mnemonic is eliminated.

### Web3Auth and MPC Wallets

Web3Auth offers an MPC wallet solution, where key shares are protected by traditional log-in methods web2 users are familiar with (_Google_, _Facebook_, _Twitter_ just to name a few). This functionality is accessed through the Web3Auth SDK.

Web3Auth has a full-fledged MPC solution where the private key is never reconstructed on device, and a separate option where the private key is reconstructed on device. This tutorial covers the latter, as the full MPC solution is still in beta (as of 12/23/2022).

## How to Integrate

A majority of the work involved in integrating Web3Auth with Node Kit is in the set up of the Web3Auth SDK. Once Web3Auth is setup, integrating with Node Kit can be done in two lines of code.

:::note Installing Node Kit

For installation of the Node React Native SDK, see [Getting Started](../getting-started/react-native-sdk-or-or-installation.md)

:::

### 1. Sign up with Web3Auth

Navigate to [Web3Auth](https://web3auth.io) and create a new account. Follow along with the prompts, and create a new project once you get to the dashboard.

Take note of your project ID, as this will be necessary later on when we set up the Web3Auth sdk!

### 2. Install Web3Auth and Node's React Native SDK

In your project root run

```bash
$ yarn add web3auth/react-native-sdk
```

or, if you prefer npm:

```bash
$ npm install web3auth/react-native-sdk
```

Follow installation steps [here](https://web3auth.io/installation)

:::tip White list your app!

Be sure to whitelist your app's slug on Web3Auth, otherwise their SDK will not properly work!

:::

### 3. Sign in with Web3AuthSdk

Prompt the user to sign in with Web3Auth, using their SDK. This will return an object containing the private key of the wallet. The Web3Auth Rect Native SDK requires a Webview component that it will use to take the user through the login flow.

```ts

const Web3AuthInsance = new Web3AuthSDK({
    projectId
})
function LoginButton() {
    function onLogin = useCallback(async () => {
        const walletDetails = await web3AuthInstance.login()

        console.log(`Private key is ${walletDetails.privateKey}`)
    })
}
```

### 4. Attach the Returned Private Key with Node SDK

Here there are two possible approaches:

1. Recover wallet from private key and save it to secure storage locally on device.
2. Recover wallet for this session only.

Path 1 will not require the user to login again to web3auth, resulting in better UX but compromising on the added security of MPC wallets. Path 2 will require the user to login to web3auth each session, but removes a device breach as a possible attack vector. The private key is encrypted in secure storage by the Node React Native SDK, but it is the one key to control the wallet whereas with MPC there should be multiple key shares.

For this tutorial, we will go with route #2.

```ts

const Web3AuthInsance = new Web3AuthSDK({
    projectId
})
function LoginButton() {
    const attachWallet = useLoadWalletForSessionOnly()
    function onLogin = useCallback(async () => {
        const walletDetails = await web3AuthInstance.login()

        await attachWallet({ credentials: { privateKey: walletDetails.privateKey }})
    })

    return <Button onPress={onLogin} text="Log In"/>
}
```

### 5. Voila!

Now the Node SDK can be used as normal, with the credentials provided by Web3Auth!
