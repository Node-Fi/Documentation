# Query Keys

React query leverages query keys to simplify caching and rehydrating queries. In most cases the React Native SDK is responsible for knowing when to invalidated a query and refetch it. However, if there a specific case where a query needs to be invalidated then each query has its own query key that can be used to invalidate it like so:

```typescript
const queryClient = useQueryClient();

queryClient.invalidateQueries([TOKEN_BALANCE_QUERY_KEY]);
```

The following queries are able to be invalidated this way:

| Query / Hook          | Query Key                                             |
| --------------------- | ----------------------------------------------------- |
| useBalances           | `[TOKEN_BALANCE_QUERY]`                               |
| useBalance            | `[TOKEN_BALANCE_QUERY, tokenAddress.toLowerCase`()`]` |
| usePricedBalances     | `[TOKEN_BALANCE_QUERY]` `[PRICE_QUERY_KEY]`           |
| useTokenPrices        | `[PRICE_QUERY_KEY]`                                   |
| useTokenPrice         | `[PRICE_QUERY_KEY]`                                   |
| useTransactionHistory | `[TRANSACTION_HISTORY_QUERY_KEY]`                     |
| usePortfolioHistory   | `[PORTFOLIO_HISTORY_KEY]`                             |
