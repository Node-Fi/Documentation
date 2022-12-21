---
description: Install the React Native SDK and get building!
---

# Installation

Install the SDK and React-Native wrapper via your preferred package manager

```
$ yarn add @node-fi/sdk-core @node-fi/react-native-sdk react-native-device-info react-native-keychain react-native-fast-crypto react-native-securerandom

                                or
                                
$ npm install @node-fi/sdk-core @node-fi/react-native-sdk react-native-device-info react-native-keychain react-native-fast-crypto react-native-securerandom
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

{% code title="info.plist" %}
```
...
<key>NSFaceIDUsageDescription</key>
	<string>Message here</string>
...
```
{% endcode %}

#### For Android

For Android development, you will need to make sure you have `NDK` and `cMake` enabled in android studio.  These are required to build `react-native-fast-crypto` for android.

### Babel Configuration

Some specific configurations need to be set within the babel config. For this there are two options:

1 - Copy and paste the following as the base `babel.config.js`:

{% code title="babel.config.js" %}
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
      // other presets here
    ],
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['module:react-native-dotenv'],
      // other settings here
    ],
    // anything else
  };
};.js
```
{% endcode %}

or 2 - Inject the required configurations via import:

{% code title="babel.config.js" %}
```javascript
const nodeConfig = require('@node-fi/react-native-sdk/nodeWalletBabel');
module.exports = function (api) {
  return { ...nodeConfig(api) };
};
```
{% endcode %}

### Index.js

Import `@node-fi/react-native-sdk/setup` within your initialization script.

{% code title="index.js" %}
```javascript
/* dapp-begin */
require('@node-fi/react-native-sdk/setup');

/**
 * Other code goes here
 */

const { registerRootComponent } = require('expo');
const { default: App } = require('./frontend/App');
registerRootComponent(App);
/* dapp-end */
```
{% endcode %}
