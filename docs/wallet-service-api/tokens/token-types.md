---
sidebar_position: 1
---

# Token Types and Tags

### Types

Currently the following token types are tracked:

| Type  | Description                                                                                                                                                                                     |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ERC20 | Represents a standard token, that is not used as a receipt token in any other primitive                                                                                                         |
| LP    | Represents a portion of a liquidity pool                                                                                                                                                        |
| SNX   | Represents a stake in a Synthetix Reward contract. Note that the underlying is not _actually_ a token, and is non-transferrable, but it does represent a contract that has a notion of balance. |
| Gauge | Represents a deposit into a liquidity gauge, like Curve's gauge system                                                                                                                          |

### Tags

Tags are used to provide additional information about tokens.

| Tag       | Description                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| stable    | Is present if the token is a stablecoin                                                |
| lp        | Is present if the token is a liquidity pool receipt                                    |
| bridge    | Is present if the token is a bridged representation of a token on another chain        |
| volatilve | Is present if the token is volatile (not a stablecoin)                                 |
| lending   | Is present if the token is a receipt for providing liquidity to a lending pool         |
| index     | Is present if the token represents an index of multiple tokens (see: DeFi Pulse Index) |
| staking   | Is present if token is a liquid staking token                                          |
