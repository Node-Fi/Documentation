---
sidebar_position: 1
---

# Separation of Concerns: Data vs Execution

:::tip

The Node DeFi stack allows for an "integrate one and integrate all" approach. The intricacies of integrations are deferred to our APIs, standardizing integration across three key areas: yield farms, liquidity pools, and lending markets.

:::

The Node Finance stack is built with the idea of separation of concerns in mind. Many farms, pools, and lending markets have similar methods for data retrieval, but vastly different ways to deposit. The math to deposit in one type of pool could never work for another type of pool.

The wallet service api serves `data` for specific farms, markets, and pools, but does not provide information on how to actually deposit into them. This is where _Minima_, Node's novel DeFi router comes in to play. Minima has the ability to route orders through yield farms, lending markets, and liquidity pools. A user can easily go from USDC to a liquidity gauge deposit on Curve in one single transaction. Minima, as a service, provides this as a transaction object so that the end developer does not need to worry about the distinction between protcools.
