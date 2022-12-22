# Filtering Yield Farms

The following object is used across the Node Finance stack to filter Yield Farms

| field                 | type                               | description                                           |
| --------------------- | ---------------------------------- | ----------------------------------------------------- |
| chainId               | string                             | The ID of the blockchain chain.                       |
| depositTokenFilter    | TokenFilter                        | Filters for the deposit token.                        |
| underlyingTokenFilter | TokenFilter                        | Filters for the underlying token.                     |
| protocolFilter        | ProtocolFilter                     | Filters for the protocol.                             |
| orderBy               | `apr` or `total_deposited`         | The field to order the results by.                    |
| order                 | "asc" or "desc"                    | The order to sort the results in.                     |
| wallet                | string                             | The wallet address to filter results by.              |
| page                  | number                             | The page number for paginated results.                |
| perPage               | number                             | The number of results per page for paginated results. |
| category              | "stable" or "volatile" or "basket" | The category to filter results by.                    |
