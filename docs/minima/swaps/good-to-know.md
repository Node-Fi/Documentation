---
description: Before you get started...
---

# Good to know

You can easily switch networks by defining the network ID in your payload:



For supported tokens:\
[`https://`](https://staging.router.nodefinance.org/tokens?chainId=43114)``

For routing:\
[`https://`](https://staging.router.nodefinance.org/routes?chainId=43114\&inputToken=)`<address>&outputToken=<address>&inputAmount=<amount in wei>&from=<address>` (edited)&#x20;



Additional params for /routes:

* `slippage` (in bips)
* `priceImpact` (boolean - include impact of trade size)
* `maxHops` (number - maximum number of hops.  Higher hops = higher gas)
* `include` (comma-separated string of DEXs to include)
