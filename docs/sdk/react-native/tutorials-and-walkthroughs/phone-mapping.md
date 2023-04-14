---
sidebar_position: 2

description: Node's Identity SDK is powered by its `Identity Service,` which in turn relies on the Celo blockchain's identity federated identity mapping system
---

# Send tokens to Phone Numbers

:::tip Summary

Node's identity sdk is powered by its `Identity Service,` which in turn relies on the Celo blockchain's Federated Attestations (ASv2) service. Node is the default trusted attestor, and developers can opt-in to trust other attestors.

:::


Blockchain wallet addresses are complicated and not human-readable. Node's identity service lets you securely do a 1 way mapping of user phone numbers to wallet addresses, creating a Zelle like experience where users can discover each other using their contact list. 


<iframe src="https://www.youtube.com/embed/abSI_C1SYqg" frameborder="0" allowfullscreen width="100%" height="500px"></iframe>


### Celo as an Appchain

Node treats Celo as an 'appchain' with respect to identity mapping, allowing mappings for generic EVM chains and (in the future) non EVM chains. Celo's identity contract maps strings to addresses, so additional infrastructure needs to be built by Node around the identity contracts in order to support addresses on chains that are not 32 bytes.

Celo's Federated Attestations (ASv2) service obfuscates plain-text identifiers before being used in on-chain attestations, in order to preserve privacy and security. This ensures that a bad actor could not parse attestation events in order to find what phone number belongs to a certain address. Celo's Oblivious Decentralized Identifier Service (ODIS) helps with this. [Read more about privacy preservation through ODIS here](https://github.com/celo-org/SocialConnect/blob/main/privacy.md)

More info on the ASv2 protocol can be [found in their docs](https://github.com/celo-org/SocialConnect)

### ASv2 as a Service

Node provides the identity kit as "ASv2 as a Service." We simplify the process for developers so that the entire flow can be integrated without having to worry about a lengthy installation process. The libraries required for interacting with ASv2 client-ide will quickly bloat the bundle size of a React Native application.

Node additionally provides verification as a service, which is included in the SDK. Here, Node acts as an attestor and issues 6-digit codes via sms to confirm a wallet's identity and commit to chain. Node does not save any of these mappings in plain text, as to commit to the greatest privacy preservation possible.

### Trusting Other Attestors

As outlined in the [ASv2 docs](https://github.com/celo-org/SocialConnect/blob/main/protocol.md), any address can attest the identity of another address. It is then up to the user (or developer) what attestor they trust. Within Node's identity kit, there is a registry of publicly known (and possibly trusted) attestors. Attestors can add themselves to the registry after sufficient vetting. The registry contains the following information for each vetted attestor:

- name
- address of the attestor
- entity logo url
- (optional) description

Node is given as the default trusted attestor, and it is up to the developer to _opt in_ to trust any additional attestor. Additional attestors listed will take precedence over Node's own attestations.
