---
description: Install the React Native SDK and get building!
sidebar_position: 2
---

# Node Finance Boilerplate

:::warning Warning

This documentation refers to a state of our SDK which is currently in **_alpha_**. Documentation and sdk functions are subject to change pending developer feedback.

:::

Node plans on releasing high-fidelity boilerplate and template apps which leverage our SDKs over the coming months. For now, you can get up and running extremely quickly using our barebones boilerplate.

The barebones boilerplate covers all essential setup and configuration for both the Node Finance SDK as well as interacting with Web3 in a React Native environment. Use the boilerplate either as a quick starting point for your app, or as an example of how to integrate the React Native SDK into your current application.

[Find the boilerplate here](https://github.com/Node-Fi/boilerplate-bare)

## Create a Repo with the Boilerplate

### Option 1: Via Github.com

1. Navigate to [the boilerplate](https://github.com/Node-Fi/boilerplate-bare).
2. Select the green `Use this template` button above the Github filetree
3. Select `Create a new repository` and follow along with github's prompts

### Option 2: Via Github cli

This option requires you to have the github command line interface installed. Find documentation for github cli [here](https://cli.github.com/manual/)

Run the following command in your terminal:

```bash
gh repo create [<name>] --template https://github.com/Node-Fi/boilerplate-bare [--private | --public | --internal]
```

### Option 3: Via react-native init

This section is coming soon, currently you can get started via github templates as explained above.

## Install dependencies

At Node our preferred package manager is yarn, so our examples here use yarn but feel free to use npm or pnpmn. Do note that if you use a different package manager you will want to delete `yarn.lock` from the existing repo.

```bash
yarn install
```

The postinstall script is set to run rn-nodeify, which provides resolutions for modules missing in the react native environment that are present in web and assumed to be present by most web3 libraries. If you want to modify this script, you can find it at `./scripts/postinstall.sh`

### Setup iOS

It is highly recommended to use a Ruby version manager and install bundler if you will be building for iOS. The boilerplate currently uses Ruby 2.7.6. Refer to the first part of the React Native documentation [here](https://reactnative.dev/docs/environment-setup) to get Ruby and Bundler set up in your system.

Once you have Ruby 2.7.6 set up and Bundler, run the following from the package root:

```bash
npx pod-install
```

Additionally, permission requests have been already added into the `info.plist` for camera (required for faceid).

These permissions look the following, find them in your `info.plist` if you wish to change them:

```xml

    <key>NSCameraUsageDescription</key>
	<string>Please give us access to your camera, to complete the verification.</string>
	<key>NSFaceIDUsageDescription</key>
	<string>$(PRODUCT_NAME) Authentication with TouchId or FaceID</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>Please give us access to your photo library for profile picture or verification</string>
```

### Setup Android

Make sure you have Android studio installed, and that you have enabled both `NDK` and `cMake` within Android Studio.

If you are unsure how to do this or what this even means, find the official documentation [here](https://developer.android.com/studio/projects/install-ndk)

## Run the app

Make sure you have followed all of the above steps before running the app.

### iOS

```
yarn ios
```

### Android

```
yarn android
```
