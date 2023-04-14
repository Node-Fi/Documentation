---
description: Install the React Native SDK and get building!
sidebar_position: 2
---

# Installation - React Native CLI

:::warning Warning

This documentation refers to a state of our SDK which is currently in **_alpha_**. Documentation and sdk functions are subject to change pending developer feedback.

:::

There are two sides to installing the Node React Native SDK into your application:

1. Configuring your React Native environment for web3 libraries
2. Actually installing the SDK and SDK peer dependencies

## Configure your React Native environment for web3

If you already have an existing web3 mobile app, feel free to skip this section. It is _recommended_ to atleast skim this, however, as this is the trickiest area to get right sometimes.

### Nodeify

There are a lot of global modules that exist in the web envioronment that do not exist natively in the React Native environment. A lot of these are heavily depended upon by many web3 libraries, so we need to have a way to replace them.

Luckily, rn-nodeify does just that.

Navigate to your `package.json` and add the following to your post install script:

```bash
rn-nodeify --install 'crypto,buffer,react-native-randombytes,vm,stream,http,https,os,url,fs,process' --hack --yarn
```

If you would rather use npm, then just omit `--yarn` from the end.

Checkout the [postinstall script in the boilerplate](https://github.com/Node-Fi/boilerplate-bare/blob/main/scripts/postinstall.sh) for an example!

### Install Dependencies

Run the following command to install dependencies. Use npm or pnpmn instead of yarn if you would rather.

```bash
yarn add @ethersproject/shims react-native-udp@4.1.7 \
     react-native-tcp-socket react-native-get-random-values \
     rn-nodeify react-native-securerandom react-native-fast-crypto \
     react-native-aes-crypto
```

### Add resolution for net

If you are familiar with nodeify, you might have noticed we did not nodeify the `net` package. This is because the version used by nodeify is intended for React Native versions older than 0.60. We could install the newer verison of `react-native-tcp`, but `react-native-tcp-sockets` is much better maintained currently.

Navigate to your `package.json`, and then find the `react-native` and `browser` objects.

Add the following entry to both objects:

```json

"net": "react-native-tcp-socket",
```

Both your `react-native` and `web` objects in the package.json should now look like [this](https://github.com/Node-Fi/boilerplate-bare/blob/0b4f4674d6252654f27577af13bdfebdc425aaaa/package.json#L85)

## Install the SDK

Install the SDK and React-Native wrapper via your preferred package manager.

```bash
yarn add @node-fi/react-native-sdk@alpha @node-fi/react-native-aes@alpha \
         react-native-keychain @node-fi/chain-config@0.0.2 \
         react-native-aes-crypto react-native-device-info \
         @react-native-async-storage/async-storage
```

#### For iOS

#### Polyfill Intl

If you use hermes, then you will also need to polyfill the Intl object for iOS. While newer versions of Hermes contain a semi complete Intl implementation, they lack `Intl.NumberFormat.prototype.formatToParts`, which is requried by the Node Token library to properly format token amounts.

Install the following polyfills:

```bash
yarn add @formatjs/intl-datetimeformat @formatjs/intl-getcanonicallocales \
     @formatjs/intl-locale @formatjs/intl-numberformat @formatjs/intl-pluralrules
```

Inlude the polyfills in your `index.js` or in a shim file (see [here](https://github.com/Node-Fi/boilerplate-bare/blob/main/shim.js) for the shim used in the boilerplate):

```js
if (Platform.OS === "ios" && !!global.HermesInternal) {
  // Polyfills required to use Intl with Hermes engine
  require("@formatjs/intl-getcanonicallocales/polyfill");
  require("@formatjs/intl-locale/polyfill");
  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/locale-data/en");
  require("@formatjs/intl-numberformat/polyfill");
  require("@formatjs/intl-numberformat/locale-data/en");
  require("@formatjs/intl-datetimeformat/polyfill");
  require("@formatjs/intl-datetimeformat/locale-data/en"); // locale-data for en
  require("@formatjs/intl-datetimeformat/add-all-tz"); // Add ALL tz data
}
```

#### Pods

Install pods

```
npx pod-install
```

For FaceId to work for unlocking wallet credentials, permissions must be added in `info.plist` for the key `NSFaceIDUsageDescription`, like so:

```
...
<key>NSFaceIDUsageDescription</key>
	<string>Message here</string>
...
```

### For Android

For Android development, you will need to make sure you have `NDK` and `cMake` enabled in android studio. These are required to build `react-native-fast-crypto` for android.

## Shims

If you already have a shim file for web3 compatibility, this may not be required. If you encounter any issues while setting up the SDK in your repo, the first recommended action is to look at shims.

See the [shim file in the boilerplate](https://github.com/Node-Fi/boilerplate-bare/blob/main/shim.js)

If you use this shim file, it is extremely important to import the shim file _in index.js_ at the top of the file, in order for shims to be properly applied.
