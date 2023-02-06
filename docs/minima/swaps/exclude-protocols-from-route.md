---
description: Minima can be instructed to exclude or include protocols for a given route
---

# Exclude Protocols from Route

To include or exclude specific protocols, the following query params should be added:

| Action                        | Query Param | Example                  |
| ----------------------------- | ----------- | ------------------------ |
| Exclude protocols             | `exclude`   | `exclude=mobius,curve`   |
| Include only protocols listed | `include`   | `include=ubeswap,mobius` |

Protocols should be given as a comma-separated string. The following protocol names are recognized:

| Protocol     | ID             |
| ------------ | -------------- |
| Mobius       | `mobius`       |
| Ubeswap      | `ubeswap`      |
| Mento        | `mento`        |
| Uniswap V3   | `uniswap-v3`   |
| Sushiswap    | `sushiswap`    |
| Moola V2     | `moola-v2`     |
| Moola V1     | `moola`        |
| Symmetric V2 | `symmetric-v2` |
| Staked Celo  | `stCelo`       |
