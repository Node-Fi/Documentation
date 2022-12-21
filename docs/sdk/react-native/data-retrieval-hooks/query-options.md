# Query Options

Every hook that leverages `react-query` behind the scenes exposes an optional argument to override details about the query.

Learn more here: [https://tanstack.com/query/v4/docs/reference/useQuery](https://tanstack.com/query/v4/docs/reference/useQuery)&#x20;

The `queryOptions` optional paramter includes the following:

**Options**

* `enabled: boolean`
  * Set this to `false` to disable this query from automatically running.
  * Can be used for [Dependent Queries](https://tanstack.com/query/v4/docs/guides/dependent-queries).
* `networkMode: 'online' | 'always' | 'offlineFirst`
  * optional
  * defaults to `'online'`
  * see [Network Mode](https://tanstack.com/query/v4/docs/guides/network-mode) for more information.
* `retry: boolean | number | (failureCount: number, error: TError) => boolean`
  * If `false`, failed queries will not retry by default.
  * If `true`, failed queries will retry infinitely.
  * If set to a `number`, e.g. `3`, failed queries will retry until the failed query count meets that number.
* `retryOnMount: boolean`
  * If set to `false`, the query will not be retried on mount if it contains an error. Defaults to `true`.
* `retryDelay: number | (retryAttempt: number, error: TError) => number`
  * This function receives a `retryAttempt` integer and the actual Error and returns the delay to apply before the next attempt in milliseconds.
  * A function like `attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)` applies exponential backoff.
  * A function like `attempt => attempt * 1000` applies linear backoff.
* `staleTime: number | Infinity`
  * Optional
  * Defaults to `0`
  * The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on.
  * If set to `Infinity`, the data will never be considered stale
* `cacheTime: number | Infinity`
  * Defaults to `5 * 60 * 1000` (5 minutes) or `Infinity` during SSR
  * The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different cache times are specified, the longest one will be used.
  * If set to `Infinity`, will disable garbage collection
* `queryKeyHashFn: (queryKey: QueryKey) => string`
  * Optional
  * If specified, this function is used to hash the `queryKey` to a string.
* `refetchInterval: number | false | ((data: TData | undefined, query: Query) => number | false)`
  * Optional
  * If set to a number, all queries will continuously refetch at this frequency in milliseconds
  * If set to a function, the function will be executed with the latest data and query to compute a frequency
* `refetchIntervalInBackground: boolean`
  * Optional
  * If set to `true`, queries that are set to continuously refetch with a `refetchInterval` will continue to refetch while their tab/window is in the background
* `refetchOnMount: boolean | "always" | ((query: Query) => boolean | "always")`
  * Optional
  * Defaults to `true`
  * If set to `true`, the query will refetch on mount if the data is stale.
  * If set to `false`, the query will not refetch on mount.
  * If set to `"always"`, the query will always refetch on mount.
  * If set to a function, the function will be executed with the query to compute the value
* `refetchOnWindowFocus: boolean | "always" | ((query: Query) => boolean | "always")`
  * Optional
  * Defaults to `true`
  * If set to `true`, the query will refetch on window focus if the data is stale.
  * If set to `false`, the query will not refetch on window focus.
  * If set to `"always"`, the query will always refetch on window focus.
  * If set to a function, the function will be executed with the query to compute the value
* `refetchOnReconnect: boolean | "always" | ((query: Query) => boolean | "always")`
  * Optional
  * Defaults to `true`
  * If set to `true`, the query will refetch on reconnect if the data is stale.
  * If set to `false`, the query will not refetch on reconnect.
  * If set to `"always"`, the query will always refetch on reconnect.
  * If set to a function, the function will be executed with the query to compute the value
* `notifyOnChangeProps: string[] | "all"`
  * Optional
  * If set, the component will only re-render if any of the listed properties change.
  * If set to `['data', 'error']` for example, the component will only re-render when the `data` or `error` properties change.
  * If set to `"all"`, the component will opt-out of smart tracking and re-render whenever a query is updated.
  * By default, access to properties will be tracked, and the component will only re-render when one of the tracked properties change.
* `onSuccess: (data: TData) => void`
  * Optional
  * This function will fire any time the query successfully fetches new data.
* `onError: (error: TError) => void`
  * Optional
  * This function will fire if the query encounters an error and will be passed the error.
* `onSettled: (data?: TData, error?: TError) => void`
  * Optional
  * This function will fire any time the query is either successfully fetched or errors and be passed either the data or error.
* `select: (data: TData) => unknown`
  * Optional
  * This option can be used to transform or select a part of the data returned by the query function. It affects the returned `data` value, but does not affect what gets stored in the query cache.
* `suspense: boolean`
  * Optional
  * Set this to `true` to enable suspense mode.
  * When `true`, `useQuery` will suspend when `status === 'loading'`
  * When `true`, `useQuery` will throw runtime errors when `status === 'error'`
* `initialData: TData | () => TData`
  * Optional
  * If set, this value will be used as the initial data for the query cache (as long as the query hasn't been created or cached yet)
  * If set to a function, the function will be called **once** during the shared/root query initialization, and be expected to synchronously return the initialData
  * Initial data is considered stale by default unless a `staleTime` has been set.
  * `initialData` **is persisted** to the cache
* `initialDataUpdatedAt: number | (() => number | undefined)`
  * Optional
  * If set, this value will be used as the time (in milliseconds) of when the `initialData` itself was last updated.
* `placeholderData: TData | () => TData`
  * Optional
  * If set, this value will be used as the placeholder data for this particular query observer while the query is still in the `loading` data and no initialData has been provided.
  * `placeholderData` is **not persisted** to the cache
* `keepPreviousData: boolean`
  * Optional
  * Defaults to `false`
  * If set, any previous `data` will be kept when fetching new data because the query key changed.
* `isDataEqual: (oldData: TData | undefined, newData: TData) => boolean`
  * Optional
  * This function should return boolean indicating whether to use previous `data` (`true`) or new data (`false`) as a resolved data for the query.
* `structuralSharing: boolean | ((oldData: TData | undefined, newData: TData) => TData)`
  * Optional
  * Defaults to `true`
  * If set to `false`, structural sharing between query results will be disabled.
  * If set to a function, the old and new data values will be passed through this function, which should combine them into resolved data for the query. This way, you can retain references from the old data to improve performance even when that data contains non-serializable values.
* `useErrorBoundary: undefined | boolean | (error: TError, query: Query) => boolean`
  * Defaults to the global query config's `useErrorBoundary` value, which is `undefined`
  * Set this to `true` if you want errors to be thrown in the render phase and propagate to the nearest error boundary
  * Set this to `false` to disable `suspense`'s default behavior of throwing errors to the error boundary.
  * If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (`true`) or return the error as state (`false`)
* `meta: Record<string, unknown>`
  * Optional
  * If set, stores additional information on the query cache entry that can be used as needed. It will be accessible wherever the `query` is available, and is also part of the `QueryFunctionContext` provided to the `queryFn`.
* `context?: React.Context<QueryClient | undefined>`
  * Use this to use a custom React Query context. Otherwise, `defaultContext` will be used.
