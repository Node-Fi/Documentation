# Getting Started

For developers wanting to just get up and running with Node Finance infrastructure, the React Native SDK is an excellent way to do so.  In order to create the easiest developer experience, the React Native SDK is fairly opinionated in terms of libraries for data retrieval and state management.  In cases where applicable, as much control is attempted to be passed on to the end developer, namely in data retrieval and persistence.

For data retrieval and caching, the React Native SDK leverages [`react-query`](https://tanstack.com/query/v4/docs/overview) .  For any hook accessing data asynchronously, the SDK exposes an optional parameter to modify how the request should behave and respond to errors.

For teams that are looking for a less opinionated library, but still want to leverage the Node Finance infrastructure, it is recommended to simply use the `Core SDK` library.  All functionality in the React Native SDK, outside of secure mnemonic storage, is derived from functionality in the Core SDK.



For installation, see [react-native-sdk-or-or-installation.md](react-native-sdk-or-or-installation.md "mention")
