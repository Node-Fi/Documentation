---
sidebar_position: 0
slug: /
---

# Intro

:::warning Warning

This documentation refers to a state of our SDK which is still in beta. Documentation and sdk functions are subject to change pending developer feedback.

:::

The Node Finance SDK suite is tailored for mobile web3. Using the Node Finance SDKs you will be able to create application-specific web3 applications, or one super dapp that can do it all.

SDKs are broken down into the following:

- Core SDK
- React Native SDK
- Identity Kit
- Secure Cloud Backup

#### Core SDK

The core sdk covers a majority of the Node Finance APIs in pure typescript. This SDK can be used in mobile, web, or node environments.

#### React Native SDK

The react native SDK provides convenient hooks around the functionality exposed by Core SDK.

Additionally, the React Native SDK provides mobile-specific solutions such as securing wallet credentials via biometrics.

#### Identity Kit

The identity kit and identity services leverages zero knowledge to map off-chain identifiers to on-chain addresses. This is a one-way mapping, so you can go from phone number -> address, but not the other way around.

#### Secure Cloud Backup

Use this library to securely backup arbitrary data to user's cloud storage. Data is encrypted using AES before being uploaded to either iCloud or Google Drive.
