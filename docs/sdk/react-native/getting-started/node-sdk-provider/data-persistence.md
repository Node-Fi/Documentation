# Data Persistence

For a better user experience, the SDK defaults to persist the following data:

- Token Info
- Token Prices
- Wallet balance
- Recent transactions
- Wallet configuration
  - Default currency
  - Default gas token
  - Address

Data external to the application, which includes `prices`, `balances`, `portfolio history`, and `transaction history` are all persisted with a timeout of 24hours. When an application is opened that uses the SDK, the first data served for these items will be from the cache, while the data is rehydrated in the background with more recent data. Developers can check whether a hook is fetching data by checking the `isFetching` field on the `fetchDetails` object returned by each hook that accesses data asynchronously.

To disable caching of external data, set the environment variable\
`NODE_FINANCE_NO_PERSIST = true`
