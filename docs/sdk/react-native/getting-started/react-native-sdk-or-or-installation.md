---
description: Install the React Native SDK and get building!
sidebar_position: 1
---

# Installation

:::warning Warning

This documentation refers to a state of our SDK which is still in beta. Documentation and sdk functions are subject to change pending developer feedback.

:::

Install the SDK and React-Native wrapper via your preferred package manager

```
$ yarn add @node-fi/sdk-core@beta @node-fi/react-native-sdk@beta react-native-device-info react-native-keychain react-native-fast-crypto react-native-securerandom

                                or

$ npm install @node-fi/sdk-core@beta @node-fi/react-native-sdk@beta react-native-device-info react-native-keychain react-native-fast-crypto react-native-securerandom
```

#### For iOS

Install pods

```
$ npx pod-install

or

$ cd ios
$ pod install
```

For FaceId to work for unlocking wallet credentials, permissions must be added in `info.plist` for the key `NSFaceIDUsageDescription`, like so:

```
...
<key>NSFaceIDUsageDescription</key>
	<string>Message here</string>
...
```

#### For Android

For Android development, you will need to make sure you have `NDK` and `cMake` enabled in android studio. These are required to build `react-native-fast-crypto` for android.
