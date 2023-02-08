---
sidebar_position: 0
slug: /
---

# Intro

:::warning Warning

This documentation refers to a state of our SDK which is currently in **_alpha_**. Documentation and sdk functions are subject to change pending developer feedback.

:::

# Product Overview

Node Finance is a non-custodial banking-as-a-service platform built on EVM blockchains, stablecoins, and DeFi protocols. Node’s primary product is a suite of mobile-first development kits that make it easy to embed web3 functionality within iOS and Android mobile apps, and is joined by several peripheral services, including an on-chain router and a wallet CRM.

### Our Mobile-First Product Suite

Node developer kits are React Native (Javascript) SDKs that make it easy to plug into different web3 primitives within mobile apps. Besides IdentityKit and NotificationKit, all are wrapped under a single SDK. We plan to expand these SDKs to support more development frameworks, such as Flutter (Dart), native iOS (Swift), and native Android (Kotlin).

**[👤](https://emojipedia.org/bust-in-silhouette/) Wallet Factory**

A set of tools to support embedded web3 wallets within a mobile app. Includes wallet creation (EOA, smart contract, or MPC), wallet recovery, and connecting an external signer via WalletConnect. WalletKit makes it easy for teams to offer seamless self-custody to their end users with modules that allow things like: encryption/decryption of private keys using FaceID (or system password), secure cloud backup of private keys (iCloud or Drive), offer social sign-in via Web3Auth, and initiate token transfers (or token transfer requests) via biometrics.

**📲 Identity Service**

A standalone service to map wallet addresses to phone numbers, creating a Zelle-like experience for mobile crypto payments. With IdentityKit, send crypto to users who **don’t even have a wallet yet** and help users more easily discover mutual contacts for social payments.

**💵 Payment Kit**

Easily facilitate on-chain payment requests between user wallets. Tap to pay via NFC (coming soon).

**📈 Data Engine**

A set of endpoints to query state and historical data from EVMs. Pre-built queries for wallets (e.g. token balances, transaction history, portfolio value, etc), tokens (e.g. price, symbol, image), and DeFi protocols (e.g. TVL, APR, collateral ratios, etc). SDK provides more efficient state management and data dissemination.

**🛎️ Notification Kit**

An engine for realtime push notifications powered by event subscriptions via web-hooks. Use pre-built templates for wallets (e.g. notify when tokens received), tokens (e.g. notify when token X goes up by Y%), and DeFi protocols (e.g. notify if APR falls below Z%), or mix and match to create your own bespoke notification (e.g. notify if wallet A withdraws money from protocol B).

**💱 DeFi Router**

Offer in-app access to any DeFi primitive (swap, lend, stake, pool, farm, etc) with just a few lines of code. Powered by our on-chain Minima router, the DeFiKit makes it easy for any user to leverage access DeFi.

**🔍 Compliance Dashboard**

A set of tools for enforcing compliance. Examples include the ability to screen for OFAC sanctioned addresses and assemble a blacklist of addresses, which prevents our full nodes from processing any of their transactions (and logs IP + device info).
