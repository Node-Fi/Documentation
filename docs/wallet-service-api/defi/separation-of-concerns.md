---
sidebar_position: -1
---

# Data vs Execution

The Node Finance stack is built with the idea of separation of concerns in mind. Many farms, pools, and lending markets have similar methods for data retrieval, but vastly different ways to deposit. The math to deposit in one type of pool could never work for another type of pool.

The wallet service api serves `data` for specific farms, markets, and pools, but does not provide information on how to actually deposit into them. This is where _Minima_, Node's novel DeFi router comes in to play. Minima has the ability to route orders through yield farms, lending markets, and liquidity pools. A user can easily go from USDC to a liquidity gauge deposit on Curve in one single transaction. Minima, as a service, provides this as a transaction object so that the end developer does not need to worry about the distinction between protcools.

The following approach is recommended to be taken with this API (and is taken by our SDK):

Treat all DeFi positions as `Depositable Positions`, which have:

1. Underlying tokens
2. Some form of a risk
3. A related protocol
4. APR / APY

Let the wallet service supply all of the above information, and let minima supply the instructions for how to most efficiently deposit or withdraw into/from a position. From there, integrating specific types comes down to what filter is used in the GET request to the wallet service.
